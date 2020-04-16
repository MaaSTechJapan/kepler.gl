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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtaGVhZGVyLmpzIl0sIm5hbWVzIjpbIlN0eWxlZFBhbmVsSGVhZGVyIiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJwcm9wcyIsInRoZW1lIiwic2lkZVBhbmVsSGVhZGVyQmciLCJTdHlsZWRQYW5lbEhlYWRlclRvcCIsIlN0eWxlZFBhbmVsVG9wQWN0aW9ucyIsIlN0eWxlZFBhbmVsQWN0aW9uIiwiYWN0aXZlIiwidGV4dENvbG9ySGwiLCJzdWJ0ZXh0Q29sb3IiLCJTdHlsZWRUb29sYmFyIiwiVG9vbGJhciIsIlBhbmVsQWN0aW9uIiwiaXRlbSIsIm9uQ2xpY2siLCJpZCIsImxhYmVsIiwiYmxhbmsiLCJocmVmIiwidG9vbHRpcCIsIlBhbmVsSGVhZGVyRHJvcGRvd25GYWN0b3J5IiwiUGFuZWxIZWFkZXJEcm9wZG93biIsIml0ZW1zIiwic2hvdyIsIm9uQ2xvc2UiLCJtYXAiLCJpdG0iLCJrZXkiLCJpY29uIiwiZ2V0RHJvcGRvd25JdGVtc1NlbGVjdG9yIiwidCIsImZpbHRlciIsImwiLCJTYXZlRXhwb3J0RHJvcGRvd25GYWN0b3J5IiwiZHJvcGRvd25JdGVtc1NlbGVjdG9yIiwiU2F2ZUV4cG9ydERyb3Bkb3duIiwiZGVmYXVsdFByb3BzIiwiUGljdHVyZSIsIm9uRXhwb3J0SW1hZ2UiLCJEYXRhVGFibGUiLCJvbkV4cG9ydERhdGEiLCJNYXBJY29uIiwib25FeHBvcnRNYXAiLCJTYXZlMiIsIm9uU2F2ZU1hcCIsIlNoYXJlIiwib25TaGFyZU1hcCIsImRlcHMiLCJDbG91ZFN0b3JhZ2VEcm9wZG93bkZhY3RvcnkiLCJDbG91ZFN0b3JhZ2VEcm9wZG93biIsIm9uU2F2ZVRvU3RvcmFnZSIsIm9uU2F2ZUFzVG9TdG9yYWdlIiwiUGFuZWxIZWFkZXJGYWN0b3J5IiwiYXBwTmFtZSIsImFwcFdlYnNpdGUiLCJ2ZXJzaW9uIiwiYWN0aW9uSXRlbXMiLCJ2aXNpYmxlRHJvcGRvd24iLCJzaG93RXhwb3J0RHJvcGRvd24iLCJoaWRlRXhwb3J0RHJvcGRvd24iLCJkcm9wZG93bkNhbGxiYWNrcyIsImFpIiwicG9zaXRpb24iLCJkcm9wZG93bkNvbXBvbmVudCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyIsImxvZ29Db21wb25lbnQiLCJvbmVPZlR5cGUiLCJlbGVtZW50IiwiZnVuYyIsImFycmF5T2YiLCJhbnkiLCJvbkV4cG9ydENvbmZpZyIsIktlcGxlckdsTG9nbyIsImljb25Db21wb25lbnQiLCJEYiIsIlNhdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBR0MsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUN6Q0MsRUFBQUEsU0FBUyxFQUFFO0FBRDhCLENBQWpCLENBQUgsb0JBR0QsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxpQkFBaEI7QUFBQSxDQUhKLENBQXZCOztBQU9BLElBQU1DLG9CQUFvQixHQUFHUCw2QkFBT0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQzVDQyxFQUFBQSxTQUFTLEVBQUU7QUFEaUMsQ0FBakIsQ0FBSCxvQkFBMUI7O0FBU0EsSUFBTUsscUJBQXFCLEdBQUdSLDZCQUFPQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDN0NDLEVBQUFBLFNBQVMsRUFBRTtBQURrQyxDQUFqQixDQUFILG9CQUEzQjs7QUFNQSxJQUFNTSxpQkFBaUIsR0FBR1QsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUN6Q0MsRUFBQUEsU0FBUyxFQUFFO0FBRDhCLENBQWpCLENBQUgscUJBS1osVUFBQUMs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LHNCQUFVSztBQWRMLEdBRHJCLDREQWtCd0I7QUFDcEJILElBQUFBLGFBQWEsRUFBRU8sZ0JBREs7QUFFcEJsQixJQUFBQSxXQUFXLEVBQUUsQ0FDWDtBQUNFekMsTUFBQUEsRUFBRSxFQUFFLFNBRE47QUFFRTRELE1BQUFBLGFBQWEsRUFBRUMsU0FGakI7QUFHRXpELE1BQUFBLE9BQU8sRUFBRSxlQUhYO0FBSUVMLE1BQUFBLE9BQU8sRUFBRSxtQkFBTSxDQUFFLENBSm5CO0FBS0VpRCxNQUFBQSxpQkFBaUIsRUFBRWQ7QUFMckIsS0FEVyxFQVFYO0FBQ0VsQyxNQUFBQSxFQUFFLEVBQUUsTUFETjtBQUVFNEQsTUFBQUEsYUFBYSxFQUFFRSxXQUZqQjtBQUdFL0QsTUFBQUEsT0FBTyxFQUFFLG1CQUFNLENBQUUsQ0FIbkI7QUFJRUUsTUFBQUEsS0FBSyxFQUFFLE9BSlQ7QUFLRStDLE1BQUFBLGlCQUFpQixFQUFFNUI7QUFMckIsS0FSVztBQUZPLEdBbEJ4QjtBQTJGRDs7ZUFFY2lCLGtCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQge1Rvb2x0aXB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBLZXBsZXJHbExvZ28gZnJvbSAnY29tcG9uZW50cy9jb21tb24vbG9nbyc7XG5pbXBvcnQge1NhdmUsIERhdGFUYWJsZSwgU2F2ZTIsIFBpY3R1cmUsIERiLCBNYXAgYXMgTWFwSWNvbiwgU2hhcmV9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcbmltcG9ydCBDbGlja091dHNpZGVDbG9zZURyb3Bkb3duIGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9wYW5lbC1kcm9wZG93bic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi90b29sYmFyJztcbmltcG9ydCBUb29sYmFySXRlbSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi90b29sYmFyLWl0ZW0nO1xuXG5jb25zdCBTdHlsZWRQYW5lbEhlYWRlciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdzaWRlLXNpZGUtcGFuZWxfX2hlYWRlcidcbn0pYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbEhlYWRlckJnfTtcbiAgcGFkZGluZzogMTJweCAxNnB4IDAgMTZweDtcbmA7XG5cbmNvbnN0IFN0eWxlZFBhbmVsSGVhZGVyVG9wID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ3NpZGUtcGFuZWxfX2hlYWRlcl9fdG9wJ1xufSlgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5jb25zdCBTdHlsZWRQYW5lbFRvcEFjdGlvbnMgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnc2lkZS1wYW5lbF9fdG9wX19hY3Rpb25zJ1xufSlgXG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBTdHlsZWRQYW5lbEFjdGlvbiA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdzaWRlLXBhbmVsX19wYW5lbC1oZWFkZXJfX2FjdGlvbidcbn0pYFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IChwcm9wcy5hY3RpdmUgPyBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbCA6IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvcil9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICB9XG4gIGEge1xuICAgIGhlaWdodDogMjBweDtcbiAgfVxuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcblxuICAgIGEge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkVG9vbGJhciA9IHN0eWxlZChUb29sYmFyKWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuYDtcblxuZXhwb3J0IGNvbnN0IFBhbmVsQWN0aW9uID0gKHtpdGVtLCBvbkNsaWNrfSkgPT4gKFxuICA8U3R5bGVkUGFuZWxBY3Rpb24gZGF0YS10aXAgZGF0YS1mb3I9e2Ake2l0ZW0uaWR9LWFjdGlvbmB9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgIHtpdGVtLmxhYmVsID8gPHA+e2l0ZW0ubGFiZWx9PC9wPiA6IG51bGx9XG4gICAgPGEgdGFyZ2V0PXtpdGVtLmJsYW5rID8gJ19ibGFuaycgOiAnJ30gaHJlZj17aXRlbS5ocmVmfT5cbiAgICAgIDxpdGVtLmljb25Db21wb25lbnQgaGVpZ2h0PVwiMjBweFwiIC8+XG4gICAgPC9hPlxuICAgIHtpdGVtLnRvb2x0aXAgPyAoXG4gICAgICA8VG9vbHRpcCBpZD17YCR7aXRlbS5pZH0tYWN0aW9uYH0gcGxhY2U9XCJib3R0b21cIiBkZWxheVNob3c9ezUwMH0gZWZmZWN0PVwic29saWRcIj5cbiAgICAgICAgPHNwYW4+e2l0ZW0udG9vbHRpcH08L3NwYW4+XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgKSA6IG51bGx9XG4gIDwvU3R5bGVkUGFuZWxBY3Rpb24+XG4pO1xuXG5leHBvcnQgY29uc3QgUGFuZWxIZWFkZXJEcm9wZG93bkZhY3RvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IFBhbmVsSGVhZGVyRHJvcGRvd24gPSAoe2l0ZW1zLCBzaG93LCBvbkNsb3NlLCBpZH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZFRvb2xiYXIgc2hvdz17c2hvd30gY2xhc3NOYW1lPXtgJHtpZH0tZHJvcGRvd25gfT5cbiAgICAgICAgPENsaWNrT3V0c2lkZUNsb3NlRHJvcGRvd25cbiAgICAgICAgICBjbGFzc05hbWU9XCJwYW5lbC1oZWFkZXItZHJvcGRvd25fX2lubmVyXCJcbiAgICAgICAgICBzaG93PXtzaG93fVxuICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgICAgID5cbiAgICAgICAgICB7aXRlbXMubWFwKGl0bSA9PiAoXG4gICAgICAgICAgICA8VG9vbGJhckl0ZW1cbiAgICAgICAgICAgICAga2V5PXtpdG0ua2V5fVxuICAgICAgICAgICAgICBsYWJlbD17aXRtLmxhYmVsfVxuICAgICAgICAgICAgICBpY29uPXtpdG0uaWNvbn1cbiAgICAgICAgICAgICAgb25DbGljaz17aXRtLm9uQ2xpY2t9XG4gICAgICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0NsaWNrT3V0c2lkZUNsb3NlRHJvcGRvd24+XG4gICAgICA8L1N0eWxlZFRvb2xiYXI+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gUGFuZWxIZWFkZXJEcm9wZG93bjtcbn07XG5cbmNvbnN0IGdldERyb3Bkb3duSXRlbXNTZWxlY3RvciA9ICgpID0+XG4gIGNyZWF0ZVNlbGVjdG9yKFxuICAgIHByb3BzID0+IHByb3BzLFxuICAgIHByb3BzID0+XG4gICAgICBwcm9wcy5pdGVtc1xuICAgICAgICAubWFwKHQgPT4gKHtcbiAgICAgICAgICAuLi50LFxuICAgICAgICAgIG9uQ2xpY2s6IHQub25DbGljayAmJiB0Lm9uQ2xpY2socHJvcHMpID8gdC5vbkNsaWNrKHByb3BzKSA6IG51bGxcbiAgICAgICAgfSkpXG4gICAgICAgIC5maWx0ZXIobCA9PiBsLm9uQ2xpY2spXG4gICk7XG5cbmV4cG9ydCBjb25zdCBTYXZlRXhwb3J0RHJvcGRvd25GYWN0b3J5ID0gUGFuZWxIZWFkZXJEcm9wZG93biA9PiB7XG4gIGNvbnN0IGRyb3Bkb3duSXRlbXNTZWxlY3RvciA9IGdldERyb3Bkb3duSXRlbXNTZWxlY3RvcigpO1xuXG4gIGNvbnN0IFNhdmVFeHBvcnREcm9wZG93biA9IHByb3BzID0+IChcbiAgICA8UGFuZWxIZWFkZXJEcm9wZG93blxuICAgICAgaXRlbXM9e2Ryb3Bkb3duSXRlbXNTZWxlY3Rvcihwcm9wcyl9XG4gICAgICBzaG93PXtwcm9wcy5zaG93fVxuICAgICAgb25DbG9zZT17cHJvcHMub25DbG9zZX1cbiAgICAgIGlkPVwic2F2ZS1leHBvcnRcIlxuICAgIC8+XG4gICk7XG5cbiAgU2F2ZUV4cG9ydERyb3Bkb3duLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ0V4cG9ydCBJbWFnZScsXG4gICAgICAgIGljb246IFBpY3R1cmUsXG4gICAgICAgIGtleTogJ2ltYWdlJyxcbiAgICAgICAgb25DbGljazogcHJvcHMgPT4gcHJvcHMub25FeHBvcnRJbWFnZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdFeHBvcnQgRGF0YScsXG4gICAgICAgIGljb246IERhdGFUYWJsZSxcbiAgICAgICAga2V5OiAnZGF0YScsXG4gICAgICAgIG9uQ2xpY2s6IHByb3BzID0+IHByb3BzLm9uRXhwb3J0RGF0YVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdFeHBvcnQgTWFwJyxcbiAgICAgICAgaWNvbjogTWFwSWNvbixcbiAgICAgICAga2V5OiAnbWFwJyxcbiAgICAgICAgb25DbGljazogcHJvcHMgPT4gcHJvcHMub25FeHBvcnRNYXBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnU2F2ZSBNYXAnLFxuICAgICAgICBpY29uOiBTYXZlMixcbiAgICAgICAga2V5OiAnc2F2ZScsXG4gICAgICAgIG9uQ2xpY2s6IHByb3BzID0+IHByb3BzLm9uU2F2ZU1hcFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdTaGFyZSBNYXAgVVJMJyxcbiAgICAgICAgaWNvbjogU2hhcmUsXG4gICAgICAgIGtleTogJ3NoYXJlJyxcbiAgICAgICAgb25DbGljazogcHJvcHMgPT4gcHJvcHMub25TaGFyZU1hcFxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICByZXR1cm4gU2F2ZUV4cG9ydERyb3Bkb3duO1xufTtcblNhdmVFeHBvcnREcm9wZG93bkZhY3RvcnkuZGVwcyA9IFtQYW5lbEhlYWRlckRyb3Bkb3duRmFjdG9yeV07XG5cbmV4cG9ydCBjb25zdCBDbG91ZFN0b3JhZ2VEcm9wZG93bkZhY3RvcnkgPSBQYW5lbEhlYWRlckRyb3Bkb3duID0+IHtcbiAgY29uc3QgZHJvcGRvd25JdGVtc1NlbGVjdG9yID0gZ2V0RHJvcGRvd25JdGVtc1NlbGVjdG9yKCk7XG5cbiAgY29uc3QgQ2xvdWRTdG9yYWdlRHJvcGRvd24gPSBwcm9wcyA9PiAoXG4gICAgPFBhbmVsSGVhZGVyRHJvcGRvd25cbiAgICAgIGl0ZW1zPXtkcm9wZG93bkl0ZW1zU2VsZWN0b3IocHJvcHMpfVxuICAgICAgc2hvdz17cHJvcHMuc2hvd31cbiAgICAgIG9uQ2xvc2U9e3Byb3BzLm9uQ2xvc2V9XG4gICAgICBpZD1cImNsb3VkLXN0b3JhZ2VcIlxuICAgIC8+XG4gICk7XG4gIENsb3VkU3RvcmFnZURyb3Bkb3duLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ1NhdmUnLFxuICAgICAgICBpY29uOiBTYXZlMixcbiAgICAgICAga2V5OiAnc2F2ZScsXG4gICAgICAgIG9uQ2xpY2s6IHByb3BzID0+IHByb3BzLm9uU2F2ZVRvU3RvcmFnZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdTYXZlIEFzJyxcbiAgICAgICAgaWNvbjogU2F2ZTIsXG4gICAgICAgIGtleTogJ3NhdmVBcycsXG4gICAgICAgIG9uQ2xpY2s6IHByb3BzID0+IHByb3BzLm9uU2F2ZUFzVG9TdG9yYWdlXG4gICAgICB9XG4gICAgXVxuICB9O1xuICByZXR1cm4gQ2xvdWRTdG9yYWdlRHJvcGRvd247XG59O1xuQ2xvdWRTdG9yYWdlRHJvcGRvd25GYWN0b3J5LmRlcHMgPSBbUGFuZWxIZWFkZXJEcm9wZG93bkZhY3RvcnldO1xuXG5QYW5lbEhlYWRlckZhY3RvcnkuZGVwcyA9IFtTYXZlRXhwb3J0RHJvcGRvd25GYWN0b3J5LCBDbG91ZFN0b3JhZ2VEcm9wZG93bkZhY3RvcnldO1xuXG5mdW5jdGlvbiBQYW5lbEhlYWRlckZhY3RvcnkoU2F2ZUV4cG9ydERyb3Bkb3duLCBDbG91ZFN0b3JhZ2VEcm9wZG93bikge1xuICByZXR1cm4gY2xhc3MgUGFuZWxIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBhcHBOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgYXBwV2Vic2l0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHZlcnNpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB2aXNpYmxlRHJvcGRvd246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBsb2dvQ29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICAgIGFjdGlvbkl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcbiAgICAgIG9uRXhwb3J0SW1hZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgb25FeHBvcnREYXRhOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIG9uRXhwb3J0Q29uZmlnOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIG9uRXhwb3J0TWFwOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIG9uU2F2ZVRvU3RvcmFnZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBvblNhdmVBc1RvU3RvcmFnZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBvblNhdmVNYXA6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgb25TaGFyZU1hcDogUHJvcFR5cGVzLmZ1bmNcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIGxvZ29Db21wb25lbnQ6IEtlcGxlckdsTG9nbyxcbiAgICAgIGFjdGlvbkl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ3N0b3JhZ2UnLFxuICAgICAgICAgIGljb25Db21wb25lbnQ6IERiLFxuICAgICAgICAgIHRvb2x0aXA6ICdDbG91ZCBTdG9yYWdlJyxcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7fSxcbiAgICAgICAgICBkcm9wZG93bkNvbXBvbmVudDogQ2xvdWRTdG9yYWdlRHJvcGRvd25cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnc2F2ZScsXG4gICAgICAgICAgaWNvbkNvbXBvbmVudDogU2F2ZSxcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7fSxcbiAgICAgICAgICBsYWJlbDogJ1NoYXJlJyxcbiAgICAgICAgICBkcm9wZG93bkNvbXBvbmVudDogU2F2ZUV4cG9ydERyb3Bkb3duXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBhcHBOYW1lLFxuICAgICAgICBhcHBXZWJzaXRlLFxuICAgICAgICB2ZXJzaW9uLFxuICAgICAgICBhY3Rpb25JdGVtcyxcbiAgICAgICAgdmlzaWJsZURyb3Bkb3duLFxuICAgICAgICBzaG93RXhwb3J0RHJvcGRvd24sXG4gICAgICAgIGhpZGVFeHBvcnREcm9wZG93bixcbiAgICAgICAgLi4uZHJvcGRvd25DYWxsYmFja3NcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgbGV0IGl0ZW1zID0gYWN0aW9uSXRlbXMgfHwgW107XG5cbiAgICAgIC8vIGRvbid0IHJlbmRlciBjbG91ZCBzdG9yYWdlIGljb24gaWYgb25TYXZlVG9TdG9yYWdlIGlzIG5vdCBwcm92aWRlZFxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uU2F2ZVRvU3RvcmFnZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpdGVtcyA9IGFjdGlvbkl0ZW1zLmZpbHRlcihhaSA9PiBhaS5pZCAhPT0gJ3N0b3JhZ2UnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZFBhbmVsSGVhZGVyIGNsYXNzTmFtZT1cInNpZGUtcGFuZWxfX3BhbmVsLWhlYWRlclwiPlxuICAgICAgICAgIDxTdHlsZWRQYW5lbEhlYWRlclRvcCBjbGFzc05hbWU9XCJzaWRlLXBhbmVsX19wYW5lbC1oZWFkZXJfX3RvcFwiPlxuICAgICAgICAgICAgPHRoaXMucHJvcHMubG9nb0NvbXBvbmVudCBhcHBOYW1lPXthcHBOYW1lfSB2ZXJzaW9uPXt2ZXJzaW9ufSBhcHBXZWJzaXRlPXthcHBXZWJzaXRlfSAvPlxuICAgICAgICAgICAgPFN0eWxlZFBhbmVsVG9wQWN0aW9ucz5cbiAgICAgICAgICAgICAge2l0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaWRlLXBhbmVsX19wYW5lbC1oZWFkZXJfX3JpZ2h0XCJcbiAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZSd9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxQYW5lbEFjdGlvblxuICAgICAgICAgICAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZHJvcGRvd25Db21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dFeHBvcnREcm9wZG93bihpdGVtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5vbkNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge2l0ZW0uZHJvcGRvd25Db21wb25lbnQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxpdGVtLmRyb3Bkb3duQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGlkZUV4cG9ydERyb3Bkb3dufVxuICAgICAgICAgICAgICAgICAgICAgIHNob3c9e3Zpc2libGVEcm9wZG93biA9PT0gaXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICB7Li4uZHJvcGRvd25DYWxsYmFja3N9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1N0eWxlZFBhbmVsVG9wQWN0aW9ucz5cbiAgICAgICAgICA8L1N0eWxlZFBhbmVsSGVhZGVyVG9wPlxuICAgICAgICA8L1N0eWxlZFBhbmVsSGVhZGVyPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhbmVsSGVhZGVyRmFjdG9yeTtcbiJdfQ==