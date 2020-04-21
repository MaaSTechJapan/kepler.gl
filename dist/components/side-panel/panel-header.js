"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CloudStorageDropdownFactory = exports.SaveExportDropdownFactory = exports.PanelHeaderDropdownFactory = exports.PanelAction = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reselect = require("reselect");

var _styledComponents2 = require("../common/styled-components");

var _logo = _interopRequireDefault(require("../common/logo"));

var _icons = require("../common/icons");

var _panelDropdown = _interopRequireDefault(require("./panel-dropdown"));

var _toolbar = _interopRequireDefault(require("../common/toolbar"));

var _toolbarItem = _interopRequireDefault(require("../common/toolbar-item"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  border-radius: 2px;\n  color: ", ";\n  display: flex;\n  height: 26px;\n  justify-content: space-between;\n  margin-left: 4px;\n  padding: 5px;\n  font-weight: bold;\n  p {\n    display: inline-block;\n    margin-right: 6px;\n  }\n  a {\n    height: 20px;\n  }\n\n  :hover {\n    cursor: pointer;\n    color: ", ";\n\n    a {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  padding: 12px 16px 0 16px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledPanelHeader = _styledComponents["default"].div.attrs({
  className: 'side-side-panel__header'
})(_templateObject(), function (props) {
  return props.theme.sidePanelHeaderBg;
});

var StyledPanelHeaderTop = _styledComponents["default"].div.attrs({
  className: 'side-panel__header__top'
})(_templateObject2());

var StyledPanelTopActions = _styledComponents["default"].div.attrs({
  className: 'side-panel__top__actions'
})(_templateObject3());

var StyledPanelAction = _styledComponents["default"].div.attrs({
  className: 'side-panel__panel-header__action'
})(_templateObject4(), function (props) {
  return props.active ? props.theme.textColorHl : props.theme.subtextColor;
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColorHl;
});

var StyledToolbar = (0, _styledComponents["default"])(_toolbar["default"])(_templateObject5());

var PanelAction = function PanelAction(_ref) {
  var item = _ref.item,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement(StyledPanelAction, {
    "data-tip": true,
    "data-for": "".concat(item.id, "-action"),
    onClick: onClick
  }, item.label ? /*#__PURE__*/_react["default"].createElement("p", null, item.label) : null, /*#__PURE__*/_react["default"].createElement("a", {
    target: item.blank ? '_blank' : '',
    href: item.href
  }, /*#__PURE__*/_react["default"].createElement(item.iconComponent, {
    height: "20px"
  })), item.tooltip ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
    id: "".concat(item.id, "-action"),
    place: "bottom",
    delayShow: 500,
    effect: "solid"
  }, /*#__PURE__*/_react["default"].createElement("span", null, item.tooltip)) : null);
};

exports.PanelAction = PanelAction;

var PanelHeaderDropdownFactory = function PanelHeaderDropdownFactory() {
  var PanelHeaderDropdown = function PanelHeaderDropdown(_ref2) {
    var items = _ref2.items,
        show = _ref2.show,
        onClose = _ref2.onClose,
        id = _ref2.id;
    return /*#__PURE__*/_react["default"].createElement(StyledToolbar, {
      show: show,
      className: "".concat(id, "-dropdown")
    }, /*#__PURE__*/_react["default"].createElement(_panelDropdown["default"], {
      className: "panel-header-dropdown__inner",
      show: show,
      onClose: onClose
    }, items.map(function (itm) {
      return /*#__PURE__*/_react["default"].createElement(_toolbarItem["default"], {
        key: itm.key,
        label: itm.label,
        icon: itm.icon,
        onClick: itm.onClick,
        onClose: onClose
      });
    })));
  };

  return PanelHeaderDropdown;
};

exports.PanelHeaderDropdownFactory = PanelHeaderDropdownFactory;

var getDropdownItemsSelector = function getDropdownItemsSelector() {
  return (0, _reselect.createSelector)(function (props) {
    return props;
  }, function (props) {
    return props.items.map(function (t) {
      return _objectSpread({}, t, {
        onClick: t.onClick && t.onClick(props) ? t.onClick(props) : null
      });
    }).filter(function (l) {
      return l.onClick;
    });
  });
};

var SaveExportDropdownFactory = function SaveExportDropdownFactory(PanelHeaderDropdown) {
  var dropdownItemsSelector = getDropdownItemsSelector();

  var SaveExportDropdown = function SaveExportDropdown(props) {
    return /*#__PURE__*/_react["default"].createElement(PanelHeaderDropdown, {
      items: dropdownItemsSelector(props),
      show: props.show,
      onClose: props.onClose,
      id: "save-export"
    });
  };

  SaveExportDropdown.defaultProps = {
    items: [{
      label: 'Export Image',
      icon: _icons.Picture,
      key: 'image',
      onClick: function onClick(props) {
        return props.onExportImage;
      }
    }, {
      label: 'Export Data',
      icon: _icons.DataTable,
      key: 'data',
      onClick: function onClick(props) {
        return props.onExportData;
      }
    }, {
      label: 'Export Map',
      icon: _icons.Map,
      key: 'map',
      onClick: function onClick(props) {
        return props.onExportMap;
      }
    }, {
      label: 'Save Map',
      icon: _icons.Save2,
      key: 'save',
      onClick: function onClick(props) {
        return props.onSaveMap;
      }
    }, {
      label: 'Share Map URL',
      icon: _icons.Share,
      key: 'share',
      onClick: function onClick(props) {
        return props.onShareMap;
      }
    }]
  };
  return SaveExportDropdown;
};

exports.SaveExportDropdownFactory = SaveExportDropdownFactory;
SaveExportDropdownFactory.deps = [PanelHeaderDropdownFactory];

var CloudStorageDropdownFactory = function CloudStorageDropdownFactory(PanelHeaderDropdown) {
  var dropdownItemsSelector = getDropdownItemsSelector();

  var CloudStorageDropdown = function CloudStorageDropdown(props) {
    return /*#__PURE__*/_react["default"].createElement(PanelHeaderDropdown, {
      items: dropdownItemsSelector(props),
      show: props.show,
      onClose: props.onClose,
      id: "cloud-storage"
    });
  };

  CloudStorageDropdown.defaultProps = {
    items: [{
      label: 'Save',
      icon: _icons.Save2,
      key: 'save',
      onClick: function onClick(props) {
        return props.onSaveToStorage;
      }
    }, {
      label: 'Save As',
      icon: _icons.Save2,
      key: 'saveAs',
      onClick: function onClick(props) {
        return props.onSaveAsToStorage;
      }
    }]
  };
  return CloudStorageDropdown;
};

exports.CloudStorageDropdownFactory = CloudStorageDropdownFactory;
CloudStorageDropdownFactory.deps = [PanelHeaderDropdownFactory];
PanelHeaderFactory.deps = [SaveExportDropdownFactory, CloudStorageDropdownFactory];

function PanelHeaderFactory(SaveExportDropdown, CloudStorageDropdown) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(PanelHeader, _Component);

    var _super = _createSuper(PanelHeader);

    function PanelHeader() {
      (0, _classCallCheck2["default"])(this, PanelHeader);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(PanelHeader, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            appName = _this$props.appName,
            appWebsite = _this$props.appWebsite,
            version = _this$props.version,
            actionItems = _this$props.actionItems,
            visibleDropdown = _this$props.visibleDropdown,
            showExportDropdown = _this$props.showExportDropdown,
            hideExportDropdown = _this$props.hideExportDropdown,
            dropdownCallbacks = (0, _objectWithoutProperties2["default"])(_this$props, ["appName", "appWebsite", "version", "actionItems", "visibleDropdown", "showExportDropdown", "hideExportDropdown"]);
        var items = actionItems || []; // don't render cloud storage icon if onSaveToStorage is not provided

        if (typeof this.props.onSaveToStorage !== 'function') {
          items = actionItems.filter(function (ai) {
            return ai.id !== 'storage';
          });
        }

        return /*#__PURE__*/_react["default"].createElement(StyledPanelHeader, {
          className: "side-panel__panel-header"
        }, /*#__PURE__*/_react["default"].createElement(StyledPanelHeaderTop, {
          className: "side-panel__panel-header__top"
        }, /*#__PURE__*/_react["default"].createElement(this.props.logoComponent, {
          appName: appName,
          version: version,
          appWebsite: appWebsite
        }), /*#__PURE__*/_react["default"].createElement(StyledPanelTopActions, null, items.map(function (item) {
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "side-panel__panel-header__right",
            key: item.id,
            style: {
              position: 'relative'
            }
          }, /*#__PURE__*/_react["default"].createElement(PanelAction, {
            item: item,
            onClick: function onClick() {
              if (item.dropdownComponent) {
                showExportDropdown(item.id);
              }

              item.onClick();
            }
          }), item.dropdownComponent ? /*#__PURE__*/_react["default"].createElement(item.dropdownComponent, (0, _extends2["default"])({
            onClose: hideExportDropdown,
            show: visibleDropdown === item.id
          }, dropdownCallbacks)) : null);
        }))));
      }
    }]);
    return PanelHeader;
  }(_react.Component), (0, _defineProperty2["default"])(_class, "propTypes", {
    appName: _propTypes["default"].string,
    appWebsite: _propTypes["default"].string,
    version: _propTypes["default"].string,
    visibleDropdown: _propTypes["default"].string,
    logoComponent: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    actionItems: _propTypes["default"].arrayOf(_propTypes["default"].any),
    onExportImage: _propTypes["default"].func,
    onExportData: _propTypes["default"].func,
    onExportConfig: _propTypes["default"].func,
    onExportMap: _propTypes["default"].func,
    onSaveToStorage: _propTypes["default"].func,
    onSaveAsToStorage: _propTypes["default"].func,
    onSaveMap: _propTypes["default"].func,
    onShareMap: _propTypes["default"].func
  }), (0, _defineProperty2["default"])(_class, "defaultProps", {
    logoComponent: _logo["default"],
    actionItems: [{
      id: 'storage',
      iconComponent: _icons.Db,
      tooltip: 'Cloud Storage',
      onClick: function onClick() {},
      dropdownComponent: CloudStorageDropdown
    }, {
      id: 'save',
      iconComponent: _icons.Save,
      onClick: function onClick() {},
      label: 'Share',
      dropdownComponent: SaveExportDropdown
    }]
  }), _temp;
}

var _default = PanelHeaderFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtaGVhZGVyLmpzIl0sIm5hbWVzIjpbIlN0eWxlZFBhbmVsSGVhZGVyIiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJwcm9wcyIsInRoZW1lIiwic2lkZVBhbmVsSGVhZGVyQmciLCJTdHlsZWRQYW5lbEhlYWRlclRvcCIsIlN0eWxlZFBhbmVsVG9wQWN0aW9ucyIsIlN0eWxlZFBhbmVsQWN0aW9uIiwiYWN0aXZlIiwidGV4dENvbG9ySGwiLCJzdWJ0ZXh0Q29sb3IiLCJTdHlsZWRUb29sYmFyIiwiVG9vbGJhciIsIlBhbmVsQWN0aW9uIiwiaXRlbSIsIm9uQ2xpY2siLCJpZCIsImxhYmVsIiwiYmxhbmsiLCJocmVmIiwidG9vbHRpcCIsIlBhbmVsSGVhZGVyRHJvcGRvd25GYWN0b3J5IiwiUGFuZWxIZWFkZXJEcm9wZG93biIsIml0ZW1zIiwic2hvdyIsIm9uQ2xvc2UiLCJtYXAiLCJpdG0iLCJrZXkiLCJpY29uIiwiZ2V0RHJvcGRvd25JdGVtc1NlbGVjdG9yIiwidCIsImZpbHRlciIsImwiLCJTYXZlRXhwb3J0RHJvcGRvd25GYWN0b3J5IiwiZHJvcGRvd25JdGVtc1NlbGVjdG9yIiwiU2F2ZUV4cG9ydERyb3Bkb3duIiwiZGVmYXVsdFByb3BzIiwiUGljdHVyZSIsIm9uRXhwb3J0SW1hZ2UiLCJEYXRhVGFibGUiLCJvbkV4cG9ydERhdGEiLCJNYXBJY29uIiwib25FeHBvcnRNYXAiLCJTYXZlMiIsIm9uU2F2ZU1hcCIsIlNoYXJlIiwib25TaGFyZU1hcCIsImRlcHMiLCJDbG91ZFN0b3JhZ2VEcm9wZG93bkZhY3RvcnkiLCJDbG91ZFN0b3JhZ2VEcm9wZG93biIsIm9uU2F2ZVRvU3RvcmFnZSIsIm9uU2F2ZUFzVG9TdG9yYWdlIiwiUGFuZWxIZWFkZXJGYWN0b3J5IiwiYXBwTmFtZSIsImFwcFdlYnNpdGUiLCJ2ZXJzaW9uIiwiYWN0aW9uSXRlbXMiLCJ2aXNpYmxlRHJvcGRvd24iLCJzaG93RXhwb3J0RHJvcGRvd24iLCJoaWRlRXhwb3J0RHJvcGRvd24iLCJkcm9wZG93bkNhbGxiYWNrcyIsImFpIiwicG9zaXRpb24iLCJkcm9wZG93bkNvbXBvbmVudCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyIsImxvZ29Db21wb25lbnQiLCJvbmVPZlR5cGUiLCJlbGVtZW50IiwiZnVuYyIsImFycmF5T2YiLCJhbnkiLCJvbkV4cG9ydENvbmZpZyIsIktlcGxlckdsTG9nbyIsImljb25Db21wb25lbnQiLCJEYiIsIlNhdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBR0MsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUN6Q0MsRUFBQUEsU0FBUyxFQUFFO0FBRDhCLENBQWpCLENBQUgsb0JBR0QsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxpQkFBaEI7QUFBQSxDQUhKLENBQXZCOztBQU9BLElBQU1DLG9CQUFvQixHQUFHUCw2QkFBT0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQzVDQyxFQUFBQSxTQUFTLEVBQUU7QUFEaUMsQ0FBakIsQ0FBSCxvQkFBMUI7O0FBU0EsSUFBTUsscUJBQXFCLEdBQUdSLDZCQUFPQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDN0NDLEVBQUFBLFNBQVMsRUFBRTtBQURrQyxDQUFqQixDQUFILG9CQUEzQjs7QUFNQSxJQUFNTSxpQkFBaUIsR0FBR1QsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUN6Q0MsRUFBQUEsU0FBUyxFQUFFO0FBRDhCLENBQWpCLENBQUgscUJBS1osVUFBQUMs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LHNCQUFVSztBQWRMLEdBRHJCLDREQWtCd0I7QUFDcEJILElBQUFBLGFBQWEsRUFBRU8sZ0JBREs7QUFFcEJsQixJQUFBQSxXQUFXLEVBQUUsQ0FDWDtBQUNFekMsTUFBQUEsRUFBRSxFQUFFLFNBRE47QUFFRTRELE1BQUFBLGFBQWEsRUFBRUMsU0FGakI7QUFHRXpELE1BQUFBLE9BQU8sRUFBRSxlQUhYO0FBSUVMLE1BQUFBLE9BQU8sRUFBRSxtQkFBTSxDQUFFLENBSm5CO0FBS0VpRCxNQUFBQSxpQkFBaUIsRUFBRWQ7QUFMckIsS0FEVyxFQVFYO0FBQ0VsQyxNQUFBQSxFQUFFLEVBQUUsTUFETjtBQUVFNEQsTUFBQUEsYUFBYSxFQUFFRSxXQUZqQjtBQUdFL0QsTUFBQUEsT0FBTyxFQUFFLG1CQUFNLENBQUUsQ0FIbkI7QUFJRUUsTUFBQUEsS0FBSyxFQUFFLE9BSlQ7QUFLRStDLE1BQUFBLGlCQUFpQixFQUFFNUI7QUFMckIsS0FSVztBQUZPLEdBbEJ4QjtBQTJGRDs7ZUFFY2lCLGtCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XHJcbmltcG9ydCB7VG9vbHRpcH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgS2VwbGVyR2xMb2dvIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2xvZ28nO1xyXG5pbXBvcnQge1NhdmUsIERhdGFUYWJsZSwgU2F2ZTIsIFBpY3R1cmUsIERiLCBNYXAgYXMgTWFwSWNvbiwgU2hhcmV9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcclxuaW1wb3J0IENsaWNrT3V0c2lkZUNsb3NlRHJvcGRvd24gZnJvbSAnY29tcG9uZW50cy9zaWRlLXBhbmVsL3BhbmVsLWRyb3Bkb3duJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vdG9vbGJhcic7XHJcbmltcG9ydCBUb29sYmFySXRlbSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi90b29sYmFyLWl0ZW0nO1xyXG5cclxuY29uc3QgU3R5bGVkUGFuZWxIZWFkZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6ICdzaWRlLXNpZGUtcGFuZWxfX2hlYWRlcidcclxufSlgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWxIZWFkZXJCZ307XHJcbiAgcGFkZGluZzogMTJweCAxNnB4IDAgMTZweDtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFBhbmVsSGVhZGVyVG9wID0gc3R5bGVkLmRpdi5hdHRycyh7XHJcbiAgY2xhc3NOYW1lOiAnc2lkZS1wYW5lbF9faGVhZGVyX190b3AnXHJcbn0pYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRQYW5lbFRvcEFjdGlvbnMgPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6ICdzaWRlLXBhbmVsX190b3BfX2FjdGlvbnMnXHJcbn0pYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRQYW5lbEFjdGlvbiA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gIGNsYXNzTmFtZTogJ3NpZGUtcGFuZWxfX3BhbmVsLWhlYWRlcl9fYWN0aW9uJ1xyXG59KWBcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBjb2xvcjogJHtwcm9wcyA9PiAocHJvcHMuYWN0aXZlID8gcHJvcHMudGhlbWUudGV4dENvbG9ySGwgOiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3IpfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMjZweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICB9XHJcbiAgYSB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICA6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xyXG5cclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkVG9vbGJhciA9IHN0eWxlZChUb29sYmFyKWBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUGFuZWxBY3Rpb24gPSAoe2l0ZW0sIG9uQ2xpY2t9KSA9PiAoXHJcbiAgPFN0eWxlZFBhbmVsQWN0aW9uIGRhdGEtdGlwIGRhdGEtZm9yPXtgJHtpdGVtLmlkfS1hY3Rpb25gfSBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgIHtpdGVtLmxhYmVsID8gPHA+e2l0ZW0ubGFiZWx9PC9wPiA6IG51bGx9XHJcbiAgICA8YSB0YXJnZXQ9e2l0ZW0uYmxhbmsgPyAnX2JsYW5rJyA6ICcnfSBocmVmPXtpdGVtLmhyZWZ9PlxyXG4gICAgICA8aXRlbS5pY29uQ29tcG9uZW50IGhlaWdodD1cIjIwcHhcIiAvPlxyXG4gICAgPC9hPlxyXG4gICAge2l0ZW0udG9vbHRpcCA/IChcclxuICAgICAgPFRvb2x0aXAgaWQ9e2Ake2l0ZW0uaWR9LWFjdGlvbmB9IHBsYWNlPVwiYm90dG9tXCIgZGVsYXlTaG93PXs1MDB9IGVmZmVjdD1cInNvbGlkXCI+XHJcbiAgICAgICAgPHNwYW4+e2l0ZW0udG9vbHRpcH08L3NwYW4+XHJcbiAgICAgIDwvVG9vbHRpcD5cclxuICAgICkgOiBudWxsfVxyXG4gIDwvU3R5bGVkUGFuZWxBY3Rpb24+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgUGFuZWxIZWFkZXJEcm9wZG93bkZhY3RvcnkgPSAoKSA9PiB7XHJcbiAgY29uc3QgUGFuZWxIZWFkZXJEcm9wZG93biA9ICh7aXRlbXMsIHNob3csIG9uQ2xvc2UsIGlkfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFN0eWxlZFRvb2xiYXIgc2hvdz17c2hvd30gY2xhc3NOYW1lPXtgJHtpZH0tZHJvcGRvd25gfT5cclxuICAgICAgICA8Q2xpY2tPdXRzaWRlQ2xvc2VEcm9wZG93blxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGFuZWwtaGVhZGVyLWRyb3Bkb3duX19pbm5lclwiXHJcbiAgICAgICAgICBzaG93PXtzaG93fVxyXG4gICAgICAgICAgb25DbG9zZT17b25DbG9zZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aXRlbXMubWFwKGl0bSA9PiAoXHJcbiAgICAgICAgICAgIDxUb29sYmFySXRlbVxyXG4gICAgICAgICAgICAgIGtleT17aXRtLmtleX1cclxuICAgICAgICAgICAgICBsYWJlbD17aXRtLmxhYmVsfVxyXG4gICAgICAgICAgICAgIGljb249e2l0bS5pY29ufVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2l0bS5vbkNsaWNrfVxyXG4gICAgICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0NsaWNrT3V0c2lkZUNsb3NlRHJvcGRvd24+XHJcbiAgICAgIDwvU3R5bGVkVG9vbGJhcj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIFBhbmVsSGVhZGVyRHJvcGRvd247XHJcbn07XHJcblxyXG5jb25zdCBnZXREcm9wZG93bkl0ZW1zU2VsZWN0b3IgPSAoKSA9PlxyXG4gIGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgcHJvcHMgPT4gcHJvcHMsXHJcbiAgICBwcm9wcyA9PlxyXG4gICAgICBwcm9wcy5pdGVtc1xyXG4gICAgICAgIC5tYXAodCA9PiAoe1xyXG4gICAgICAgICAgLi4udCxcclxuICAgICAgICAgIG9uQ2xpY2s6IHQub25DbGljayAmJiB0Lm9uQ2xpY2socHJvcHMpID8gdC5vbkNsaWNrKHByb3BzKSA6IG51bGxcclxuICAgICAgICB9KSlcclxuICAgICAgICAuZmlsdGVyKGwgPT4gbC5vbkNsaWNrKVxyXG4gICk7XHJcblxyXG5leHBvcnQgY29uc3QgU2F2ZUV4cG9ydERyb3Bkb3duRmFjdG9yeSA9IFBhbmVsSGVhZGVyRHJvcGRvd24gPT4ge1xyXG4gIGNvbnN0IGRyb3Bkb3duSXRlbXNTZWxlY3RvciA9IGdldERyb3Bkb3duSXRlbXNTZWxlY3RvcigpO1xyXG5cclxuICBjb25zdCBTYXZlRXhwb3J0RHJvcGRvd24gPSBwcm9wcyA9PiAoXHJcbiAgICA8UGFuZWxIZWFkZXJEcm9wZG93blxyXG4gICAgICBpdGVtcz17ZHJvcGRvd25JdGVtc1NlbGVjdG9yKHByb3BzKX1cclxuICAgICAgc2hvdz17cHJvcHMuc2hvd31cclxuICAgICAgb25DbG9zZT17cHJvcHMub25DbG9zZX1cclxuICAgICAgaWQ9XCJzYXZlLWV4cG9ydFwiXHJcbiAgICAvPlxyXG4gICk7XHJcblxyXG4gIFNhdmVFeHBvcnREcm9wZG93bi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdFeHBvcnQgSW1hZ2UnLFxyXG4gICAgICAgIGljb246IFBpY3R1cmUsXHJcbiAgICAgICAga2V5OiAnaW1hZ2UnLFxyXG4gICAgICAgIG9uQ2xpY2s6IHByb3BzID0+IHByb3BzLm9uRXhwb3J0SW1hZ2VcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiAnRXhwb3J0IERhdGEnLFxyXG4gICAgICAgIGljb246IERhdGFUYWJsZSxcclxuICAgICAgICBrZXk6ICdkYXRhJyxcclxuICAgICAgICBvbkNsaWNrOiBwcm9wcyA9PiBwcm9wcy5vbkV4cG9ydERhdGFcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiAnRXhwb3J0IE1hcCcsXHJcbiAgICAgICAgaWNvbjogTWFwSWNvbixcclxuICAgICAgICBrZXk6ICdtYXAnLFxyXG4gICAgICAgIG9uQ2xpY2s6IHByb3BzID0+IHByb3BzLm9uRXhwb3J0TWFwXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogJ1NhdmUgTWFwJyxcclxuICAgICAgICBpY29uOiBTYXZlMixcclxuICAgICAgICBrZXk6ICdzYXZlJyxcclxuICAgICAgICBvbkNsaWNrOiBwcm9wcyA9PiBwcm9wcy5vblNhdmVNYXBcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiAnU2hhcmUgTWFwIFVSTCcsXHJcbiAgICAgICAgaWNvbjogU2hhcmUsXHJcbiAgICAgICAga2V5OiAnc2hhcmUnLFxyXG4gICAgICAgIG9uQ2xpY2s6IHByb3BzID0+IHByb3BzLm9uU2hhcmVNYXBcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBTYXZlRXhwb3J0RHJvcGRvd247XHJcbn07XHJcblNhdmVFeHBvcnREcm9wZG93bkZhY3RvcnkuZGVwcyA9IFtQYW5lbEhlYWRlckRyb3Bkb3duRmFjdG9yeV07XHJcblxyXG5leHBvcnQgY29uc3QgQ2xvdWRTdG9yYWdlRHJvcGRvd25GYWN0b3J5ID0gUGFuZWxIZWFkZXJEcm9wZG93biA9PiB7XHJcbiAgY29uc3QgZHJvcGRvd25JdGVtc1NlbGVjdG9yID0gZ2V0RHJvcGRvd25JdGVtc1NlbGVjdG9yKCk7XHJcblxyXG4gIGNvbnN0IENsb3VkU3RvcmFnZURyb3Bkb3duID0gcHJvcHMgPT4gKFxyXG4gICAgPFBhbmVsSGVhZGVyRHJvcGRvd25cclxuICAgICAgaXRlbXM9e2Ryb3Bkb3duSXRlbXNTZWxlY3Rvcihwcm9wcyl9XHJcbiAgICAgIHNob3c9e3Byb3BzLnNob3d9XHJcbiAgICAgIG9uQ2xvc2U9e3Byb3BzLm9uQ2xvc2V9XHJcbiAgICAgIGlkPVwiY2xvdWQtc3RvcmFnZVwiXHJcbiAgICAvPlxyXG4gICk7XHJcbiAgQ2xvdWRTdG9yYWdlRHJvcGRvd24uZGVmYXVsdFByb3BzID0ge1xyXG4gICAgaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiAnU2F2ZScsXHJcbiAgICAgICAgaWNvbjogU2F2ZTIsXHJcbiAgICAgICAga2V5OiAnc2F2ZScsXHJcbiAgICAgICAgb25DbGljazogcHJvcHMgPT4gcHJvcHMub25TYXZlVG9TdG9yYWdlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogJ1NhdmUgQXMnLFxyXG4gICAgICAgIGljb246IFNhdmUyLFxyXG4gICAgICAgIGtleTogJ3NhdmVBcycsXHJcbiAgICAgICAgb25DbGljazogcHJvcHMgPT4gcHJvcHMub25TYXZlQXNUb1N0b3JhZ2VcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH07XHJcbiAgcmV0dXJuIENsb3VkU3RvcmFnZURyb3Bkb3duO1xyXG59O1xyXG5DbG91ZFN0b3JhZ2VEcm9wZG93bkZhY3RvcnkuZGVwcyA9IFtQYW5lbEhlYWRlckRyb3Bkb3duRmFjdG9yeV07XHJcblxyXG5QYW5lbEhlYWRlckZhY3RvcnkuZGVwcyA9IFtTYXZlRXhwb3J0RHJvcGRvd25GYWN0b3J5LCBDbG91ZFN0b3JhZ2VEcm9wZG93bkZhY3RvcnldO1xyXG5cclxuZnVuY3Rpb24gUGFuZWxIZWFkZXJGYWN0b3J5KFNhdmVFeHBvcnREcm9wZG93biwgQ2xvdWRTdG9yYWdlRHJvcGRvd24pIHtcclxuICByZXR1cm4gY2xhc3MgUGFuZWxIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgYXBwTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgYXBwV2Vic2l0ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgdmVyc2lvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgdmlzaWJsZURyb3Bkb3duOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBsb2dvQ29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLmZ1bmNdKSxcclxuICAgICAgYWN0aW9uSXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxyXG4gICAgICBvbkV4cG9ydEltYWdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgb25FeHBvcnREYXRhOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgb25FeHBvcnRDb25maWc6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgICBvbkV4cG9ydE1hcDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICAgIG9uU2F2ZVRvU3RvcmFnZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICAgIG9uU2F2ZUFzVG9TdG9yYWdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgb25TYXZlTWFwOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgb25TaGFyZU1hcDogUHJvcFR5cGVzLmZ1bmNcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgbG9nb0NvbXBvbmVudDogS2VwbGVyR2xMb2dvLFxyXG4gICAgICBhY3Rpb25JdGVtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnc3RvcmFnZScsXHJcbiAgICAgICAgICBpY29uQ29tcG9uZW50OiBEYixcclxuICAgICAgICAgIHRvb2x0aXA6ICdDbG91ZCBTdG9yYWdlJyxcclxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHt9LFxyXG4gICAgICAgICAgZHJvcGRvd25Db21wb25lbnQ6IENsb3VkU3RvcmFnZURyb3Bkb3duXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJ3NhdmUnLFxyXG4gICAgICAgICAgaWNvbkNvbXBvbmVudDogU2F2ZSxcclxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHt9LFxyXG4gICAgICAgICAgbGFiZWw6ICdTaGFyZScsXHJcbiAgICAgICAgICBkcm9wZG93bkNvbXBvbmVudDogU2F2ZUV4cG9ydERyb3Bkb3duXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIGFwcE5hbWUsXHJcbiAgICAgICAgYXBwV2Vic2l0ZSxcclxuICAgICAgICB2ZXJzaW9uLFxyXG4gICAgICAgIGFjdGlvbkl0ZW1zLFxyXG4gICAgICAgIHZpc2libGVEcm9wZG93bixcclxuICAgICAgICBzaG93RXhwb3J0RHJvcGRvd24sXHJcbiAgICAgICAgaGlkZUV4cG9ydERyb3Bkb3duLFxyXG4gICAgICAgIC4uLmRyb3Bkb3duQ2FsbGJhY2tzXHJcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBsZXQgaXRlbXMgPSBhY3Rpb25JdGVtcyB8fCBbXTtcclxuXHJcbiAgICAgIC8vIGRvbid0IHJlbmRlciBjbG91ZCBzdG9yYWdlIGljb24gaWYgb25TYXZlVG9TdG9yYWdlIGlzIG5vdCBwcm92aWRlZFxyXG4gICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25TYXZlVG9TdG9yYWdlICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgaXRlbXMgPSBhY3Rpb25JdGVtcy5maWx0ZXIoYWkgPT4gYWkuaWQgIT09ICdzdG9yYWdlJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZFBhbmVsSGVhZGVyIGNsYXNzTmFtZT1cInNpZGUtcGFuZWxfX3BhbmVsLWhlYWRlclwiPlxyXG4gICAgICAgICAgPFN0eWxlZFBhbmVsSGVhZGVyVG9wIGNsYXNzTmFtZT1cInNpZGUtcGFuZWxfX3BhbmVsLWhlYWRlcl9fdG9wXCI+XHJcbiAgICAgICAgICAgIDx0aGlzLnByb3BzLmxvZ29Db21wb25lbnQgYXBwTmFtZT17YXBwTmFtZX0gdmVyc2lvbj17dmVyc2lvbn0gYXBwV2Vic2l0ZT17YXBwV2Vic2l0ZX0gLz5cclxuICAgICAgICAgICAgPFN0eWxlZFBhbmVsVG9wQWN0aW9ucz5cclxuICAgICAgICAgICAgICB7aXRlbXMubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaWRlLXBhbmVsX19wYW5lbC1oZWFkZXJfX3JpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPFBhbmVsQWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5kcm9wZG93bkNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93RXhwb3J0RHJvcGRvd24oaXRlbS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLm9uQ2xpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5kcm9wZG93bkNvbXBvbmVudCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aXRlbS5kcm9wZG93bkNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGlkZUV4cG9ydERyb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2hvdz17dmlzaWJsZURyb3Bkb3duID09PSBpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgey4uLmRyb3Bkb3duQ2FsbGJhY2tzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU3R5bGVkUGFuZWxUb3BBY3Rpb25zPlxyXG4gICAgICAgICAgPC9TdHlsZWRQYW5lbEhlYWRlclRvcD5cclxuICAgICAgICA8L1N0eWxlZFBhbmVsSGVhZGVyPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhbmVsSGVhZGVyRmFjdG9yeTtcclxuIl19