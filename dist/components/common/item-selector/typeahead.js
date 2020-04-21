"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _fuzzy = _interopRequireDefault(require("fuzzy"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _window = require("global/window");

var _accessor = _interopRequireDefault(require("./accessor"));

var _keyevent = _interopRequireDefault(require("./keyevent"));

var _dropdownList = _interopRequireWildcard(require("./dropdown-list"));

var _icons = require("../icons");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  right: 15px;\n  top: 14px;\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", " :hover {\n    cursor: pointer;\n    background-color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 8px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  :focus {\n    outline: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var DEFAULT_CLASS = 'typeahead';
/**
 * Copied mostly from 'react-typeahead', an auto-completing text input
 *
 * Renders an text input that shows options nearby that you can use the
 * keyboard or mouse to select.
 */

var TypeaheadWrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.dropdownListShadow;
});

var InputBox = _styledComponents["default"].div(_templateObject2());

var TypeaheadInput = _styledComponents["default"].input(_templateObject3(), function (props) {
  return props.theme.secondaryInput;
}, function (props) {
  return props.theme.secondaryInputBgd;
});

var InputIcon = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.theme.inputPlaceholderColor;
});

function generateSearchFunction(props) {
  var searchOptions = props.searchOptions,
      filterOption = props.filterOption;

  if (typeof searchOptions === 'function') {
    if (filterOption !== null) {
      _window.console.warn('searchOptions prop is being used, filterOption prop will be ignored');
    }

    return searchOptions;
  } else if (typeof filterOption === 'function') {
    // use custom filter option
    return function (value, options) {
      return options.filter(function (o) {
        return filterOption(value, o);
      });
    };
  }

  var mapper = typeof filterOption === 'string' ? _accessor["default"].generateAccessor(filterOption) : _accessor["default"].IDENTITY_FN;
  return function (value, options) {
    return _fuzzy["default"].filter(value, options, {
      extract: mapper
    }).map(function (res) {
      return options[res.index];
    });
  };
}

function getOptionsForValue(value, props, state) {
  var options = props.options,
      showOptionsWhenEmpty = props.showOptionsWhenEmpty;

  if (!props.searchable) {
    // directly pass through options if can not be searched
    return options;
  }

  if (shouldSkipSearch(value, state, showOptionsWhenEmpty)) {
    return options;
  }

  var searchOptions = generateSearchFunction(props);
  return searchOptions(value, options);
}

function shouldSkipSearch(input, state, showOptionsWhenEmpty) {
  var emptyValue = !input || input.trim().length === 0; // this.state must be checked because it may not be defined yet if this function
  // is called from within getInitialState

  var isFocused = state && state.isFocused;
  return !(showOptionsWhenEmpty && isFocused) && emptyValue;
}

var Typeahead = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Typeahead, _Component);

  var _super = _createSuper(Typeahead);

  (0, _createClass2["default"])(Typeahead, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      //  invoked after a component is instantiated as well as before it is re-rendered
      var searchResults = getOptionsForValue(state.entryValue, props, state);
      return {
        searchResults: searchResults
      };
    }
  }]);

  function Typeahead(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Typeahead);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "root", (0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "entry", (0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "focus", function () {
      if (_this.entry.current) {
        _this.entry.current.focus();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_hasCustomValue", function () {
      return _this.props.allowCustomValues > 0 && _this.state.entryValue.length >= _this.props.allowCustomValues && _this.state.searchResults.indexOf(_this.state.entryValue) < 0;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_getCustomValue", function () {
      return _this._hasCustomValue() ? _this.state.entryValue : null;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onOptionSelected", function (option, event) {
      if (_this.props.searchable) {
        // reset entry input
        _this.setState({
          searchResults: getOptionsForValue('', _this.props, _this.state),
          selection: '',
          entryValue: ''
        });
      }

      return _this.props.onOptionSelected(option, event);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onTextEntryUpdated", function () {
      if (_this.props.searchable) {
        var value = _this.entry.current.value;

        _this.setState({
          searchResults: getOptionsForValue(value, _this.props, _this.state),
          selection: '',
          entryValue: value
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onEnter", function (event) {
      var selection = _this.getSelection();

      if (!selection) {
        return _this.props.onKeyDown(event);
      }

      return _this._onOptionSelected(selection, event);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onEscape", function () {
      _this.setState({
        selectionIndex: null
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onTab", function (event) {
      var selection = _this.getSelection();

      var option = selection ? selection : _this.state.searchResults.length > 0 ? _this.state.searchResults[0] : null;

      if (option === null && _this._hasCustomValue()) {
        option = _this._getCustomValue();
      }

      if (option !== null) {
        return _this._onOptionSelected(option, event);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "eventMap", function (event) {
      var events = {};
      events[_keyevent["default"].DOM_VK_UP] = _this.navUp;
      events[_keyevent["default"].DOM_VK_DOWN] = _this.navDown;
      events[_keyevent["default"].DOM_VK_RETURN] = events[_keyevent["default"].DOM_VK_ENTER] = _this._onEnter;
      events[_keyevent["default"].DOM_VK_ESCAPE] = _this._onEscape;
      events[_keyevent["default"].DOM_VK_TAB] = _this._onTab;
      return events;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_nav", function (delta) {
      if (!_this._hasHint()) {
        return;
      }

      var newIndex = _this.state.selectionIndex === null ? delta === 1 ? 0 : delta : _this.state.selectionIndex + delta;
      var length = _this.props.maxVisible ? _this.state.searchResults.slice(0, _this.props.maxVisible).length : _this.state.searchResults.length;

      if (_this._hasCustomValue()) {
        length += 1;
      }

      if (newIndex < 0) {
        newIndex += length;
      } else if (newIndex >= length) {
        newIndex -= length;
      }

      _this.setState({
        selectionIndex: newIndex
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "navDown", function () {
      _this._nav(1);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "navUp", function () {
      _this._nav(-1);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onChange", function (event) {
      if (_this.props.onChange) {
        _this.props.onChange(event);
      }

      _this._onTextEntryUpdated();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onKeyDown", function (event) {
      // If there are no visible elements, don't perform selector navigation.
      // Just pass this up to the upstream onKeydown handler.
      // Also skip if the user is pressing the shift key, since none of our handlers are looking for shift
      if (!_this._hasHint() || event.shiftKey) {
        return _this.props.onKeyDown(event);
      }

      var handler = _this.eventMap()[event.keyCode];

      if (handler) {
        handler(event);
      } else {
        return _this.props.onKeyDown(event);
      } // Don't propagate the keystroke back to the DOM/browser


      event.preventDefault();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onFocus", function (event) {
      _this.setState({
        isFocused: true
      });

      if (_this.props.onFocus) {
        return _this.props.onFocus(event);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onBlur", function (event) {
      _this.setState({
        isFocused: false
      });

      if (_this.props.onBlur) {
        return _this.props.onBlur(event);
      }
    });
    _this.state = {
      searchResults: [],
      // This should be called something else, 'entryValue'
      entryValue: _this.props.value || _this.props.initialValue,
      // A valid typeahead value
      selection: _this.props.value,
      // Index of the selection
      selectionIndex: null,
      // Keep track of the focus state of the input element, to determine
      // whether to show options when empty (if showOptionsWhenEmpty is true)
      isFocused: false
    };
    return _this;
  }

  (0, _createClass2["default"])(Typeahead, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // call focus on entry or div to trigger key events listener
      if (this.entry.current) {
        this.entry.current.focus();
      } else {
        this.root.current.focus();
      }
    }
  }, {
    key: "_renderIncrementalSearchResults",
    value: function _renderIncrementalSearchResults() {
      return /*#__PURE__*/_react["default"].createElement(this.props.customListComponent, {
        fixedOptions: this.props.fixedOptions,
        options: this.props.maxVisible ? this.state.searchResults.slice(0, this.props.maxVisible) : this.state.searchResults,
        areResultsTruncated: this.props.maxVisible && this.state.searchResults.length > this.props.maxVisible,
        resultsTruncatedMessage: this.props.resultsTruncatedMessage,
        onOptionSelected: this._onOptionSelected,
        allowCustomValues: this.props.allowCustomValues,
        customValue: this._getCustomValue(),
        customClasses: this.props.customClasses,
        customListItemComponent: this.props.customListItemComponent,
        customListHeaderComponent: this.props.customListHeaderComponent,
        selectionIndex: this.state.selectionIndex,
        defaultClassNames: this.props.defaultClassNames,
        displayOption: this.props.displayOption,
        selectedItems: this.props.selectedItems
      });
    }
  }, {
    key: "getSelection",
    value: function getSelection() {
      var index = this.state.selectionIndex;

      if (this._hasCustomValue()) {
        if (index === 0) {
          return this.state.entryValue;
        }

        index--;
      }

      if (this._hasFixedOptions()) {
        return index < this.props.fixedOptions.length ? this.props.fixedOptions[index] : this.state.searchResults[index - this.props.fixedOptions.length];
      }

      return this.state.searchResults[index];
    }
  }, {
    key: "_renderHiddenInput",
    value: function _renderHiddenInput() {
      if (!this.props.name) {
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement("input", {
        type: "hidden",
        name: this.props.name,
        value: this.state.selection
      });
    }
  }, {
    key: "_hasHint",
    value: function _hasHint() {
      return this.state.searchResults.length > 0 || this._hasCustomValue();
    }
  }, {
    key: "_hasFixedOptions",
    value: function _hasFixedOptions() {
      return Array.isArray(this.props.fixedOptions) && this.props.fixedOptions.length;
    }
  }, {
    key: "render",
    value: function render() {
      var inputClasses = {};
      inputClasses[this.props.customClasses.input] = Boolean(this.props.customClasses.input);
      var inputClassList = (0, _classnames["default"])(inputClasses);
      var classes = (0, _defineProperty2["default"])({}, DEFAULT_CLASS, this.props.defaultClassNames);
      classes[this.props.className] = Boolean(this.props.className);
      var classList = (0, _classnames["default"])(classes);
      return /*#__PURE__*/_react["default"].createElement(TypeaheadWrapper, {
        className: classList,
        ref: this.root,
        tabIndex: "0",
        onKeyDown: this._onKeyDown,
        onKeyPress: this.props.onKeyPress,
        onKeyUp: this.props.onKeyUp,
        onFocus: this._onFocus
      }, this._renderHiddenInput(), this.props.searchable ? /*#__PURE__*/_react["default"].createElement(InputBox, null, /*#__PURE__*/_react["default"].createElement(TypeaheadInput, (0, _extends2["default"])({
        ref: this.entry,
        type: "text",
        disabled: this.props.disabled
      }, this.props.inputProps, {
        placeholder: this.props.placeholder,
        className: inputClassList,
        value: this.state.entryValue,
        onChange: this._onChange,
        onBlur: this._onBlur
      })), /*#__PURE__*/_react["default"].createElement(InputIcon, null, /*#__PURE__*/_react["default"].createElement(_icons.Search, {
        height: "18px"
      }))) : null, this._renderIncrementalSearchResults());
    }
  }]);
  return Typeahead;
}(_react.Component);

(0, _defineProperty2["default"])(Typeahead, "propTypes", {
  name: _propTypes["default"].string,
  customClasses: _propTypes["default"].object,
  maxVisible: _propTypes["default"].number,
  resultsTruncatedMessage: _propTypes["default"].string,
  options: _propTypes["default"].arrayOf(_propTypes["default"].any),
  fixedOptions: _propTypes["default"].arrayOf(_propTypes["default"].any),
  allowCustomValues: _propTypes["default"].number,
  initialValue: _propTypes["default"].string,
  value: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  textarea: _propTypes["default"].bool,
  inputProps: _propTypes["default"].object,
  onOptionSelected: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onKeyPress: _propTypes["default"].func,
  onKeyUp: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  filterOption: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  searchOptions: _propTypes["default"].func,
  displayOption: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  inputDisplayOption: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  formInputOption: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  defaultClassNames: _propTypes["default"].bool,
  customListComponent: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
  customListItemComponent: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
  customListHeaderComponent: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
  showOptionsWhenEmpty: _propTypes["default"].bool,
  searchable: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(Typeahead, "defaultProps", {
  options: [],
  customClasses: {},
  allowCustomValues: 0,
  initialValue: '',
  value: '',
  placeholder: '',
  disabled: false,
  textarea: false,
  inputProps: {},
  onOptionSelected: function onOptionSelected(option) {},
  onChange: function onChange(event) {},
  onKeyDown: function onKeyDown(event) {},
  onKeyPress: function onKeyPress(event) {},
  onKeyUp: function onKeyUp(event) {},
  onFocus: function onFocus(event) {},
  onBlur: function onBlur(event) {},
  filterOption: null,
  searchOptions: null,
  inputDisplayOption: null,
  defaultClassNames: true,
  customListComponent: _dropdownList["default"],
  customListItemComponent: _dropdownList.ListItem,
  customListHeaderComponent: null,
  showOptionsWhenEmpty: true,
  searchable: true,
  resultsTruncatedMessage: null
});
(0, _reactLifecyclesCompat.polyfill)(Typeahead);
var _default = Typeahead;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL3R5cGVhaGVhZC5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX0NMQVNTIiwiVHlwZWFoZWFkV3JhcHBlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJkcm9wZG93bkxpc3RCZ2QiLCJkcm9wZG93bkxpc3RTaGFkb3ciLCJJbnB1dEJveCIsIlR5cGVhaGVhZElucHV0IiwiaW5wdXQiLCJzZWNvbmRhcnlJbnB1dCIsInNlY29uZGFyeUlucHV0QmdkIiwiSW5wdXRJY29uIiwiaW5wdXRQbGFjZWhvbGRlckNvbG9yIiwiZ2VuZXJhdGVTZWFyY2hGdW5jdGlvbiIsInNlYXJjaE9wdGlvbnMiLCJmaWx0ZXJPcHRpb24iLCJDb25zb2xlIiwid2FybiIsInZhbHVlIiwib3B0aW9ucyIsImZpbHRlciIsIm8iLCJtYXBwZXIiLCJBY2Nlc3NvciIsImdlbmVyYXRlQWNjZXNzb3IiLCJJREVOVElUWV9GTiIsImZ1enp5IiwiZXh0cmFjdCIsIm1hcCIsInJlcyIsImluZGV4IiwiZ2V0T3B0aW9uc0ZvclZhbHVlIiwic3RhdGUiLCJzaG93T3B0aW9uc1doZW5FbXB0eSIsInNlYXJjaGFibGUiLCJzaG91bGRTa2lwU2VhcmNoIiwiZW1wdHlWYWx1ZSIsInRyaW0iLCJsZW5ndGgiLCJpc0ZvY3VzZWQiLCJUeXBlYWhlYWQiLCJzZWFyY2hSZXN1bHRzIiwiZW50cnlWYWx1ZSIsImVudHJ5IiwiY3VycmVudCIsImZvY3VzIiwiYWxsb3dDdXN0b21WYWx1ZXMiLCJpbmRleE9mIiwiX2hhc0N1c3RvbVZhbHVlIiwib3B0aW9uIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInNlbGVjdGlvbiIsIm9uT3B0aW9uU2VsZWN0ZWQiLCJnZXRTZWxlY3Rpb24iLCJvbktleURvd24iLCJfb25PcHRpb25TZWxlY3RlZCIsInNlbGVjdGlvbkluZGV4IiwiX2dldEN1c3RvbVZhbHVlIiwiZXZlbnRzIiwiS2V5RXZlbnQiLCJET01fVktfVVAiLCJuYXZVcCIsIkRPTV9WS19ET1dOIiwibmF2RG93biIsIkRPTV9WS19SRVRVUk4iLCJET01fVktfRU5URVIiLCJfb25FbnRlciIsIkRPTV9WS19FU0NBUEUiLCJfb25Fc2NhcGUiLCJET01fVktfVEFCIiwiX29uVGFiIiwiZGVsdGEiLCJfaGFzSGludCIsIm5ld0luZGV4IiwibWF4VmlzaWJsZSIsInNsaWNlIiwiX25hdiIsIm9uQ2hhbmdlIiwiX29uVGV4dEVudHJ5VXBkYXRlZCIsInNoaWZ0S2V5IiwiaGFuZGxlciIsImV2ZW50TWFwIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0Iiwib25Gb2N1cyIsIm9uQmx1ciIsImluaXRpYWxWYWx1ZSIsInJvb3QiLCJmaXhlZE9wdGlvbnMiLCJyZXN1bHRzVHJ1bmNhdGVkTWVzc2FnZSIsImN1c3RvbUNsYXNzZXMiLCJjdXN0b21MaXN0SXRlbUNvbXBvbmVudCIsImN1c3RvbUxpc3RIZWFkZXJDb21wb25lbnQiLCJkZWZhdWx0Q2xhc3NOYW1lcyIsImRpc3BsYXlPcHRpb24iLCJzZWxlY3RlZEl0ZW1zIiwiX2hhc0ZpeGVkT3B0aW9ucyIsIm5hbWUiLCJBcnJheSIsImlzQXJyYXkiLCJpbnB1dENsYXNzZXMiLCJCb29sZWFuIiwiaW5wdXRDbGFzc0xpc3QiLCJjbGFzc2VzIiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiX29uS2V5RG93biIsIm9uS2V5UHJlc3MiLCJvbktleVVwIiwiX29uRm9jdXMiLCJfcmVuZGVySGlkZGVuSW5wdXQiLCJkaXNhYmxlZCIsImlucHV0UHJvcHMiLCJwbGFjZWhvbGRlciIsIl9vbkNoYW5nZSIsIl9vbkJsdXIiLCJfcmVuZGVySW5jcmVtZW50YWxTZWFyY2hSZXN1bHRzIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwib2JqZWN0IiwibnVtYmVyIiwiYXJyYXlPZiIsImFueSIsImJvb2wiLCJ0ZXh0YXJlYSIsImZ1bmMiLCJvbmVPZlR5cGUiLCJpbnB1dERpc3BsYXlPcHRpb24iLCJmb3JtSW5wdXRPcHRpb24iLCJjdXN0b21MaXN0Q29tcG9uZW50IiwiZWxlbWVudCIsIkRyb3Bkb3duTGlzdCIsIkxpc3RJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBRyxXQUF0QjtBQUNBOzs7Ozs7O0FBT0EsSUFBTUMsZ0JBQWdCLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUdBLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsZUFBaEI7QUFBQSxDQUhMLEVBSU4sVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxrQkFBaEI7QUFBQSxDQUpDLENBQXRCOztBQVdBLElBQU1DLFFBQVEsR0FBR04sNkJBQU9DLEdBQVYsb0JBQWQ7O0FBSUEsSUFBTU0sY0FBYyxHQUFHUCw2QkFBT1EsS0FBVixxQkFDaEIsVUFBQU4sS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZTSxjQUFoQjtBQUFBLENBRFcsRUFHSSxVQUFBUCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlPLGlCQUFoQjtBQUFBLENBSFQsQ0FBcEI7O0FBT0EsSUFBTUMsU0FBUyxHQUFHWCw2QkFBT0MsR0FBVixxQkFJSixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlTLHFCQUFoQjtBQUFBLENBSkQsQ0FBZjs7QUFPQSxTQUFTQyxzQkFBVCxDQUFnQ1gsS0FBaEMsRUFBdUM7QUFBQSxNQUM5QlksYUFEOEIsR0FDQ1osS0FERCxDQUM5QlksYUFEOEI7QUFBQSxNQUNmQyxZQURlLEdBQ0NiLEtBREQsQ0FDZmEsWUFEZTs7QUFFckMsTUFBSSxPQUFP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QUxhO0FBTXBCZ0csRUFBQUEsV0FBVyxFQUFFLEVBTk87QUFPcEJGLEVBQUFBLFFBQVEsRUFBRSxLQVBVO0FBUXBCYyxFQUFBQSxRQUFRLEVBQUUsS0FSVTtBQVNwQmIsRUFBQUEsVUFBVSxFQUFFLEVBVFE7QUFVcEI1RCxFQUFBQSxnQkFWb0IsNEJBVUhKLE1BVkcsRUFVSyxDQUFFLENBVlA7QUFXcEI2QixFQUFBQSxRQVhvQixvQkFXWDVCLEtBWFcsRUFXSixDQUFFLENBWEU7QUFZcEJLLEVBQUFBLFNBWm9CLHFCQVlWTCxLQVpVLEVBWUgsQ0FBRSxDQVpDO0FBYXBCMEQsRUFBQUEsVUFib0Isc0JBYVQxRCxLQWJTLEVBYUYsQ0FBRSxDQWJBO0FBY3BCMkQsRUFBQUEsT0Fkb0IsbUJBY1ozRCxLQWRZLEVBY0wsQ0FBRSxDQWRHO0FBZXBCbUMsRUFBQUEsT0Fmb0IsbUJBZVpuQyxLQWZZLEVBZUwsQ0FBRSxDQWZHO0FBZ0JwQm9DLEVBQUFBLE1BaEJvQixrQkFnQmJwQyxLQWhCYSxFQWdCTixDQUFFLENBaEJJO0FBaUJwQm5DLEVBQUFBLFlBQVksRUFBRSxJQWpCTTtBQWtCcEJELEVBQUFBLGFBQWEsRUFBRSxJQWxCSztBQW1CcEJtSCxFQUFBQSxrQkFBa0IsRUFBRSxJQW5CQTtBQW9CcEJuQyxFQUFBQSxpQkFBaUIsRUFBRSxJQXBCQztBQXFCcEJxQyxFQUFBQSxtQkFBbUIsRUFBRUUsd0JBckJEO0FBc0JwQnpDLEVBQUFBLHVCQUF1QixFQUFFMEMsc0JBdEJMO0FBdUJwQnpDLEVBQUFBLHlCQUF5QixFQUFFLElBdkJQO0FBd0JwQjVELEVBQUFBLG9CQUFvQixFQUFFLElBeEJGO0FBeUJwQkMsRUFBQUEsVUFBVSxFQUFFLElBekJRO0FBMEJwQndELEVBQUFBLHVCQUF1QixFQUFFO0FBMUJMLEM7QUFpVnhCLHFDQUFTbEQsU0FBVDtlQUVlQSxTIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBjcmVhdGVSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtwb2x5ZmlsbH0gZnJvbSAncmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgZnV6enkgZnJvbSAnZnV6enknO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7Y29uc29sZSBhcyBDb25zb2xlfSBmcm9tICdnbG9iYWwvd2luZG93JztcclxuXHJcbmltcG9ydCBBY2Nlc3NvciBmcm9tICcuL2FjY2Vzc29yJztcclxuaW1wb3J0IEtleUV2ZW50IGZyb20gJy4va2V5ZXZlbnQnO1xyXG5pbXBvcnQgRHJvcGRvd25MaXN0LCB7TGlzdEl0ZW19IGZyb20gJy4vZHJvcGRvd24tbGlzdCc7XHJcbmltcG9ydCB7U2VhcmNofSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XHJcblxyXG5jb25zdCBERUZBVUxUX0NMQVNTID0gJ3R5cGVhaGVhZCc7XHJcbi8qKlxyXG4gKiBDb3BpZWQgbW9zdGx5IGZyb20gJ3JlYWN0LXR5cGVhaGVhZCcsIGFuIGF1dG8tY29tcGxldGluZyB0ZXh0IGlucHV0XHJcbiAqXHJcbiAqIFJlbmRlcnMgYW4gdGV4dCBpbnB1dCB0aGF0IHNob3dzIG9wdGlvbnMgbmVhcmJ5IHRoYXQgeW91IGNhbiB1c2UgdGhlXHJcbiAqIGtleWJvYXJkIG9yIG1vdXNlIHRvIHNlbGVjdC5cclxuICovXHJcblxyXG5jb25zdCBUeXBlYWhlYWRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RCZ2R9O1xyXG4gIGJveC1zaGFkb3c6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0U2hhZG93fTtcclxuXHJcbiAgOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW5wdXRCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDhweDtcclxuYDtcclxuXHJcbmNvbnN0IFR5cGVhaGVhZElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5SW5wdXR9IDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlY29uZGFyeUlucHV0QmdkfTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dEljb24gPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTVweDtcclxuICB0b3A6IDE0cHg7XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXRQbGFjZWhvbGRlckNvbG9yfTtcclxuYDtcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlU2VhcmNoRnVuY3Rpb24ocHJvcHMpIHtcclxuICBjb25zdCB7c2VhcmNoT3B0aW9ucywgZmlsdGVyT3B0aW9ufSA9IHByb3BzO1xyXG4gIGlmICh0eXBlb2Ygc2VhcmNoT3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgaWYgKGZpbHRlck9wdGlvbiAhPT0gbnVsbCkge1xyXG4gICAgICBDb25zb2xlLndhcm4oJ3NlYXJjaE9wdGlvbnMgcHJvcCBpcyBiZWluZyB1c2VkLCBmaWx0ZXJPcHRpb24gcHJvcCB3aWxsIGJlIGlnbm9yZWQnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzZWFyY2hPcHRpb25zO1xyXG4gIH0gZWxzZSBpZiAodHlwZW9mIGZpbHRlck9wdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgLy8gdXNlIGN1c3RvbSBmaWx0ZXIgb3B0aW9uXHJcbiAgICByZXR1cm4gKHZhbHVlLCBvcHRpb25zKSA9PiBvcHRpb25zLmZpbHRlcihvID0+IGZpbHRlck9wdGlvbih2YWx1ZSwgbykpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWFwcGVyID1cclxuICAgIHR5cGVvZiBmaWx0ZXJPcHRpb24gPT09ICdzdHJpbmcnXHJcbiAgICAgID8gQWNjZXNzb3IuZ2VuZXJhdGVBY2Nlc3NvcihmaWx0ZXJPcHRpb24pXHJcbiAgICAgIDogQWNjZXNzb3IuSURFTlRJVFlfRk47XHJcblxyXG4gIHJldHVybiAodmFsdWUsIG9wdGlvbnMpID0+XHJcbiAgICBmdXp6eS5maWx0ZXIodmFsdWUsIG9wdGlvbnMsIHtleHRyYWN0OiBtYXBwZXJ9KS5tYXAocmVzID0+IG9wdGlvbnNbcmVzLmluZGV4XSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE9wdGlvbnNGb3JWYWx1ZSh2YWx1ZSwgcHJvcHMsIHN0YXRlKSB7XHJcbiAgY29uc3Qge29wdGlvbnMsIHNob3dPcHRpb25zV2hlbkVtcHR5fSA9IHByb3BzO1xyXG5cclxuICBpZiAoIXByb3BzLnNlYXJjaGFibGUpIHtcclxuICAgIC8vIGRpcmVjdGx5IHBhc3MgdGhyb3VnaCBvcHRpb25zIGlmIGNhbiBub3QgYmUgc2VhcmNoZWRcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuICBpZiAoc2hvdWxkU2tpcFNlYXJjaCh2YWx1ZSwgc3RhdGUsIHNob3dPcHRpb25zV2hlbkVtcHR5KSkge1xyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzZWFyY2hPcHRpb25zID0gZ2VuZXJhdGVTZWFyY2hGdW5jdGlvbihwcm9wcyk7XHJcbiAgcmV0dXJuIHNlYXJjaE9wdGlvbnModmFsdWUsIG9wdGlvbnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG91bGRTa2lwU2VhcmNoKGlucHV0LCBzdGF0ZSwgc2hvd09wdGlvbnNXaGVuRW1wdHkpIHtcclxuICBjb25zdCBlbXB0eVZhbHVlID0gIWlucHV0IHx8IGlucHV0LnRyaW0oKS5sZW5ndGggPT09IDA7XHJcblxyXG4gIC8vIHRoaXMuc3RhdGUgbXVzdCBiZSBjaGVja2VkIGJlY2F1c2UgaXQgbWF5IG5vdCBiZSBkZWZpbmVkIHlldCBpZiB0aGlzIGZ1bmN0aW9uXHJcbiAgLy8gaXMgY2FsbGVkIGZyb20gd2l0aGluIGdldEluaXRpYWxTdGF0ZVxyXG4gIGNvbnN0IGlzRm9jdXNlZCA9IHN0YXRlICYmIHN0YXRlLmlzRm9jdXNlZDtcclxuICByZXR1cm4gIShzaG93T3B0aW9uc1doZW5FbXB0eSAmJiBpc0ZvY3VzZWQpICYmIGVtcHR5VmFsdWU7XHJcbn1cclxuXHJcbmNsYXNzIFR5cGVhaGVhZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjdXN0b21DbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgbWF4VmlzaWJsZTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHJlc3VsdHNUcnVuY2F0ZWRNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXHJcbiAgICBmaXhlZE9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxyXG4gICAgYWxsb3dDdXN0b21WYWx1ZXM6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBpbml0aWFsVmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgdGV4dGFyZWE6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIG9uT3B0aW9uU2VsZWN0ZWQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uS2V5UHJlc3M6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25LZXlVcDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBmaWx0ZXJPcHRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXHJcbiAgICBzZWFyY2hPcHRpb25zOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGRpc3BsYXlPcHRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXHJcbiAgICBpbnB1dERpc3BsYXlPcHRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXHJcbiAgICBmb3JtSW5wdXRPcHRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXHJcbiAgICBkZWZhdWx0Q2xhc3NOYW1lczogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBjdXN0b21MaXN0Q29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLmZ1bmNdKSxcclxuICAgIGN1c3RvbUxpc3RJdGVtQ29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLmZ1bmNdKSxcclxuICAgIGN1c3RvbUxpc3RIZWFkZXJDb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuZnVuY10pLFxyXG4gICAgc2hvd09wdGlvbnNXaGVuRW1wdHk6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgc2VhcmNoYWJsZTogUHJvcFR5cGVzLmJvb2xcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgb3B0aW9uczogW10sXHJcbiAgICBjdXN0b21DbGFzc2VzOiB7fSxcclxuICAgIGFsbG93Q3VzdG9tVmFsdWVzOiAwLFxyXG4gICAgaW5pdGlhbFZhbHVlOiAnJyxcclxuICAgIHZhbHVlOiAnJyxcclxuICAgIHBsYWNlaG9sZGVyOiAnJyxcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIHRleHRhcmVhOiBmYWxzZSxcclxuICAgIGlucHV0UHJvcHM6IHt9LFxyXG4gICAgb25PcHRpb25TZWxlY3RlZChvcHRpb24pIHt9LFxyXG4gICAgb25DaGFuZ2UoZXZlbnQpIHt9LFxyXG4gICAgb25LZXlEb3duKGV2ZW50KSB7fSxcclxuICAgIG9uS2V5UHJlc3MoZXZlbnQpIHt9LFxyXG4gICAgb25LZXlVcChldmVudCkge30sXHJcbiAgICBvbkZvY3VzKGV2ZW50KSB7fSxcclxuICAgIG9uQmx1cihldmVudCkge30sXHJcbiAgICBmaWx0ZXJPcHRpb246IG51bGwsXHJcbiAgICBzZWFyY2hPcHRpb25zOiBudWxsLFxyXG4gICAgaW5wdXREaXNwbGF5T3B0aW9uOiBudWxsLFxyXG4gICAgZGVmYXVsdENsYXNzTmFtZXM6IHRydWUsXHJcbiAgICBjdXN0b21MaXN0Q29tcG9uZW50OiBEcm9wZG93bkxpc3QsXHJcbiAgICBjdXN0b21MaXN0SXRlbUNvbXBvbmVudDogTGlzdEl0ZW0sXHJcbiAgICBjdXN0b21MaXN0SGVhZGVyQ29tcG9uZW50OiBudWxsLFxyXG4gICAgc2hvd09wdGlvbnNXaGVuRW1wdHk6IHRydWUsXHJcbiAgICBzZWFyY2hhYmxlOiB0cnVlLFxyXG4gICAgcmVzdWx0c1RydW5jYXRlZE1lc3NhZ2U6IG51bGxcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xyXG4gICAgLy8gIGludm9rZWQgYWZ0ZXIgYSBjb21wb25lbnQgaXMgaW5zdGFudGlhdGVkIGFzIHdlbGwgYXMgYmVmb3JlIGl0IGlzIHJlLXJlbmRlcmVkXHJcbiAgICBjb25zdCBzZWFyY2hSZXN1bHRzID0gZ2V0T3B0aW9uc0ZvclZhbHVlKHN0YXRlLmVudHJ5VmFsdWUsIHByb3BzLCBzdGF0ZSk7XHJcblxyXG4gICAgcmV0dXJuIHtzZWFyY2hSZXN1bHRzfTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2VhcmNoUmVzdWx0czogW10sXHJcblxyXG4gICAgICAvLyBUaGlzIHNob3VsZCBiZSBjYWxsZWQgc29tZXRoaW5nIGVsc2UsICdlbnRyeVZhbHVlJ1xyXG4gICAgICBlbnRyeVZhbHVlOiB0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMucHJvcHMuaW5pdGlhbFZhbHVlLFxyXG5cclxuICAgICAgLy8gQSB2YWxpZCB0eXBlYWhlYWQgdmFsdWVcclxuICAgICAgc2VsZWN0aW9uOiB0aGlzLnByb3BzLnZhbHVlLFxyXG5cclxuICAgICAgLy8gSW5kZXggb2YgdGhlIHNlbGVjdGlvblxyXG4gICAgICBzZWxlY3Rpb25JbmRleDogbnVsbCxcclxuXHJcbiAgICAgIC8vIEtlZXAgdHJhY2sgb2YgdGhlIGZvY3VzIHN0YXRlIG9mIHRoZSBpbnB1dCBlbGVtZW50LCB0byBkZXRlcm1pbmVcclxuICAgICAgLy8gd2hldGhlciB0byBzaG93IG9wdGlvbnMgd2hlbiBlbXB0eSAoaWYgc2hvd09wdGlvbnNXaGVuRW1wdHkgaXMgdHJ1ZSlcclxuICAgICAgaXNGb2N1c2VkOiBmYWxzZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgLy8gY2FsbCBmb2N1cyBvbiBlbnRyeSBvciBkaXYgdG8gdHJpZ2dlciBrZXkgZXZlbnRzIGxpc3RlbmVyXHJcbiAgICBpZiAodGhpcy5lbnRyeS5jdXJyZW50KSB7XHJcbiAgICAgIHRoaXMuZW50cnkuY3VycmVudC5mb2N1cygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yb290LmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJvb3QgPSBjcmVhdGVSZWYoKTtcclxuICBlbnRyeSA9IGNyZWF0ZVJlZigpO1xyXG5cclxuICBmb2N1cyA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLmVudHJ5LmN1cnJlbnQpIHtcclxuICAgICAgdGhpcy5lbnRyeS5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgX2hhc0N1c3RvbVZhbHVlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5wcm9wcy5hbGxvd0N1c3RvbVZhbHVlcyA+IDAgJiZcclxuICAgICAgdGhpcy5zdGF0ZS5lbnRyeVZhbHVlLmxlbmd0aCA+PSB0aGlzLnByb3BzLmFsbG93Q3VzdG9tVmFsdWVzICYmXHJcbiAgICAgIHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cy5pbmRleE9mKHRoaXMuc3RhdGUuZW50cnlWYWx1ZSkgPCAwXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIF9nZXRDdXN0b21WYWx1ZSA9ICgpID0+IHtcclxuICAgIHJldHVybiB0aGlzLl9oYXNDdXN0b21WYWx1ZSgpID8gdGhpcy5zdGF0ZS5lbnRyeVZhbHVlIDogbnVsbDtcclxuICB9O1xyXG5cclxuICBfcmVuZGVySW5jcmVtZW50YWxTZWFyY2hSZXN1bHRzKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRoaXMucHJvcHMuY3VzdG9tTGlzdENvbXBvbmVudFxyXG4gICAgICAgIGZpeGVkT3B0aW9ucz17dGhpcy5wcm9wcy5maXhlZE9wdGlvbnN9XHJcbiAgICAgICAgb3B0aW9ucz17XHJcbiAgICAgICAgICB0aGlzLnByb3BzLm1heFZpc2libGVcclxuICAgICAgICAgICAgPyB0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHMuc2xpY2UoMCwgdGhpcy5wcm9wcy5tYXhWaXNpYmxlKVxyXG4gICAgICAgICAgICA6IHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0c1xyXG4gICAgICAgIH1cclxuICAgICAgICBhcmVSZXN1bHRzVHJ1bmNhdGVkPXtcclxuICAgICAgICAgIHRoaXMucHJvcHMubWF4VmlzaWJsZSAmJiB0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHMubGVuZ3RoID4gdGhpcy5wcm9wcy5tYXhWaXNpYmxlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdHNUcnVuY2F0ZWRNZXNzYWdlPXt0aGlzLnByb3BzLnJlc3VsdHNUcnVuY2F0ZWRNZXNzYWdlfVxyXG4gICAgICAgIG9uT3B0aW9uU2VsZWN0ZWQ9e3RoaXMuX29uT3B0aW9uU2VsZWN0ZWR9XHJcbiAgICAgICAgYWxsb3dDdXN0b21WYWx1ZXM9e3RoaXMucHJvcHMuYWxsb3dDdXN0b21WYWx1ZXN9XHJcbiAgICAgICAgY3VzdG9tVmFsdWU9e3RoaXMuX2dldEN1c3RvbVZhbHVlKCl9XHJcbiAgICAgICAgY3VzdG9tQ2xhc3Nlcz17dGhpcy5wcm9wcy5jdXN0b21DbGFzc2VzfVxyXG4gICAgICAgIGN1c3RvbUxpc3RJdGVtQ29tcG9uZW50PXt0aGlzLnByb3BzLmN1c3RvbUxpc3RJdGVtQ29tcG9uZW50fVxyXG4gICAgICAgIGN1c3RvbUxpc3RIZWFkZXJDb21wb25lbnQ9e3RoaXMucHJvcHMuY3VzdG9tTGlzdEhlYWRlckNvbXBvbmVudH1cclxuICAgICAgICBzZWxlY3Rpb25JbmRleD17dGhpcy5zdGF0ZS5zZWxlY3Rpb25JbmRleH1cclxuICAgICAgICBkZWZhdWx0Q2xhc3NOYW1lcz17dGhpcy5wcm9wcy5kZWZhdWx0Q2xhc3NOYW1lc31cclxuICAgICAgICBkaXNwbGF5T3B0aW9uPXt0aGlzLnByb3BzLmRpc3BsYXlPcHRpb259XHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtcz17dGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW1zfVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGlvbigpIHtcclxuICAgIGxldCBpbmRleCA9IHRoaXMuc3RhdGUuc2VsZWN0aW9uSW5kZXg7XHJcblxyXG4gICAgaWYgKHRoaXMuX2hhc0N1c3RvbVZhbHVlKCkpIHtcclxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuZW50cnlWYWx1ZTtcclxuICAgICAgfVxyXG4gICAgICBpbmRleC0tO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2hhc0ZpeGVkT3B0aW9ucygpKSB7XHJcbiAgICAgIHJldHVybiBpbmRleCA8IHRoaXMucHJvcHMuZml4ZWRPcHRpb25zLmxlbmd0aFxyXG4gICAgICAgID8gdGhpcy5wcm9wcy5maXhlZE9wdGlvbnNbaW5kZXhdXHJcbiAgICAgICAgOiB0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHNbaW5kZXggLSB0aGlzLnByb3BzLmZpeGVkT3B0aW9ucy5sZW5ndGhdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0c1tpbmRleF07XHJcbiAgfVxyXG5cclxuICBfb25PcHRpb25TZWxlY3RlZCA9IChvcHRpb24sIGV2ZW50KSA9PiB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5zZWFyY2hhYmxlKSB7XHJcbiAgICAgIC8vIHJlc2V0IGVudHJ5IGlucHV0XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHNlYXJjaFJlc3VsdHM6IGdldE9wdGlvbnNGb3JWYWx1ZSgnJywgdGhpcy5wcm9wcywgdGhpcy5zdGF0ZSksXHJcbiAgICAgICAgc2VsZWN0aW9uOiAnJyxcclxuICAgICAgICBlbnRyeVZhbHVlOiAnJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5vbk9wdGlvblNlbGVjdGVkKG9wdGlvbiwgZXZlbnQpO1xyXG4gIH07XHJcblxyXG4gIC8vIHVzZSAoKSA9PiB7fSB0byBhdm9pZCBiaW5kaW5nICd0aGlzJ1xyXG4gIF9vblRleHRFbnRyeVVwZGF0ZWQgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5zZWFyY2hhYmxlKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5lbnRyeS5jdXJyZW50LnZhbHVlO1xyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgc2VhcmNoUmVzdWx0czogZ2V0T3B0aW9uc0ZvclZhbHVlKHZhbHVlLCB0aGlzLnByb3BzLCB0aGlzLnN0YXRlKSxcclxuICAgICAgICBzZWxlY3Rpb246ICcnLFxyXG4gICAgICAgIGVudHJ5VmFsdWU6IHZhbHVlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIF9vbkVudGVyID0gZXZlbnQgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGlmICghc2VsZWN0aW9uKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLm9uS2V5RG93bihldmVudCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fb25PcHRpb25TZWxlY3RlZChzZWxlY3Rpb24sIGV2ZW50KTtcclxuICB9O1xyXG5cclxuICBfb25Fc2NhcGUgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VsZWN0aW9uSW5kZXg6IG51bGxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIF9vblRhYiA9IGV2ZW50ID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICBsZXQgb3B0aW9uID0gc2VsZWN0aW9uXHJcbiAgICAgID8gc2VsZWN0aW9uXHJcbiAgICAgIDogdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzLmxlbmd0aCA+IDBcclxuICAgICAgPyB0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHNbMF1cclxuICAgICAgOiBudWxsO1xyXG5cclxuICAgIGlmIChvcHRpb24gPT09IG51bGwgJiYgdGhpcy5faGFzQ3VzdG9tVmFsdWUoKSkge1xyXG4gICAgICBvcHRpb24gPSB0aGlzLl9nZXRDdXN0b21WYWx1ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb24gIT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX29uT3B0aW9uU2VsZWN0ZWQob3B0aW9uLCBldmVudCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZXZlbnRNYXAgPSBldmVudCA9PiB7XHJcbiAgICBjb25zdCBldmVudHMgPSB7fTtcclxuXHJcbiAgICBldmVudHNbS2V5RXZlbnQuRE9NX1ZLX1VQXSA9IHRoaXMubmF2VXA7XHJcbiAgICBldmVudHNbS2V5RXZlbnQuRE9NX1ZLX0RPV05dID0gdGhpcy5uYXZEb3duO1xyXG4gICAgZXZlbnRzW0tleUV2ZW50LkRPTV9WS19SRVRVUk5dID0gZXZlbnRzW0tleUV2ZW50LkRPTV9WS19FTlRFUl0gPSB0aGlzLl9vbkVudGVyO1xyXG4gICAgZXZlbnRzW0tleUV2ZW50LkRPTV9WS19FU0NBUEVdID0gdGhpcy5fb25Fc2NhcGU7XHJcbiAgICBldmVudHNbS2V5RXZlbnQuRE9NX1ZLX1RBQl0gPSB0aGlzLl9vblRhYjtcclxuXHJcbiAgICByZXR1cm4gZXZlbnRzO1xyXG4gIH07XHJcblxyXG4gIF9uYXYgPSBkZWx0YSA9PiB7XHJcbiAgICBpZiAoIXRoaXMuX2hhc0hpbnQoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3SW5kZXggPVxyXG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGlvbkluZGV4ID09PSBudWxsXHJcbiAgICAgICAgPyBkZWx0YSA9PT0gMVxyXG4gICAgICAgICAgPyAwXHJcbiAgICAgICAgICA6IGRlbHRhXHJcbiAgICAgICAgOiB0aGlzLnN0YXRlLnNlbGVjdGlvbkluZGV4ICsgZGVsdGE7XHJcbiAgICBsZXQgbGVuZ3RoID0gdGhpcy5wcm9wcy5tYXhWaXNpYmxlXHJcbiAgICAgID8gdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzLnNsaWNlKDAsIHRoaXMucHJvcHMubWF4VmlzaWJsZSkubGVuZ3RoXHJcbiAgICAgIDogdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzLmxlbmd0aDtcclxuICAgIGlmICh0aGlzLl9oYXNDdXN0b21WYWx1ZSgpKSB7XHJcbiAgICAgIGxlbmd0aCArPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuZXdJbmRleCA8IDApIHtcclxuICAgICAgbmV3SW5kZXggKz0gbGVuZ3RoO1xyXG4gICAgfSBlbHNlIGlmIChuZXdJbmRleCA+PSBsZW5ndGgpIHtcclxuICAgICAgbmV3SW5kZXggLT0gbGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGlvbkluZGV4OiBuZXdJbmRleH0pO1xyXG4gIH07XHJcblxyXG4gIG5hdkRvd24gPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9uYXYoMSk7XHJcbiAgfTtcclxuXHJcbiAgbmF2VXAgPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9uYXYoLTEpO1xyXG4gIH07XHJcblxyXG4gIF9vbkNoYW5nZSA9IGV2ZW50ID0+IHtcclxuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX29uVGV4dEVudHJ5VXBkYXRlZCgpO1xyXG4gIH07XHJcblxyXG4gIF9vbktleURvd24gPSBldmVudCA9PiB7XHJcbiAgICAvLyBJZiB0aGVyZSBhcmUgbm8gdmlzaWJsZSBlbGVtZW50cywgZG9uJ3QgcGVyZm9ybSBzZWxlY3RvciBuYXZpZ2F0aW9uLlxyXG4gICAgLy8gSnVzdCBwYXNzIHRoaXMgdXAgdG8gdGhlIHVwc3RyZWFtIG9uS2V5ZG93biBoYW5kbGVyLlxyXG4gICAgLy8gQWxzbyBza2lwIGlmIHRoZSB1c2VyIGlzIHByZXNzaW5nIHRoZSBzaGlmdCBrZXksIHNpbmNlIG5vbmUgb2Ygb3VyIGhhbmRsZXJzIGFyZSBsb29raW5nIGZvciBzaGlmdFxyXG4gICAgaWYgKCF0aGlzLl9oYXNIaW50KCkgfHwgZXZlbnQuc2hpZnRLZXkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMub25LZXlEb3duKGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5ldmVudE1hcCgpW2V2ZW50LmtleUNvZGVdO1xyXG5cclxuICAgIGlmIChoYW5kbGVyKSB7XHJcbiAgICAgIGhhbmRsZXIoZXZlbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMub25LZXlEb3duKGV2ZW50KTtcclxuICAgIH1cclxuICAgIC8vIERvbid0IHByb3BhZ2F0ZSB0aGUga2V5c3Ryb2tlIGJhY2sgdG8gdGhlIERPTS9icm93c2VyXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH07XHJcblxyXG4gIF9vbkZvY3VzID0gZXZlbnQgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7aXNGb2N1c2VkOiB0cnVlfSk7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vbkZvY3VzKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLm9uRm9jdXMoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIF9vbkJsdXIgPSBldmVudCA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtpc0ZvY3VzZWQ6IGZhbHNlfSk7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMub25CbHVyKGV2ZW50KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBfcmVuZGVySGlkZGVuSW5wdXQoKSB7XHJcbiAgICBpZiAoIXRoaXMucHJvcHMubmFtZSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPXt0aGlzLnByb3BzLm5hbWV9IHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGlvbn0gLz47XHJcbiAgfVxyXG5cclxuICBfaGFzSGludCgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHMubGVuZ3RoID4gMCB8fCB0aGlzLl9oYXNDdXN0b21WYWx1ZSgpO1xyXG4gIH1cclxuXHJcbiAgX2hhc0ZpeGVkT3B0aW9ucygpIHtcclxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRoaXMucHJvcHMuZml4ZWRPcHRpb25zKSAmJiB0aGlzLnByb3BzLmZpeGVkT3B0aW9ucy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBpbnB1dENsYXNzZXMgPSB7fTtcclxuICAgIGlucHV0Q2xhc3Nlc1t0aGlzLnByb3BzLmN1c3RvbUNsYXNzZXMuaW5wdXRdID0gQm9vbGVhbih0aGlzLnByb3BzLmN1c3RvbUNsYXNzZXMuaW5wdXQpO1xyXG4gICAgY29uc3QgaW5wdXRDbGFzc0xpc3QgPSBjbGFzc05hbWVzKGlucHV0Q2xhc3Nlcyk7XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHtcclxuICAgICAgW0RFRkFVTFRfQ0xBU1NdOiB0aGlzLnByb3BzLmRlZmF1bHRDbGFzc05hbWVzXHJcbiAgICB9O1xyXG4gICAgY2xhc3Nlc1t0aGlzLnByb3BzLmNsYXNzTmFtZV0gPSBCb29sZWFuKHRoaXMucHJvcHMuY2xhc3NOYW1lKTtcclxuICAgIGNvbnN0IGNsYXNzTGlzdCA9IGNsYXNzTmFtZXMoY2xhc3Nlcyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFR5cGVhaGVhZFdyYXBwZXJcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTGlzdH1cclxuICAgICAgICByZWY9e3RoaXMucm9vdH1cclxuICAgICAgICB0YWJJbmRleD1cIjBcIlxyXG4gICAgICAgIG9uS2V5RG93bj17dGhpcy5fb25LZXlEb3dufVxyXG4gICAgICAgIG9uS2V5UHJlc3M9e3RoaXMucHJvcHMub25LZXlQcmVzc31cclxuICAgICAgICBvbktleVVwPXt0aGlzLnByb3BzLm9uS2V5VXB9XHJcbiAgICAgICAgb25Gb2N1cz17dGhpcy5fb25Gb2N1c31cclxuICAgICAgPlxyXG4gICAgICAgIHt0aGlzLl9yZW5kZXJIaWRkZW5JbnB1dCgpfVxyXG4gICAgICAgIHt0aGlzLnByb3BzLnNlYXJjaGFibGUgPyAoXHJcbiAgICAgICAgICA8SW5wdXRCb3g+XHJcbiAgICAgICAgICAgIDxUeXBlYWhlYWRJbnB1dFxyXG4gICAgICAgICAgICAgIHJlZj17dGhpcy5lbnRyeX1cclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHMuaW5wdXRQcm9wc31cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2lucHV0Q2xhc3NMaXN0fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVudHJ5VmFsdWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5fb25CbHVyfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXRJY29uPlxyXG4gICAgICAgICAgICAgIDxTZWFyY2ggaGVpZ2h0PVwiMThweFwiIC8+XHJcbiAgICAgICAgICAgIDwvSW5wdXRJY29uPlxyXG4gICAgICAgICAgPC9JbnB1dEJveD5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgICB7dGhpcy5fcmVuZGVySW5jcmVtZW50YWxTZWFyY2hSZXN1bHRzKCl9XHJcbiAgICAgIDwvVHlwZWFoZWFkV3JhcHBlcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5wb2x5ZmlsbChUeXBlYWhlYWQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHlwZWFoZWFkO1xyXG4iXX0=