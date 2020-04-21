"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _defaultSettings = require("../../constants/default-settings");

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 3px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: flex-start;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 10px;\n  color: ", ";\n  letter-spacing: 0.83px;\n  line-height: 14px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .logo__link {\n    color: ", ";\n    font-size: 14px;\n    font-weight: 600;\n    letter-spacing: 1.17px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  margin-left: 6px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var LogoTitle = _styledComponents["default"].div(_templateObject());

var LogoName = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.logoColor;
});

var LogoVersion = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.subtextColor;
});

var LogoWrapper = _styledComponents["default"].div(_templateObject4());

var LogoSvgWrapper = _styledComponents["default"].div(_templateObject5());

var LogoSvg = function LogoSvg() {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    className: "side-panel-logo__logo",
    width: "22px",
    height: "15px",
    viewBox: "0 0 22 15"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(11, -3) rotate(45.000000)"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    fill: "#535C6C",
    x: "0",
    y: "5",
    width: "10",
    height: "10"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    fill: "#1FBAD6",
    x: "5",
    y: "0",
    width: "10",
    height: "10"
  })));
};

var KeplerGlLogo = function KeplerGlLogo(_ref) {
  var appName = _ref.appName,
      _ref$appWebsite = _ref.appWebsite,
      appWebsite = _ref$appWebsite === void 0 ? _defaultSettings.KEPLER_GL_WEBSITE : _ref$appWebsite,
      version = _ref.version;
  return /*#__PURE__*/_react["default"].createElement(LogoWrapper, {
    className: "side-panel-logo"
  }, /*#__PURE__*/_react["default"].createElement(LogoSvgWrapper, null, /*#__PURE__*/_react["default"].createElement(LogoSvg, null)), /*#__PURE__*/_react["default"].createElement(LogoTitle, {
    className: "logo__title"
  }, /*#__PURE__*/_react["default"].createElement(LogoName, {
    className: "logo__name"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "logo__link",
    target: "_blank",
    rel: "noopener noreferrer",
    href: appWebsite
  }, appName)), version ? /*#__PURE__*/_react["default"].createElement(LogoVersion, {
    className: "logo__version"
  }, version) : null));
};

KeplerGlLogo.propTypes = {
  appName: _propTypes["default"].string,
  version: _propTypes["default"].string,
  appWebsite: _propTypes["default"].string
};
KeplerGlLogo.defaultProps = {
  appName: _defaultSettings.KEPLER_GL_NAME,
  version: _defaultSettings.KEPLER_GL_VERSION,
  appWebsite: _defaultSettings.KEPLER_GL_WEBSITE
};
var _default = KeplerGlLogo;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9sb2dvLmpzIl0sIm5hbWVzIjpbIkxvZ29UaXRsZSIsInN0eWxlZCIsImRpdiIsIkxvZ29OYW1lIiwicHJvcHMiLCJ0aGVtZSIsImxvZ29Db2xvciIsIkxvZ29WZXJzaW9uIiwic3VidGV4dENvbG9yIiwiTG9nb1dyYXBwZXIiLCJMb2dvU3ZnV3JhcHBlciIsIkxvZ29TdmciLCJLZXBsZXJHbExvZ28iLCJhcHBOYW1lIiwiYXBwV2Vic2l0ZSIsIktFUExFUl9HTF9XRUJTSVRFIiwidmVyc2lvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImRlZmF1bHRQcm9wcyIsIktFUExFUl9HTF9OQU1FIiwiS0VQTEVSX0dMX1ZFUlNJT04iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQyw2QkFBT0MsR0FBVixtQkFBZjs7QUFLQSxJQUFNQyxRQUFRLEdBQUdGLDZCQUFPQyxHQUFWLHFCQUVELFVBQUFFLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsU0FBaEI7QUFBQSxDQUZKLENBQWQ7O0FBUUEsSUFBTUMsV0FBVyxHQUFHTiw2QkFBT0MsR0FBVixxQkFFTixVQUFBRSxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlHLFlBQWhCO0FBQUEsQ0FGQyxDQUFqQjs7QUFPQSxJQUFNQyxXQUFXLEdBQUdSLDZCQUFPQyxHQUFWLG9CQUFqQjs7QUFLQSxJQUFNUSxjQUFjLEdBQUdULDZCQUFPQyxHQUFWLG9CQUFwQjs7QUFJQSxJQUFNUyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLHNCQUNkO0FBQUssSUFBQSxTQUFTLEVBQUMsdUJBQWY7QUFBdUMsSUFBQSxLQUFLLEVBQUMsTUFBN0M7QUFBb0QsSUFBQSxNQUFNLEVBQUMsTUFBM0Q7QUFBa0UsSUFBQSxPQUFPLEVBQUM7QUFBMUUsa0JBQ0U7QUFBRyxJQUFBLFNBQVMsRUFBQztBQUFiLGtCQUNFO0FBQU0sSUFBQSxJQUFJLEVBQUMsU0FBWDtBQUFxQixJQUFBLENBQUMsRUFBQyxHQUF2QjtBQUEyQixJQUFBLENBQUMsRUFBQyxHQUE3QjtBQUFpQyxJQUFBLEtBQUssRUFBQyxJQUF2QztBQUE0QyxJQUFBLE1BQU0sRUFBQztBQUFuRCxJQURGLGVBRUU7QUFBTSxJQUFBLElBQUksRUFBQyxTQUFYO0FBQXFCLElBQUEsQ0FBQyxFQUFDLEdBQXZCO0FBQTJCLElBQUEsQ0FBQyxFQUFDLEdBQTdCO0FBQWlDLElBQUEsS0FBSyxFQUFDLElBQXZDO0FBQTRDLElBQUEsTUFBTSxFQUFDO0FBQW5ELElBRkYsQ0FERixDQURjO0FBQUEsQ0FBaEI7O0FBU0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxNQUFFQyxPQUFGLFFBQUVBLE9BQUY7QUFBQSw2QkFBV0MsVUFBWDtBQUFBLE1BQVdBLFVBQVgsZ0NBQXdCQyxrQ0FBeEI7QUFBQSxNQUEyQ0MsT0FBM0MsUUFBMkNBLE9BQTNDO0FBQUEsc0JBQ25CLGdDQUFDLFdBQUQ7QUFBYSxJQUFBLFNBQVMsRUFBQztBQUF2QixrQkFDRSxnQ0FBQyxjQUFELHFCQUNFLGdDQUFDLE9BQUQsT0FERixDQURGLGVBSUUsZ0NBQUMsU0FBRDtBQUFXLElBQUEsU0FBUyxFQUFDO0FBQXJCLGtCQUNFLGdDQUFDLFFBQUQ7QUFBVSxJQUFBLFNBQVMsRUFBQztBQUFwQixrQkFDRTtBQUFHLElBQUEsU0FBUyxFQUFDLFlBQWI7QUFBMEIsSUFBQSxNQUFNLEVBQUMsUUFBakM7QUFBMEMsSUFBQSxHQUFHLEVBQUMscUJBQTlDO0FBQW9FLElBQUEsSUFBSSxFQUFFRjtBQUExRSxLQUNHRCxPQURILENBREYsQ0FERixFQU1HRyxPQUFPLGdCQUFHLGdDQUFDLFdBQUQ7QUFBYSxJQUFBLFNBQVMsRUFBQztBQUF2QixLQUF3Q0EsT0FBeEMsQ0FBSCxHQUFvRSxJQU45RSxDQUpGLENBRG1CO0FBQUEsQ0FBckI7O0FBZ0JBSixZQUFZLENBQUNLLFNBQWIsR0FBeUI7QUFDdkJKLEVBQUFBLE9BQU8sRUFBRUssc0JBQVVDLE1BREk7QUFFdkJILEVBQUFBLE9BQU8sRUFBRUUsc0JBQVVDLE1BRkk7QUFHdkJMLEVBQUFBLFVBQVUsRUFBRUksc0JBQVVDO0FBSEMsQ0FBekI7QUFNQVAsWUFBWSxDQUFDUSxZQUFiLEdBQTRCO0FBQzFCUCxFQUFBQSxPQUFPLEVBQUVRLCtCQURpQjtBQUUxQkwsRUFBQUEsT0FBTyxFQUFFTSxrQ0FGaUI7QUFHMUJSLEVBQUFBLFVBQVUsRUFBRUM7QUFIYyxDQUE1QjtlQU1lSCxZIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7S0VQTEVSX0dMX05BTUUsIEtFUExFUl9HTF9WRVJTSU9OLCBLRVBMRVJfR0xfV0VCU0lURX0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xyXG5cclxuY29uc3QgTG9nb1RpdGxlID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDZweDtcclxuYDtcclxuXHJcbmNvbnN0IExvZ29OYW1lID0gc3R5bGVkLmRpdmBcclxuICAubG9nb19fbGluayB7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sb2dvQ29sb3J9O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjE3cHg7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBMb2dvVmVyc2lvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvcn07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuODNweDtcclxuICBsaW5lLWhlaWdodDogMTRweDtcclxuYDtcclxuXHJcbmNvbnN0IExvZ29XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5gO1xyXG5cclxuY29uc3QgTG9nb1N2Z1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDNweDtcclxuYDtcclxuXHJcbmNvbnN0IExvZ29TdmcgPSAoKSA9PiAoXHJcbiAgPHN2ZyBjbGFzc05hbWU9XCJzaWRlLXBhbmVsLWxvZ29fX2xvZ29cIiB3aWR0aD1cIjIycHhcIiBoZWlnaHQ9XCIxNXB4XCIgdmlld0JveD1cIjAgMCAyMiAxNVwiPlxyXG4gICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDExLCAtMykgcm90YXRlKDQ1LjAwMDAwMClcIj5cclxuICAgICAgPHJlY3QgZmlsbD1cIiM1MzVDNkNcIiB4PVwiMFwiIHk9XCI1XCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgLz5cclxuICAgICAgPHJlY3QgZmlsbD1cIiMxRkJBRDZcIiB4PVwiNVwiIHk9XCIwXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgLz5cclxuICAgIDwvZz5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmNvbnN0IEtlcGxlckdsTG9nbyA9ICh7YXBwTmFtZSwgYXBwV2Vic2l0ZSA9IEtFUExFUl9HTF9XRUJTSVRFLCB2ZXJzaW9ufSkgPT4gKFxyXG4gIDxMb2dvV3JhcHBlciBjbGFzc05hbWU9XCJzaWRlLXBhbmVsLWxvZ29cIj5cclxuICAgIDxMb2dvU3ZnV3JhcHBlcj5cclxuICAgICAgPExvZ29TdmcgLz5cclxuICAgIDwvTG9nb1N2Z1dyYXBwZXI+XHJcbiAgICA8TG9nb1RpdGxlIGNsYXNzTmFtZT1cImxvZ29fX3RpdGxlXCI+XHJcbiAgICAgIDxMb2dvTmFtZSBjbGFzc05hbWU9XCJsb2dvX19uYW1lXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibG9nb19fbGlua1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBocmVmPXthcHBXZWJzaXRlfT5cclxuICAgICAgICAgIHthcHBOYW1lfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9Mb2dvTmFtZT5cclxuICAgICAge3ZlcnNpb24gPyA8TG9nb1ZlcnNpb24gY2xhc3NOYW1lPVwibG9nb19fdmVyc2lvblwiPnt2ZXJzaW9ufTwvTG9nb1ZlcnNpb24+IDogbnVsbH1cclxuICAgIDwvTG9nb1RpdGxlPlxyXG4gIDwvTG9nb1dyYXBwZXI+XHJcbik7XHJcblxyXG5LZXBsZXJHbExvZ28ucHJvcFR5cGVzID0ge1xyXG4gIGFwcE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgdmVyc2lvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICBhcHBXZWJzaXRlOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcblxyXG5LZXBsZXJHbExvZ28uZGVmYXVsdFByb3BzID0ge1xyXG4gIGFwcE5hbWU6IEtFUExFUl9HTF9OQU1FLFxyXG4gIHZlcnNpb246IEtFUExFUl9HTF9WRVJTSU9OLFxyXG4gIGFwcFdlYnNpdGU6IEtFUExFUl9HTF9XRUJTSVRFXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLZXBsZXJHbExvZ287XHJcbiJdfQ==