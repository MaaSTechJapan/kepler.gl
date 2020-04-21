"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContainerFactory = ContainerFactory;
exports.injectComponents = injectComponents;
exports["default"] = exports.appInjector = exports.ERROR_MSG = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _lodash = _interopRequireDefault(require("lodash.memoize"));

var _window = require("global/window");

var _injector = require("./injector");

var _keplerGl = _interopRequireDefault(require("./kepler-gl"));

var _actionWrapper = require("../actions/action-wrapper");

var _identityActions = require("../actions/identity-actions");

var _dataUtils = require("../utils/data-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ERROR_MSG = {
  noState: "kepler.gl state does not exist. " + "You might forget to mount keplerGlReducer in your root reducer." + "If it is not mounted as state.keplerGl by default, you need to provide getState as a prop"
};
exports.ERROR_MSG = ERROR_MSG;
ContainerFactory.deps = [_keplerGl["default"]];

function ContainerFactory(KeplerGl) {
  /** @lends KeplerGl */

  /**
    * Main Kepler.gl Component
    * @param {Object} props
    *
    * @param {string} props.id - _required_
    *
    * - Default: `map`
    * The id of this KeplerGl instance. `id` is required if you have multiple
    * KeplerGl instances in your app. It defines the prop name of the KeplerGl state that is
    * stored in the KeplerGl reducer. For example, the state of the KeplerGl component with id `foo` is
    * stored in `state.keplerGl.foo`.
    *
    * In case you create multiple kepler.gl instances using the same id, the kepler.gl state defined by the entry will be
    * overridden by the latest instance and reset to a blank state.
    * @param {string} props.mapboxApiAccessToken - _required_
    * @param {string} props.mapboxApiUrl - _optional_
    * @param {Boolean} props.mapStylesReplaceDefault - _optional_
      * You can create a free account at [www.mapbox.com](www.mapbox.com) and create a token at
    * [www.mapbox.com/account/access-tokens](www.mapbox.com/account/access-tokens)
    *
    *
    * @param {Number} props.width - _required_ Width of the KeplerGl UI.
    * @public
   */
  var Container = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(Container, _Component);

    var _super = _createSuper(Container);

    // default id and address if not provided
    function Container(props, ctx) {
      var _this;

      (0, _classCallCheck2["default"])(this, Container);
      _this = _super.call(this, props, ctx);
      _this.getSelector = (0, _lodash["default"])(function (id, getState) {
        return function (state) {
          if (!getState(state)) {
            // log error
            _window.console.error(ERROR_MSG.noState);

            return null;
          }

          return getState(state)[id];
        };
      });
      _this.getDispatch = (0, _lodash["default"])(function (id, dispatch) {
        return (0, _actionWrapper.forwardTo)(id, dispatch);
      });
      return _this;
    }

    (0, _createClass2["default"])(Container, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this$props = this.props,
            id = _this$props.id,
            mint = _this$props.mint,
            mapboxApiAccessToken = _this$props.mapboxApiAccessToken,
            mapboxApiUrl = _this$props.mapboxApiUrl,
            mapStylesReplaceDefault = _this$props.mapStylesReplaceDefault; // add a new entry to reducer

        this.props.dispatch((0, _identityActions.registerEntry)({
          id: id,
          mint: mint,
          mapboxApiAccessToken: mapboxApiAccessToken,
          mapboxApiUrl: mapboxApiUrl,
          mapStylesReplaceDefault: mapStylesReplaceDefault
        }));
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        // check if id has changed, if true, copy state over
        if ((0, _dataUtils.notNullorUndefined)(prevProps.id) && (0, _dataUtils.notNullorUndefined)(this.props.id) && prevProps.id !== this.props.id) {
          this.props.dispatch((0, _identityActions.renameEntry)(prevProps.id, this.props.id));
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.props.mint !== false) {
          // delete entry in reducer
          this.props.dispatch((0, _identityActions.deleteEntry)(this.props.id));
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            id = _this$props2.id,
            getState = _this$props2.getState,
            dispatch = _this$props2.dispatch,
            state = _this$props2.state;
        var selector = this.getSelector(id, getState);

        if (!selector || !selector(state)) {
          // instance state hasn't been mounted yet
          return /*#__PURE__*/_react["default"].createElement("div", null);
        }

        return /*#__PURE__*/_react["default"].createElement(KeplerGl, (0, _extends2["default"])({}, this.props, {
          id: id,
          selector: selector,
          dispatch: this.getDispatch(id, dispatch)
        }));
      }
    }]);
    return Container;
  }(_react.Component);

  (0, _defineProperty2["default"])(Container, "defaultProps", {
    id: 'map',
    getState: function getState(state) {
      return state.keplerGl;
    },
    mint: true
  });

  var mapStateToProps = function mapStateToProps(state, props) {
    return _objectSpread({
      state: state
    }, props);
  };

  var dispatchToProps = function dispatchToProps(dispatch) {
    return {
      dispatch: dispatch
    };
  };

  return (0, _reactRedux.connect)(mapStateToProps, dispatchToProps)(Container);
} // entryPoint


function flattenDeps(allDeps, factory) {
  var addToDeps = allDeps.concat([factory]);
  return Array.isArray(factory.deps) && factory.deps.length ? factory.deps.reduce(function (accu, dep) {
    return flattenDeps(accu, dep);
  }, addToDeps) : addToDeps;
}

var allDependencies = flattenDeps([], ContainerFactory); // provide all dependencies to appInjector

var appInjector = allDependencies.reduce(function (inj, factory) {
  return inj.provide(factory, factory);
}, (0, _injector.injector)()); // Helper to inject custom components and return kepler.gl container

exports.appInjector = appInjector;

function injectComponents() {
  var recipes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return recipes.reduce(function (inj, recipe) {
    var _inj;

    if (!(0, _injector.typeCheckRecipe)(recipe)) {
      return inj;
    } // collect dependencies of custom factories, if there is any.
    // Add them to the injector


    var customDependencies = flattenDeps([], recipe[1]);
    inj = customDependencies.reduce(function (ij, factory) {
      return ij.provide(factory, factory);
    }, inj);
    return (_inj = inj).provide.apply(_inj, (0, _toConsumableArray2["default"])(recipe));
  }, appInjector).get(ContainerFactory);
}

var InjectedContainer = appInjector.get(ContainerFactory);
var _default = InjectedContainer;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2NvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJFUlJPUl9NU0ciLCJub1N0YXRlIiwiQ29udGFpbmVyRmFjdG9yeSIsImRlcHMiLCJLZXBsZXJHbEZhY3RvcnkiLCJLZXBsZXJHbCIsIkNvbnRhaW5lciIsInByb3BzIiwiY3R4IiwiZ2V0U2VsZWN0b3IiLCJpZCIsImdldFN0YXRlIiwic3RhdGUiLCJDb25zb2xlIiwiZXJyb3IiLCJnZXREaXNwYXRjaCIsImRpc3BhdGNoIiwibWludCIsIm1hcGJveEFwaUFjY2Vzc1Rva2VuIiwibWFwYm94QXBpVXJsIiwibWFwU3R5bGVzUmVwbGFjZURlZmF1bHQiLCJwcmV2UHJvcHMiLCJzZWxlY3RvciIsIkNvbXBvbmVudCIsImtlcGxlckdsIiwibWFwU3RhdGVUb1Byb3BzIiwiZGlzcGF0Y2hUb1Byb3BzIiwiZmxhdHRlbkRlcHMiLCJhbGxEZXBzIiwiZmFjdG9yeSIsImFkZFRvRGVwcyIsImNvbmNhdCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsInJlZHVjZSIsImFjY3UiLCJkZXAiLCJhbGxEZXBlbmRlbmNpZXMiLCJhcHBJbmplY3RvciIsImluaiIsInByb3ZpZGUiLCJpbmplY3RDb21wb25lbnRzIiwicmVjaXBlcyIsInJlY2lwZSIsImN1c3RvbURlcGVuZGVuY2llcyIsImlqIiwiZ2V0IiwiSW5qZWN0ZWRDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7O0FBRU8sSUFBTUEsU0FBUyxHQUFHO0FBQ3ZCQyxFQUFBQSxPQUFPLEVBQ0w7QUFGcUIsQ0FBbEI7O0FBT1BDLGdCQUFnQixDQUFDQyxJQUFqQixHQUF3QixDQUFDQyxvQkFBRCxDQUF4Qjs7QUFFTyxTQUFTRixnQkFBVCxDQUEwQkcsUUFBMUIsRUFBb0M7QUFD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cywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IG1lbW9pemUgZnJvbSAnbG9kYXNoLm1lbW9pemUnO1xyXG5pbXBvcnQge2NvbnNvbGUgYXMgQ29uc29sZX0gZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XHJcbmltcG9ydCB7aW5qZWN0b3IsIHR5cGVDaGVja1JlY2lwZX0gZnJvbSAnLi9pbmplY3Rvcic7XHJcbmltcG9ydCBLZXBsZXJHbEZhY3RvcnkgZnJvbSAnLi9rZXBsZXItZ2wnO1xyXG5pbXBvcnQge2ZvcndhcmRUb30gZnJvbSAnYWN0aW9ucy9hY3Rpb24td3JhcHBlcic7XHJcblxyXG5pbXBvcnQge3JlZ2lzdGVyRW50cnksIGRlbGV0ZUVudHJ5LCByZW5hbWVFbnRyeX0gZnJvbSAnYWN0aW9ucy9pZGVudGl0eS1hY3Rpb25zJztcclxuaW1wb3J0IHtub3ROdWxsb3JVbmRlZmluZWR9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVSUk9SX01TRyA9IHtcclxuICBub1N0YXRlOlxyXG4gICAgYGtlcGxlci5nbCBzdGF0ZSBkb2VzIG5vdCBleGlzdC4gYCArXHJcbiAgICBgWW91IG1pZ2h0IGZvcmdldCB0byBtb3VudCBrZXBsZXJHbFJlZHVjZXIgaW4geW91ciByb290IHJlZHVjZXIuYCArXHJcbiAgICBgSWYgaXQgaXMgbm90IG1vdW50ZWQgYXMgc3RhdGUua2VwbGVyR2wgYnkgZGVmYXVsdCwgeW91IG5lZWQgdG8gcHJvdmlkZSBnZXRTdGF0ZSBhcyBhIHByb3BgXHJcbn07XHJcblxyXG5Db250YWluZXJGYWN0b3J5LmRlcHMgPSBbS2VwbGVyR2xGYWN0b3J5XTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXJGYWN0b3J5KEtlcGxlckdsKSB7XHJcbiAgLyoqIEBsZW5kcyBLZXBsZXJHbCAqL1xyXG4gIC8qKlxyXG4gICAgKiBNYWluIEtlcGxlci5nbCBDb21wb25lbnRcclxuICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAgICAqXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5pZCAtIF9yZXF1aXJlZF9cclxuICAgICpcclxuICAgICogLSBEZWZhdWx0OiBgbWFwYFxyXG4gICAgKiBUaGUgaWQgb2YgdGhpcyBLZXBsZXJHbCBpbnN0YW5jZS4gYGlkYCBpcyByZXF1aXJlZCBpZiB5b3UgaGF2ZSBtdWx0aXBsZVxyXG4gICAgKiBLZXBsZXJHbCBpbnN0YW5jZXMgaW4geW91ciBhcHAuIEl0IGRlZmluZXMgdGhlIHByb3AgbmFtZSBvZiB0aGUgS2VwbGVyR2wgc3RhdGUgdGhhdCBpc1xyXG4gICAgKiBzdG9yZWQgaW4gdGhlIEtlcGxlckdsIHJlZHVjZXIuIEZvciBleGFtcGxlLCB0aGUgc3RhdGUgb2YgdGhlIEtlcGxlckdsIGNvbXBvbmVudCB3aXRoIGlkIGBmb29gIGlzXHJcbiAgICAqIHN0b3JlZCBpbiBgc3RhdGUua2VwbGVyR2wuZm9vYC5cclxuICAgICpcclxuICAgICogSW4gY2FzZSB5b3UgY3JlYXRlIG11bHRpcGxlIGtlcGxlci5nbCBpbnN0YW5jZXMgdXNpbmcgdGhlIHNhbWUgaWQsIHRoZSBrZXBsZXIuZ2wgc3RhdGUgZGVmaW5lZCBieSB0aGUgZW50cnkgd2lsbCBiZVxyXG4gICAgKiBvdmVycmlkZGVuIGJ5IHRoZSBsYXRlc3QgaW5zdGFuY2UgYW5kIHJlc2V0IHRvIGEgYmxhbmsgc3RhdGUuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5tYXBib3hBcGlBY2Nlc3NUb2tlbiAtIF9yZXF1aXJlZF9cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLm1hcGJveEFwaVVybCAtIF9vcHRpb25hbF9cclxuICAgICogQHBhcmFtIHtCb29sZWFufSBwcm9wcy5tYXBTdHlsZXNSZXBsYWNlRGVmYXVsdCAtIF9vcHRpb25hbF9cclxuXHJcbiAgICAqIFlvdSBjYW4gY3JlYXRlIGEgZnJlZSBhY2NvdW50IGF0IFt3d3cubWFwYm94LmNvbV0od3d3Lm1hcGJveC5jb20pIGFuZCBjcmVhdGUgYSB0b2tlbiBhdFxyXG4gICAgKiBbd3d3Lm1hcGJveC5jb20vYWNjb3VudC9hY2Nlc3MtdG9rZW5zXSh3d3cubWFwYm94LmNvbS9hY2NvdW50L2FjY2Vzcy10b2tlbnMpXHJcbiAgICAqXHJcbiAgICAqXHJcbiAgICAqIEBwYXJhbSB7TnVtYmVyfSBwcm9wcy53aWR0aCAtIF9yZXF1aXJlZF8gV2lkdGggb2YgdGhlIEtlcGxlckdsIFVJLlxyXG4gICAgKiBAcHVibGljXHJcbiAgICovXHJcbiAgY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8vIGRlZmF1bHQgaWQgYW5kIGFkZHJlc3MgaWYgbm90IHByb3ZpZGVkXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICBpZDogJ21hcCcsXHJcbiAgICAgIGdldFN0YXRlOiBzdGF0ZSA9PiBzdGF0ZS5rZXBsZXJHbCxcclxuICAgICAgbWludDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgY3R4KSB7XHJcbiAgICAgIHN1cGVyKHByb3BzLCBjdHgpO1xyXG5cclxuICAgICAgdGhpcy5nZXRTZWxlY3RvciA9IG1lbW9pemUoKGlkLCBnZXRTdGF0ZSkgPT4gc3RhdGUgPT4ge1xyXG4gICAgICAgIGlmICghZ2V0U3RhdGUoc3RhdGUpKSB7XHJcbiAgICAgICAgICAvLyBsb2cgZXJyb3JcclxuICAgICAgICAgIENvbnNvbGUuZXJyb3IoRVJST1JfTVNHLm5vU3RhdGUpO1xyXG5cclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZ2V0U3RhdGUoc3RhdGUpW2lkXTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuZ2V0RGlzcGF0Y2ggPSBtZW1vaXplKChpZCwgZGlzcGF0Y2gpID0+IGZvcndhcmRUbyhpZCwgZGlzcGF0Y2gpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgY29uc3Qge2lkLCBtaW50LCBtYXBib3hBcGlBY2Nlc3NUb2tlbiwgbWFwYm94QXBpVXJsLCBtYXBTdHlsZXNSZXBsYWNlRGVmYXVsdH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAvLyBhZGQgYSBuZXcgZW50cnkgdG8gcmVkdWNlclxyXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKFxyXG4gICAgICAgIHJlZ2lzdGVyRW50cnkoe1xyXG4gICAgICAgICAgaWQsXHJcbiAgICAgICAgICBtaW50LFxyXG4gICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW4sXHJcbiAgICAgICAgICBtYXBib3hBcGlVcmwsXHJcbiAgICAgICAgICBtYXBTdHlsZXNSZXBsYWNlRGVmYXVsdFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAvLyBjaGVjayBpZiBpZCBoYXMgY2hhbmdlZCwgaWYgdHJ1ZSwgY29weSBzdGF0ZSBvdmVyXHJcbiAgICAgIGlmIChcclxuICAgICAgICBub3ROdWxsb3JVbmRlZmluZWQocHJldlByb3BzLmlkKSAmJlxyXG4gICAgICAgIG5vdE51bGxvclVuZGVmaW5lZCh0aGlzLnByb3BzLmlkKSAmJlxyXG4gICAgICAgIHByZXZQcm9wcy5pZCAhPT0gdGhpcy5wcm9wcy5pZFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHJlbmFtZUVudHJ5KHByZXZQcm9wcy5pZCwgdGhpcy5wcm9wcy5pZCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLm1pbnQgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgLy8gZGVsZXRlIGVudHJ5IGluIHJlZHVjZXJcclxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGRlbGV0ZUVudHJ5KHRoaXMucHJvcHMuaWQpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3Qge2lkLCBnZXRTdGF0ZSwgZGlzcGF0Y2gsIHN0YXRlfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gdGhpcy5nZXRTZWxlY3RvcihpZCwgZ2V0U3RhdGUpO1xyXG5cclxuICAgICAgaWYgKCFzZWxlY3RvciB8fCAhc2VsZWN0b3Ioc3RhdGUpKSB7XHJcbiAgICAgICAgLy8gaW5zdGFuY2Ugc3RhdGUgaGFzbid0IGJlZW4gbW91bnRlZCB5ZXRcclxuICAgICAgICByZXR1cm4gPGRpdiAvPjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8S2VwbGVyR2xcclxuICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxyXG4gICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgc2VsZWN0b3I9e3NlbGVjdG9yfVxyXG4gICAgICAgICAgZGlzcGF0Y2g9e3RoaXMuZ2V0RGlzcGF0Y2goaWQsIGRpc3BhdGNoKX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwcm9wcykgPT4gKHtzdGF0ZSwgLi4ucHJvcHN9KTtcclxuICBjb25zdCBkaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe2Rpc3BhdGNofSk7XHJcbiAgcmV0dXJuIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMpKENvbnRhaW5lcik7XHJcbn1cclxuXHJcbi8vIGVudHJ5UG9pbnRcclxuZnVuY3Rpb24gZmxhdHRlbkRlcHMoYWxsRGVwcywgZmFjdG9yeSkge1xyXG4gIGNvbnN0IGFkZFRvRGVwcyA9IGFsbERlcHMuY29uY2F0KFtmYWN0b3J5XSk7XHJcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZmFjdG9yeS5kZXBzKSAmJiBmYWN0b3J5LmRlcHMubGVuZ3RoXHJcbiAgICA/IGZhY3RvcnkuZGVwcy5yZWR1Y2UoKGFjY3UsIGRlcCkgPT4gZmxhdHRlbkRlcHMoYWNjdSwgZGVwKSwgYWRkVG9EZXBzKVxyXG4gICAgOiBhZGRUb0RlcHM7XHJcbn1cclxuXHJcbmNvbnN0IGFsbERlcGVuZGVuY2llcyA9IGZsYXR0ZW5EZXBzKFtdLCBDb250YWluZXJGYWN0b3J5KTtcclxuXHJcbi8vIHByb3ZpZGUgYWxsIGRlcGVuZGVuY2llcyB0byBhcHBJbmplY3RvclxyXG5leHBvcnQgY29uc3QgYXBwSW5qZWN0b3IgPSBhbGxEZXBlbmRlbmNpZXMucmVkdWNlKFxyXG4gIChpbmosIGZhY3RvcnkpID0+IGluai5wcm92aWRlKGZhY3RvcnksIGZhY3RvcnkpLFxyXG4gIGluamVjdG9yKClcclxuKTtcclxuXHJcbi8vIEhlbHBlciB0byBpbmplY3QgY3VzdG9tIGNvbXBvbmVudHMgYW5kIHJldHVybiBrZXBsZXIuZ2wgY29udGFpbmVyXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmplY3RDb21wb25lbnRzKHJlY2lwZXMgPSBbXSkge1xyXG4gIHJldHVybiByZWNpcGVzXHJcbiAgICAucmVkdWNlKChpbmosIHJlY2lwZSkgPT4ge1xyXG4gICAgICBpZiAoIXR5cGVDaGVja1JlY2lwZShyZWNpcGUpKSB7XHJcbiAgICAgICAgcmV0dXJuIGluajtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gY29sbGVjdCBkZXBlbmRlbmNpZXMgb2YgY3VzdG9tIGZhY3RvcmllcywgaWYgdGhlcmUgaXMgYW55LlxyXG4gICAgICAvLyBBZGQgdGhlbSB0byB0aGUgaW5qZWN0b3JcclxuICAgICAgY29uc3QgY3VzdG9tRGVwZW5kZW5jaWVzID0gZmxhdHRlbkRlcHMoW10sIHJlY2lwZVsxXSk7XHJcbiAgICAgIGluaiA9IGN1c3RvbURlcGVuZGVuY2llcy5yZWR1Y2UoKGlqLCBmYWN0b3J5KSA9PiBpai5wcm92aWRlKGZhY3RvcnksIGZhY3RvcnkpLCBpbmopO1xyXG5cclxuICAgICAgcmV0dXJuIGluai5wcm92aWRlKC4uLnJlY2lwZSk7XHJcbiAgICB9LCBhcHBJbmplY3RvcilcclxuICAgIC5nZXQoQ29udGFpbmVyRmFjdG9yeSk7XHJcbn1cclxuXHJcbmNvbnN0IEluamVjdGVkQ29udGFpbmVyID0gYXBwSW5qZWN0b3IuZ2V0KENvbnRhaW5lckZhY3RvcnkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5qZWN0ZWRDb250YWluZXI7XHJcbiJdfQ==