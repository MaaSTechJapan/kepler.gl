"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 20px;\n  letter-spacing: 1.25px;\n  margin: 18px 0 14px 0;\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledCode = _styledComponents["default"].code(_templateObject(), function (props) {
  return props.theme.titleColorLT;
});

var StyledTitle = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.titleColorLT;
});

var TripInfoModalFactory = function TripInfoModalFactory() {
  var svgIcons = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var TripInfoModal = function TripInfoModal() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "trip-info-modal"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "trip-info-modal__description"
    }, /*#__PURE__*/_react["default"].createElement("p", null, "In order to animate the path, the geoJSON data needs to contain `LineString` in its feature geometry, and the coordinates in the LineString need to have 4 elements in the formats of", /*#__PURE__*/_react["default"].createElement("code", null, " [longitude, latitude, altitude, timestamp] "), "with the last element being a timestamp. Valid timestamp formats include unix in seconds such as `1564184363` or in milliseconds such as `1564184363000`.")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "trip-info-modal__example"
    }, /*#__PURE__*/_react["default"].createElement(StyledTitle, null, "Example:"), /*#__PURE__*/_react["default"].createElement("pre", null, /*#__PURE__*/_react["default"].createElement(StyledCode, null, "\n              {\n                \"type\": \"FeatureCollection\",\n                \"features\": [\n                  {\n                    \"type\": \"Feature\",\n                    \"properties\": { \"vendor\":  \"A\",\n                    \"vol\":20},\n                    \"geometry\": {\n                      \"type\": \"LineString\",\n                      \"coordinates\": [\n                        [-74.20986, 40.81773, 0, 1564184363],\n                        [-74.20987, 40.81765, 0, 1564184396],\n                        [-74.20998, 40.81746, 0, 1564184409]\n                      ]\n                    }\n                  }\n                ]\n              }\n            "))));
  };

  return TripInfoModal;
};

var _default = TripInfoModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvdHJpcC1sYXllci90cmlwLWluZm8tbW9kYWwuanMiXSwibmFtZXMiOlsiU3R5bGVkQ29kZSIsInN0eWxlZCIsImNvZGUiLCJwcm9wcyIsInRoZW1lIiwidGl0bGVDb2xvckxUIiwiU3R5bGVkVGl0bGUiLCJkaXYiLCJUcmlwSW5mb01vZGFsRmFjdG9yeSIsInN2Z0ljb25zIiwiVHJpcEluZm9Nb2RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLDZCQUFPQyxJQUFWLG9CQUNMLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsWUFBaEI7QUFBQSxDQURBLENBQWhCOztBQUlBLElBQU1DLFdBQVcsR0FBR0wsNkJBQU9NLEdBQVYscUJBSU4sVUFBQUosS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxZQUFoQjtBQUFBLENBSkMsQ0FBakI7O0FBT0EsSUFBTUcsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFtQjtBQUFBLE1BQWxCQyxRQUFrQix1RUFBUCxFQUFPOztBQUM5QyxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsd0JBQ3BCO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0UsaVBBSUUsNkZBSkYsOEpBREYsQ0FERixlQVdFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDRSxnQ0FBQyxXQUFELG1CQURGLGVBRUUsMERBQ0UsZ0NBQUMsVUFBRCxnc0JBREYsQ0FGRixDQVhGLENBRG9CO0FBQUEsR0FBdEI7O0FBeUNBLFNBQU9BLGFBQVA7QUFDRCxDQTNDRDs7ZUE2Q2VGLG9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBTdHlsZWRDb2RlID0gc3R5bGVkLmNvZGVgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRpdGxlQ29sb3JMVH07XG5gO1xuXG5jb25zdCBTdHlsZWRUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMjVweDtcbiAgbWFyZ2luOiAxOHB4IDAgMTRweCAwO1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aXRsZUNvbG9yTFR9O1xuYDtcblxuY29uc3QgVHJpcEluZm9Nb2RhbEZhY3RvcnkgPSAoc3ZnSWNvbnMgPSBbXSkgPT4ge1xuICBjb25zdCBUcmlwSW5mb01vZGFsID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidHJpcC1pbmZvLW1vZGFsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyaXAtaW5mby1tb2RhbF9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgSW4gb3JkZXIgdG8gYW5pbWF0ZSB0aGUgcGF0aCwgdGhlIGdlb0pTT04gZGF0YSBuZWVkcyB0byBjb250YWluIGBMaW5lU3RyaW5nYCBpbiBpdHNcbiAgICAgICAgICBmZWF0dXJlIGdlb21ldHJ5LCBhbmQgdGhlIGNvb3JkaW5hdGVzIGluIHRoZSBMaW5lU3RyaW5nIG5lZWQgdG8gaGF2ZSA0IGVsZW1lbnRzIGluIHRoZVxuICAgICAgICAgIGZvcm1hdHMgb2ZcbiAgICAgICAgICA8Y29kZT4gW2xvbmdpdHVkZSwgbGF0aXR1ZGUsIGFsdGl0dWRlLCB0aW1lc3RhbXBdIDwvY29kZT5cbiAgICAgICAgICB3aXRoIHRoZSBsYXN0IGVsZW1lbnQgYmVpbmcgYSB0aW1lc3RhbXAuIFZhbGlkIHRpbWVzdGFtcCBmb3JtYXRzIGluY2x1ZGUgdW5peCBpbiBzZWNvbmRzXG4gICAgICAgICAgc3VjaCBhcyBgMTU2NDE4NDM2M2Agb3IgaW4gbWlsbGlzZWNvbmRzIHN1Y2ggYXMgYDE1NjQxODQzNjMwMDBgLlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJpcC1pbmZvLW1vZGFsX19leGFtcGxlXCI+XG4gICAgICAgIDxTdHlsZWRUaXRsZT5FeGFtcGxlOjwvU3R5bGVkVGl0bGU+XG4gICAgICAgIDxwcmU+XG4gICAgICAgICAgPFN0eWxlZENvZGU+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRmVhdHVyZUNvbGxlY3Rpb25cIixcbiAgICAgICAgICAgICAgICBcImZlYXR1cmVzXCI6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRmVhdHVyZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInByb3BlcnRpZXNcIjogeyBcInZlbmRvclwiOiAgXCJBXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidm9sXCI6MjB9LFxuICAgICAgICAgICAgICAgICAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJMaW5lU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBbLTc0LjIwOTg2LCA0MC44MTc3MywgMCwgMTU2NDE4NDM2M10sXG4gICAgICAgICAgICAgICAgICAgICAgICBbLTc0LjIwOTg3LCA0MC44MTc2NSwgMCwgMTU2NDE4NDM5Nl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbLTc0LjIwOTk4LCA0MC44MTc0NiwgMCwgMTU2NDE4NDQwOV1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9TdHlsZWRDb2RlPlxuICAgICAgICA8L3ByZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuICByZXR1cm4gVHJpcEluZm9Nb2RhbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyaXBJbmZvTW9kYWxGYWN0b3J5O1xuIl19