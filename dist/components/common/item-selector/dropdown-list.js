"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ListItem = exports.classList = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  border-top: 1px solid ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var classList = {
  list: 'list-selector',
  listHeader: 'list__header',
  listSection: 'list__section',
  listItem: 'list__item',
  listItemAnchor: 'list__item__anchor'
};
exports.classList = classList;

var defaultDisplay = function defaultDisplay(d) {
  return d;
};

var ListItem = function ListItem(_ref) {
  var value = _ref.value,
      _ref$displayOption = _ref.displayOption,
      displayOption = _ref$displayOption === void 0 ? defaultDisplay : _ref$displayOption;
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: classList.listItemAnchor
  }, displayOption(value));
};

exports.ListItem = ListItem;

var DropdownListWrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.dropdownListBorderTop;
}, function (props) {
  return props.theme.dropdownList;
});

var DropdownList = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(DropdownList, _Component);

  var _super = _createSuper(DropdownList);

  function DropdownList() {
    (0, _classCallCheck2["default"])(this, DropdownList);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(DropdownList, [{
    key: "_onClick",
    value: function _onClick(result, event) {
      event.preventDefault();
      this.props.onOptionSelected(result, event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var fixedOptions = this.props.fixedOptions;
      var display = this.props.displayOption; // Don't render if there are no options to display

      if (!this.props.options.length && this.props.allowCustomValues <= 0) {
        return false;
      }

      var valueOffset = Array.isArray(fixedOptions) ? fixedOptions.length : 0; // For some reason onClick is not fired when clicked on an option
      // onMouseDown is used here as a workaround of #205 and other

      return /*#__PURE__*/_react["default"].createElement(DropdownListWrapper, {
        className: classList.list
      }, this.props.customListHeaderComponent ? /*#__PURE__*/_react["default"].createElement("div", {
        className: classList.listHeader
      }, /*#__PURE__*/_react["default"].createElement(this.props.customListHeaderComponent, null)) : null, valueOffset > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
        className: classList.listSection
      }, fixedOptions.map(function (value, i) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: (0, _classnames["default"])(classList.listItem, {
            hover: _this.props.selectionIndex === i,
            fixed: true
          }),
          key: "".concat(display(value), "_").concat(i),
          onMouseDown: function onMouseDown(e) {
            return _this._onClick(value, e);
          },
          onClick: function onClick(e) {
            return _this._onClick(value, e);
          }
        }, /*#__PURE__*/_react["default"].createElement(_this.props.customListItemComponent, {
          value: value,
          displayOption: display
        }));
      })) : null, this.props.options.map(function (value, i) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: (0, _classnames["default"])(classList.listItem, {
            hover: _this.props.selectionIndex === i + valueOffset
          }),
          key: "".concat(display(value), "_").concat(i),
          onMouseDown: function onMouseDown(e) {
            return _this._onClick(value, e);
          },
          onClick: function onClick(e) {
            return _this._onClick(value, e);
          }
        }, /*#__PURE__*/_react["default"].createElement(_this.props.customListItemComponent, {
          value: value,
          displayOption: display
        }));
      }));
    }
  }]);
  return DropdownList;
}(_react.Component);

exports["default"] = DropdownList;
(0, _defineProperty2["default"])(DropdownList, "propTypes", {
  options: _propTypes["default"].arrayOf(_propTypes["default"].any),
  allowCustomValues: _propTypes["default"].number,
  customClasses: _propTypes["default"].object,
  customValues: _propTypes["default"].arrayOf(_propTypes["default"].any),
  customListItemComponent: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
  customListHeaderComponent: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
  selectionIndex: _propTypes["default"].number,
  onOptionSelected: _propTypes["default"].func,
  displayOption: _propTypes["default"].func.isRequired,
  defaultClassNames: _propTypes["default"].bool,
  areResultsTruncated: _propTypes["default"].bool,
  resultsTruncatedMessage: _propTypes["default"].string,
  listItemComponent: _propTypes["default"].func
});
(0, _defineProperty2["default"])(DropdownList, "defaultProps", {
  customClasses: {},
  customListItemComponent: ListItem,
  customListHeaderComponent: null,
  allowCustomValues: 0,
  customValues: [],
  displayOption: defaultDisplay,
  onOptionSelected: function onOptionSelected() {},
  defaultClassNames: true,
  selectionIndex: null
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2Ryb3Bkb3duLWxpc3QuanMiXSwibmFtZXMiOlsiY2xhc3NMaXN0IiwibGlzdCIsImxpc3RIZWFkZXIiLCJsaXN0U2VjdGlvbiIsImxpc3RJdGVtIiwibGlzdEl0ZW1BbmNob3IiLCJkZWZhdWx0RGlzcGxheSIsImQiLCJMaXN0SXRlbSIsInZhbHVlIiwiZGlzcGxheU9wdGlvbiIsIkRyb3Bkb3duTGlzdFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiZHJvcGRvd25MaXN0QmdkIiwiZHJvcGRvd25MaXN0Qm9yZGVyVG9wIiwiZHJvcGRvd25MaXN0IiwiRHJvcGRvd25MaXN0IiwicmVzdWx0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm9uT3B0aW9uU2VsZWN0ZWQiLCJmaXhlZE9wdGlvbnMiLCJkaXNwbGF5Iiwib3B0aW9ucyIsImxlbmd0aCIsImFsbG93Q3VzdG9tVmFsdWVzIiwidmFsdWVPZmZzZXQiLCJBcnJheSIsImlzQXJyYXkiLCJjdXN0b21MaXN0SGVhZGVyQ29tcG9uZW50IiwibWFwIiwiaSIsImhvdmVyIiwic2VsZWN0aW9uSW5kZXgiLCJmaXhlZCIsImUiLCJfb25DbGljayIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJhbnkiLCJudW1iZXIiLCJjdXN0b21DbGFzc2VzIiwib2JqZWN0IiwiY3VzdG9tVmFsdWVzIiwiY3VzdG9tTGlzdEl0ZW1Db21wb25lbnQiLCJvbmVPZlR5cGUiLCJlbGVtZW50IiwiZnVuYyIsImlzUmVxdWlyZWQiLCJkZWZhdWx0Q2xhc3NOYW1lcyIsImJvb2wiLCJhcmVSZXN1bHRzVHJ1bmNhdGVkIiwicmVzdWx0c1RydW5jYXRlZE1lc3NhZ2UiLCJzdHJpbmciLCJsaXN0SXRlbUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFD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QkFBTSxDQUFFLENBUE47QUFRcEI4QixFQUFBQSxpQkFBaUIsRUFBRSxJQVJDO0FBU3BCakIsRUFBQUEsY0FBYyxFQUFFO0FBVEksQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBjbGFzc0xpc3QgPSB7XG4gIGxpc3Q6ICdsaXN0LXNlbGVjdG9yJyxcbiAgbGlzdEhlYWRlcjogJ2xpc3RfX2hlYWRlcicsXG4gIGxpc3RTZWN0aW9uOiAnbGlzdF9fc2VjdGlvbicsXG4gIGxpc3RJdGVtOiAnbGlzdF9faXRlbScsXG4gIGxpc3RJdGVtQW5jaG9yOiAnbGlzdF9faXRlbV9fYW5jaG9yJ1xufTtcblxuY29uc3QgZGVmYXVsdERpc3BsYXkgPSBkID0+IGQ7XG5leHBvcnQgY29uc3QgTGlzdEl0ZW0gPSAoe3ZhbHVlLCBkaXNwbGF5T3B0aW9uID0gZGVmYXVsdERpc3BsYXl9KSA9PiAoXG4gIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NMaXN0Lmxpc3RJdGVtQW5jaG9yfT57ZGlzcGxheU9wdGlvbih2YWx1ZSl9PC9zcGFuPlxuKTtcblxuY29uc3QgRHJvcGRvd25MaXN0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0QmdkfTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0Qm9yZGVyVG9wfTtcbiAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3R9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd25MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcbiAgICBhbGxvd0N1c3RvbVZhbHVlczogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjdXN0b21DbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGN1c3RvbVZhbHVlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXG4gICAgY3VzdG9tTGlzdEl0ZW1Db21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGN1c3RvbUxpc3RIZWFkZXJDb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIHNlbGVjdGlvbkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG9uT3B0aW9uU2VsZWN0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRpc3BsYXlPcHRpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZGVmYXVsdENsYXNzTmFtZXM6IFByb3BUeXBlcy5ib29sLFxuICAgIGFyZVJlc3VsdHNUcnVuY2F0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlc3VsdHNUcnVuY2F0ZWRNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxpc3RJdGVtQ29tcG9uZW50OiBQcm9wVHlwZXMuZnVuY1xuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY3VzdG9tQ2xhc3Nlczoge30sXG4gICAgY3VzdG9tTGlzdEl0ZW1Db21wb25lbnQ6IExpc3RJdGVtLFxuICAgIGN1c3RvbUxpc3RIZWFkZXJDb21wb25lbnQ6IG51bGwsXG4gICAgYWxsb3dDdXN0b21WYWx1ZXM6IDAsXG4gICAgY3VzdG9tVmFsdWVzOiBbXSxcbiAgICBkaXNwbGF5T3B0aW9uOiBkZWZhdWx0RGlzcGxheSxcbiAgICBvbk9wdGlvblNlbGVjdGVkOiAoKSA9PiB7fSxcbiAgICBkZWZhdWx0Q2xhc3NOYW1lczogdHJ1ZSxcbiAgICBzZWxlY3Rpb25JbmRleDogbnVsbFxuICB9O1xuXG4gIF9vbkNsaWNrKHJlc3VsdCwgZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25PcHRpb25TZWxlY3RlZChyZXN1bHQsIGV2ZW50KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7Zml4ZWRPcHRpb25zfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZGlzcGxheSA9IHRoaXMucHJvcHMuZGlzcGxheU9wdGlvbjtcblxuICAgIC8vIERvbid0IHJlbmRlciBpZiB0aGVyZSBhcmUgbm8gb3B0aW9ucyB0byBkaXNwbGF5XG4gICAgaWYgKCF0aGlzLnByb3BzLm9wdGlvbnMubGVuZ3RoICYmIHRoaXMucHJvcHMuYWxsb3dDdXN0b21WYWx1ZXMgPD0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlT2Zmc2V0ID0gQXJyYXkuaXNBcnJheShmaXhlZE9wdGlvbnMpID8gZml4ZWRPcHRpb25zLmxlbmd0aCA6IDA7XG5cbiAgICAvLyBGb3Igc29tZSByZWFzb24gb25DbGljayBpcyBub3QgZmlyZWQgd2hlbiBjbGlja2VkIG9uIGFuIG9wdGlvblxuICAgIC8vIG9uTW91c2VEb3duIGlzIHVzZWQgaGVyZSBhcyBhIHdvcmthcm91bmQgb2YgIzIwNSBhbmQgb3RoZXJcbiAgICByZXR1cm4gKFxuICAgICAgPERyb3Bkb3duTGlzdFdyYXBwZXIgY2xhc3NOYW1lPXtjbGFzc0xpc3QubGlzdH0+XG4gICAgICAgIHt0aGlzLnByb3BzLmN1c3RvbUxpc3RIZWFkZXJDb21wb25lbnQgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTGlzdC5saXN0SGVhZGVyfT5cbiAgICAgICAgICAgIDx0aGlzLnByb3BzLmN1c3RvbUxpc3RIZWFkZXJDb21wb25lbnQgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAge3ZhbHVlT2Zmc2V0ID4gMCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NMaXN0Lmxpc3RTZWN0aW9ufT5cbiAgICAgICAgICAgIHtmaXhlZE9wdGlvbnMubWFwKCh2YWx1ZSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzTGlzdC5saXN0SXRlbSwge1xuICAgICAgICAgICAgICAgICAgaG92ZXI6IHRoaXMucHJvcHMuc2VsZWN0aW9uSW5kZXggPT09IGksXG4gICAgICAgICAgICAgICAgICBmaXhlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIGtleT17YCR7ZGlzcGxheSh2YWx1ZSl9XyR7aX1gfVxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHRoaXMuX29uQ2xpY2sodmFsdWUsIGUpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5fb25DbGljayh2YWx1ZSwgZSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGhpcy5wcm9wcy5jdXN0b21MaXN0SXRlbUNvbXBvbmVudCB2YWx1ZT17dmFsdWV9IGRpc3BsYXlPcHRpb249e2Rpc3BsYXl9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIHt0aGlzLnByb3BzLm9wdGlvbnMubWFwKCh2YWx1ZSwgaSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc0xpc3QubGlzdEl0ZW0sIHtcbiAgICAgICAgICAgICAgaG92ZXI6IHRoaXMucHJvcHMuc2VsZWN0aW9uSW5kZXggPT09IGkgKyB2YWx1ZU9mZnNldFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBrZXk9e2Ake2Rpc3BsYXkodmFsdWUpfV8ke2l9YH1cbiAgICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHRoaXMuX29uQ2xpY2sodmFsdWUsIGUpfVxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLl9vbkNsaWNrKHZhbHVlLCBlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dGhpcy5wcm9wcy5jdXN0b21MaXN0SXRlbUNvbXBvbmVudCB2YWx1ZT17dmFsdWV9IGRpc3BsYXlPcHRpb249e2Rpc3BsYXl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9Ecm9wZG93bkxpc3RXcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==