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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9tb2RhbC10YWJzLmpzIl0sIm5hbWVzIjpbIk1vZGFsVGFiIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInRleHRDb2xvckxUIiwibWVkaWEiLCJwb3J0YWJsZSIsIlN0eWxlZExvYWREYXRhTW9kYWxUYWJJdGVtIiwic3VidGV4dENvbG9yTFQiLCJub29wIiwiTW9kYWxUYWJJdGVtIiwiY3VycmVudE1ldGhvZCIsIm1ldGhvZCIsInRvZ2dsZU1ldGhvZCIsIm9uQ2xpY2siLCJ0YWJFbGVtZW50VHlwZSIsImFjdGl2ZSIsImlkIiwibGFiZWwiLCJNb2RhbFRhYnNGYWN0b3J5IiwiTW9kYWxUYWJzIiwibG9hZGluZ01ldGhvZHMiLCJtYXAiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImFycmF5T2YiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBR0MsNkJBQU9DLEdBQVYsb0JBYUQsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFoQjtBQUFBLENBYkosRUFjaUIsVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFoQjtBQUFBLENBZHRCLEVBa0JWQyxjQUFNQyxRQWxCSSxxQkFBZDs7QUF1QkEsSUFBTUMsMEJBQTBCLEdBQUdQLDZCQUFPQyxHQUFWLHFCQU9yQixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlLLGNBQWhCO0FBQUEsQ0FQZ0IsRUFTNUJILGNBQU1DLFFBVHNCLHNCQW9CbkIsVUFBQUosS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFoQjtBQUFBLENBcEJjLENBQWhDOztBQXdCQSxJQUFNSyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNLENBQUUsQ0FBckI7O0FBRU8sSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBMkM7QUFBQSxNQUF6Q0MsYUFBeUMsUUFBekNBLGFBQXlDO0FBQUEsTUFBMUJDLE1BQTBCLFFBQTFCQSxNQUEwQjtBQUFBLE1BQWxCQyxZQUFrQixRQUFsQkEsWUFBa0I7QUFDckUsTUFBTUMsT0FBTyxHQUFHLHdCQUFZO0FBQUEsV0FBTUQsWUFBWSxDQUFDRCxNQUFELENBQWxCO0FBQUEsR0FBWixFQUF3QyxDQUFDQSxNQUFELEVBQVNDLFlBQVQsQ0FBeEMsQ0FBaEI7QUFFQSxTQUFPRCxNQUFNLENBQUNHLGNBQVAsZ0JBQ0wsZ0NBQUMsTUFBRCxDQUFRLGNBQVI7QUFBdUIsSUFBQSxPQUFPLEVBQUVEO0FBQWhDLElBREssZ0JBR0wsZ0NBQUMsMEJBQUQ7QUFDRSxJQUFBLFNBQVMsRUFBRSw0QkFBVyw0QkFBWCxFQUF5QztBQUNsREUsTUFBQUEsTUFBTSxFQUFFTCxhQUFhLElBQUlDLE1BQU0sQ0FBQ0ssRUFBUCxLQUFjTjtBQURXLEtBQXpDLENBRGI7QUFJRSxJQUFBLE9BQU8sRUFBRUc7QUFKWCxrQkFNRSw2Q0FBTUYsTUFBTSxDQUFDTSxLQUFQLElBQWdCTixNQUFNLENBQUNLLEVBQTdCLENBTkYsQ0FIRjtBQVlELENBZk07Ozs7QUFpQlAsU0FBU0UsZ0JBQVQsR0FBNEI7QUFDMUIsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxRQUFFVCxhQUFGLFNBQUVBLGFBQUY7QUFBQSxRQUFpQkUsWUFBakIsU0FBaUJBLFlBQWpCO0FBQUEsUUFBK0JRLGNBQS9CLFNBQStCQSxjQUEvQjtBQUFBLHdCQUNoQixnQ0FBQyxRQUFEO0FBQVUsTUFBQSxTQUFTLEVBQUM7QUFBcEIsb0JBQ0U7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLE9BQ0dBLGNBQWMsQ0FBQ0MsR0FBZixDQUFtQixVQUFBVixNQUFNO0FBQUEsMEJBQ3hCLGdDQUFDLFlBQUQ7QUFDRSxRQUFBLEdBQUcsRUFBRUEsTUFBTSxDQUFDSyxFQURkO0FBRUUsUUFBQSxNQUFNLEVBQUVMLE1BRlY7QUFHRSxRQUFBLGFBQWEsRUFBRUQsYUFIakI7QUFJRSxRQUFBLFlBQVksRUFBRUU7QUFKaEIsUUFEd0I7QUFBQSxLQUF6QixDQURILENBREYsQ0FEZ0I7QUFBQSxHQUFsQjs7QUFlQU8sRUFBQUEsU0FBUyxDQUFDRyxTQUFWLEdBQXNCO0FBQ3BCVixJQUFBQSxZQUFZLEVBQUVXLHNCQUFVQyxJQUFWLENBQWVDLFVBRFQ7QUFFcEJmLElBQUFBLGFBQWEsRUFBRWEsc0JBQVVHLE1BRkw7QUFHcEJOLElBQUFBLGNBQWMsRUFBRUcsc0JBQVVJLE9BQVYsQ0FBa0JKLHNCQUFVSyxNQUE1QjtBQUhJLEdBQXRCO0FBTUFULEVBQUFBLFNBQVMsQ0FBQ1UsWUFBVixHQUF5QjtBQUN2QmpCLElBQUFBLFlBQVksRUFBRUosSUFEUztBQUV2QkUsSUFBQUEsYUFBYSxFQUFFLElBRlE7QUFHdkJVLElBQUFBLGNBQWMsRUFBRTtBQUhPLEdBQXpCO0FBTUEsU0FBT0QsU0FBUDtBQUNEOztlQUVjRCxnQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHttZWRpYX0gZnJvbSAnc3R5bGVzJztcclxuXHJcbmNvbnN0IE1vZGFsVGFiID0gc3R5bGVkLmRpdmBcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcclxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgLmxvYWQtZGF0YS1tb2RhbF9fdGFiX19pbm5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubG9hZC1kYXRhLW1vZGFsX190YWJfX2l0ZW0uYWN0aXZlIHtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICAke21lZGlhLnBvcnRhYmxlYFxyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGB9O1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkTG9hZERhdGFNb2RhbFRhYkl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbiAgcGFkZGluZzogMTZweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvckxUfTtcclxuXHJcbiAgJHttZWRpYS5wb3J0YWJsZWBcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGB9O1xyXG5cclxuICA6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yTFR9O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcclxuXHJcbmV4cG9ydCBjb25zdCBNb2RhbFRhYkl0ZW0gPSAoe2N1cnJlbnRNZXRob2QsIG1ldGhvZCwgdG9nZ2xlTWV0aG9kfSkgPT4ge1xyXG4gIGNvbnN0IG9uQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB0b2dnbGVNZXRob2QobWV0aG9kKSwgW21ldGhvZCwgdG9nZ2xlTWV0aG9kXSk7XHJcblxyXG4gIHJldHVybiBtZXRob2QudGFiRWxlbWVudFR5cGUgPyAoXHJcbiAgICA8bWV0aG9kLnRhYkVsZW1lbnRUeXBlIG9uQ2xpY2s9e29uQ2xpY2t9IC8+XHJcbiAgKSA6IChcclxuICAgIDxTdHlsZWRMb2FkRGF0YU1vZGFsVGFiSXRlbVxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2xvYWQtZGF0YS1tb2RhbF9fdGFiX19pdGVtJywge1xyXG4gICAgICAgIGFjdGl2ZTogY3VycmVudE1ldGhvZCAmJiBtZXRob2QuaWQgPT09IGN1cnJlbnRNZXRob2RcclxuICAgICAgfSl9XHJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICA+XHJcbiAgICAgIDxkaXY+e21ldGhvZC5sYWJlbCB8fCBtZXRob2QuaWR9PC9kaXY+XHJcbiAgICA8L1N0eWxlZExvYWREYXRhTW9kYWxUYWJJdGVtPlxyXG4gICk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBNb2RhbFRhYnNGYWN0b3J5KCkge1xyXG4gIGNvbnN0IE1vZGFsVGFicyA9ICh7Y3VycmVudE1ldGhvZCwgdG9nZ2xlTWV0aG9kLCBsb2FkaW5nTWV0aG9kc30pID0+IChcclxuICAgIDxNb2RhbFRhYiBjbGFzc05hbWU9XCJsb2FkLWRhdGEtbW9kYWxfX3RhYlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWQtZGF0YS1tb2RhbF9fdGFiX19pbm5lclwiPlxyXG4gICAgICAgIHtsb2FkaW5nTWV0aG9kcy5tYXAobWV0aG9kID0+IChcclxuICAgICAgICAgIDxNb2RhbFRhYkl0ZW1cclxuICAgICAgICAgICAga2V5PXttZXRob2QuaWR9XHJcbiAgICAgICAgICAgIG1ldGhvZD17bWV0aG9kfVxyXG4gICAgICAgICAgICBjdXJyZW50TWV0aG9kPXtjdXJyZW50TWV0aG9kfVxyXG4gICAgICAgICAgICB0b2dnbGVNZXRob2Q9e3RvZ2dsZU1ldGhvZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Nb2RhbFRhYj5cclxuICApO1xyXG5cclxuICBNb2RhbFRhYnMucHJvcFR5cGVzID0ge1xyXG4gICAgdG9nZ2xlTWV0aG9kOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgY3VycmVudE1ldGhvZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGxvYWRpbmdNZXRob2RzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KVxyXG4gIH07XHJcblxyXG4gIE1vZGFsVGFicy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICB0b2dnbGVNZXRob2Q6IG5vb3AsXHJcbiAgICBjdXJyZW50TWV0aG9kOiBudWxsLFxyXG4gICAgbG9hZGluZ01ldGhvZHM6IFtdXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIE1vZGFsVGFicztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxUYWJzRmFjdG9yeTtcclxuIl19