"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DATASET_FORMATS = exports.LOADING_METHODS = exports.MAP_INFO_CHARACTER = exports.MAP_THUMBNAIL_DIMENSION = exports.MAX_GPU_FILTERS = exports.EDITOR_AVAILABLE_LAYERS = exports.EDITOR_MODES = exports.SPEED_CONTROL_RANGE = exports.DEFAULT_TIME_FORMAT = exports.BASE_SPEED = exports.SHARE_DISCLAIMER = exports.MAP_CONFIG_DESCRIPTION = exports.DISCLAIMER = exports.TOKEN_MISUSE_WARNING = exports.DEFAULT_NOTIFICATION_TOPICS = exports.DEFAULT_NOTIFICATION_TYPES = exports.DEFAULT_NOTIFICATION_MESSAGE = exports.DEFAULT_UUID_COUNT = exports.EXPORT_HTML_MAP_MODE_OPTIONS = exports.EXPORT_MAP_FORMAT_OPTIONS = exports.EXPORT_HTML_MAP_MODES = exports.EXPORT_MAP_FORMATS = exports.EXPORT_DATA_TYPE_OPTIONS = exports.EXPORT_DATA_TYPE = exports.EXPORT_IMG_RESOLUTION_OPTIONS = exports.EXPORT_IMG_RATIO_OPTIONS = exports.EXPORT_IMG_RATIOS = exports.RESOLUTIONS = exports.MAX_DEFAULT_TOOLTIPS = exports.LAYER_BLENDINGS = exports.NO_VALUE_COLOR = exports.DEFAULT_TOOLTIP_FIELDS = exports.DEFAULT_LAYER_COLOR = exports.LAYER_TYPES = exports.CHANNEL_SCALE_SUPPORTED_FIELDS = exports.FIELD_OPTS = exports.DEFAULT_AGGREGATION = exports.notSupportAggrOpts = exports.notSupportedScaleOpts = exports.ordinalFieldAggrScaleFunctions = exports.ordinalFieldScaleFunctions = exports.linearFieldAggrScaleFunctions = exports.linearFieldScaleFunctions = exports.AGGREGATION_TYPES = exports.CHANNEL_SCALES = exports.FILED_TYPE_DISPLAY = exports.FIELD_COLORS = exports.HIGHLIGH_COLOR_3D = exports.ALL_FIELD_TYPES = exports.SCALE_FUNC = exports.SCALE_TYPES = exports.FILTER_TYPES = exports.TRIP_ARC_FIELDS = exports.TRIP_POINT_FIELDS = exports.ICON_FIELDS = exports.GEOJSON_FIELDS = exports.DEFAULT_MAP_STYLES = exports.DEFAULT_LAYER_GROUPS = exports.PANELS = exports.SIDEBAR_PANELS = exports.THEME = exports.DIMENSIONS = exports.KEPLER_GL_WEBSITE = exports.KEPLER_GL_VERSION = exports.KEPLER_GL_NAME = exports.SHARE_MAP_ID = exports.OVERWRITE_MAP_ID = exports.SAVE_MAP_ID = exports.EXPORT_MAP_ID = exports.ADD_MAP_STYLE_ID = exports.EXPORT_DATA_ID = exports.EXPORT_IMAGE_ID = exports.ADD_DATA_ID = exports.DELETE_DATA_ID = exports.DATA_TABLE_ID = exports.DEFAULT_MAPBOX_API_URL = exports.ICON_PREFIX = exports.CLOUDFRONT = exports.ACTION_PREFIX = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _keymirror = _interopRequireDefault(require("keymirror"));

var _reactMapGlDraw = require("react-map-gl-draw");

var _d3Scale = require("d3-scale");

var _icons = require("../components/common/icons");

var _utils = require("../utils/utils");

var _SCALE_FUNC, _FILED_TYPE_DISPLAY, _linearFieldScaleFunc, _CHANNEL_SCALES$color, _CHANNEL_SCALES$sizeA, _linearFieldAggrScale, _ordinalFieldScaleFun, _CHANNEL_SCALES$color2, _ordinalFieldAggrScal, _notSupportedScaleOpt, _notSupportAggrOpts, _DEFAULT_AGGREGATION;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ACTION_PREFIX = '@@kepler.gl/';
exports.ACTION_PREFIX = ACTION_PREFIX;
var CLOUDFRONT = 'https://d1a3f4spazzrp4.cloudfront.net/kepler.gl';
exports.CLOUDFRONT = CLOUDFRONT;
var ICON_PREFIX = "".concat(CLOUDFRONT, "/geodude");
exports.ICON_PREFIX = ICON_PREFIX;
var DEFAULT_MAPBOX_API_URL = 'https://api.mapbox.com'; // Modal Ids

/**
 * Modal id: data table
 * @constant
 * @type {string}
 * @public
 */

exports.DEFAULT_MAPBOX_API_URL = DEFAULT_MAPBOX_API_URL;
var DATA_TABLE_ID = 'dataTable';
/**
 * Modal id: delete dataset confirm dialog
 * @constant
 * @type {string}
 * @public
 */

exports.DATA_TABLE_ID = DATA_TABLE_ID;
var DELETE_DATA_ID = 'deleteData';
/**
 * Modal id: add data modal
 * @constant
 * @type {string}
 * @public
 */

exports.DELETE_DATA_ID = DELETE_DATA_ID;
var ADD_DATA_ID = 'addData';
/**
 * Modal id: export image modal
 * @constant
 * @type {string}
 * @public
 */

exports.ADD_DATA_ID = ADD_DATA_ID;
var EXPORT_IMAGE_ID = 'exportImage';
/**
 * Modal id: export data modal
 * @constant
 * @type {string}
 * @public
 */

exports.EXPORT_IMAGE_ID = EXPORT_IMAGE_ID;
var EXPORT_DATA_ID = 'exportData';
/**
 * Modal id: add custom map style modal
 * @constant
 * @type {string}
 * @public
 */

exports.EXPORT_DATA_ID = EXPORT_DATA_ID;
var ADD_MAP_STYLE_ID = 'addMapStyle';
/**
 * Modal id: export map modal
 * @constant
 * @type {string}
 * @public
 */

exports.ADD_MAP_STYLE_ID = ADD_MAP_STYLE_ID;
var EXPORT_MAP_ID = 'exportMap';
/**
 * Modal id: save map modal
 * @constant
 * @type {string}
 * @public
 */

exports.EXPORT_MAP_ID = EXPORT_MAP_ID;
var SAVE_MAP_ID = 'saveMap';
/**
 * Modal id: confirm to overwrite saved map
 * @constant
 * @type {string}
 * @public
 */

exports.SAVE_MAP_ID = SAVE_MAP_ID;
var OVERWRITE_MAP_ID = 'overwriteMap';
/**
 * Modal id: share map url modal
 * @constant
 * @type {string}
 * @public
 */

exports.OVERWRITE_MAP_ID = OVERWRITE_MAP_ID;
var SHARE_MAP_ID = 'shareMap';
exports.SHARE_MAP_ID = SHARE_MAP_ID;
var KEPLER_GL_NAME = 'kepler.gl'; // __PACKAGE_VERSION__ is automatically injected by Babel/Webpack during the building process
// Since we are injecting this during the build process with babel
// while developing VERSION is not defined, we capture the exception and return
// an empty string which will allow us to retrieve the latest umd version

exports.KEPLER_GL_NAME = KEPLER_GL_NAME;
var KEPLER_GL_VERSION = "2.0.1";
exports.KEPLER_GL_VERSION = KEPLER_GL_VERSION;
var KEPLER_GL_WEBSITE = 'http://kepler.gl/';
exports.KEPLER_GL_WEBSITE = KEPLER_GL_WEBSITE;
var DIMENSIONS = {
  sidePanel: {
    width: 300,
    margin: {
      top: 20,
      left: 20,
      bottom: 30,
      right: 20
    },
    headerHeight: 96
  },
  mapControl: {
    width: 204,
    padding: 12
  }
};
/**
 * Theme name that can be passed to `KeplerGl` `prop.theme`.
 * Available themes are `Theme.light` and `Theme.dark`. Default theme is `Theme.dark`
 * @constant
 * @type {string}
 * @public
 * @example
 * ```js
 * const Map = () => <KeplerGl theme={THEME.light} id="map"/>
 * ```
 */

exports.DIMENSIONS = DIMENSIONS;
var THEME = (0, _keymirror["default"])({
  light: null,
  dark: null,
  base: null
});
exports.THEME = THEME;
var SIDEBAR_PANELS = [{
  id: 'layer',
  label: 'Layers',
  iconComponent: _icons.Layers
}, {
  id: 'filter',
  label: 'Filters',
  iconComponent: _icons.FilterFunnel
}, {
  id: 'interaction',
  label: 'Interactions',
  iconComponent: _icons.CursorClick
}, {
  id: 'map',
  label: 'Base map',
  iconComponent: _icons.Settings
}]; // backward compatibility

exports.SIDEBAR_PANELS = SIDEBAR_PANELS;
var PANELS = SIDEBAR_PANELS; // MAP STYLES

exports.PANELS = PANELS;
var DEFAULT_LAYER_GROUPS = [{
  slug: 'label',
  filter: function filter(_ref) {
    var id = _ref.id;
    return id.match(/(?=(label|place-|poi-))/);
  },
  defaultVisibility: true
}, {
  slug: 'road',
  filter: function filter(_ref2) {
    var id = _ref2.id;
    return id.match(/(?=(road|railway|tunnel|street|bridge))(?!.*label)/);
  },
  defaultVisibility: true
}, {
  slug: 'border',
  filter: function filter(_ref3) {
    var id = _ref3.id;
    return id.match(/border|boundaries/);
  },
  defaultVisibility: false
}, {
  slug: 'building',
  filter: function filter(_ref4) {
    var id = _ref4.id;
    return id.match(/building/);
  },
  defaultVisibility: true
}, {
  slug: 'water',
  filter: function filter(_ref5) {
    var id = _ref5.id;
    return id.match(/(?=(water|stream|ferry))/);
  },
  defaultVisibility: true
}, {
  slug: 'land',
  filter: function filter(_ref6) {
    var id = _ref6.id;
    return id.match(/(?=(parks|landcover|industrial|sand|hillshade))/);
  },
  defaultVisibility: true
}, {
  slug: '3d building',
  filter: function filter() {
    return false;
  },
  defaultVisibility: false
}];
exports.DEFAULT_LAYER_GROUPS = DEFAULT_LAYER_GROUPS;
var DEFAULT_MAP_STYLES = [{
  id: 'dark',
  label: 'Dark',
  url: 'mapbox://styles/uberdata/cjoqbbf6l9k302sl96tyvka09',
  icon: "".concat(ICON_PREFIX, "/UBER_DARK_V2.png"),
  layerGroups: DEFAULT_LAYER_GROUPS
}, {
  id: 'light',
  label: 'Light',
  url: 'mapbox://styles/uberdata/cjoqb9j339k1f2sl9t5ic5bn4',
  icon: "".concat(ICON_PREFIX, "/UBER_LIGHT_V2.png"),
  layerGroups: DEFAULT_LAYER_GROUPS
}, {
  id: 'muted',
  label: 'Muted Light',
  url: 'mapbox://styles/uberdata/cjfyl03kp1tul2smf5v2tbdd4',
  icon: "".concat(ICON_PREFIX, "/UBER_MUTED_LIGHT.png"),
  layerGroups: DEFAULT_LAYER_GROUPS
}, {
  id: 'muted_night',
  label: 'Muted Night',
  url: 'mapbox://styles/uberdata/cjfxhlikmaj1b2soyzevnywgs',
  icon: "".concat(ICON_PREFIX, "/UBER_MUTED_NIGHT.png"),
  layerGroups: DEFAULT_LAYER_GROUPS
}];
exports.DEFAULT_MAP_STYLES = DEFAULT_MAP_STYLES;
var GEOJSON_FIELDS = {
  geojson: ['_geojson', 'all_points', 'geojson']
};
exports.GEOJSON_FIELDS = GEOJSON_FIELDS;
var ICON_FIELDS = {
  icon: ['icon']
};
exports.ICON_FIELDS = ICON_FIELDS;
var TRIP_POINT_FIELDS = [['lat', 'lng'], ['lat', 'lon'], ['latitude', 'longitude']];
exports.TRIP_POINT_FIELDS = TRIP_POINT_FIELDS;
var TRIP_ARC_FIELDS = {
  lat0: 'begintrip',
  lng0: 'begintrip',
  lat1: 'dropoff',
  lng1: 'dropoff'
};
exports.TRIP_ARC_FIELDS = TRIP_ARC_FIELDS;
var FILTER_TYPES = (0, _keymirror["default"])({
  range: null,
  select: null,
  timeRange: null,
  multiSelect: null,
  polygon: null
});
exports.FILTER_TYPES = FILTER_TYPES;
var SCALE_TYPES = (0, _keymirror["default"])({
  ordinal: null,
  quantile: null,
  quantize: null,
  linear: null,
  sqrt: null,
  log: null,
  // ordinal domain to linear range
  point: null
});
exports.SCALE_TYPES = SCALE_TYPES;
var SCALE_FUNC = (_SCALE_FUNC = {}, (0, _defineProperty2["default"])(_SCALE_FUNC, SCALE_TYPES.linear, _d3Scale.scaleLinear), (0, _defineProperty2["default"])(_SCALE_FUNC, SCALE_TYPES.quantize, _d3Scale.scaleQuantize), (0, _defineProperty2["default"])(_SCALE_FUNC, SCALE_TYPES.quantile, _d3Scale.scaleQuantile), (0, _defineProperty2["default"])(_SCALE_FUNC, SCALE_TYPES.ordinal, _d3Scale.scaleOrdinal), (0, _defineProperty2["default"])(_SCALE_FUNC, SCALE_TYPES.sqrt, _d3Scale.scaleSqrt), (0, _defineProperty2["default"])(_SCALE_FUNC, SCALE_TYPES.log, _d3Scale.scaleLog), (0, _defineProperty2["default"])(_SCALE_FUNC, SCALE_TYPES.point, _d3Scale.scalePoint), _SCALE_FUNC);
exports.SCALE_FUNC = SCALE_FUNC;
var ALL_FIELD_TYPES = (0, _keymirror["default"])({
  "boolean": null,
  date: null,
  geojson: null,
  integer: null,
  real: null,
  string: null,
  timestamp: null,
  point: null
});
exports.ALL_FIELD_TYPES = ALL_FIELD_TYPES;
var ORANGE = '248, 194, 28';
var PINK = '231, 189, 194';
var PURPLE = '160, 106, 206';
var BLUE = '140, 210, 205';
var BLUE2 = '106, 160, 206';
var BLUE3 = '0, 172, 237';
var GREEN = '106, 160, 56';
var RED = '237, 88, 106';
var HIGHLIGH_COLOR_3D = [255, 255, 255, 60];
exports.HIGHLIGH_COLOR_3D = HIGHLIGH_COLOR_3D;
var FIELD_COLORS = {
  "default": RED
};
exports.FIELD_COLORS = FIELD_COLORS;
var FILED_TYPE_DISPLAY = (_FILED_TYPE_DISPLAY = {}, (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES["boolean"], {
  label: 'bool',
  color: PINK
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.date, {
  label: 'date',
  color: PURPLE
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.geojson, {
  label: 'geo',
  color: BLUE2
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.integer, {
  label: 'int',
  color: ORANGE
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.real, {
  label: 'float',
  color: ORANGE
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.string, {
  label: 'string',
  color: BLUE
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.timestamp, {
  label: 'time',
  color: GREEN
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.point, {
  label: 'point',
  color: BLUE3
}), _FILED_TYPE_DISPLAY);
exports.FILED_TYPE_DISPLAY = FILED_TYPE_DISPLAY;
var CHANNEL_SCALES = (0, _keymirror["default"])({
  color: null,
  radius: null,
  size: null,
  colorAggr: null,
  sizeAggr: null
});
exports.CHANNEL_SCALES = CHANNEL_SCALES;
var AGGREGATION_TYPES = {
  // default
  count: 'count',
  // linear
  average: 'average',
  maximum: 'maximum',
  minimum: 'minimum',
  median: 'median',
  stdev: 'stdev',
  sum: 'sum',
  variance: 'variance',
  // ordinal
  mode: 'mode',
  countUnique: 'count unique'
};
exports.AGGREGATION_TYPES = AGGREGATION_TYPES;
var linearFieldScaleFunctions = (_linearFieldScaleFunc = {}, (0, _defineProperty2["default"])(_linearFieldScaleFunc, CHANNEL_SCALES.color, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_linearFieldScaleFunc, CHANNEL_SCALES.radius, [SCALE_TYPES.sqrt]), (0, _defineProperty2["default"])(_linearFieldScaleFunc, CHANNEL_SCALES.size, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), _linearFieldScaleFunc);
exports.linearFieldScaleFunctions = linearFieldScaleFunctions;
var linearFieldAggrScaleFunctions = (_linearFieldAggrScale = {}, (0, _defineProperty2["default"])(_linearFieldAggrScale, CHANNEL_SCALES.colorAggr, (_CHANNEL_SCALES$color = {}, (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.average, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.maximum, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.minimum, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.median, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.stdev, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.sum, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.variance, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), _CHANNEL_SCALES$color)), (0, _defineProperty2["default"])(_linearFieldAggrScale, CHANNEL_SCALES.sizeAggr, (_CHANNEL_SCALES$sizeA = {}, (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.average, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.maximum, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.minimum, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.median, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.stdev, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.sum, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.variance, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), _CHANNEL_SCALES$sizeA)), _linearFieldAggrScale);
exports.linearFieldAggrScaleFunctions = linearFieldAggrScaleFunctions;
var ordinalFieldScaleFunctions = (_ordinalFieldScaleFun = {}, (0, _defineProperty2["default"])(_ordinalFieldScaleFun, CHANNEL_SCALES.color, [SCALE_TYPES.ordinal]), (0, _defineProperty2["default"])(_ordinalFieldScaleFun, CHANNEL_SCALES.radius, [SCALE_TYPES.point]), (0, _defineProperty2["default"])(_ordinalFieldScaleFun, CHANNEL_SCALES.size, [SCALE_TYPES.point]), _ordinalFieldScaleFun);
exports.ordinalFieldScaleFunctions = ordinalFieldScaleFunctions;
var ordinalFieldAggrScaleFunctions = (_ordinalFieldAggrScal = {}, (0, _defineProperty2["default"])(_ordinalFieldAggrScal, CHANNEL_SCALES.colorAggr, (_CHANNEL_SCALES$color2 = {}, (0, _defineProperty2["default"])(_CHANNEL_SCALES$color2, AGGREGATION_TYPES.mode, [SCALE_TYPES.ordinal]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color2, AGGREGATION_TYPES.countUnique, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), _CHANNEL_SCALES$color2)), (0, _defineProperty2["default"])(_ordinalFieldAggrScal, CHANNEL_SCALES.sizeAggr, {}), _ordinalFieldAggrScal);
exports.ordinalFieldAggrScaleFunctions = ordinalFieldAggrScaleFunctions;
var notSupportedScaleOpts = (_notSupportedScaleOpt = {}, (0, _defineProperty2["default"])(_notSupportedScaleOpt, CHANNEL_SCALES.color, []), (0, _defineProperty2["default"])(_notSupportedScaleOpt, CHANNEL_SCALES.radius, []), (0, _defineProperty2["default"])(_notSupportedScaleOpt, CHANNEL_SCALES.size, []), _notSupportedScaleOpt);
exports.notSupportedScaleOpts = notSupportedScaleOpts;
var notSupportAggrOpts = (_notSupportAggrOpts = {}, (0, _defineProperty2["default"])(_notSupportAggrOpts, CHANNEL_SCALES.colorAggr, {}), (0, _defineProperty2["default"])(_notSupportAggrOpts, CHANNEL_SCALES.sizeAggr, {}), _notSupportAggrOpts);
/**
 * Default aggregation are based on ocunt
 */

exports.notSupportAggrOpts = notSupportAggrOpts;
var DEFAULT_AGGREGATION = (_DEFAULT_AGGREGATION = {}, (0, _defineProperty2["default"])(_DEFAULT_AGGREGATION, CHANNEL_SCALES.colorAggr, (0, _defineProperty2["default"])({}, AGGREGATION_TYPES.count, [SCALE_TYPES.quantize, SCALE_TYPES.quantile])), (0, _defineProperty2["default"])(_DEFAULT_AGGREGATION, CHANNEL_SCALES.sizeAggr, (0, _defineProperty2["default"])({}, AGGREGATION_TYPES.count, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log])), _DEFAULT_AGGREGATION);
/**
 * Define what type of scale operation is allowed on each type of fields
 */

exports.DEFAULT_AGGREGATION = DEFAULT_AGGREGATION;
var FIELD_OPTS = {
  string: {
    type: 'categorical',
    scale: _objectSpread({}, ordinalFieldScaleFunctions, {}, ordinalFieldAggrScaleFunctions),
    format: {
      legend: function legend(d) {
        return d;
      }
    }
  },
  real: {
    type: 'numerical',
    scale: _objectSpread({}, linearFieldScaleFunctions, {}, linearFieldAggrScaleFunctions),
    format: {
      legend: function legend(d) {
        return d;
      }
    }
  },
  timestamp: {
    type: 'time',
    scale: _objectSpread({}, linearFieldScaleFunctions, {}, notSupportAggrOpts),
    format: {
      legend: function legend(d) {
        return d;
      }
    }
  },
  integer: {
    type: 'numerical',
    scale: _objectSpread({}, linearFieldScaleFunctions, {}, linearFieldAggrScaleFunctions),
    format: {
      legend: function legend(d) {
        return d;
      }
    }
  },
  "boolean": {
    type: 'boolean',
    scale: _objectSpread({}, ordinalFieldScaleFunctions, {}, ordinalFieldAggrScaleFunctions),
    format: {
      legend: function legend(d) {
        return d;
      }
    }
  },
  date: {
    scale: _objectSpread({}, ordinalFieldScaleFunctions, {}, ordinalFieldAggrScaleFunctions),
    format: {
      legend: function legend(d) {
        return d;
      }
    }
  },
  geojson: {
    type: 'geometry',
    scale: _objectSpread({}, notSupportedScaleOpts, {}, notSupportAggrOpts),
    format: {
      legend: function legend(d) {
        return '...';
      }
    }
  }
};
exports.FIELD_OPTS = FIELD_OPTS;
var CHANNEL_SCALE_SUPPORTED_FIELDS = Object.keys(CHANNEL_SCALES).reduce(function (accu, key) {
  return _objectSpread({}, accu, (0, _defineProperty2["default"])({}, key, Object.keys(FIELD_OPTS).filter(function (ft) {
    return Object.keys(FIELD_OPTS[ft].scale[key]).length;
  })));
}, {}); // TODO: shan delete use of LAYER_TYPES

exports.CHANNEL_SCALE_SUPPORTED_FIELDS = CHANNEL_SCALE_SUPPORTED_FIELDS;
var LAYER_TYPES = (0, _keymirror["default"])({
  point: null,
  arc: null,
  cluster: null,
  line: null,
  grid: null,
  geojson: null,
  icon: null,
  heatmap: null,
  hexagon: null
});
exports.LAYER_TYPES = LAYER_TYPES;
var DEFAULT_LAYER_COLOR = {
  tripArc: '#9226C6',
  begintrip_lat: '#1E96BE',
  dropoff_lat: '#FF991F',
  request_lat: '#52A353'
}; // let user pass in default tooltip fields

exports.DEFAULT_LAYER_COLOR = DEFAULT_LAYER_COLOR;
var DEFAULT_TOOLTIP_FIELDS = [];
exports.DEFAULT_TOOLTIP_FIELDS = DEFAULT_TOOLTIP_FIELDS;
var NO_VALUE_COLOR = [0, 0, 0, 0];
exports.NO_VALUE_COLOR = NO_VALUE_COLOR;
var LAYER_BLENDINGS = {
  additive: {
    blendFunc: ['SRC_ALPHA', 'DST_ALPHA'],
    blendEquation: 'FUNC_ADD'
  },
  normal: {
    // reference to
    // https://limnu.com/webgl-blending-youre-probably-wrong/
    blendFunc: ['SRC_ALPHA', 'ONE_MINUS_SRC_ALPHA', 'ONE', 'ONE_MINUS_SRC_ALPHA'],
    blendEquation: ['FUNC_ADD', 'FUNC_ADD']
  },
  subtractive: {
    blendFunc: ['ONE', 'ONE_MINUS_DST_COLOR', 'SRC_ALPHA', 'DST_ALPHA'],
    blendEquation: ['FUNC_SUBTRACT', 'FUNC_ADD']
  }
};
exports.LAYER_BLENDINGS = LAYER_BLENDINGS;
var MAX_DEFAULT_TOOLTIPS = 5;
exports.MAX_DEFAULT_TOOLTIPS = MAX_DEFAULT_TOOLTIPS;
var RESOLUTIONS = (0, _keymirror["default"])({
  ONE_X: null,
  TWO_X: null
});
exports.RESOLUTIONS = RESOLUTIONS;
var EXPORT_IMG_RATIOS = (0, _keymirror["default"])({
  SCREEN: null,
  FOUR_BY_THREE: null,
  SIXTEEN_BY_NINE: null,
  CUSTOM: null
});
exports.EXPORT_IMG_RATIOS = EXPORT_IMG_RATIOS;
var EXPORT_IMG_RATIO_OPTIONS = [{
  id: EXPORT_IMG_RATIOS.SCREEN,
  label: 'Original Screen',
  getSize: function getSize(screenW, screenH) {
    return {
      width: screenW,
      height: screenH
    };
  }
}, {
  id: EXPORT_IMG_RATIOS.CUSTOM,
  hidden: true,
  label: 'Custom',
  getSize: function getSize(mapW, mapH) {
    return {
      width: mapW,
      height: mapH
    };
  }
}, {
  id: EXPORT_IMG_RATIOS.FOUR_BY_THREE,
  label: '4:3',
  getSize: function getSize(screenW, screenH) {
    return {
      width: screenW,
      height: Math.round(screenW * 0.75)
    };
  }
}, {
  id: EXPORT_IMG_RATIOS.SIXTEEN_BY_NINE,
  label: '16:9',
  getSize: function getSize(screenW, screenH) {
    return {
      width: screenW,
      height: Math.round(screenW * 0.5625)
    };
  }
}];
exports.EXPORT_IMG_RATIO_OPTIONS = EXPORT_IMG_RATIO_OPTIONS;
var EXPORT_IMG_RESOLUTION_OPTIONS = [{
  id: RESOLUTIONS.ONE_X,
  label: '1x',
  available: true,
  scale: 1,
  getSize: function getSize(screenW, screenH) {
    return {
      width: screenW,
      height: screenH
    };
  }
}, {
  id: RESOLUTIONS.TWO_X,
  label: '2x',
  available: true,
  scale: 2,
  getSize: function getSize(screenW, screenH) {
    return {
      width: screenW * 2,
      height: screenH * 2
    };
  }
}];
exports.EXPORT_IMG_RESOLUTION_OPTIONS = EXPORT_IMG_RESOLUTION_OPTIONS;
var EXPORT_DATA_TYPE = (0, _keymirror["default"])({
  CSV: null // SHAPEFILE: null,
  // JSON: null,
  // GEOJSON: null,
  // TOPOJSON: null

});
exports.EXPORT_DATA_TYPE = EXPORT_DATA_TYPE;
var EXPORT_DATA_TYPE_OPTIONS = [{
  id: EXPORT_DATA_TYPE.CSV,
  label: EXPORT_DATA_TYPE.CSV.toLowerCase(),
  available: true
} // {
//   id: EXPORT_DATA_TYPE.SHAPEFILE,
//   label: 'shapefile',
//   available: false
// },
// {
//   id: EXPORT_DATA_TYPE.JSON,
//   label: 'json',
//   available: false
// },
// {
//   id: EXPORT_DATA_TYPE.GEOJSON,
//   label: 'geojson',
//   available: false
// },
// {
//   id: EXPORT_DATA_TYPE.TOPOJSON,
//   label: 'topojson',
//   available: false
// }
]; // Export map types

exports.EXPORT_DATA_TYPE_OPTIONS = EXPORT_DATA_TYPE_OPTIONS;
var EXPORT_MAP_FORMATS = (0, _keymirror["default"])({
  HTML: null,
  JSON: null
});
exports.EXPORT_MAP_FORMATS = EXPORT_MAP_FORMATS;
var EXPORT_HTML_MAP_MODES = (0, _keymirror["default"])({
  READ: null,
  EDIT: null
}); // Export map options

exports.EXPORT_HTML_MAP_MODES = EXPORT_HTML_MAP_MODES;
var EXPORT_MAP_FORMAT_OPTIONS = Object.entries(EXPORT_MAP_FORMATS).map(function (entry) {
  return {
    id: entry[0],
    label: entry[1].toLowerCase(),
    available: true
  };
});
exports.EXPORT_MAP_FORMAT_OPTIONS = EXPORT_MAP_FORMAT_OPTIONS;
var EXPORT_HTML_MAP_MODE_OPTIONS = Object.entries(EXPORT_HTML_MAP_MODES).map(function (entry) {
  return {
    id: entry[0],
    label: entry[1].toLowerCase(),
    available: true,
    url: (0, _utils.getHTMLMapModeTileUrl)(entry[1])
  };
});
exports.EXPORT_HTML_MAP_MODE_OPTIONS = EXPORT_HTML_MAP_MODE_OPTIONS;
var DEFAULT_UUID_COUNT = 6;
exports.DEFAULT_UUID_COUNT = DEFAULT_UUID_COUNT;
var DEFAULT_NOTIFICATION_MESSAGE = 'MESSAGE_NOT_PROVIDED';
exports.DEFAULT_NOTIFICATION_MESSAGE = DEFAULT_NOTIFICATION_MESSAGE;
var DEFAULT_NOTIFICATION_TYPES = (0, _keymirror["default"])({
  info: null,
  error: null,
  warning: null,
  success: null
});
exports.DEFAULT_NOTIFICATION_TYPES = DEFAULT_NOTIFICATION_TYPES;
var DEFAULT_NOTIFICATION_TOPICS = (0, _keymirror["default"])({
  global: null,
  file: null
});
exports.DEFAULT_NOTIFICATION_TOPICS = DEFAULT_NOTIFICATION_TOPICS;
var TOKEN_MISUSE_WARNING = '* If you do not provide your own token, the map may fail to display at any time when we replace ours to avoid misuse. ';
exports.TOKEN_MISUSE_WARNING = TOKEN_MISUSE_WARNING;
var DISCLAIMER = 'You can change the Mapbox token later using the following instructions: ';
exports.DISCLAIMER = DISCLAIMER;
var MAP_CONFIG_DESCRIPTION = 'Map config will be included in the Json file. If you are using kepler.gl in your own app. You can copy this config and pass it to ';
exports.MAP_CONFIG_DESCRIPTION = MAP_CONFIG_DESCRIPTION;
var SHARE_DISCLAIMER = 'kepler.gl will save your map data to your personal cloud storage, only people with the URL can access your map and data. ' + 'You can edit/delete the data file in your cloud account anytime.'; // Animation

exports.SHARE_DISCLAIMER = SHARE_DISCLAIMER;
var BASE_SPEED = 600;
exports.BASE_SPEED = BASE_SPEED;
var DEFAULT_TIME_FORMAT = 'MM/DD/YY HH:mm:ssa';
exports.DEFAULT_TIME_FORMAT = DEFAULT_TIME_FORMAT;
var SPEED_CONTROL_RANGE = [0, 10]; // We could use directly react-map-gl-draw EditorMode but this would
// create a direct dependency with react-map-gl-draw
// Created this map to be independent from react-map-gl-draw

exports.SPEED_CONTROL_RANGE = SPEED_CONTROL_RANGE;
var EDITOR_MODES = {
  READ_ONLY: _reactMapGlDraw.EditorModes.READ_ONLY,
  DRAW_POLYGON: _reactMapGlDraw.EditorModes.DRAW_POLYGON,
  DRAW_RECTANGLE: _reactMapGlDraw.EditorModes.DRAW_RECTANGLE,
  EDIT: _reactMapGlDraw.EditorModes.EDIT_VERTEX
};
exports.EDITOR_MODES = EDITOR_MODES;
var EDITOR_AVAILABLE_LAYERS = [LAYER_TYPES.point, LAYER_TYPES.hexagon, LAYER_TYPES.arc, LAYER_TYPES.line]; // GPU Filtering

/**
 * Max number of filter value buffers that deck.gl provides
 */

exports.EDITOR_AVAILABLE_LAYERS = EDITOR_AVAILABLE_LAYERS;
var MAX_GPU_FILTERS = 4;
exports.MAX_GPU_FILTERS = MAX_GPU_FILTERS;
var MAP_THUMBNAIL_DIMENSION = {
  width: 300,
  height: 200
};
exports.MAP_THUMBNAIL_DIMENSION = MAP_THUMBNAIL_DIMENSION;
var MAP_INFO_CHARACTER = {
  title: 100,
  description: 100
}; // Load data

exports.MAP_INFO_CHARACTER = MAP_INFO_CHARACTER;
var LOADING_METHODS = (0, _keymirror["default"])({
  upload: null,
  storage: null
});
exports.LOADING_METHODS = LOADING_METHODS;
var DATASET_FORMATS = (0, _keymirror["default"])({
  row: null,
  geojson: null,
  csv: null,
  keplergl: null
});
exports.DATASET_FORMATS = DATASET_FORMATS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncy5qcyJdLCJuYW1lcyI6WyJBQ1RJT05fUFJFRklYIiwiQ0xPVURGUk9OVCIsIklDT05fUFJFRklYIiwiREVGQVVMVF9NQVBCT1hfQVBJX1VSTCIsIkRBVEFfVEFCTEVfSUQiLCJERUxFVEVfREFUQV9JRCIsIkFERF9EQVRBX0lEIiwiRVhQT1JUX0lNQUdFX0lEIiwiRVhQT1JUX0RBVEFfSUQiLCJBRERfTUFQX1NUWUxFX0lEIiwiRVhQT1JUX01BUF9JRCIsIlNBVkVfTUFQX0lEIiwiT1ZFUldSSVRFX01BUF9JRCIsIlNIQVJFX01BUF9JRCIsIktFUExFUl9HTF9OQU1FIiwiS0VQTEVSX0dMX1ZFUlNJT04iLCJLRVBMRVJfR0xfV0VCU0lURSIsIkRJTUVOU0lPTlMiLCJzaWRlUGFuZWwiLCJ3aWR0aCIsIm1hcmdpbiIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImhlYWRlckhlaWdodCIsIm1hcENvbnRyb2wiLCJwYWRkaW5nIiwiVEhFTUUiLCJsaWdodCIsImRhcmsiLCJiYXNlIiwiU0lERUJBUl9QQU5FTFMiLCJpZCIsImxhYmVsIiwiaWNvbkNvbXBvbmVudCIsIkxheWVycyIsIkZpbHRlckZ1bm5lbCIsIkN1cnNvckNsaWNrIiwiU2V0dGluZ3MiLCJQQU5FTFMiLCJERUZBVUxUX0xBWUVSX0dST1VQUyIsInNsdWciLCJmaWx0ZXIiLCJtYXRjaCIsImRlZmF1bHRWaXNpYmlsaXR5IiwiREVGQVVMVF9NQVBfU1RZTEVTIiwidXJsIiwiaWNvbiIsImxheWVyR3JvdXBzIiwiR0VPSlNPTl9GSUVMRFMiLCJnZW9qc29uIiwiSUNPTl9GSUVMRFMiLCJUUklQX1BPSU5UX0ZJRUxEUyIsIlRSSVBfQVJDX0ZJRUxEUyIsImxhdDAiLCJsbmcwIiwibGF0MSIsImxuZzEiLCJGSUxURVJfVFlQRVMiLCJyYW5nZSIsInNlbGVjdCIsInRpbWVSYW5nZSIsIm11bHRpU2VsZWN0IiwicG9seWdvbiIsIlNDQUxFX1RZUEVTIiwib3JkaW5hbCIsInF1YW50aWxlIiwicXVhbnRpemUiLCJsaW5lYXIiLCJzcXJ0IiwibG9nIiwicG9pbnQiLCJTQ0FMRV9GVU5DIiwic2NhbGVMaW5lYXIiLCJzY2FsZVF1YW50aXplIiwic2NhbGVRdWFudGlsZSIsInNjYWxlT3JkaW5hbCIsInNjYWxlU3FydCIsInNjYWxlTG9nIiwic2NhbGVQb2ludCIsIkFMTF9GSUVMRF9UWVBFUyIsImRhdGUiLCJpbnRlZ2VyIiwicmVhbCIsInN0cmluZyIsInRpbWVzdGFtcCIsIk9SQU5HRSIsIlBJTksiLCJQVVJQTEUiLCJCTFVFIiwiQkxVRTIiLCJCTFVFMyIsIkdSRUVOIiwiUkVEIiwiSElHSExJR0hfQ09MT1JfM0QiLCJGSUVMRF9DT0xPUlMiLCJGSUxFRF9UWVBFX0RJU1BMQVkiLCJjb2xvciIsIkNIQU5ORUxfU0NBTEVTIiwicmFkaXVzIiwic2l6ZSIsImNvbG9yQWdnciIsInNpemVBZ2dyIiwiQUdHUkVHQVRJT05fVFlQRVMiLCJjb3VudCIsImF2ZXJhZ2UiLCJtYXhpbXVtIiwibWluaW11bSIsIm1lZGlhbiIsInN0ZGV2Iiwic3VtIiwidmFyaWFuY2UiLCJtb2RlIiwiY291bnRVbmlxdWUiLCJsaW5lYXJGaWVsZFNjYWxlRnVuY3Rpb25zIiwibGluZWFyRmllbGRBZ2dyU2NhbGVGdW5jdGlvbnMiLCJvcmRpbmFsRmllbGRTY2FsZUZ1bmN0aW9ucyIsIm9yZGluYWxGaWVsZEFnZ3JTY2FsZUZ1bmN0aW9ucyIsIm5vdFN1cHBvcnRlZFNjYWxlT3B0cyIsIm5vdFN1cHBvcnRBZ2dyT3B0cyIsIkRFRkFVTFRfQUdHUkVHQVRJT04iLCJGSUVMRF9PUFRTIiwidHlwZSIsInNjYWxlIiwiZm9ybWF0IiwibGVnZW5kIiwiZCIsIkNIQU5ORUxfU0NBTEVfU1VQUE9SVEVEX0ZJRUxEUyIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJhY2N1Iiwia2V5IiwiZnQiLCJsZW5ndGgiLCJMQVlFUl9UWVBFUyIsImFyYyIsImNsdXN0ZXIiLCJsaW5lIiwiZ3JpZCIsImhlYXRtYXAiLCJoZXhhZ29uIiwiREVGQVVMVF9MQVlFUl9DT0xPUiIsInRyaXBBcmMiLCJiZWdpbnRyaXBfbGF0IiwiZHJvcG9mZl9sYXQiLCJyZXF1ZXN0X2xhdCIsIkRFRkFVTFRfVE9PTFRJUF9GSUVMRFMiLCJOT19WQUxVRV9DT0xPUiIsIkxBWUVSX0JMRU5ESU5HUyIsImFkZGl0aXZlIiwiYmxlbmRGdW5jIiwiYmxlbmRFcXVhdGlvbiIsIm5vcm1hbCIsInN1YnRyYWN0aXZlIiwiTUFYX0RFRkFVTFRfVE9PTFRJUFMiLCJSRVNPTFVUSU9OUyIsIk9ORV9YIiwiVFdPX1giLCJFWFBPUlRfSU1HX1JBVElPUyIsIlNDUkVFTiIsIkZPVVJfQllfVEhSRUUiLCJTSVhURUVOX0JZX05JTkUiLCJDVVNUT00iLCJFWFBPUlRfSU1HX1JBVElPX09QVElPTlMiLCJnZXRTaXplIiwic2NyZWVuVyIsInNjcmVlbkgiLCJoZWlnaHQiLCJoaWRkZW4iLCJtYXBXIiwibWFwSCIsIk1hdGgiLCJyb3VuZCIsIkVYUE9SVF9JTUdfUkVTT0xVVElPTl9PUFRJT05TIiwiYXZhaWxhYmxlIiwiRVhQT1JUX0RBVEFfVFlQRSIsIkNTViIsIkVYUE9SVF9EQVRBX1RZUEVfT1BUSU9OUyIsInRvTG93ZXJDYXNlIiwiRVhQT1JUX01BUF9GT1JNQVRTIiwiSFRNTCIsIkpTT04iLCJFWFBPUlRfSFRNTF9NQVBfTU9ERVMiLCJSRUFEIiwiRURJVCIsIkVYUE9SVF9NQVBfRk9STUFUX09QVElPTlMiLCJlbnRyaWVzIiwibWFwIiwiZW50cnkiLCJFWFBPUlRfSFRNTF9NQVBfTU9ERV9PUFRJT05TIiwiREVGQVVMVF9VVUlEX0NPVU5UIiwiREVGQVVMVF9OT1RJRklDQVRJT05fTUVTU0FHRSIsIkRFRkFVTFRfTk9USUZJQ0FUSU9OX1RZUEVTIiwiaW5mbyIsImVycm9yIiwid2FybmluZyIsInN1Y2Nlc3MiLCJERUZBVUxUX05PVElGSUNBVElPTl9UT1BJQ1MiLCJnbG9iYWwiLCJmaWxlIiwiVE9LRU5fTUlTVVNFX1dBUk5JTkciLCJESVNDTEFJTUVSIiwiTUFQX0NPTkZJR19ERVNDUklQVElPTiIsIlNIQVJFX0RJU0NMQUlNRVIiLCJCQVNFX1NQRUVEIiwiREVGQVVMVF9USU1FX0ZPUk1BVCIsIlNQRUVEX0NPTlRST0xfUkFOR0UiLCJFRElUT1JfTU9ERVMiLCJSRUFEX09OTFkiLCJFZGl0b3JNb2RlcyIsIkRSQVdfUE9MWUdPTiIsIkRSQVdfUkVDVEFOR0xFIiwiRURJVF9WRVJURVgiLCJFRElUT1JfQVZBSUxBQkxFX0xBWUVSUyIsIk1BWF9HUFVfRklMVEVSUyIsIk1BUF9USFVNQk5BSUxfRElNRU5TSU9OIiwiTUFQX0lORk9fQ0hBUkFDVEVSIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkxPQURJTkdfTUVUSE9EUyIsInVwbG9hZCIsInN0b3JhZ2UiLCJEQVRBU0VUX0ZPUk1BVFMiLCJyb3ciLCJjc3YiLCJrZXBsZXJnbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBRUE7O0FBdUZBOztBQUNBOzs7Ozs7OztBQTlFTyxJQUFNQSxhQUFhLEdBQUcsY0FBdEI7O0FBQ0EsSUFBTUMsVUFBVSxHQUFHLGlEQUFuQjs7QUFDQSxJQUFNQyxXQUFXLGFBQU1ELFVBQU4sYUFBakI7O0FBQ0EsSUFBTUUsc0JBQXNCLEdBQUcsd0JBQS9CLEMsQ0FFUDs7QUFDQTs7Ozs7Ozs7QUFNTyxJQUFNQyxhQUFhLEdBQUcsV0FBdEI7QUFDUDs7Ozs7Ozs7QUFNTyxJQUFNQyxjQUFjLEdBQUcsWUFBdkI7QUFDUDs7Ozs7Ozs7QUFNTyxJQUFNQyxXQUFXLEdBQUcsU0FBcEI7QUFDUDs7Ozs7Ozs7QUFNTyxJQUFNQyxlQUFlLEdBQUcsYUFBeEI7QUFDUDs7Ozs7Ozs7QUFNTyxJQUFNQyxjQUFjLEdBQUcsWUFBdkI7QUFDUDs7Ozs7Ozs7QUFNTyxJQUFNQyxnQkFBZ0IsR0FBRyxhQUF6QjtBQUNQOzs7Ozs7OztBQU1PLElBQU1DLGFBQWEsR0FBRyxXQUF0QjtBQUNQOzs7Ozs7OztBQU1PLElBQU1DLFdBQVcsR0FB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QUNBOzs7OztBQUdPLElBQU02RSxlQUFlLEdBQUcsQ0FBeEI7O0FBQ0EsSUFBTUMsdUJBQXVCLEdBQUc7QUFDckN0TSxFQUFBQSxLQUFLLEVBQUUsR0FEOEI7QUFFckNzSixFQUFBQSxNQUFNLEVBQUU7QUFGNkIsQ0FBaEM7O0FBS0EsSUFBTWlELGtCQUFrQixHQUFHO0FBQ2hDQyxFQUFBQSxLQUFLLEVBQUUsR0FEeUI7QUFFaENDLEVBQUFBLFdBQVcsRUFBRTtBQUZtQixDQUEzQixDLENBS1A7OztBQUNPLElBQU1DLGVBQWUsR0FBRywyQkFBVTtBQUN2Q0MsRUFBQUEsTUFBTSxFQUFFLElBRCtCO0FBRXZDQyxFQUFBQSxPQUFPLEVBQUU7QUFGOEIsQ0FBVixDQUF4Qjs7QUFLQSxJQUFNQyxlQUFlLEdBQUcsMkJBQVU7QUFDdkNDLEVBQUFBLEdBQUcsRUFBRSxJQURrQztBQUV2QzlLLEVBQUFBLE9BQU8sRUFBRSxJQUY4QjtBQUd2QytLLEVBQUFBLEdBQUcsRUFBRSxJQUhrQztBQUl2Q0MsRUFBQUEsUUFBUSxFQUFFO0FBSjZCLENBQVYsQ0FBeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQga2V5TWlycm9yIGZyb20gJ2tleW1pcnJvcic7XHJcbmltcG9ydCB7RWRpdG9yTW9kZXN9IGZyb20gJ3JlYWN0LW1hcC1nbC1kcmF3JztcclxuXHJcbmltcG9ydCB7XHJcbiAgc2NhbGVMaW5lYXIsXHJcbiAgc2NhbGVRdWFudGl6ZSxcclxuICBzY2FsZVF1YW50aWxlLFxyXG4gIHNjYWxlT3JkaW5hbCxcclxuICBzY2FsZVNxcnQsXHJcbiAgc2NhbGVMb2csXHJcbiAgc2NhbGVQb2ludFxyXG59IGZyb20gJ2QzLXNjYWxlJztcclxuXHJcbmV4cG9ydCBjb25zdCBBQ1RJT05fUFJFRklYID0gJ0BAa2VwbGVyLmdsLyc7XHJcbmV4cG9ydCBjb25zdCBDTE9VREZST05UID0gJ2h0dHBzOi8vZDFhM2Y0c3BhenpycDQuY2xvdWRmcm9udC5uZXQva2VwbGVyLmdsJztcclxuZXhwb3J0IGNvbnN0IElDT05fUFJFRklYID0gYCR7Q0xPVURGUk9OVH0vZ2VvZHVkZWA7XHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX01BUEJPWF9BUElfVVJMID0gJ2h0dHBzOi8vYXBpLm1hcGJveC5jb20nO1xyXG5cclxuLy8gTW9kYWwgSWRzXHJcbi8qKlxyXG4gKiBNb2RhbCBpZDogZGF0YSB0YWJsZVxyXG4gKiBAY29uc3RhbnRcclxuICogQHR5cGUge3N0cmluZ31cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERBVEFfVEFCTEVfSUQgPSAnZGF0YVRhYmxlJztcclxuLyoqXHJcbiAqIE1vZGFsIGlkOiBkZWxldGUgZGF0YXNldCBjb25maXJtIGRpYWxvZ1xyXG4gKiBAY29uc3RhbnRcclxuICogQHR5cGUge3N0cmluZ31cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFTEVURV9EQVRBX0lEID0gJ2RlbGV0ZURhdGEnO1xyXG4vKipcclxuICogTW9kYWwgaWQ6IGFkZCBkYXRhIG1vZGFsXHJcbiAqIEBjb25zdGFudFxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQUREX0RBVEFfSUQgPSAnYWRkRGF0YSc7XHJcbi8qKlxyXG4gKiBNb2RhbCBpZDogZXhwb3J0IGltYWdlIG1vZGFsXHJcbiAqIEBjb25zdGFudFxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRVhQT1JUX0lNQUdFX0lEID0gJ2V4cG9ydEltYWdlJztcclxuLyoqXHJcbiAqIE1vZGFsIGlkOiBleHBvcnQgZGF0YSBtb2RhbFxyXG4gKiBAY29uc3RhbnRcclxuICogQHR5cGUge3N0cmluZ31cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEVYUE9SVF9EQVRBX0lEID0gJ2V4cG9ydERhdGEnO1xyXG4vKipcclxuICogTW9kYWwgaWQ6IGFkZCBjdXN0b20gbWFwIHN0eWxlIG1vZGFsXHJcbiAqIEBjb25zdGFudFxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQUREX01BUF9TVFlMRV9JRCA9ICdhZGRNYXBTdHlsZSc7XHJcbi8qKlxyXG4gKiBNb2RhbCBpZDogZXhwb3J0IG1hcCBtb2RhbFxyXG4gKiBAY29uc3RhbnRcclxuICogQHR5cGUge3N0cmluZ31cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEVYUE9SVF9NQVBfSUQgPSAnZXhwb3J0TWFwJztcclxuLyoqXHJcbiAqIE1vZGFsIGlkOiBzYXZlIG1hcCBtb2RhbFxyXG4gKiBAY29uc3RhbnRcclxuICogQHR5cGUge3N0cmluZ31cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFNBVkVfTUFQX0lEID0gJ3NhdmVNYXAnO1xyXG4vKipcclxuICogTW9kYWwgaWQ6IGNvbmZpcm0gdG8gb3ZlcndyaXRlIHNhdmVkIG1hcFxyXG4gKiBAY29uc3RhbnRcclxuICogQHR5cGUge3N0cmluZ31cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE9WRVJXUklURV9NQVBfSUQgPSAnb3ZlcndyaXRlTWFwJztcclxuLyoqXHJcbiAqIE1vZGFsIGlkOiBzaGFyZSBtYXAgdXJsIG1vZGFsXHJcbiAqIEBjb25zdGFudFxyXG4gKiBAdHlwZSB7c3RyaW5nfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU0hBUkVfTUFQX0lEID0gJ3NoYXJlTWFwJztcclxuXHJcbmltcG9ydCB7TGF5ZXJzLCBGaWx0ZXJGdW5uZWwsIFNldHRpbmdzLCBDdXJzb3JDbGlja30gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xyXG5pbXBvcnQge2dldEhUTUxNYXBNb2RlVGlsZVVybH0gZnJvbSAndXRpbHMvdXRpbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEtFUExFUl9HTF9OQU1FID0gJ2tlcGxlci5nbCc7XHJcblxyXG4vLyBfX1BBQ0tBR0VfVkVSU0lPTl9fIGlzIGF1dG9tYXRpY2FsbHkgaW5qZWN0ZWQgYnkgQmFiZWwvV2VicGFjayBkdXJpbmcgdGhlIGJ1aWxkaW5nIHByb2Nlc3NcclxuLy8gU2luY2Ugd2UgYXJlIGluamVjdGluZyB0aGlzIGR1cmluZyB0aGUgYnVpbGQgcHJvY2VzcyB3aXRoIGJhYmVsXHJcbi8vIHdoaWxlIGRldmVsb3BpbmcgVkVSU0lPTiBpcyBub3QgZGVmaW5lZCwgd2UgY2FwdHVyZSB0aGUgZXhjZXB0aW9uIGFuZCByZXR1cm5cclxuLy8gYW4gZW1wdHkgc3RyaW5nIHdoaWNoIHdpbGwgYWxsb3cgdXMgdG8gcmV0cmlldmUgdGhlIGxhdGVzdCB1bWQgdmVyc2lvblxyXG5leHBvcnQgY29uc3QgS0VQTEVSX0dMX1ZFUlNJT04gPSAnX19QQUNLQUdFX1ZFUlNJT05fXyc7XHJcbmV4cG9ydCBjb25zdCBLRVBMRVJfR0xfV0VCU0lURSA9ICdodHRwOi8va2VwbGVyLmdsLyc7XHJcblxyXG5leHBvcnQgY29uc3QgRElNRU5TSU9OUyA9IHtcclxuICBzaWRlUGFuZWw6IHtcclxuICAgIHdpZHRoOiAzMDAsXHJcbiAgICBtYXJnaW46IHt0b3A6IDIwLCBsZWZ0OiAyMCwgYm90dG9tOiAzMCwgcmlnaHQ6IDIwfSxcclxuICAgIGhlYWRlckhlaWdodDogOTZcclxuICB9LFxyXG4gIG1hcENvbnRyb2w6IHtcclxuICAgIHdpZHRoOiAyMDQsXHJcbiAgICBwYWRkaW5nOiAxMlxyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGVtZSBuYW1lIHRoYXQgY2FuIGJlIHBhc3NlZCB0byBgS2VwbGVyR2xgIGBwcm9wLnRoZW1lYC5cclxuICogQXZhaWxhYmxlIHRoZW1lcyBhcmUgYFRoZW1lLmxpZ2h0YCBhbmQgYFRoZW1lLmRhcmtgLiBEZWZhdWx0IHRoZW1lIGlzIGBUaGVtZS5kYXJrYFxyXG4gKiBAY29uc3RhbnRcclxuICogQHR5cGUge3N0cmluZ31cclxuICogQHB1YmxpY1xyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGBqc1xyXG4gKiBjb25zdCBNYXAgPSAoKSA9PiA8S2VwbGVyR2wgdGhlbWU9e1RIRU1FLmxpZ2h0fSBpZD1cIm1hcFwiLz5cclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVEhFTUUgPSBrZXlNaXJyb3Ioe1xyXG4gIGxpZ2h0OiBudWxsLFxyXG4gIGRhcms6IG51bGwsXHJcbiAgYmFzZTogbnVsbFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBTSURFQkFSX1BBTkVMUyA9IFtcclxuICB7XHJcbiAgICBpZDogJ2xheWVyJyxcclxuICAgIGxhYmVsOiAnTGF5ZXJzJyxcclxuICAgIGljb25Db21wb25lbnQ6IExheWVyc1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdmaWx0ZXInLFxyXG4gICAgbGFiZWw6ICdGaWx0ZXJzJyxcclxuICAgIGljb25Db21wb25lbnQ6IEZpbHRlckZ1bm5lbFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdpbnRlcmFjdGlvbicsXHJcbiAgICBsYWJlbDogJ0ludGVyYWN0aW9ucycsXHJcbiAgICBpY29uQ29tcG9uZW50OiBDdXJzb3JDbGlja1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdtYXAnLFxyXG4gICAgbGFiZWw6ICdCYXNlIG1hcCcsXHJcbiAgICBpY29uQ29tcG9uZW50OiBTZXR0aW5nc1xyXG4gIH1cclxuXTtcclxuXHJcbi8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcclxuZXhwb3J0IGNvbnN0IFBBTkVMUyA9IFNJREVCQVJfUEFORUxTO1xyXG5cclxuLy8gTUFQIFNUWUxFU1xyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTEFZRVJfR1JPVVBTID0gW1xyXG4gIHtcclxuICAgIHNsdWc6ICdsYWJlbCcsXHJcbiAgICBmaWx0ZXI6ICh7aWR9KSA9PiBpZC5tYXRjaCgvKD89KGxhYmVsfHBsYWNlLXxwb2ktKSkvKSxcclxuICAgIGRlZmF1bHRWaXNpYmlsaXR5OiB0cnVlXHJcbiAgfSxcclxuICB7XHJcbiAgICBzbHVnOiAncm9hZCcsXHJcbiAgICBmaWx0ZXI6ICh7aWR9KSA9PiBpZC5tYXRjaCgvKD89KHJvYWR8cmFpbHdheXx0dW5uZWx8c3RyZWV0fGJyaWRnZSkpKD8hLipsYWJlbCkvKSxcclxuICAgIGRlZmF1bHRWaXNpYmlsaXR5OiB0cnVlXHJcbiAgfSxcclxuICB7XHJcbiAgICBzbHVnOiAnYm9yZGVyJyxcclxuICAgIGZpbHRlcjogKHtpZH0pID0+IGlkLm1hdGNoKC9ib3JkZXJ8Ym91bmRhcmllcy8pLFxyXG4gICAgZGVmYXVsdFZpc2liaWxpdHk6IGZhbHNlXHJcbiAgfSxcclxuICB7XHJcbiAgICBzbHVnOiAnYnVpbGRpbmcnLFxyXG4gICAgZmlsdGVyOiAoe2lkfSkgPT4gaWQubWF0Y2goL2J1aWxkaW5nLyksXHJcbiAgICBkZWZhdWx0VmlzaWJpbGl0eTogdHJ1ZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgc2x1ZzogJ3dhdGVyJyxcclxuICAgIGZpbHRlcjogKHtpZH0pID0+IGlkLm1hdGNoKC8oPz0od2F0ZXJ8c3RyZWFtfGZlcnJ5KSkvKSxcclxuICAgIGRlZmF1bHRWaXNpYmlsaXR5OiB0cnVlXHJcbiAgfSxcclxuICB7XHJcbiAgICBzbHVnOiAnbGFuZCcsXHJcbiAgICBmaWx0ZXI6ICh7aWR9KSA9PiBpZC5tYXRjaCgvKD89KHBhcmtzfGxhbmRjb3ZlcnxpbmR1c3RyaWFsfHNhbmR8aGlsbHNoYWRlKSkvKSxcclxuICAgIGRlZmF1bHRWaXNpYmlsaXR5OiB0cnVlXHJcbiAgfSxcclxuICB7XHJcbiAgICBzbHVnOiAnM2QgYnVpbGRpbmcnLFxyXG4gICAgZmlsdGVyOiAoKSA9PiBmYWxzZSxcclxuICAgIGRlZmF1bHRWaXNpYmlsaXR5OiBmYWxzZVxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX01BUF9TVFlMRVMgPSBbXHJcbiAge1xyXG4gICAgaWQ6ICdkYXJrJyxcclxuICAgIGxhYmVsOiAnRGFyaycsXHJcbiAgICB1cmw6ICdtYXBib3g6Ly9zdHlsZXMvdWJlcmRhdGEvY2pvcWJiZjZsOWszMDJzbDk2dHl2a2EwOScsXHJcbiAgICBpY29uOiBgJHtJQ09OX1BSRUZJWH0vVUJFUl9EQVJLX1YyLnBuZ2AsXHJcbiAgICBsYXllckdyb3VwczogREVGQVVMVF9MQVlFUl9HUk9VUFNcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnbGlnaHQnLFxyXG4gICAgbGFiZWw6ICdMaWdodCcsXHJcbiAgICB1cmw6ICdtYXBib3g6Ly9zdHlsZXMvdWJlcmRhdGEvY2pvcWI5ajMzOWsxZjJzbDl0NWljNWJuNCcsXHJcbiAgICBpY29uOiBgJHtJQ09OX1BSRUZJWH0vVUJFUl9MSUdIVF9WMi5wbmdgLFxyXG4gICAgbGF5ZXJHcm91cHM6IERFRkFVTFRfTEFZRVJfR1JPVVBTXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ211dGVkJyxcclxuICAgIGxhYmVsOiAnTXV0ZWQgTGlnaHQnLFxyXG4gICAgdXJsOiAnbWFwYm94Oi8vc3R5bGVzL3ViZXJkYXRhL2NqZnlsMDNrcDF0dWwyc21mNXYydGJkZDQnLFxyXG4gICAgaWNvbjogYCR7SUNPTl9QUkVGSVh9L1VCRVJfTVVURURfTElHSFQucG5nYCxcclxuICAgIGxheWVyR3JvdXBzOiBERUZBVUxUX0xBWUVSX0dST1VQU1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdtdXRlZF9uaWdodCcsXHJcbiAgICBsYWJlbDogJ011dGVkIE5pZ2h0JyxcclxuICAgIHVybDogJ21hcGJveDovL3N0eWxlcy91YmVyZGF0YS9jamZ4aGxpa21hajFiMnNveXpldm55d2dzJyxcclxuICAgIGljb246IGAke0lDT05fUFJFRklYfS9VQkVSX01VVEVEX05JR0hULnBuZ2AsXHJcbiAgICBsYXllckdyb3VwczogREVGQVVMVF9MQVlFUl9HUk9VUFNcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgR0VPSlNPTl9GSUVMRFMgPSB7XHJcbiAgZ2VvanNvbjogWydfZ2VvanNvbicsICdhbGxfcG9pbnRzJywgJ2dlb2pzb24nXVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IElDT05fRklFTERTID0ge1xyXG4gIGljb246IFsnaWNvbiddXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVFJJUF9QT0lOVF9GSUVMRFMgPSBbXHJcbiAgWydsYXQnLCAnbG5nJ10sXHJcbiAgWydsYXQnLCAnbG9uJ10sXHJcbiAgWydsYXRpdHVkZScsICdsb25naXR1ZGUnXVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRSSVBfQVJDX0ZJRUxEUyA9IHtcclxuICBsYXQwOiAnYmVnaW50cmlwJyxcclxuICBsbmcwOiAnYmVnaW50cmlwJyxcclxuICBsYXQxOiAnZHJvcG9mZicsXHJcbiAgbG5nMTogJ2Ryb3BvZmYnXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRklMVEVSX1RZUEVTID0ga2V5TWlycm9yKHtcclxuICByYW5nZTogbnVsbCxcclxuICBzZWxlY3Q6IG51bGwsXHJcbiAgdGltZVJhbmdlOiBudWxsLFxyXG4gIG11bHRpU2VsZWN0OiBudWxsLFxyXG4gIHBvbHlnb246IG51bGxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgU0NBTEVfVFlQRVMgPSBrZXlNaXJyb3Ioe1xyXG4gIG9yZGluYWw6IG51bGwsXHJcbiAgcXVhbnRpbGU6IG51bGwsXHJcbiAgcXVhbnRpemU6IG51bGwsXHJcbiAgbGluZWFyOiBudWxsLFxyXG4gIHNxcnQ6IG51bGwsXHJcbiAgbG9nOiBudWxsLFxyXG5cclxuICAvLyBvcmRpbmFsIGRvbWFpbiB0byBsaW5lYXIgcmFuZ2VcclxuICBwb2ludDogbnVsbFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBTQ0FMRV9GVU5DID0ge1xyXG4gIFtTQ0FMRV9UWVBFUy5saW5lYXJdOiBzY2FsZUxpbmVhcixcclxuICBbU0NBTEVfVFlQRVMucXVhbnRpemVdOiBzY2FsZVF1YW50aXplLFxyXG4gIFtTQ0FMRV9UWVBFUy5xdWFudGlsZV06IHNjYWxlUXVhbnRpbGUsXHJcbiAgW1NDQUxFX1RZUEVTLm9yZGluYWxdOiBzY2FsZU9yZGluYWwsXHJcbiAgW1NDQUxFX1RZUEVTLnNxcnRdOiBzY2FsZVNxcnQsXHJcbiAgW1NDQUxFX1RZUEVTLmxvZ106IHNjYWxlTG9nLFxyXG4gIFtTQ0FMRV9UWVBFUy5wb2ludF06IHNjYWxlUG9pbnRcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBTExfRklFTERfVFlQRVMgPSBrZXlNaXJyb3Ioe1xyXG4gIGJvb2xlYW46IG51bGwsXHJcbiAgZGF0ZTogbnVsbCxcclxuICBnZW9qc29uOiBudWxsLFxyXG4gIGludGVnZXI6IG51bGwsXHJcbiAgcmVhbDogbnVsbCxcclxuICBzdHJpbmc6IG51bGwsXHJcbiAgdGltZXN0YW1wOiBudWxsLFxyXG4gIHBvaW50OiBudWxsXHJcbn0pO1xyXG5cclxuY29uc3QgT1JBTkdFID0gJzI0OCwgMTk0LCAyOCc7XHJcbmNvbnN0IFBJTksgPSAnMjMxLCAxODksIDE5NCc7XHJcbmNvbnN0IFBVUlBMRSA9ICcxNjAsIDEwNiwgMjA2JztcclxuY29uc3QgQkxVRSA9ICcxNDAsIDIxMCwgMjA1JztcclxuY29uc3QgQkxVRTIgPSAnMTA2LCAxNjAsIDIwNic7XHJcbmNvbnN0IEJMVUUzID0gJzAsIDE3MiwgMjM3JztcclxuY29uc3QgR1JFRU4gPSAnMTA2LCAxNjAsIDU2JztcclxuY29uc3QgUkVEID0gJzIzNywgODgsIDEwNic7XHJcblxyXG5leHBvcnQgY29uc3QgSElHSExJR0hfQ09MT1JfM0QgPSBbMjU1LCAyNTUsIDI1NSwgNjBdO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZJRUxEX0NPTE9SUyA9IHtcclxuICBkZWZhdWx0OiBSRURcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBGSUxFRF9UWVBFX0RJU1BMQVkgPSB7XHJcbiAgW0FMTF9GSUVMRF9UWVBFUy5ib29sZWFuXToge1xyXG4gICAgbGFiZWw6ICdib29sJyxcclxuICAgIGNvbG9yOiBQSU5LXHJcbiAgfSxcclxuICBbQUxMX0ZJRUxEX1RZUEVTLmRhdGVdOiB7XHJcbiAgICBsYWJlbDogJ2RhdGUnLFxyXG4gICAgY29sb3I6IFBVUlBMRVxyXG4gIH0sXHJcbiAgW0FMTF9GSUVMRF9UWVBFUy5nZW9qc29uXToge1xyXG4gICAgbGFiZWw6ICdnZW8nLFxyXG4gICAgY29sb3I6IEJMVUUyXHJcbiAgfSxcclxuICBbQUxMX0ZJRUxEX1RZUEVTLmludGVnZXJdOiB7XHJcbiAgICBsYWJlbDogJ2ludCcsXHJcbiAgICBjb2xvcjogT1JBTkdFXHJcbiAgfSxcclxuICBbQUxMX0ZJRUxEX1RZUEVTLnJlYWxdOiB7XHJcbiAgICBsYWJlbDogJ2Zsb2F0JyxcclxuICAgIGNvbG9yOiBPUkFOR0VcclxuICB9LFxyXG4gIFtBTExfRklFTERfVFlQRVMuc3RyaW5nXToge1xyXG4gICAgbGFiZWw6ICdzdHJpbmcnLFxyXG4gICAgY29sb3I6IEJMVUVcclxuICB9LFxyXG4gIFtBTExfRklFTERfVFlQRVMudGltZXN0YW1wXToge1xyXG4gICAgbGFiZWw6ICd0aW1lJyxcclxuICAgIGNvbG9yOiBHUkVFTlxyXG4gIH0sXHJcbiAgLy8gZmllbGQgcGFpcnNcclxuICBbQUxMX0ZJRUxEX1RZUEVTLnBvaW50XToge1xyXG4gICAgbGFiZWw6ICdwb2ludCcsXHJcbiAgICBjb2xvcjogQkxVRTNcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTk5FTF9TQ0FMRVMgPSBrZXlNaXJyb3Ioe1xyXG4gIGNvbG9yOiBudWxsLFxyXG4gIHJhZGl1czogbnVsbCxcclxuICBzaXplOiBudWxsLFxyXG4gIGNvbG9yQWdncjogbnVsbCxcclxuICBzaXplQWdncjogbnVsbFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBBR0dSRUdBVElPTl9UWVBFUyA9IHtcclxuICAvLyBkZWZhdWx0XHJcbiAgY291bnQ6ICdjb3VudCcsXHJcbiAgLy8gbGluZWFyXHJcbiAgYXZlcmFnZTogJ2F2ZXJhZ2UnLFxyXG4gIG1heGltdW06ICdtYXhpbXVtJyxcclxuICBtaW5pbXVtOiAnbWluaW11bScsXHJcbiAgbWVkaWFuOiAnbWVkaWFuJyxcclxuICBzdGRldjogJ3N0ZGV2JyxcclxuICBzdW06ICdzdW0nLFxyXG4gIHZhcmlhbmNlOiAndmFyaWFuY2UnLFxyXG4gIC8vIG9yZGluYWxcclxuICBtb2RlOiAnbW9kZScsXHJcbiAgY291bnRVbmlxdWU6ICdjb3VudCB1bmlxdWUnXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGluZWFyRmllbGRTY2FsZUZ1bmN0aW9ucyA9IHtcclxuICBbQ0hBTk5FTF9TQ0FMRVMuY29sb3JdOiBbU0NBTEVfVFlQRVMucXVhbnRpemUsIFNDQUxFX1RZUEVTLnF1YW50aWxlXSxcclxuICBbQ0hBTk5FTF9TQ0FMRVMucmFkaXVzXTogW1NDQUxFX1RZUEVTLnNxcnRdLFxyXG4gIFtDSEFOTkVMX1NDQUxFUy5zaXplXTogW1NDQUxFX1RZUEVTLmxpbmVhciwgU0NBTEVfVFlQRVMuc3FydCwgU0NBTEVfVFlQRVMubG9nXVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmVhckZpZWxkQWdnclNjYWxlRnVuY3Rpb25zID0ge1xyXG4gIFtDSEFOTkVMX1NDQUxFUy5jb2xvckFnZ3JdOiB7XHJcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMuYXZlcmFnZV06IFtTQ0FMRV9UWVBFUy5xdWFudGl6ZSwgU0NBTEVfVFlQRVMucXVhbnRpbGVdLFxyXG4gICAgW0FHR1JFR0FUSU9OX1RZUEVTLm1heGltdW1dOiBbU0NBTEVfVFlQRVMucXVhbnRpemUsIFNDQUxFX1RZUEVTLnF1YW50aWxlXSxcclxuICAgIFtBR0dSRUdBVElPTl9UWVBFUy5taW5pbXVtXTogW1NDQUxFX1RZUEVTLnF1YW50aXplLCBTQ0FMRV9UWVBFUy5xdWFudGlsZV0sXHJcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMubWVkaWFuXTogW1NDQUxFX1RZUEVTLnF1YW50aXplLCBTQ0FMRV9UWVBFUy5xdWFudGlsZV0sXHJcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMuc3RkZXZdOiBbU0NBTEVfVFlQRVMucXVhbnRpemUsIFNDQUxFX1RZUEVTLnF1YW50aWxlXSxcclxuICAgIFtBR0dSRUdBVElPTl9UWVBFUy5zdW1dOiBbU0NBTEVfVFlQRVMucXVhbnRpemUsIFNDQUxFX1RZUEVTLnF1YW50aWxlXSxcclxuICAgIFtBR0dSRUdBVElPTl9UWVBFUy52YXJpYW5jZV06IFtTQ0FMRV9UWVBFUy5xdWFudGl6ZSwgU0NBTEVfVFlQRVMucXVhbnRpbGVdXHJcbiAgfSxcclxuXHJcbiAgW0NIQU5ORUxfU0NBTEVTLnNpemVBZ2dyXToge1xyXG4gICAgW0FHR1JFR0FUSU9OX1RZUEVTLmF2ZXJhZ2VdOiBbU0NBTEVfVFlQRVMubGluZWFyLCBTQ0FMRV9UWVBFUy5zcXJ0LCBTQ0FMRV9UWVBFUy5sb2ddLFxyXG4gICAgW0FHR1JFR0FUSU9OX1RZUEVTLm1heGltdW1dOiBbU0NBTEVfVFlQRVMubGluZWFyLCBTQ0FMRV9UWVBFUy5zcXJ0LCBTQ0FMRV9UWVBFUy5sb2ddLFxyXG4gICAgW0FHR1JFR0FUSU9OX1RZUEVTLm1pbmltdW1dOiBbU0NBTEVfVFlQRVMubGluZWFyLCBTQ0FMRV9UWVBFUy5zcXJ0LCBTQ0FMRV9UWVBFUy5sb2ddLFxyXG4gICAgW0FHR1JFR0FUSU9OX1RZUEVTLm1lZGlhbl06IFtTQ0FMRV9UWVBFUy5saW5lYXIsIFNDQUxFX1RZUEVTLnNxcnQsIFNDQUxFX1RZUEVTLmxvZ10sXHJcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMuc3RkZXZdOiBbU0NBTEVfVFlQRVMubGluZWFyLCBTQ0FMRV9UWVBFUy5zcXJ0LCBTQ0FMRV9UWVBFUy5sb2ddLFxyXG4gICAgW0FHR1JFR0FUSU9OX1RZUEVTLnN1bV06IFtTQ0FMRV9UWVBFUy5saW5lYXIsIFNDQUxFX1RZUEVTLnNxcnQsIFNDQUxFX1RZUEVTLmxvZ10sXHJcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMudmFyaWFuY2VdOiBbU0NBTEVfVFlQRVMubGluZWFyLCBTQ0FMRV9UWVBFUy5zcXJ0LCBTQ0FMRV9UWVBFUy5sb2ddXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG9yZGluYWxGaWVsZFNjYWxlRnVuY3Rpb25zID0ge1xyXG4gIFtDSEFOTkVMX1NDQUxFUy5jb2xvcl06IFtTQ0FMRV9UWVBFUy5vcmRpbmFsXSxcclxuICBbQ0hBTk5FTF9TQ0FMRVMucmFkaXVzXTogW1NDQUxFX1RZUEVTLnBvaW50XSxcclxuICBbQ0hBTk5FTF9TQ0FMRVMuc2l6ZV06IFtTQ0FMRV9UWVBFUy5wb2ludF1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBvcmRpbmFsRmllbGRBZ2dyU2NhbGVGdW5jdGlvbnMgPSB7XHJcbiAgLy8gW0NIQU5ORUxfU0NBTEVTLmNvbG9yQWdncl06IFtTQ0FMRV9UWVBFUy5vcmRpbmFsLCBTQ0FMRV9UWVBFUy5saW5lYXJdLFxyXG4gIFtDSEFOTkVMX1NDQUxFUy5jb2xvckFnZ3JdOiB7XHJcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMubW9kZV06IFtTQ0FMRV9UWVBFUy5vcmRpbmFsXSxcclxuICAgIFtBR0dSRUdBVElPTl9UWVBFUy5jb3VudFVuaXF1ZV06IFtTQ0FMRV9UWVBFUy5xdWFudGl6ZSwgU0NBTEVfVFlQRVMucXVhbnRpbGVdXHJcbiAgfSxcclxuXHJcbiAgLy8gQ3VycmVudGx5IGRvZXNuJ3Qgc3VwcG9ydCB5ZXRcclxuICBbQ0hBTk5FTF9TQ0FMRVMuc2l6ZUFnZ3JdOiB7fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG5vdFN1cHBvcnRlZFNjYWxlT3B0cyA9IHtcclxuICBbQ0hBTk5FTF9TQ0FMRVMuY29sb3JdOiBbXSxcclxuICBbQ0hBTk5FTF9TQ0FMRVMucmFkaXVzXTogW10sXHJcbiAgW0NIQU5ORUxfU0NBTEVTLnNpemVdOiBbXVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG5vdFN1cHBvcnRBZ2dyT3B0cyA9IHtcclxuICBbQ0hBTk5FTF9TQ0FMRVMuY29sb3JBZ2dyXToge30sXHJcbiAgW0NIQU5ORUxfU0NBTEVTLnNpemVBZ2dyXToge31cclxufTtcclxuXHJcbi8qKlxyXG4gKiBEZWZhdWx0IGFnZ3JlZ2F0aW9uIGFyZSBiYXNlZCBvbiBvY3VudFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQUdHUkVHQVRJT04gPSB7XHJcbiAgW0NIQU5ORUxfU0NBTEVTLmNvbG9yQWdncl06IHtcclxuICAgIFtBR0dSRUdBVElPTl9UWVBFUy5jb3VudF06IFtTQ0FMRV9UWVBFUy5xdWFudGl6ZSwgU0NBTEVfVFlQRVMucXVhbnRpbGVdXHJcbiAgfSxcclxuICBbQ0hBTk5FTF9TQ0FMRVMuc2l6ZUFnZ3JdOiB7XHJcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMuY291bnRdOiBbU0NBTEVfVFlQRVMubGluZWFyLCBTQ0FMRV9UWVBFUy5zcXJ0LCBTQ0FMRV9UWVBFUy5sb2ddXHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIERlZmluZSB3aGF0IHR5cGUgb2Ygc2NhbGUgb3BlcmF0aW9uIGlzIGFsbG93ZWQgb24gZWFjaCB0eXBlIG9mIGZpZWxkc1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEZJRUxEX09QVFMgPSB7XHJcbiAgc3RyaW5nOiB7XHJcbiAgICB0eXBlOiAnY2F0ZWdvcmljYWwnLFxyXG4gICAgc2NhbGU6IHtcclxuICAgICAgLi4ub3JkaW5hbEZpZWxkU2NhbGVGdW5jdGlvbnMsXHJcbiAgICAgIC4uLm9yZGluYWxGaWVsZEFnZ3JTY2FsZUZ1bmN0aW9uc1xyXG4gICAgfSxcclxuICAgIGZvcm1hdDoge1xyXG4gICAgICBsZWdlbmQ6IGQgPT4gZFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVhbDoge1xyXG4gICAgdHlwZTogJ251bWVyaWNhbCcsXHJcbiAgICBzY2FsZToge1xyXG4gICAgICAuLi5saW5lYXJGaWVsZFNjYWxlRnVuY3Rpb25zLFxyXG4gICAgICAuLi5saW5lYXJGaWVsZEFnZ3JTY2FsZUZ1bmN0aW9uc1xyXG4gICAgfSxcclxuICAgIGZvcm1hdDoge1xyXG4gICAgICBsZWdlbmQ6IGQgPT4gZFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdGltZXN0YW1wOiB7XHJcbiAgICB0eXBlOiAndGltZScsXHJcbiAgICBzY2FsZToge1xyXG4gICAgICAuLi5saW5lYXJGaWVsZFNjYWxlRnVuY3Rpb25zLFxyXG4gICAgICAuLi5ub3RTdXBwb3J0QWdnck9wdHNcclxuICAgIH0sXHJcbiAgICBmb3JtYXQ6IHtcclxuICAgICAgbGVnZW5kOiBkID0+IGRcclxuICAgIH1cclxuICB9LFxyXG4gIGludGVnZXI6IHtcclxuICAgIHR5cGU6ICdudW1lcmljYWwnLFxyXG4gICAgc2NhbGU6IHtcclxuICAgICAgLi4ubGluZWFyRmllbGRTY2FsZUZ1bmN0aW9ucyxcclxuICAgICAgLi4ubGluZWFyRmllbGRBZ2dyU2NhbGVGdW5jdGlvbnNcclxuICAgIH0sXHJcbiAgICBmb3JtYXQ6IHtcclxuICAgICAgbGVnZW5kOiBkID0+IGRcclxuICAgIH1cclxuICB9LFxyXG4gIGJvb2xlYW46IHtcclxuICAgIHR5cGU6ICdib29sZWFuJyxcclxuICAgIHNjYWxlOiB7XHJcbiAgICAgIC4uLm9yZGluYWxGaWVsZFNjYWxlRnVuY3Rpb25zLFxyXG4gICAgICAuLi5vcmRpbmFsRmllbGRBZ2dyU2NhbGVGdW5jdGlvbnNcclxuICAgIH0sXHJcbiAgICBmb3JtYXQ6IHtcclxuICAgICAgbGVnZW5kOiBkID0+IGRcclxuICAgIH1cclxuICB9LFxyXG4gIGRhdGU6IHtcclxuICAgIHNjYWxlOiB7XHJcbiAgICAgIC4uLm9yZGluYWxGaWVsZFNjYWxlRnVuY3Rpb25zLFxyXG4gICAgICAuLi5vcmRpbmFsRmllbGRBZ2dyU2NhbGVGdW5jdGlvbnNcclxuICAgIH0sXHJcbiAgICBmb3JtYXQ6IHtcclxuICAgICAgbGVnZW5kOiBkID0+IGRcclxuICAgIH1cclxuICB9LFxyXG4gIGdlb2pzb246IHtcclxuICAgIHR5cGU6ICdnZW9tZXRyeScsXHJcbiAgICBzY2FsZToge1xyXG4gICAgICAuLi5ub3RTdXBwb3J0ZWRTY2FsZU9wdHMsXHJcbiAgICAgIC4uLm5vdFN1cHBvcnRBZ2dyT3B0c1xyXG4gICAgfSxcclxuICAgIGZvcm1hdDoge1xyXG4gICAgICBsZWdlbmQ6IGQgPT4gJy4uLidcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTk5FTF9TQ0FMRV9TVVBQT1JURURfRklFTERTID0gT2JqZWN0LmtleXMoQ0hBTk5FTF9TQ0FMRVMpLnJlZHVjZShcclxuICAoYWNjdSwga2V5KSA9PiAoe1xyXG4gICAgLi4uYWNjdSxcclxuICAgIFtrZXldOiBPYmplY3Qua2V5cyhGSUVMRF9PUFRTKS5maWx0ZXIoZnQgPT4gT2JqZWN0LmtleXMoRklFTERfT1BUU1tmdF0uc2NhbGVba2V5XSkubGVuZ3RoKVxyXG4gIH0pLFxyXG4gIHt9XHJcbik7XHJcblxyXG4vLyBUT0RPOiBzaGFuIGRlbGV0ZSB1c2Ugb2YgTEFZRVJfVFlQRVNcclxuZXhwb3J0IGNvbnN0IExBWUVSX1RZUEVTID0ga2V5TWlycm9yKHtcclxuICBwb2ludDogbnVsbCxcclxuICBhcmM6IG51bGwsXHJcbiAgY2x1c3RlcjogbnVsbCxcclxuICBsaW5lOiBudWxsLFxyXG4gIGdyaWQ6IG51bGwsXHJcbiAgZ2VvanNvbjogbnVsbCxcclxuICBpY29uOiBudWxsLFxyXG4gIGhlYXRtYXA6IG51bGwsXHJcbiAgaGV4YWdvbjogbnVsbFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0xBWUVSX0NPTE9SID0ge1xyXG4gIHRyaXBBcmM6ICcjOTIyNkM2JyxcclxuICBiZWdpbnRyaXBfbGF0OiAnIzFFOTZCRScsXHJcbiAgZHJvcG9mZl9sYXQ6ICcjRkY5OTFGJyxcclxuICByZXF1ZXN0X2xhdDogJyM1MkEzNTMnXHJcbn07XHJcblxyXG4vLyBsZXQgdXNlciBwYXNzIGluIGRlZmF1bHQgdG9vbHRpcCBmaWVsZHNcclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVE9PTFRJUF9GSUVMRFMgPSBbXTtcclxuXHJcbmV4cG9ydCBjb25zdCBOT19WQUxVRV9DT0xPUiA9IFswLCAwLCAwLCAwXTtcclxuXHJcbmV4cG9ydCBjb25zdCBMQVlFUl9CTEVORElOR1MgPSB7XHJcbiAgYWRkaXRpdmU6IHtcclxuICAgIGJsZW5kRnVuYzogWydTUkNfQUxQSEEnLCAnRFNUX0FMUEhBJ10sXHJcbiAgICBibGVuZEVxdWF0aW9uOiAnRlVOQ19BREQnXHJcbiAgfSxcclxuICBub3JtYWw6IHtcclxuICAgIC8vIHJlZmVyZW5jZSB0b1xyXG4gICAgLy8gaHR0cHM6Ly9saW1udS5jb20vd2ViZ2wtYmxlbmRpbmcteW91cmUtcHJvYmFibHktd3JvbmcvXHJcbiAgICBibGVuZEZ1bmM6IFsnU1JDX0FMUEhBJywgJ09ORV9NSU5VU19TUkNfQUxQSEEnLCAnT05FJywgJ09ORV9NSU5VU19TUkNfQUxQSEEnXSxcclxuICAgIGJsZW5kRXF1YXRpb246IFsnRlVOQ19BREQnLCAnRlVOQ19BREQnXVxyXG4gIH0sXHJcbiAgc3VidHJhY3RpdmU6IHtcclxuICAgIGJsZW5kRnVuYzogWydPTkUnLCAnT05FX01JTlVTX0RTVF9DT0xPUicsICdTUkNfQUxQSEEnLCAnRFNUX0FMUEhBJ10sXHJcbiAgICBibGVuZEVxdWF0aW9uOiBbJ0ZVTkNfU1VCVFJBQ1QnLCAnRlVOQ19BREQnXVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNQVhfREVGQVVMVF9UT09MVElQUyA9IDU7XHJcblxyXG5leHBvcnQgY29uc3QgUkVTT0xVVElPTlMgPSBrZXlNaXJyb3Ioe1xyXG4gIE9ORV9YOiBudWxsLFxyXG4gIFRXT19YOiBudWxsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVYUE9SVF9JTUdfUkFUSU9TID0ga2V5TWlycm9yKHtcclxuICBTQ1JFRU46IG51bGwsXHJcbiAgRk9VUl9CWV9USFJFRTogbnVsbCxcclxuICBTSVhURUVOX0JZX05JTkU6IG51bGwsXHJcbiAgQ1VTVE9NOiBudWxsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVYUE9SVF9JTUdfUkFUSU9fT1BUSU9OUyA9IFtcclxuICB7XHJcbiAgICBpZDogRVhQT1JUX0lNR19SQVRJT1MuU0NSRUVOLFxyXG4gICAgbGFiZWw6ICdPcmlnaW5hbCBTY3JlZW4nLFxyXG4gICAgZ2V0U2l6ZTogKHNjcmVlblcsIHNjcmVlbkgpID0+ICh7d2lkdGg6IHNjcmVlblcsIGhlaWdodDogc2NyZWVuSH0pXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogRVhQT1JUX0lNR19SQVRJT1MuQ1VTVE9NLFxyXG4gICAgaGlkZGVuOiB0cnVlLFxyXG4gICAgbGFiZWw6ICdDdXN0b20nLFxyXG4gICAgZ2V0U2l6ZTogKG1hcFcsIG1hcEgpID0+ICh7d2lkdGg6IG1hcFcsIGhlaWdodDogbWFwSH0pXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogRVhQT1JUX0lNR19SQVRJT1MuRk9VUl9CWV9USFJFRSxcclxuICAgIGxhYmVsOiAnNDozJyxcclxuICAgIGdldFNpemU6IChzY3JlZW5XLCBzY3JlZW5IKSA9PiAoe1xyXG4gICAgICB3aWR0aDogc2NyZWVuVyxcclxuICAgICAgaGVpZ2h0OiBNYXRoLnJvdW5kKHNjcmVlblcgKiAwLjc1KVxyXG4gICAgfSlcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBFWFBPUlRfSU1HX1JBVElPUy5TSVhURUVOX0JZX05JTkUsXHJcbiAgICBsYWJlbDogJzE2OjknLFxyXG4gICAgZ2V0U2l6ZTogKHNjcmVlblcsIHNjcmVlbkgpID0+ICh7XHJcbiAgICAgIHdpZHRoOiBzY3JlZW5XLFxyXG4gICAgICBoZWlnaHQ6IE1hdGgucm91bmQoc2NyZWVuVyAqIDAuNTYyNSlcclxuICAgIH0pXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVYUE9SVF9JTUdfUkVTT0xVVElPTl9PUFRJT05TID0gW1xyXG4gIHtcclxuICAgIGlkOiBSRVNPTFVUSU9OUy5PTkVfWCxcclxuICAgIGxhYmVsOiAnMXgnLFxyXG4gICAgYXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgc2NhbGU6IDEsXHJcbiAgICBnZXRTaXplOiAoc2NyZWVuVywgc2NyZWVuSCkgPT4gKHtcclxuICAgICAgd2lkdGg6IHNjcmVlblcsXHJcbiAgICAgIGhlaWdodDogc2NyZWVuSFxyXG4gICAgfSlcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBSRVNPTFVUSU9OUy5UV09fWCxcclxuICAgIGxhYmVsOiAnMngnLFxyXG4gICAgYXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgc2NhbGU6IDIsXHJcbiAgICBnZXRTaXplOiAoc2NyZWVuVywgc2NyZWVuSCkgPT4gKHtcclxuICAgICAgd2lkdGg6IHNjcmVlblcgKiAyLFxyXG4gICAgICBoZWlnaHQ6IHNjcmVlbkggKiAyXHJcbiAgICB9KVxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBFWFBPUlRfREFUQV9UWVBFID0ga2V5TWlycm9yKHtcclxuICBDU1Y6IG51bGxcclxuICAvLyBTSEFQRUZJTEU6IG51bGwsXHJcbiAgLy8gSlNPTjogbnVsbCxcclxuICAvLyBHRU9KU09OOiBudWxsLFxyXG4gIC8vIFRPUE9KU09OOiBudWxsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVYUE9SVF9EQVRBX1RZUEVfT1BUSU9OUyA9IFtcclxuICB7XHJcbiAgICBpZDogRVhQT1JUX0RBVEFfVFlQRS5DU1YsXHJcbiAgICBsYWJlbDogRVhQT1JUX0RBVEFfVFlQRS5DU1YudG9Mb3dlckNhc2UoKSxcclxuICAgIGF2YWlsYWJsZTogdHJ1ZVxyXG4gIH1cclxuICAvLyB7XHJcbiAgLy8gICBpZDogRVhQT1JUX0RBVEFfVFlQRS5TSEFQRUZJTEUsXHJcbiAgLy8gICBsYWJlbDogJ3NoYXBlZmlsZScsXHJcbiAgLy8gICBhdmFpbGFibGU6IGZhbHNlXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICBpZDogRVhQT1JUX0RBVEFfVFlQRS5KU09OLFxyXG4gIC8vICAgbGFiZWw6ICdqc29uJyxcclxuICAvLyAgIGF2YWlsYWJsZTogZmFsc2VcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIGlkOiBFWFBPUlRfREFUQV9UWVBFLkdFT0pTT04sXHJcbiAgLy8gICBsYWJlbDogJ2dlb2pzb24nLFxyXG4gIC8vICAgYXZhaWxhYmxlOiBmYWxzZVxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgaWQ6IEVYUE9SVF9EQVRBX1RZUEUuVE9QT0pTT04sXHJcbiAgLy8gICBsYWJlbDogJ3RvcG9qc29uJyxcclxuICAvLyAgIGF2YWlsYWJsZTogZmFsc2VcclxuICAvLyB9XHJcbl07XHJcblxyXG4vLyBFeHBvcnQgbWFwIHR5cGVzXHJcbmV4cG9ydCBjb25zdCBFWFBPUlRfTUFQX0ZPUk1BVFMgPSBrZXlNaXJyb3Ioe1xyXG4gIEhUTUw6IG51bGwsXHJcbiAgSlNPTjogbnVsbFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBFWFBPUlRfSFRNTF9NQVBfTU9ERVMgPSBrZXlNaXJyb3Ioe1xyXG4gIFJFQUQ6IG51bGwsXHJcbiAgRURJVDogbnVsbFxyXG59KTtcclxuXHJcbi8vIEV4cG9ydCBtYXAgb3B0aW9uc1xyXG5leHBvcnQgY29uc3QgRVhQT1JUX01BUF9GT1JNQVRfT1BUSU9OUyA9IE9iamVjdC5lbnRyaWVzKEVYUE9SVF9NQVBfRk9STUFUUykubWFwKGVudHJ5ID0+ICh7XHJcbiAgaWQ6IGVudHJ5WzBdLFxyXG4gIGxhYmVsOiBlbnRyeVsxXS50b0xvd2VyQ2FzZSgpLFxyXG4gIGF2YWlsYWJsZTogdHJ1ZVxyXG59KSk7XHJcblxyXG5leHBvcnQgY29uc3QgRVhQT1JUX0hUTUxfTUFQX01PREVfT1BUSU9OUyA9IE9iamVjdC5lbnRyaWVzKEVYUE9SVF9IVE1MX01BUF9NT0RFUykubWFwKGVudHJ5ID0+ICh7XHJcbiAgaWQ6IGVudHJ5WzBdLFxyXG4gIGxhYmVsOiBlbnRyeVsxXS50b0xvd2VyQ2FzZSgpLFxyXG4gIGF2YWlsYWJsZTogdHJ1ZSxcclxuICB1cmw6IGdldEhUTUxNYXBNb2RlVGlsZVVybChlbnRyeVsxXSlcclxufSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVVVJRF9DT1VOVCA9IDY7XHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9OT1RJRklDQVRJT05fTUVTU0FHRSA9ICdNRVNTQUdFX05PVF9QUk9WSURFRCc7XHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9OT1RJRklDQVRJT05fVFlQRVMgPSBrZXlNaXJyb3Ioe1xyXG4gIGluZm86IG51bGwsXHJcbiAgZXJyb3I6IG51bGwsXHJcbiAgd2FybmluZzogbnVsbCxcclxuICBzdWNjZXNzOiBudWxsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTk9USUZJQ0FUSU9OX1RPUElDUyA9IGtleU1pcnJvcih7XHJcbiAgZ2xvYmFsOiBudWxsLFxyXG4gIGZpbGU6IG51bGxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgVE9LRU5fTUlTVVNFX1dBUk5JTkcgPVxyXG4gICcqIElmIHlvdSBkbyBub3QgcHJvdmlkZSB5b3VyIG93biB0b2tlbiwgdGhlIG1hcCBtYXkgZmFpbCB0byBkaXNwbGF5IGF0IGFueSB0aW1lIHdoZW4gd2UgcmVwbGFjZSBvdXJzIHRvIGF2b2lkIG1pc3VzZS4gJztcclxuZXhwb3J0IGNvbnN0IERJU0NMQUlNRVIgPVxyXG4gICdZb3UgY2FuIGNoYW5nZSB0aGUgTWFwYm94IHRva2VuIGxhdGVyIHVzaW5nIHRoZSBmb2xsb3dpbmcgaW5zdHJ1Y3Rpb25zOiAnO1xyXG5leHBvcnQgY29uc3QgTUFQX0NPTkZJR19ERVNDUklQVElPTiA9XHJcbiAgJ01hcCBjb25maWcgd2lsbCBiZSBpbmNsdWRlZCBpbiB0aGUgSnNvbiBmaWxlLiBJZiB5b3UgYXJlIHVzaW5nIGtlcGxlci5nbCBpbiB5b3VyIG93biBhcHAuIFlvdSBjYW4gY29weSB0aGlzIGNvbmZpZyBhbmQgcGFzcyBpdCB0byAnO1xyXG5leHBvcnQgY29uc3QgU0hBUkVfRElTQ0xBSU1FUiA9XHJcbiAgJ2tlcGxlci5nbCB3aWxsIHNhdmUgeW91ciBtYXAgZGF0YSB0byB5b3VyIHBlcnNvbmFsIGNsb3VkIHN0b3JhZ2UsIG9ubHkgcGVvcGxlIHdpdGggdGhlIFVSTCBjYW4gYWNjZXNzIHlvdXIgbWFwIGFuZCBkYXRhLiAnICtcclxuICAnWW91IGNhbiBlZGl0L2RlbGV0ZSB0aGUgZGF0YSBmaWxlIGluIHlvdXIgY2xvdWQgYWNjb3VudCBhbnl0aW1lLic7XHJcbi8vIEFuaW1hdGlvblxyXG5leHBvcnQgY29uc3QgQkFTRV9TUEVFRCA9IDYwMDtcclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVElNRV9GT1JNQVQgPSAnTU0vREQvWVkgSEg6bW06c3NhJztcclxuZXhwb3J0IGNvbnN0IFNQRUVEX0NPTlRST0xfUkFOR0UgPSBbMCwgMTBdO1xyXG5cclxuLy8gV2UgY291bGQgdXNlIGRpcmVjdGx5IHJlYWN0LW1hcC1nbC1kcmF3IEVkaXRvck1vZGUgYnV0IHRoaXMgd291bGRcclxuLy8gY3JlYXRlIGEgZGlyZWN0IGRlcGVuZGVuY3kgd2l0aCByZWFjdC1tYXAtZ2wtZHJhd1xyXG4vLyBDcmVhdGVkIHRoaXMgbWFwIHRvIGJlIGluZGVwZW5kZW50IGZyb20gcmVhY3QtbWFwLWdsLWRyYXdcclxuZXhwb3J0IGNvbnN0IEVESVRPUl9NT0RFUyA9IHtcclxuICBSRUFEX09OTFk6IEVkaXRvck1vZGVzLlJFQURfT05MWSxcclxuICBEUkFXX1BPTFlHT046IEVkaXRvck1vZGVzLkRSQVdfUE9MWUdPTixcclxuICBEUkFXX1JFQ1RBTkdMRTogRWRpdG9yTW9kZXMuRFJBV19SRUNUQU5HTEUsXHJcbiAgRURJVDogRWRpdG9yTW9kZXMuRURJVF9WRVJURVhcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBFRElUT1JfQVZBSUxBQkxFX0xBWUVSUyA9IFtcclxuICBMQVlFUl9UWVBFUy5wb2ludCxcclxuICBMQVlFUl9UWVBFUy5oZXhhZ29uLFxyXG4gIExBWUVSX1RZUEVTLmFyYyxcclxuICBMQVlFUl9UWVBFUy5saW5lXHJcbl07XHJcbi8vIEdQVSBGaWx0ZXJpbmdcclxuLyoqXHJcbiAqIE1heCBudW1iZXIgb2YgZmlsdGVyIHZhbHVlIGJ1ZmZlcnMgdGhhdCBkZWNrLmdsIHByb3ZpZGVzXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTUFYX0dQVV9GSUxURVJTID0gNDtcclxuZXhwb3J0IGNvbnN0IE1BUF9USFVNQk5BSUxfRElNRU5TSU9OID0ge1xyXG4gIHdpZHRoOiAzMDAsXHJcbiAgaGVpZ2h0OiAyMDBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNQVBfSU5GT19DSEFSQUNURVIgPSB7XHJcbiAgdGl0bGU6IDEwMCxcclxuICBkZXNjcmlwdGlvbjogMTAwXHJcbn07XHJcblxyXG4vLyBMb2FkIGRhdGFcclxuZXhwb3J0IGNvbnN0IExPQURJTkdfTUVUSE9EUyA9IGtleU1pcnJvcih7XHJcbiAgdXBsb2FkOiBudWxsLFxyXG4gIHN0b3JhZ2U6IG51bGxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgREFUQVNFVF9GT1JNQVRTID0ga2V5TWlycm9yKHtcclxuICByb3c6IG51bGwsXHJcbiAgZ2VvanNvbjogbnVsbCxcclxuICBjc3Y6IG51bGwsXHJcbiAga2VwbGVyZ2w6IG51bGxcclxufSk7XHJcbiJdfQ==