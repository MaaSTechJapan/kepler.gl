"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injector = injector;
exports.typeCheckRecipe = typeCheckRecipe;
exports.withState = withState;
exports.ERROR_MSG = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _window = require("global/window");

var _context = _interopRequireDefault(require("./context"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var MissingComp = function MissingComp() {
  return /*#__PURE__*/_react["default"].createElement("div", null);
};

var ERROR_MSG = {
  wrongRecipeType: "injectComponents takes an array of factories replacement pairs as input, " + "each pair be a array as [originalFactory, replacement].",
  noDep: function noDep(fac, parent) {
    return "".concat(fac.name, " is required as a dependency of ").concat(parent.name, ", ") + "but is not provided to injectComponents. It will not be rendered.";
  },
  notFunc: 'factory and its replacement should be a function'
};
exports.ERROR_MSG = ERROR_MSG;

function injector() {
  var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Map();
  var cache = new Map(); // map<factory, factory -> ?>

  var get = function get(fac, parent) {
    var factory = map.get(fac); // factory is not injected

    if (!factory) {
      _window.console.error(ERROR_MSG.noDep(fac, parent));

      return MissingComp;
    } // check if custom factory deps is declared


    var instances = cache.get(factory) || factory.apply(void 0, (0, _toConsumableArray2["default"])(factory.deps ? factory.deps.map(function (dep) {
      return get(dep, factory);
    }) : []));
    cache.set(fac, instances);
    return instances;
  }; // if you have two functions that happen to have the exactly same text
  // it will be override: 2018-02-05


  return {
    provide: function provide(factory, replacement) {
      if (!typeCheckRecipe([factory, replacement])) {
        return injector(map);
      }

      return injector(new Map(map).set(factory, replacement));
    },
    get: get
  };
}

function typeCheckRecipe(recipe) {
  if (!Array.isArray(recipe) || recipe.length < 2) {
    _window.console.error('Error injecting [factory, replacement]', recipe);

    _window.console.error(ERROR_MSG.wrongRecipeType);

    return false;
  }

  var _recipe = (0, _slicedToArray2["default"])(recipe, 2),
      factory = _recipe[0],
      replacement = _recipe[1];

  if (typeof factory !== 'function') {
    _window.console.error('Error injecting factory: ', factory);

    _window.console.error(ERROR_MSG.notFunc);

    return false;
  } else if (typeof replacement !== 'function') {
    _window.console.error('Error injecting replacement for: ', factory);

    _window.console.error(ERROR_MSG.notFunc);

    return false;
  }

  return true;
}

var identity = function identity(state) {
  return state;
}; // Helper to add reducer state to custom component


function withState() {
  var lenses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var mapStateToProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;
  var actions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return function (Component) {
    var WrappedComponent = function WrappedComponent(_ref) {
      var state = _ref.state,
          props = (0, _objectWithoutProperties2["default"])(_ref, ["state"]);
      return /*#__PURE__*/_react["default"].createElement(_context["default"].Consumer, null, function (context) {
        return /*#__PURE__*/_react["default"].createElement(Component, lenses.reduce(function (totalState, lens) {
          return _objectSpread({}, totalState, {}, lens(context.selector(state)));
        }, props));
      });
    };

    return (0, _reactRedux.connect)(function (state) {
      return _objectSpread({}, mapStateToProps(state), {
        state: state
      });
    }, function (dispatch) {
      return Object.keys(actions).reduce(function (accu, key) {
        return _objectSpread({}, accu, (0, _defineProperty2["default"])({}, key, (0, _redux.bindActionCreators)(actions[key], dispatch)));
      }, {});
    })(WrappedComponent);
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2luamVjdG9yLmpzIl0sIm5hbWVzIjpbIk1pc3NpbmdDb21wIiwiRVJST1JfTVNHIiwid3JvbmdSZWNpcGVUeXBlIiwibm9EZXAiLCJmYWMiLCJwYXJlbnQiLCJuYW1lIiwibm90RnVuYyIsImluamVjdG9yIiwibWFwIiwiTWFwIiwiY2FjaGUiLCJnZXQiLCJmYWN0b3J5IiwiQ29uc29sZSIsImVycm9yIiwiaW5zdGFuY2VzIiwiZGVwcyIsImRlcCIsInNldCIsInByb3ZpZGUiLCJyZXBsYWNlbWVudCIsInR5cGVDaGVja1JlY2lwZSIsInJlY2lwZSIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImlkZW50aXR5Iiwic3RhdGUiLCJ3aXRoU3RhdGUiLCJsZW5zZXMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJhY3Rpb25zIiwiQ29tcG9uZW50IiwiV3JhcHBlZENvbXBvbmVudCIsInByb3BzIiwiY29udGV4dCIsInJlZHVjZSIsInRvdGFsU3RhdGUiLCJsZW5zIiwic2VsZWN0b3IiLCJkaXNwYXRjaCIsIk9iamVjdCIsImtleXMiLCJhY2N1Iiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxzQkFBTSw0Q0FBTjtBQUFBLENBQXBCOztBQUVPLElBQU1DLFNBQVMsR0FBRztBQUN2QkMsRUFBQUEsZUFBZSxFQUNiLHVJQUZxQjtBQUt2QkMsRUFBQUEsS0FBSyxFQUFFLGVBQUNDLEdBQUQsRUFBTUMsTUFBTjtBQUFBLFdBQ0wsVUFBR0QsR0FBRyxDQUFDRSxJQUFQLDZDQUE4Q0QsTUFBTSxDQUFDQyxJQUFyRCw2RUFESztBQUFBLEdBTGdCO0FBU3ZCQyxFQUFBQSxPQUFPLEVBQUU7QUFUYyxDQUFsQjs7O0FBWUEsU0FBU0MsUUFBVCxHQUFtQztBQUFBLE1BQWpCQyxHQUFpQix1RUFBWCxJQUFJQyxHQUFKLEVBQVc7QUFDeEMsTUFBTUMsS0FBSyxHQUFHLElBQUlELEdBQUosRUFBZCxDQUR3QyxDQUNmOztBQUN6QixNQUFNRSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDUixHQUFELEVBQU1DLE1BQU4sRUFBaUI7QUFDM0IsUUFBTVEsT0FBTyxHQUFHSixHQUFHLENBQUNHLEdBQUosQ0FBUVIsR0FBUixDQUFoQixDQUQyQixDQUUzQjs7QUFDQSxRQUFJLENBQUNTLE9BQUwsRUFBYztBQUNaQyxzQkFBUUMsS0FBUixDQUFjZCxTQUFTLENBQUNFLEtBQVYsQ0FBZ0JDLEdBQWhCLEVBQXFCQyxNQUFyQixDQUFkOztBQUNBLGFBQU9MLFdBQVA7QUFDRCxLQU4wQixDQVEzQjs7O0FBQ0EsUUFBTWdCLFNBQVMsR0FDYkwsS0FBSyxDQUFDQyxHQUFOLENBQVVDLE9BQVYsS0FDQUEsT0FBTyxNQUFQLDZDQUFZQSxPQUFPLENBQUNJLElBQVIsR0FBZUosT0FBTyxDQUFDSSxJQUFSLENBQWFSLEdBQWIsQ0FBaUIsVUFBQVMsR0FBRztBQUFBLGFBQUlOLEdBQUcsQ0FBQ00sR0FBRCxFQUFNTCxPQUFOLENBQVA7QUFBQSxLQUFwQixDQUFmLEdBQTRELEVBQXhFLEVBRkY7QUFJQUYsSUFBQUEsS0FBSyxDQUFDUSxHQUFOLENBQVVmLEdBQVYsRUFBZVksU0FBZjtBQUNBLFdBQU9BLFNBQVA7QUFDRCxHQWZELENBRndDLENBbUJ4QztBQUNBOzs7QUFDQSxTQUFPO0FBQ0xJLElBQUFBLE9BQU8sRUFBRSxpQkFBQ1AsT0FBRCxFQUFVUSxXQUFWLEVBQTBCO0FBQ2pDLFVBQUksQ0FBQ0MsZUFBZSxDQUFDLENBQUNULE9BQUQsRUFBVVEsV0FBVixDQUFELENBQXBCLEVBQThDO0FBQzVDLGVBQU9iLFFBQVEsQ0FBQ0MsR0FBRCxDQUFmO0FBQ0Q7O0FBQ0QsYUFBT0QsUUFBUSxDQUFDLElBQUlFLEdBQUosQ0FBUUQsR0FBUixFQUFhVSxHQUFiLENBQWlCTixPQUFqQixFQUEwQlEsV0FBMUIsQ0FBRCxDQUFmO0FBQ0QsS0FOSTtBQU9MVCxJQUFBQSxHQUFHLEVBQUhBO0FBUEssR0FBUDtBQVNEOztBQUVNLFNBQVNVLGVBQVQsQ0FBeUJDLE1BQXpCLEVBQWlDO0FBQ3RDLE1BQUksQ0FBQ0MsS0FBSyxDQUFDQyxPQUFOLENBQWNGLE1BQWQsQ0FBRCxJQUEwQkEsTUFBTSxDQUFDRyxNQUFQLEdBQWdCLENBQTlDLEVBQWlEO0FBQy9DWixvQkFBUUMsS0FBUixDQUFjLHdDQUFkLEVBQXdEUSxNQUF4RDs7QUFDQVQsb0JBQVFDLEtBQVIsQ0FBY2QsU0FBUyxDQUFDQyxlQUF4Qjs7QUFDQSxXQUFPLEtBQVA7QUFDRDs7QUFMcUMsZ0RBT1BxQixNQVBPO0FBQUEsTUFPL0JWLE9BUCtCO0FBQUEsTUFPdEJRLFdBUHNCOztBQVF0QyxNQUFJLE9BQU9SLE9BQVAsS0FBbUIsVUFBdkIsRUFBbUM7QUFDakNDLG9CQUFRQyxLQUFSLENBQWMsMkJBQWQsRUFBMkNGLE9BQTNDOztBQUNBQyxvQkFBUUMsS0FBUixDQUFjZCxTQUFTLENBQUNNLE9BQXhCOztBQUNBLFdBQU8sS0FBUDtBQUNELEdBSkQsTUFJTyxJQUFJLE9BQU9jLFdBQVAsS0FBdUIsVUFBM0IsRUFBdUM7QUFDNUNQLG9CQUFRQyxLQUFSLENBQWMsbUNBQWQsRUFBbURGLE9BQW5EOztBQUNBQyxvQkFBUUMsS0FBUixDQUFjZCxTQUFTLENBQUNNLE9BQXhCOztBQUNBLFdBQU8sS0FBUDtBQUNEOztBQUVELFNBQU8sSUFBUDtBQUNEOztBQUVELElBQU1vQixRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSjtBQUFBLENBQXRCLEMsQ0FDQTs7O0FBQ08sU0FBU0MsU0FBVCxHQUEwRTtBQUFBLE1BQXZEQyxNQUF1RCx1RUFBOUMsRUFBOEM7QUFBQSxNQUExQ0MsZUFBMEMsdUVBQXhCSixRQUF3QjtBQUFBLE1BQWRLLE9BQWMsdUVBQUosRUFBSTtBQUMvRSxTQUFPLFVBQUFDLFNBQVMsRUFBSTtBQUNsQixRQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsVUFBRU4sS0FBRixRQUFFQSxLQUFGO0FBQUEsVUFBWU8sS0FBWjtBQUFBLDBCQUN2QixnQ0FBQyxtQkFBRCxDQUFpQixRQUFqQixRQUNHLFVBQUFDLE9BQU87QUFBQSw0QkFDTixnQ0FBQyxTQUFELEVBQ01OLE1BQU0sQ0FBQ08sTUFBUCxDQUNGLFVBQUNDLFVBQUQsRUFBYUMsSUFBYjtBQUFBLG1DQUNLRCxVQURMLE1BRUtDLElBQUksQ0FBQ0gsT0FBTyxDQUFDSSxRQUFSLENBQWlCWixLQUFqQixDQUFELENBRlQ7QUFBQSxTQURFLEVBS0ZPLEtBTEUsQ0FETixDQURNO0FBQUEsT0FEVixDQUR1QjtBQUFBLEtBQXpCOztBQWdCQSxXQUFPLHlCQUNMLFVBQUFQLEtBQUs7QUFBQSwrQkFBU0csZUFBZSxDQUFDSCxLQUFELENBQXhCO0FBQWlDQSxRQUFBQSxLQUFLLEVBQUxBO0FBQWpDO0FBQUEsS0FEQSxFQUVMLFVBQUFhLFFBQVE7QUFBQSxhQUNOQyxNQUFNLENBQUNDLElBQVAsQ0FBWVgsT0FBWixFQUFxQkssTUFBckIsQ0FDRSxVQUFDTyxJQUFELEVBQU9DLEdBQVA7QUFBQSxpQ0FDS0QsSUFETCx1Q0FFR0MsR0FGSCxFQUVTLCtCQUFtQmIsT0FBTyxDQUFDYSxHQUFELENBQTFCLEVBQWlDSixRQUFqQyxDQUZUO0FBQUEsT0FERixFQUtFLEVBTEYsQ0FETTtBQUFBLEtBRkgsRUFVTFAsZ0JBVkssQ0FBUDtBQVdELEdBNUJEO0FBNkJEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7Y29uc29sZSBhcyBDb25zb2xlfSBmcm9tICdnbG9iYWwvd2luZG93JztcclxuaW1wb3J0IEtlcGxlckdsQ29udGV4dCBmcm9tICdjb21wb25lbnRzL2NvbnRleHQnO1xyXG5cclxuY29uc3QgTWlzc2luZ0NvbXAgPSAoKSA9PiA8ZGl2IC8+O1xyXG5cclxuZXhwb3J0IGNvbnN0IEVSUk9SX01TRyA9IHtcclxuICB3cm9uZ1JlY2lwZVR5cGU6XHJcbiAgICBgaW5qZWN0Q29tcG9uZW50cyB0YWtlcyBhbiBhcnJheSBvZiBmYWN0b3JpZXMgcmVwbGFjZW1lbnQgcGFpcnMgYXMgaW5wdXQsIGAgK1xyXG4gICAgYGVhY2ggcGFpciBiZSBhIGFycmF5IGFzIFtvcmlnaW5hbEZhY3RvcnksIHJlcGxhY2VtZW50XS5gLFxyXG5cclxuICBub0RlcDogKGZhYywgcGFyZW50KSA9PlxyXG4gICAgYCR7ZmFjLm5hbWV9IGlzIHJlcXVpcmVkIGFzIGEgZGVwZW5kZW5jeSBvZiAke3BhcmVudC5uYW1lfSwgYCArXHJcbiAgICBgYnV0IGlzIG5vdCBwcm92aWRlZCB0byBpbmplY3RDb21wb25lbnRzLiBJdCB3aWxsIG5vdCBiZSByZW5kZXJlZC5gLFxyXG5cclxuICBub3RGdW5jOiAnZmFjdG9yeSBhbmQgaXRzIHJlcGxhY2VtZW50IHNob3VsZCBiZSBhIGZ1bmN0aW9uJ1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluamVjdG9yKG1hcCA9IG5ldyBNYXAoKSkge1xyXG4gIGNvbnN0IGNhY2hlID0gbmV3IE1hcCgpOyAvLyBtYXA8ZmFjdG9yeSwgZmFjdG9yeSAtPiA/PlxyXG4gIGNvbnN0IGdldCA9IChmYWMsIHBhcmVudCkgPT4ge1xyXG4gICAgY29uc3QgZmFjdG9yeSA9IG1hcC5nZXQoZmFjKTtcclxuICAgIC8vIGZhY3RvcnkgaXMgbm90IGluamVjdGVkXHJcbiAgICBpZiAoIWZhY3RvcnkpIHtcclxuICAgICAgQ29uc29sZS5lcnJvcihFUlJPUl9NU0cubm9EZXAoZmFjLCBwYXJlbnQpKTtcclxuICAgICAgcmV0dXJuIE1pc3NpbmdDb21wO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoZWNrIGlmIGN1c3RvbSBmYWN0b3J5IGRlcHMgaXMgZGVjbGFyZWRcclxuICAgIGNvbnN0IGluc3RhbmNlcyA9XHJcbiAgICAgIGNhY2hlLmdldChmYWN0b3J5KSB8fFxyXG4gICAgICBmYWN0b3J5KC4uLihmYWN0b3J5LmRlcHMgPyBmYWN0b3J5LmRlcHMubWFwKGRlcCA9PiBnZXQoZGVwLCBmYWN0b3J5KSkgOiBbXSkpO1xyXG5cclxuICAgIGNhY2hlLnNldChmYWMsIGluc3RhbmNlcyk7XHJcbiAgICByZXR1cm4gaW5zdGFuY2VzO1xyXG4gIH07XHJcblxyXG4gIC8vIGlmIHlvdSBoYXZlIHR3byBmdW5jdGlvbnMgdGhhdCBoYXBwZW4gdG8gaGF2ZSB0aGUgZXhhY3RseSBzYW1lIHRleHRcclxuICAvLyBpdCB3aWxsIGJlIG92ZXJyaWRlOiAyMDE4LTAyLTA1XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3ZpZGU6IChmYWN0b3J5LCByZXBsYWNlbWVudCkgPT4ge1xyXG4gICAgICBpZiAoIXR5cGVDaGVja1JlY2lwZShbZmFjdG9yeSwgcmVwbGFjZW1lbnRdKSkge1xyXG4gICAgICAgIHJldHVybiBpbmplY3RvcihtYXApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBpbmplY3RvcihuZXcgTWFwKG1hcCkuc2V0KGZhY3RvcnksIHJlcGxhY2VtZW50KSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVDaGVja1JlY2lwZShyZWNpcGUpIHtcclxuICBpZiAoIUFycmF5LmlzQXJyYXkocmVjaXBlKSB8fCByZWNpcGUubGVuZ3RoIDwgMikge1xyXG4gICAgQ29uc29sZS5lcnJvcignRXJyb3IgaW5qZWN0aW5nIFtmYWN0b3J5LCByZXBsYWNlbWVudF0nLCByZWNpcGUpO1xyXG4gICAgQ29uc29sZS5lcnJvcihFUlJPUl9NU0cud3JvbmdSZWNpcGVUeXBlKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IFtmYWN0b3J5LCByZXBsYWNlbWVudF0gPSByZWNpcGU7XHJcbiAgaWYgKHR5cGVvZiBmYWN0b3J5ICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBDb25zb2xlLmVycm9yKCdFcnJvciBpbmplY3RpbmcgZmFjdG9yeTogJywgZmFjdG9yeSk7XHJcbiAgICBDb25zb2xlLmVycm9yKEVSUk9SX01TRy5ub3RGdW5jKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9IGVsc2UgaWYgKHR5cGVvZiByZXBsYWNlbWVudCAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgQ29uc29sZS5lcnJvcignRXJyb3IgaW5qZWN0aW5nIHJlcGxhY2VtZW50IGZvcjogJywgZmFjdG9yeSk7XHJcbiAgICBDb25zb2xlLmVycm9yKEVSUk9SX01TRy5ub3RGdW5jKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5jb25zdCBpZGVudGl0eSA9IHN0YXRlID0+IHN0YXRlO1xyXG4vLyBIZWxwZXIgdG8gYWRkIHJlZHVjZXIgc3RhdGUgdG8gY3VzdG9tIGNvbXBvbmVudFxyXG5leHBvcnQgZnVuY3Rpb24gd2l0aFN0YXRlKGxlbnNlcyA9IFtdLCBtYXBTdGF0ZVRvUHJvcHMgPSBpZGVudGl0eSwgYWN0aW9ucyA9IHt9KSB7XHJcbiAgcmV0dXJuIENvbXBvbmVudCA9PiB7XHJcbiAgICBjb25zdCBXcmFwcGVkQ29tcG9uZW50ID0gKHtzdGF0ZSwgLi4ucHJvcHN9KSA9PiAoXHJcbiAgICAgIDxLZXBsZXJHbENvbnRleHQuQ29uc3VtZXI+XHJcbiAgICAgICAge2NvbnRleHQgPT4gKFxyXG4gICAgICAgICAgPENvbXBvbmVudFxyXG4gICAgICAgICAgICB7Li4ubGVuc2VzLnJlZHVjZShcclxuICAgICAgICAgICAgICAodG90YWxTdGF0ZSwgbGVucykgPT4gKHtcclxuICAgICAgICAgICAgICAgIC4uLnRvdGFsU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAuLi5sZW5zKGNvbnRleHQuc2VsZWN0b3Ioc3RhdGUpKVxyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgIHByb3BzXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvS2VwbGVyR2xDb250ZXh0LkNvbnN1bWVyPlxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gY29ubmVjdChcclxuICAgICAgc3RhdGUgPT4gKHsuLi5tYXBTdGF0ZVRvUHJvcHMoc3RhdGUpLCBzdGF0ZX0pLFxyXG4gICAgICBkaXNwYXRjaCA9PlxyXG4gICAgICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpLnJlZHVjZShcclxuICAgICAgICAgIChhY2N1LCBrZXkpID0+ICh7XHJcbiAgICAgICAgICAgIC4uLmFjY3UsXHJcbiAgICAgICAgICAgIFtrZXldOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uc1trZXldLCBkaXNwYXRjaClcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAge31cclxuICAgICAgICApXHJcbiAgICApKFdyYXBwZWRDb21wb25lbnQpO1xyXG4gIH07XHJcbn1cclxuIl19