"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ProviderSelect = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _moment = _interopRequireDefault(require("moment"));

var _loadingDialog = _interopRequireDefault(require("./loading-dialog"));

var _styledComponents2 = require("../common/styled-components");

var _cloudTile = _interopRequireDefault(require("./cloud-tile"));

var _icons = require("../common/icons");

var _providerModalContainer = _interopRequireDefault(require("./provider-modal-container"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  flex: 0 0 auto;\n  width: 208px;\n  display: flex;\n  flex-direction: column;\n  padding: 16px 8px;\n  color: #3a414c;\n  cursor: pointer;\n  font-size: 12px;\n  line-height: 18px;\n\n  &:hover {\n    .vis_item-icon,\n    .vis_item-thumb,\n    .vis_item-description,\n    .vis_item-modification-date {\n      opacity: 1;\n    }\n  }\n\n  .vis_item-icon,\n  .vis_item-thumb,\n  .vis_item-description,\n  .vis_item-modification-date {\n    opacity: 0.9;\n    transition: opacity 0.4s ease;\n  }\n\n  .vis_item-icon {\n    position: relative;\n    flex: 0 0 108px;\n    background-color: #6a7484;\n    border-radius: 4px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .vis_item-thumb {\n    position: relative;\n    flex: 0 0 108px;\n    background-size: cover;\n    background-position: center;\n    border-radius: 4px;\n  }\n\n  .vis_item-privacy {\n    position: absolute;\n    top: 0;\n    left: 0;\n    padding: 3px 6px;\n    border-radius: 4px 0;\n    background-color: rgba(58, 65, 76, 0.7);\n    color: #fff;\n    font-size: 11px;\n    line-height: 18px;\n  }\n\n  .vis_item-title {\n    margin-top: 16px;\n    font-weight: 500;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  .vis_item-description {\n    flex: 1 1 auto;\n    margin-top: 8px;\n  }\n\n  .vis_item-modification-date {\n    margin-top: 16px;\n    flex: 1 0 auto;\n    color: #6a7484;\n    line-height: 15px;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-flow: row wrap;\n  align-items: stretch;\n  justify-content: space-between;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border: solid #bfbfbf;\n  border-width: 0 0 1px 0;\n  margin-bottom: 16px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  flex: 1 1 auto;\n  background-color: #f8f8f9;\n  padding: 20px 24px;\n  min-height: 280px;\n\n  .title {\n    font-size: 14px;\n    line-height: 16px;\n    font-weight: 500;\n    margin-bottom: 16px;\n\n    span {\n      text-transform: capitalize;\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 16px;\n  color: #3a414c;\n  cursor: pointer;\n\n  &:hover {\n    font-weight: 500;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  font-size: 12px;\n  line-height: 14px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  text-align: center;\n  span {\n    margin: 0 auto;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledProviderSection = _styledComponents["default"].div.attrs({
  className: 'provider-selection'
})(_templateObject());

var StyledSpinner = _styledComponents["default"].div(_templateObject2());

var StyledVisualizationSection = _styledComponents["default"].div(_templateObject3());

var StyledStorageHeader = _styledComponents["default"].div(_templateObject4());

var StyledBackBtn = _styledComponents["default"].a(_templateObject5());

var StyledProviderVisSection = _styledComponents["default"].div(_templateObject6());

var StyledSeparator = _styledComponents["default"].hr(_templateObject7());

var StyledVisualizationList = _styledComponents["default"].div(_templateObject8());

var StyledVisualizationItem = _styledComponents["default"].div(_templateObject9());

var MapIcon = function MapIcon(props) {
  return /*#__PURE__*/_react["default"].createElement("div", props, props.children, /*#__PURE__*/_react["default"].createElement(_icons.Base, {
    height: "32px",
    viewBox: '0 0 16 16'
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#d3d8d6",
    d: "m13.6 11.572-3.2 2.1336v-9.2776l3.2-2.1336zm-12-7.144 3.2-2.1336v9.2776l-3.2 2.1336zm13.244 8.2376c0.2224-0.148 0.356-0.3984 0.356-0.6656v-11.2c0-0.2952-0.1624-0.5664-0.4224-0.7048-0.26-0.14-0.576-0.1248-0.8216 0.0392l-4.3128 2.876-3.5432-2.8352c-0.1208-0.0936-0.2952-0.1624-0.472-0.1688-0.1648-0.0064-0.348 0.0464-0.472 0.128l-4.8 3.2c-0.2224 0.1488-0.356 0.3984-0.356 0.6656v11.2c0 0.2952 0.1624 0.5664 0.4224 0.7056 0.1184 0.0632 0.248 0.0944 0.3776 0.0944 0.1552 0 0.3096-0.0448 0.444-0.1344l4.3128-2.876 3.5432 2.8352c0.1448 0.116 0.3216 0.1752 0.5 0.1752 0.1184 0 0.236-0.0248 0.3464-0.0784z"
  })));
};

var PrivacyBadge = function PrivacyBadge(_ref) {
  var privateMap = _ref.privateMap;
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: "vis_item-privacy"
  }, privateMap ? 'Private' : 'Public');
};

var VisualizationItem = function VisualizationItem(_ref2) {
  var vis = _ref2.vis,
      onClick = _ref2.onClick;
  return /*#__PURE__*/_react["default"].createElement(StyledVisualizationItem, {
    onClick: onClick
  }, vis.thumbnail ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "vis_item-thumb",
    style: {
      backgroundImage: "url(".concat(vis.thumbnail, ")")
    }
  }, vis.hasOwnProperty('privateMap') ? /*#__PURE__*/_react["default"].createElement(PrivacyBadge, {
    privateMap: vis.privateMap
  }) : null) : /*#__PURE__*/_react["default"].createElement(MapIcon, {
    className: "vis_item-icon"
  }, vis.hasOwnProperty('privateMap') ? /*#__PURE__*/_react["default"].createElement(PrivacyBadge, {
    privateMap: vis.privateMap
  }) : null), /*#__PURE__*/_react["default"].createElement("span", {
    className: "vis_item-title"
  }, vis.title), vis.description && vis.description.length && /*#__PURE__*/_react["default"].createElement("span", {
    className: "vis_item-description"
  }, vis.description), /*#__PURE__*/_react["default"].createElement("span", {
    className: "vis_item-modification-date"
  }, "Last modified ", _moment["default"].utc(vis.lastModification).fromNow()));
};

var ProviderSelect = function ProviderSelect(_ref3) {
  var _ref3$cloudProviders = _ref3.cloudProviders,
      cloudProviders = _ref3$cloudProviders === void 0 ? [] : _ref3$cloudProviders,
      _onSelect = _ref3.onSelect,
      onSetCloudProvider = _ref3.onSetCloudProvider,
      currentProvider = _ref3.currentProvider;
  return cloudProviders.length ? /*#__PURE__*/_react["default"].createElement(StyledProviderSection, null, cloudProviders.map(function (provider) {
    return /*#__PURE__*/_react["default"].createElement(_cloudTile["default"], {
      key: provider.name,
      onSelect: function onSelect() {
        return _onSelect(provider.name);
      },
      onSetCloudProvider: onSetCloudProvider,
      cloudProvider: provider,
      isSelected: provider.name === currentProvider,
      isConnected: Boolean(provider.getAccessToken && provider.getAccessToken())
    });
  })) : /*#__PURE__*/_react["default"].createElement("p", null, "No storage provider available");
};

exports.ProviderSelect = ProviderSelect;

function LoadStorageMapFactory() {
  var LoadStorageMap = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(LoadStorageMap, _Component);

    var _super = _createSuper(LoadStorageMap);

    function LoadStorageMap() {
      var _this;

      (0, _classCallCheck2["default"])(this, LoadStorageMap);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        showProviderSelect: true
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_getProvider", function () {
        var _this$props = _this.props,
            currentProvider = _this$props.currentProvider,
            cloudProviders = _this$props.cloudProviders;
        return (cloudProviders || []).find(function (p) {
          return p.name === currentProvider;
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_clickBack", function () {
        _this.setState({
          showProviderSelect: true
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_selectProvider", function (providerName) {
        _this.props.onSetCloudProvider(providerName);

        var provider = (_this.props.cloudProviders || []).find(function (p) {
          return p.name === providerName;
        });

        _this.props.getSavedMaps(provider);

        _this.setState({
          showProviderSelect: false
        });
      });
      return _this;
    }

    (0, _createClass2["default"])(LoadStorageMap, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this._getSavedMaps();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (prevProps.currentProvider !== this.props.currentProvider) {
          this._getSavedMaps();
        }
      }
    }, {
      key: "_getSavedMaps",
      value: function _getSavedMaps() {
        var provider = this._getProvider();

        if (provider) {
          this.props.getSavedMaps(provider);
          this.setState({
            showProviderSelect: false
          });
        }
      }
    }, {
      key: "_onLoadCloudMap",
      value: function _onLoadCloudMap(provider, vis) {
        this.props.onLoadCloudMap({
          loadParams: vis.loadParams,
          provider: provider
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            visualizations = _this$props2.visualizations,
            cloudProviders = _this$props2.cloudProviders,
            currentProvider = _this$props2.currentProvider,
            isProviderLoading = _this$props2.isProviderLoading,
            onSetCloudProvider = _this$props2.onSetCloudProvider;

        var provider = this._getProvider();

        return /*#__PURE__*/_react["default"].createElement(_providerModalContainer["default"], {
          onSetCloudProvider: onSetCloudProvider,
          cloudProviders: cloudProviders,
          currentProvider: currentProvider
        }, this.state.showProviderSelect ? /*#__PURE__*/_react["default"].createElement(ProviderSelect, {
          onSelect: this._selectProvider,
          cloudProviders: cloudProviders,
          onSetCloudProvider: onSetCloudProvider,
          currentProvider: currentProvider
        }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, isProviderLoading && /*#__PURE__*/_react["default"].createElement(StyledSpinner, null, /*#__PURE__*/_react["default"].createElement(_loadingDialog["default"], {
          size: 64,
          message: "Loading..."
        })), !isProviderLoading && visualizations && /*#__PURE__*/_react["default"].createElement(StyledVisualizationSection, null, /*#__PURE__*/_react["default"].createElement(StyledStorageHeader, null, /*#__PURE__*/_react["default"].createElement(StyledBackBtn, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
          link: true,
          onClick: this._clickBack
        }, /*#__PURE__*/_react["default"].createElement(_icons.ArrowLeft, {
          height: "14px"
        }), "Back")), provider.getManagementUrl && /*#__PURE__*/_react["default"].createElement("a", {
          key: 1,
          href: provider.getManagementUrl(),
          target: "_blank",
          rel: "noopener noreferrer",
          style: {
            textDecoration: 'underline'
          }
        }, "Go to your Kepler.gl ", provider.displayName, " page")), /*#__PURE__*/_react["default"].createElement(StyledProviderVisSection, null, /*#__PURE__*/_react["default"].createElement("span", {
          className: "title"
        }, /*#__PURE__*/_react["default"].createElement("span", null, currentProvider), " Storage / Maps"), /*#__PURE__*/_react["default"].createElement(StyledSeparator, null), /*#__PURE__*/_react["default"].createElement(StyledVisualizationList, null, visualizations.length ? visualizations.map(function (vis) {
          return /*#__PURE__*/_react["default"].createElement(VisualizationItem, {
            key: vis.id,
            onClick: function onClick() {
              return _this2._onLoadCloudMap(provider, vis);
            },
            vis: vis
          });
        }) : /*#__PURE__*/_react["default"].createElement("div", {
          className: "visualization-list__message"
        }, "No saved maps yet"))))));
      }
    }]);
    return LoadStorageMap;
  }(_react.Component);

  return LoadStorageMap;
}

var _default = LoadStorageMapFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9sb2FkLXN0b3JhZ2UtbWFwLmpzIl0sIm5hbWVzIjpbIlN0eWxlZFByb3ZpZGVyU2VjdGlvbiIsInN0eWxlZCIsImRpdiIsImF0dHJzIiwiY2xhc3NOYW1lIiwiU3R5bGVkU3Bpbm5lciIsIlN0eWxlZFZpc3VhbGl6YXRpb25TZWN0aW9uIiwiU3R5bGVkU3RvcmFnZUhlYWRlciIsIlN0eWxlZEJhY2tCdG4iLCJhIiwiU3R5bGVkUHJvdmlkZXJWaXNTZWN0aW9uIiwiU3R5bGVkU2VwYXJhdG9yIiwiaHIiLCJTdHlsZWRWaXN1YWxpemF0aW9uTGlzdCIsIlN0eWxlZFZpc3VhbGl6YXRpb25JdGVtIiwiTWFwSWNvbiIsInByb3BzIiwiY2hpbGRyZW4iLCJQcml2YWN5QmFkZ2UiLCJwcml2YXRlTWFwIiwiVmlzdWFsaXphdGlvbkl0ZW0iLCJ2aXMiLCJvbkNsaWNrIiwidGh1bWJuYWlsIiwiYmFja2dyb3VuZEltYWdlIiwiaGFzT3duUHJvcGVydHkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibGVuZ3RoIiwibW9tZW50IiwidXRjIiwibGFzdE1vZGlmaWNhdGlvbiIsImZyb21Ob3ciLCJQcm92aWRlclNlbGVjdCIsImNsb3VkUHJvdmlkZXJzIiwib25TZWxlY3QiLCJvblNldENsb3VkUHJvdmlkZXIiLCJjdXJyZW50UHJvdmlkZXIiLCJtYXAiLCJwcm92aWRlciIsIm5hbWUiLCJCb29sZWFuIiwiZ2V0QWNjZXNzVG9rZW4iLCJMb2FkU3RvcmFnZU1hcEZhY3RvcnkiLCJMb2FkU3RvcmFnZU1hcCIsInNob3dQcm92aWRlclNlbGVjdCIsImZpbmQiLCJwIiwic2V0U3RhdGUiLCJwcm92aWRlck5hbWUiLCJnZXRTYXZlZE1hcHMiLCJfZ2V0U2F2ZWRNYXBzIiwicHJldlByb3BzIiwiX2dldFByb3ZpZGVyIiwib25Mb2FkQ2xvdWRNYXAiLCJsb2FkUGFyYW1zIiwidmlzdWFsaXphdGlvbnMiLCJpc1Byb3ZpZGVyTG9hZGluZyIsInN0YXRlIiwiX3NlbGVjdFByb3ZpZGVyIiwiX2NsaWNrQmFjayIsImdldE1hbmFnZW1lbnRVcmwiLCJ0ZXh0RGVjb3JhdGlvbiIsImRpc3BsYXlOYW1lIiwiaWQiLCJfb25Mb2FkQ2xvdWRNYXAiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEscUJBQXFCLEdBQUdDLDZCQUFPQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDN0NDLEVBQUFBLFNBQVMsRUFBRTtBQURrQyxDQUFqQixDQUFILG1CQUEzQjs7QUFNQSxJQUFNQyxhQUFhLEdBQUdKLDZCQUFPQyxHQUFWLG9CQUFuQjs7QUFPQSxJQUFNSSwwQkFBMEIsR0FBR0wsNkJBQU9DLEdBQVYsb0JBQWhDOztBQU1BLElBQU1LLG1CQUFtQixHQUFHTiw2QkFBT0MsR0FBVixvQkFBekI7O0FBVUEsSUFBTU0sYUFBYSxHQUFHUCw2QkFBT1EsQ0FBVixvQkFBbkI7O0FBVUEsSUFBTUMsd0JBQXdCLEdBQUdULDZCQUFPQyxHQUFWLG9CQUE5Qjs7QUFrQkEsSUFBTVMsZUFBZSxHQUFHViw2QkFBT1csRUFBVixvQkFBckI7O0FBTUEsSUFBTUMsdUJBQXVCLEdBQUdaLDZCQUFPQyxHQUFWLG9CQUE3Qjs7QUFPQSxJQUFNWSx1QkFBdUIsR0FBR2IsNkJBQU9DLEdBQVYsb0JBQTdCOztBQWdGQSxJQUFNYSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFBQyxLQUFLLEVBQUk7QUFDdkIsc0JBQ0UsdUNBQVNBLEtBQVQsRUFDR0EsS0FBSyxDQUFDQyxRQURULGVBRUUsZ0NBQUMsV0FBRDtBQUFNLElBQUEsTUFBTSxFQUFDLE1BQWI7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R0UsWUFBQSxHQUFHLEVBQUVBO0FBSFAsWUFEb0I7QUFBQSxTQUF0QixDQURELGdCQVNDO0FBQUssVUFBQSxTQUFTLEVBQUM7QUFBZiwrQkFWSixDQUxGLENBcEJGLENBUEosQ0FiSixDQURGO0FBa0VEO0FBNUg0QjtBQUFBO0FBQUEsSUFDRjZDLGdCQURFOztBQThIL0IsU0FBT3RCLGNBQVA7QUFDRDs7ZUFFY0QscUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmltcG9ydCBMb2FkaW5nRGlhbG9nIGZyb20gJy4vbG9hZGluZy1kaWFsb2cnO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgQ2xvdWRUaWxlIGZyb20gJy4vY2xvdWQtdGlsZSc7XHJcbmltcG9ydCB7QmFzZSwgQXJyb3dMZWZ0fSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XHJcbmltcG9ydCBQcm92aWRlck1vZGFsQ29udGFpbmVyIGZyb20gJy4vcHJvdmlkZXItbW9kYWwtY29udGFpbmVyJztcclxuXHJcbmNvbnN0IFN0eWxlZFByb3ZpZGVyU2VjdGlvbiA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gIGNsYXNzTmFtZTogJ3Byb3ZpZGVyLXNlbGVjdGlvbidcclxufSlgXHJcbiAgZGlzcGxheTogZmxleDtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFNwaW5uZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBzcGFuIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFZpc3VhbGl6YXRpb25TZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRTdG9yYWdlSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRCYWNrQnRuID0gc3R5bGVkLmFgXHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBjb2xvcjogIzNhNDE0YztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRQcm92aWRlclZpc1NlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjk7XHJcbiAgcGFkZGluZzogMjBweCAyNHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDI4MHB4O1xyXG5cclxuICAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkU2VwYXJhdG9yID0gc3R5bGVkLmhyYFxyXG4gIGJvcmRlcjogc29saWQgI2JmYmZiZjtcclxuICBib3JkZXItd2lkdGg6IDAgMCAxcHggMDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkVmlzdWFsaXphdGlvbkxpc3QgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRWaXN1YWxpemF0aW9uSXRlbSA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgd2lkdGg6IDIwOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAxNnB4IDhweDtcclxuICBjb2xvcjogIzNhNDE0YztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIC52aXNfaXRlbS1pY29uLFxyXG4gICAgLnZpc19pdGVtLXRodW1iLFxyXG4gICAgLnZpc19pdGVtLWRlc2NyaXB0aW9uLFxyXG4gICAgLnZpc19pdGVtLW1vZGlmaWNhdGlvbi1kYXRlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC52aXNfaXRlbS1pY29uLFxyXG4gIC52aXNfaXRlbS10aHVtYixcclxuICAudmlzX2l0ZW0tZGVzY3JpcHRpb24sXHJcbiAgLnZpc19pdGVtLW1vZGlmaWNhdGlvbi1kYXRlIHtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlO1xyXG4gIH1cclxuXHJcbiAgLnZpc19pdGVtLWljb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxleDogMCAwIDEwOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZhNzQ4NDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnZpc19pdGVtLXRodW1iIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsZXg6IDAgMCAxMDhweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG5cclxuICAudmlzX2l0ZW0tcHJpdmFjeSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcGFkZGluZzogM3B4IDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1OCwgNjUsIDc2LCAwLjcpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICB9XHJcblxyXG4gIC52aXNfaXRlbS10aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgfVxyXG5cclxuICAudmlzX2l0ZW0tZGVzY3JpcHRpb24ge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgfVxyXG5cclxuICAudmlzX2l0ZW0tbW9kaWZpY2F0aW9uLWRhdGUge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gICAgY29sb3I6ICM2YTc0ODQ7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBNYXBJY29uID0gcHJvcHMgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHsuLi5wcm9wc30+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPEJhc2UgaGVpZ2h0PVwiMzJweFwiIHZpZXdCb3g9eycwIDAgMTYgMTYnfT5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZmlsbD1cIiNkM2Q4ZDZcIlxyXG4gICAgICAgICAgZD1cIm0xMy42IDExLjU3Mi0zLjIgMi4xMzM2di05LjI3NzZsMy4yLTIuMTMzNnptLTEyLTcuMTQ0IDMuMi0yLjEzMzZ2OS4yNzc2bC0zLjIgMi4xMzM2em0xMy4yNDQgOC4yMzc2YzAuMjIyNC0wLjE0OCAwLjM1Ni0wLjM5ODQgMC4zNTYtMC42NjU2di0xMS4yYzAtMC4yOTUyLTAuMTYyNC0wLjU2NjQtMC40MjI0LTAuNzA0OC0wLjI2LTAuMTQtMC41NzYtMC4xMjQ4LTAuODIxNiAwLjAzOTJsLTQuMzEyOCAyLjg3Ni0zLjU0MzItMi44MzUyYy0wLjEyMDgtMC4wOTM2LTAuMjk1Mi0wLjE2MjQtMC40NzItMC4xNjg4LTAuMTY0OC0wLjAwNjQtMC4zNDggMC4wNDY0LTAuNDcyIDAuMTI4bC00LjggMy4yYy0wLjIyMjQgMC4xNDg4LTAuMzU2IDAuMzk4NC0wLjM1NiAwLjY2NTZ2MTEuMmMwIDAuMjk1MiAwLjE2MjQgMC41NjY0IDAuNDIyNCAwLjcwNTYgMC4xMTg0IDAuMDYzMiAwLjI0OCAwLjA5NDQgMC4zNzc2IDAuMDk0NCAwLjE1NTIgMCAwLjMwOTYtMC4wNDQ4IDAuNDQ0LTAuMTM0NGw0LjMxMjgtMi44NzYgMy41NDMyIDIuODM1MmMwLjE0NDggMC4xMTYgMC4zMjE2IDAuMTc1MiAwLjUgMC4xNzUyIDAuMTE4NCAwIDAuMjM2LTAuMDI0OCAwLjM0NjQtMC4wNzg0elwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9CYXNlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFByaXZhY3lCYWRnZSA9ICh7cHJpdmF0ZU1hcH0pID0+IChcclxuICA8c3BhbiBjbGFzc05hbWU9XCJ2aXNfaXRlbS1wcml2YWN5XCI+e3ByaXZhdGVNYXAgPyAnUHJpdmF0ZScgOiAnUHVibGljJ308L3NwYW4+XHJcbik7XHJcblxyXG5jb25zdCBWaXN1YWxpemF0aW9uSXRlbSA9ICh7dmlzLCBvbkNsaWNrfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkVmlzdWFsaXphdGlvbkl0ZW0gb25DbGljaz17b25DbGlja30+XHJcbiAgICAgIHt2aXMudGh1bWJuYWlsID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlzX2l0ZW0tdGh1bWJcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgke3Zpcy50aHVtYm5haWx9KWB9fT5cclxuICAgICAgICAgIHt2aXMuaGFzT3duUHJvcGVydHkoJ3ByaXZhdGVNYXAnKSA/IDxQcml2YWN5QmFkZ2UgcHJpdmF0ZU1hcD17dmlzLnByaXZhdGVNYXB9IC8+IDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8TWFwSWNvbiBjbGFzc05hbWU9XCJ2aXNfaXRlbS1pY29uXCI+XHJcbiAgICAgICAgICB7dmlzLmhhc093blByb3BlcnR5KCdwcml2YXRlTWFwJykgPyA8UHJpdmFjeUJhZGdlIHByaXZhdGVNYXA9e3Zpcy5wcml2YXRlTWFwfSAvPiA6IG51bGx9XHJcbiAgICAgICAgPC9NYXBJY29uPlxyXG4gICAgICApfVxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2aXNfaXRlbS10aXRsZVwiPnt2aXMudGl0bGV9PC9zcGFuPlxyXG4gICAgICB7dmlzLmRlc2NyaXB0aW9uICYmIHZpcy5kZXNjcmlwdGlvbi5sZW5ndGggJiYgKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZpc19pdGVtLWRlc2NyaXB0aW9uXCI+e3Zpcy5kZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICAgICl9XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZpc19pdGVtLW1vZGlmaWNhdGlvbi1kYXRlXCI+XHJcbiAgICAgICAgTGFzdCBtb2RpZmllZCB7bW9tZW50LnV0Yyh2aXMubGFzdE1vZGlmaWNhdGlvbikuZnJvbU5vdygpfVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L1N0eWxlZFZpc3VhbGl6YXRpb25JdGVtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvdmlkZXJTZWxlY3QgPSAoe1xyXG4gIGNsb3VkUHJvdmlkZXJzID0gW10sXHJcbiAgb25TZWxlY3QsXHJcbiAgb25TZXRDbG91ZFByb3ZpZGVyLFxyXG4gIGN1cnJlbnRQcm92aWRlclxyXG59KSA9PlxyXG4gIGNsb3VkUHJvdmlkZXJzLmxlbmd0aCA/IChcclxuICAgIDxTdHlsZWRQcm92aWRlclNlY3Rpb24+XHJcbiAgICAgIHtjbG91ZFByb3ZpZGVycy5tYXAocHJvdmlkZXIgPT4gKFxyXG4gICAgICAgIDxDbG91ZFRpbGVcclxuICAgICAgICAgIGtleT17cHJvdmlkZXIubmFtZX1cclxuICAgICAgICAgIG9uU2VsZWN0PXsoKSA9PiBvblNlbGVjdChwcm92aWRlci5uYW1lKX1cclxuICAgICAgICAgIG9uU2V0Q2xvdWRQcm92aWRlcj17b25TZXRDbG91ZFByb3ZpZGVyfVxyXG4gICAgICAgICAgY2xvdWRQcm92aWRlcj17cHJvdmlkZXJ9XHJcbiAgICAgICAgICBpc1NlbGVjdGVkPXtwcm92aWRlci5uYW1lID09PSBjdXJyZW50UHJvdmlkZXJ9XHJcbiAgICAgICAgICBpc0Nvbm5lY3RlZD17Qm9vbGVhbihwcm92aWRlci5nZXRBY2Nlc3NUb2tlbiAmJiBwcm92aWRlci5nZXRBY2Nlc3NUb2tlbigpKX1cclxuICAgICAgICAvPlxyXG4gICAgICApKX1cclxuICAgIDwvU3R5bGVkUHJvdmlkZXJTZWN0aW9uPlxyXG4gICkgOiAoXHJcbiAgICA8cD5ObyBzdG9yYWdlIHByb3ZpZGVyIGF2YWlsYWJsZTwvcD5cclxuICApO1xyXG5cclxuZnVuY3Rpb24gTG9hZFN0b3JhZ2VNYXBGYWN0b3J5KCkge1xyXG4gIGNsYXNzIExvYWRTdG9yYWdlTWFwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICBzaG93UHJvdmlkZXJTZWxlY3Q6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIHRoaXMuX2dldFNhdmVkTWFwcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgaWYgKHByZXZQcm9wcy5jdXJyZW50UHJvdmlkZXIgIT09IHRoaXMucHJvcHMuY3VycmVudFByb3ZpZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fZ2V0U2F2ZWRNYXBzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfZ2V0UHJvdmlkZXIgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHtjdXJyZW50UHJvdmlkZXIsIGNsb3VkUHJvdmlkZXJzfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIHJldHVybiAoY2xvdWRQcm92aWRlcnMgfHwgW10pLmZpbmQocCA9PiBwLm5hbWUgPT09IGN1cnJlbnRQcm92aWRlcik7XHJcbiAgICB9O1xyXG5cclxuICAgIF9nZXRTYXZlZE1hcHMoKSB7XHJcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gdGhpcy5fZ2V0UHJvdmlkZXIoKTtcclxuICAgICAgaWYgKHByb3ZpZGVyKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRTYXZlZE1hcHMocHJvdmlkZXIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dQcm92aWRlclNlbGVjdDogZmFsc2V9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9vbkxvYWRDbG91ZE1hcChwcm92aWRlciwgdmlzKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25Mb2FkQ2xvdWRNYXAoe1xyXG4gICAgICAgIGxvYWRQYXJhbXM6IHZpcy5sb2FkUGFyYW1zLFxyXG4gICAgICAgIHByb3ZpZGVyXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9jbGlja0JhY2sgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dQcm92aWRlclNlbGVjdDogdHJ1ZX0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBfc2VsZWN0UHJvdmlkZXIgPSBwcm92aWRlck5hbWUgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLm9uU2V0Q2xvdWRQcm92aWRlcihwcm92aWRlck5hbWUpO1xyXG4gICAgICBjb25zdCBwcm92aWRlciA9ICh0aGlzLnByb3BzLmNsb3VkUHJvdmlkZXJzIHx8IFtdKS5maW5kKHAgPT4gcC5uYW1lID09PSBwcm92aWRlck5hbWUpO1xyXG4gICAgICB0aGlzLnByb3BzLmdldFNhdmVkTWFwcyhwcm92aWRlcik7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dQcm92aWRlclNlbGVjdDogZmFsc2V9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgdmlzdWFsaXphdGlvbnMsXHJcbiAgICAgICAgY2xvdWRQcm92aWRlcnMsXHJcbiAgICAgICAgY3VycmVudFByb3ZpZGVyLFxyXG4gICAgICAgIGlzUHJvdmlkZXJMb2FkaW5nLFxyXG4gICAgICAgIG9uU2V0Q2xvdWRQcm92aWRlclxyXG4gICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gdGhpcy5fZ2V0UHJvdmlkZXIoKTtcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFByb3ZpZGVyTW9kYWxDb250YWluZXJcclxuICAgICAgICAgIG9uU2V0Q2xvdWRQcm92aWRlcj17b25TZXRDbG91ZFByb3ZpZGVyfVxyXG4gICAgICAgICAgY2xvdWRQcm92aWRlcnM9e2Nsb3VkUHJvdmlkZXJzfVxyXG4gICAgICAgICAgY3VycmVudFByb3ZpZGVyPXtjdXJyZW50UHJvdmlkZXJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUuc2hvd1Byb3ZpZGVyU2VsZWN0ID8gKFxyXG4gICAgICAgICAgICA8UHJvdmlkZXJTZWxlY3RcclxuICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5fc2VsZWN0UHJvdmlkZXJ9XHJcbiAgICAgICAgICAgICAgY2xvdWRQcm92aWRlcnM9e2Nsb3VkUHJvdmlkZXJzfVxyXG4gICAgICAgICAgICAgIG9uU2V0Q2xvdWRQcm92aWRlcj17b25TZXRDbG91ZFByb3ZpZGVyfVxyXG4gICAgICAgICAgICAgIGN1cnJlbnRQcm92aWRlcj17Y3VycmVudFByb3ZpZGVyfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICB7aXNQcm92aWRlckxvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZFNwaW5uZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxMb2FkaW5nRGlhbG9nIHNpemU9ezY0fSBtZXNzYWdlPVwiTG9hZGluZy4uLlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZFNwaW5uZXI+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7IWlzUHJvdmlkZXJMb2FkaW5nICYmIHZpc3VhbGl6YXRpb25zICYmIChcclxuICAgICAgICAgICAgICAgIDxTdHlsZWRWaXN1YWxpemF0aW9uU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPFN0eWxlZFN0b3JhZ2VIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZEJhY2tCdG4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxpbmsgb25DbGljaz17dGhpcy5fY2xpY2tCYWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93TGVmdCBoZWlnaHQ9XCIxNHB4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWRCYWNrQnRuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm92aWRlci5nZXRNYW5hZ2VtZW50VXJsICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvdmlkZXIuZ2V0TWFuYWdlbWVudFVybCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHbyB0byB5b3VyIEtlcGxlci5nbCB7cHJvdmlkZXIuZGlzcGxheU5hbWV9IHBhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L1N0eWxlZFN0b3JhZ2VIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRQcm92aWRlclZpc1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjdXJyZW50UHJvdmlkZXJ9PC9zcGFuPiBTdG9yYWdlIC8gTWFwc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU2VwYXJhdG9yIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFZpc3VhbGl6YXRpb25MaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3Zpc3VhbGl6YXRpb25zLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzdWFsaXphdGlvbnMubWFwKHZpcyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpc3VhbGl6YXRpb25JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Zpcy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuX29uTG9hZENsb3VkTWFwKHByb3ZpZGVyLCB2aXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzPXt2aXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlzdWFsaXphdGlvbi1saXN0X19tZXNzYWdlXCI+Tm8gc2F2ZWQgbWFwcyB5ZXQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWRWaXN1YWxpemF0aW9uTGlzdD5cclxuICAgICAgICAgICAgICAgICAgPC9TdHlsZWRQcm92aWRlclZpc1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZFZpc3VhbGl6YXRpb25TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L1Byb3ZpZGVyTW9kYWxDb250YWluZXI+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBMb2FkU3RvcmFnZU1hcDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZFN0b3JhZ2VNYXBGYWN0b3J5O1xyXG4iXX0=