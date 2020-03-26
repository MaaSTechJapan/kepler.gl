"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ModalTabItem = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("../../styles");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: 16px;\n    font-size: 12px;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border-bottom: 3px solid transparent;\n  cursor: pointer;\n  margin-left: 32px;\n  padding: 16px 0;\n  font-size: 14px;\n  font-weight: 400;\n  color: ", ";\n\n  ", ";\n\n  :first-child {\n    margin-left: 0;\n    padding-left: 0;\n  }\n\n  :hover {\n    color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 12px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: flex-end;\n  display: flex;\n  border-bottom: 1px solid #d8d8d8;\n  margin-bottom: 32px;\n  justify-content: space-between;\n\n  .load-data-modal__tab__inner {\n    display: flex;\n    width: 100%;\n  }\n\n  .load-data-modal__tab__item.active {\n    color: ", ";\n    border-bottom: 3px solid ", ";\n    font-weight: 500;\n  }\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ModalTab = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.textColorLT;
}, function (props) {
  return props.theme.textColorLT;
}, _styles.media.portable(_templateObject2()));

var StyledLoadDataModalTabItem = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.subtextColorLT;
}, _styles.media.portable(_templateObject4()), function (props) {
  return props.theme.textColorLT;
});

var noop = function noop() {};

var ModalTabItem = function ModalTabItem(_ref) {
  var currentMethod = _ref.currentMethod,
      method = _ref.method,
      toggleMethod = _ref.toggleMethod;
  var onClick = (0, _react.useCallback)(function () {
    return toggleMethod(method);
  }, [method, toggleMethod]);
  return method.tabElementType ? /*#__PURE__*/_react["default"].createElement(method.tabElementType, {
    onClick: onClick
  }) : /*#__PURE__*/_react["default"].createElement(StyledLoadDataModalTabItem, {
    className: (0, _classnames["default"])('load-data-modal__tab__item', {
      active: currentMethod && method.id === currentMethod
    }),
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("div", null, method.label || method.id));
};

exports.ModalTabItem = ModalTabItem;

function ModalTabsFactory() {
  var ModalTabs = function ModalTabs(_ref2) {
    var currentMethod = _ref2.currentMethod,
        toggleMethod = _ref2.toggleMethod,
        loadingMethods = _ref2.loadingMethods;
    return /*#__PURE__*/_react["default"].createElement(ModalTab, {
      className: "load-data-modal__tab"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "load-data-modal__tab__inner"
    }, loadingMethods.map(function (method) {
      return /*#__PURE__*/_react["default"].createElement(ModalTabItem, {
        key: method.id,
        method: method,
        currentMethod: currentMethod,
        toggleMethod: toggleMethod
      });
    })));
  };

  ModalTabs.propTypes = {
    toggleMethod: _propTypes["default"].func.isRequired,
    currentMethod: _propTypes["default"].string,
    loadingMethods: _propTypes["default"].arrayOf(_propTypes["default"].object)
  };
  ModalTabs.defaultProps = {
    toggleMethod: noop,
    currentMethod: null,
    loadingMethods: []
  };
  return ModalTabs;
}

var _default = ModalTabsFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9tb2RhbC10YWJzLmpzIl0sIm5hbWVzIjpbIk1vZGFsVGFiIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInRleHRDb2xvckxUIiwibWVkaWEiLCJwb3J0YWJsZSIsIlN0eWxlZExvYWREYXRhTW9kYWxUYWJJdGVtIiwic3VidGV4dENvbG9yTFQiLCJub29wIiwiTW9kYWxUYWJJdGVtIiwiY3VycmVudE1ldGhvZCIsIm1ldGhvZCIsInRvZ2dsZU1ldGhvZCIsIm9uQ2xpY2siLCJ0YWJFbGVtZW50VHlwZSIsImFjdGl2ZSIsImlkIiwibGFiZWwiLCJNb2RhbFRhYnNGYWN0b3J5IiwiTW9kYWxUYWJzIiwibG9hZGluZ01ldGhvZHMiLCJtYXAiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImFycmF5T2YiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBR0MsNkJBQU9DLEdBQVYsb0JBYUQsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFoQjtBQUFBLENBYkosRUFjaUIsVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFoQjtBQUFBLENBZHRCLEVBa0JWQyxjQUFNQyxRQWxCSSxxQkFBZDs7QUF1QkEsSUFBTUMsMEJBQTBCLEdBQUdQLDZCQUFPQyxHQUFWLHFCQU9yQixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlLLGNBQWhCO0FBQUEsQ0FQZ0IsRUFTNUJILGNBQU1DLFFBVHNCLHNCQW9CbkIsVUFBQUosS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFoQjtBQUFBLENBcEJjLENBQWhDOztBQXdCQSxJQUFNSyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNLENBQUUsQ0FBckI7O0FBRU8sSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBMkM7QUFBQSxNQUF6Q0MsYUFBeUMsUUFBekNBLGFBQXlDO0FBQUEsTUFBMUJDLE1BQTBCLFFBQTFCQSxNQUEwQjtBQUFBLE1BQWxCQyxZQUFrQixRQUFsQkEsWUFBa0I7QUFDckUsTUFBTUMsT0FBTyxHQUFHLHdCQUFZO0FBQUEsV0FBTUQsWUFBWSxDQUFDRCxNQUFELENBQWxCO0FBQUEsR0FBWixFQUF3QyxDQUFDQSxNQUFELEVBQVNDLFlBQVQsQ0FBeEMsQ0FBaEI7QUFFQSxTQUFPRCxNQUFNLENBQUNHLGNBQVAsZ0JBQ0wsZ0NBQUMsTUFBRCxDQUFRLGNBQVI7QUFBdUIsSUFBQSxPQUFPLEVBQUVEO0FBQWhDLElBREssZ0JBR0wsZ0NBQUMsMEJBQUQ7QUFDRSxJQUFBLFNBQVMsRUFBRSw0QkFBVyw0QkFBWCxFQUF5QztBQUNsREUsTUFBQUEsTUFBTSxFQUFFTCxhQUFhLElBQUlDLE1BQU0sQ0FBQ0ssRUFBUCxLQUFjTjtBQURXLEtBQXpDLENBRGI7QUFJRSxJQUFBLE9BQU8sRUFBRUc7QUFKWCxrQkFNRSw2Q0FBTUYsTUFBTSxDQUFDTSxLQUFQLElBQWdCTixNQUFNLENBQUNLLEVBQTdCLENBTkYsQ0FIRjtBQVlELENBZk07Ozs7QUFpQlAsU0FBU0UsZ0JBQVQsR0FBNEI7QUFDMUIsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxRQUFFVCxhQUFGLFNBQUVBLGFBQUY7QUFBQSxRQUFpQkUsWUFBakIsU0FBaUJBLFlBQWpCO0FBQUEsUUFBK0JRLGNBQS9CLFNBQStCQSxjQUEvQjtBQUFBLHdCQUNoQixnQ0FBQyxRQUFEO0FBQVUsTUFBQSxTQUFTLEVBQUM7QUFBcEIsb0JBQ0U7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLE9BQ0dBLGNBQWMsQ0FBQ0MsR0FBZixDQUFtQixVQUFBVixNQUFNO0FBQUEsMEJBQ3hCLGdDQUFDLFlBQUQ7QUFDRSxRQUFBLEdBQUcsRUFBRUEsTUFBTSxDQUFDSyxFQURkO0FBRUUsUUFBQSxNQUFNLEVBQUVMLE1BRlY7QUFHRSxRQUFBLGFBQWEsRUFBRUQsYUFIakI7QUFJRSxRQUFBLFlBQVksRUFBRUU7QUFKaEIsUUFEd0I7QUFBQSxLQUF6QixDQURILENBREYsQ0FEZ0I7QUFBQSxHQUFsQjs7QUFlQU8sRUFBQUEsU0FBUyxDQUFDRyxTQUFWLEdBQXNCO0FBQ3BCVixJQUFBQSxZQUFZLEVBQUVXLHNCQUFVQyxJQUFWLENBQWVDLFVBRFQ7QUFFcEJmLElBQUFBLGFBQWEsRUFBRWEsc0JBQVVHLE1BRkw7QUFHcEJOLElBQUFBLGNBQWMsRUFBRUcsc0JBQVVJLE9BQVYsQ0FBa0JKLHNCQUFVSyxNQUE1QjtBQUhJLEdBQXRCO0FBTUFULEVBQUFBLFNBQVMsQ0FBQ1UsWUFBVixHQUF5QjtBQUN2QmpCLElBQUFBLFlBQVksRUFBRUosSUFEUztBQUV2QkUsSUFBQUEsYUFBYSxFQUFFLElBRlE7QUFHdkJVLElBQUFBLGNBQWMsRUFBRTtBQUhPLEdBQXpCO0FBTUEsU0FBT0QsU0FBUDtBQUNEOztlQUVjRCxnQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7bWVkaWF9IGZyb20gJ3N0eWxlcyc7XG5cbmNvbnN0IE1vZGFsVGFiID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIC5sb2FkLWRhdGEtbW9kYWxfX3RhYl9faW5uZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubG9hZC1kYXRhLW1vZGFsX190YWJfX2l0ZW0uYWN0aXZlIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JMVH07XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yTFR9O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAke21lZGlhLnBvcnRhYmxlYFxuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgYH07XG5gO1xuXG5jb25zdCBTdHlsZWRMb2FkRGF0YU1vZGFsVGFiSXRlbSA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogMzJweDtcbiAgcGFkZGluZzogMTZweCAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvckxUfTtcblxuICAke21lZGlhLnBvcnRhYmxlYFxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgYH07XG5cbiAgOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cblxuICA6aG92ZXIge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcbiAgfVxuYDtcblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuXG5leHBvcnQgY29uc3QgTW9kYWxUYWJJdGVtID0gKHtjdXJyZW50TWV0aG9kLCBtZXRob2QsIHRvZ2dsZU1ldGhvZH0pID0+IHtcbiAgY29uc3Qgb25DbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHRvZ2dsZU1ldGhvZChtZXRob2QpLCBbbWV0aG9kLCB0b2dnbGVNZXRob2RdKTtcblxuICByZXR1cm4gbWV0aG9kLnRhYkVsZW1lbnRUeXBlID8gKFxuICAgIDxtZXRob2QudGFiRWxlbWVudFR5cGUgb25DbGljaz17b25DbGlja30gLz5cbiAgKSA6IChcbiAgICA8U3R5bGVkTG9hZERhdGFNb2RhbFRhYkl0ZW1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbG9hZC1kYXRhLW1vZGFsX190YWJfX2l0ZW0nLCB7XG4gICAgICAgIGFjdGl2ZTogY3VycmVudE1ldGhvZCAmJiBtZXRob2QuaWQgPT09IGN1cnJlbnRNZXRob2RcbiAgICAgIH0pfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICA+XG4gICAgICA8ZGl2PnttZXRob2QubGFiZWwgfHwgbWV0aG9kLmlkfTwvZGl2PlxuICAgIDwvU3R5bGVkTG9hZERhdGFNb2RhbFRhYkl0ZW0+XG4gICk7XG59O1xuXG5mdW5jdGlvbiBNb2RhbFRhYnNGYWN0b3J5KCkge1xuICBjb25zdCBNb2RhbFRhYnMgPSAoe2N1cnJlbnRNZXRob2QsIHRvZ2dsZU1ldGhvZCwgbG9hZGluZ01ldGhvZHN9KSA9PiAoXG4gICAgPE1vZGFsVGFiIGNsYXNzTmFtZT1cImxvYWQtZGF0YS1tb2RhbF9fdGFiXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWQtZGF0YS1tb2RhbF9fdGFiX19pbm5lclwiPlxuICAgICAgICB7bG9hZGluZ01ldGhvZHMubWFwKG1ldGhvZCA9PiAoXG4gICAgICAgICAgPE1vZGFsVGFiSXRlbVxuICAgICAgICAgICAga2V5PXttZXRob2QuaWR9XG4gICAgICAgICAgICBtZXRob2Q9e21ldGhvZH1cbiAgICAgICAgICAgIGN1cnJlbnRNZXRob2Q9e2N1cnJlbnRNZXRob2R9XG4gICAgICAgICAgICB0b2dnbGVNZXRob2Q9e3RvZ2dsZU1ldGhvZH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvTW9kYWxUYWI+XG4gICk7XG5cbiAgTW9kYWxUYWJzLnByb3BUeXBlcyA9IHtcbiAgICB0b2dnbGVNZXRob2Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY3VycmVudE1ldGhvZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsb2FkaW5nTWV0aG9kczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdClcbiAgfTtcblxuICBNb2RhbFRhYnMuZGVmYXVsdFByb3BzID0ge1xuICAgIHRvZ2dsZU1ldGhvZDogbm9vcCxcbiAgICBjdXJyZW50TWV0aG9kOiBudWxsLFxuICAgIGxvYWRpbmdNZXRob2RzOiBbXVxuICB9O1xuXG4gIHJldHVybiBNb2RhbFRhYnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsVGFic0ZhY3Rvcnk7XG4iXX0=