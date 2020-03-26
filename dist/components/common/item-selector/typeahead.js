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

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL3R5cGVhaGVhZC5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX0NMQVNTIiwiVHlwZWFoZWFkV3JhcHBlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJkcm9wZG93bkxpc3RCZ2QiLCJkcm9wZG93bkxpc3RTaGFkb3ciLCJJbnB1dEJveCIsIlR5cGVhaGVhZElucHV0IiwiaW5wdXQiLCJzZWNvbmRhcnlJbnB1dCIsInNlY29uZGFyeUlucHV0QmdkIiwiSW5wdXRJY29uIiwiaW5wdXRQbGFjZWhvbGRlckNvbG9yIiwiZ2VuZXJhdGVTZWFyY2hGdW5jdGlvbiIsInNlYXJjaE9wdGlvbnMiLCJmaWx0ZXJPcHRpb24iLCJDb25zb2xlIiwid2FybiIsInZhbHVlIiwib3B0aW9ucyIsImZpbHRlciIsIm8iLCJtYXBwZXIiLCJBY2Nlc3NvciIsImdlbmVyYXRlQWNjZXNzb3IiLCJJREVOVElUWV9GTiIsImZ1enp5IiwiZXh0cmFjdCIsIm1hcCIsInJlcyIsImluZGV4IiwiZ2V0T3B0aW9uc0ZvclZhbHVlIiwic3RhdGUiLCJzaG93T3B0aW9uc1doZW5FbXB0eSIsInNlYXJjaGFibGUiLCJzaG91bGRTa2lwU2VhcmNoIiwiZW1wdHlWYWx1ZSIsInRyaW0iLCJsZW5ndGgiLCJpc0ZvY3VzZWQiLCJUeXBlYWhlYWQiLCJzZWFyY2hSZXN1bHRzIiwiZW50cnlWYWx1ZSIsImVudHJ5IiwiY3VycmVudCIsImZvY3VzIiwiYWxsb3dDdXN0b21WYWx1ZXMiLCJpbmRleE9mIiwiX2hhc0N1c3RvbVZhbHVlIiwib3B0aW9uIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInNlbGVjdGlvbiIsIm9uT3B0aW9uU2VsZWN0ZWQiLCJnZXRTZWxlY3Rpb24iLCJvbktleURvd24iLCJfb25PcHRpb25TZWxlY3RlZCIsInNlbGVjdGlvbkluZGV4IiwiX2dldEN1c3RvbVZhbHVlIiwiZXZlbnRzIiwiS2V5RXZlbnQiLCJET01fVktfVVAiLCJuYXZVcCIsIkRPTV9WS19ET1dOIiwibmF2RG93biIsIkRPTV9WS19SRVRVUk4iLCJET01fVktfRU5URVIiLCJfb25FbnRlciIsIkRPTV9WS19FU0NBUEUiLCJfb25Fc2NhcGUiLCJET01fVktfVEFCIiwiX29uVGFiIiwiZGVsdGEiLCJfaGFzSGludCIsIm5ld0luZGV4IiwibWF4VmlzaWJsZSIsInNsaWNlIiwiX25hdiIsIm9uQ2hhbmdlIiwiX29uVGV4dEVudHJ5VXBkYXRlZCIsInNoaWZ0S2V5IiwiaGFuZGxlciIsImV2ZW50TWFwIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0Iiwib25Gb2N1cyIsIm9uQmx1ciIsImluaXRpYWxWYWx1ZSIsInJvb3QiLCJmaXhlZE9wdGlvbnMiLCJyZXN1bHRzVHJ1bmNhdGVkTWVzc2FnZSIsImN1c3RvbUNsYXNzZXMiLCJjdXN0b21MaXN0SXRlbUNvbXBvbmVudCIsImN1c3RvbUxpc3RIZWFkZXJDb21wb25lbnQiLCJkZWZhdWx0Q2xhc3NOYW1lcyIsImRpc3BsYXlPcHRpb24iLCJzZWxlY3RlZEl0ZW1zIiwiX2hhc0ZpeGVkT3B0aW9ucyIsIm5hbWUiLCJBcnJheSIsImlzQXJyYXkiLCJpbnB1dENsYXNzZXMiLCJCb29sZWFuIiwiaW5wdXRDbGFzc0xpc3QiLCJjbGFzc2VzIiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiX29uS2V5RG93biIsIm9uS2V5UHJlc3MiLCJvbktleVVwIiwiX29uRm9jdXMiLCJfcmVuZGVySGlkZGVuSW5wdXQiLCJkaXNhYmxlZCIsImlucHV0UHJvcHMiLCJwbGFjZWhvbGRlciIsIl9vbkNoYW5nZSIsIl9vbkJsdXIiLCJfcmVuZGVySW5jcmVtZW50YWxTZWFyY2hSZXN1bHRzIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwib2JqZWN0IiwibnVtYmVyIiwiYXJyYXlPZiIsImFueSIsImJvb2wiLCJ0ZXh0YXJlYSIsImZ1bmMiLCJvbmVPZlR5cGUiLCJpbnB1dERpc3BsYXlPcHRpb24iLCJmb3JtSW5wdXRPcHRpb24iLCJjdXN0b21MaXN0Q29tcG9uZW50IiwiZWxlbWVudCIsIkRyb3Bkb3duTGlzdCIsIkxpc3RJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBRyxXQUF0QjtBQUNBOzs7Ozs7O0FBT0EsSUFBTUMsZ0JBQWdCLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUdBLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsZUFBaEI7QUFBQSxDQUhMLEVBSU4sVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxrQkFBaEI7QUFBQSxDQUpDLENBQXRCOztBQVdBLElBQU1DLFFBQVEsR0FBR04sNkJBQU9DLEdBQVYsb0JBQWQ7O0FBSUEsSUFBTU0sY0FBYyxHQUFHUCw2QkFBT1EsS0FBVixxQkFDaEIsVUFBQU4sS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZTSxjQUFoQjtBQUFBLENBRFcsRUFHSSxVQUFBUCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlPLGlCQUFoQjtBQUFBLENBSFQsQ0FBcEI7O0FBT0EsSUFBTUMsU0FBUyxHQUFHWCw2QkFBT0MsR0FBVixxQkFJSixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlTLHFCQUFoQjtBQUFBLENBSkQsQ0FBZjs7QUFPQSxTQUFTQyxzQkFBVCxDQUFnQ1gsS0FBaEMsRUFBdUM7QUFBQSxNQUM5QlksYUFEOEIsR0FDQ1osS0FERCxDQUM5QlksYUFEOEI7QUFBQSxNQUNmQyxZQURlLEdBQ0NiLEtBREQsQ0FDZmEsWUFEZTs7QUFFckMsTUFBSSxPQUFP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QUxhO0FBTXBCZ0csRUFBQUEsV0FBVyxFQUFFLEVBTk87QUFPcEJGLEVBQUFBLFFBQVEsRUFBRSxLQVBVO0FBUXBCYyxFQUFBQSxRQUFRLEVBQUUsS0FSVTtBQVNwQmIsRUFBQUEsVUFBVSxFQUFFLEVBVFE7QUFVcEI1RCxFQUFBQSxnQkFWb0IsNEJBVUhKLE1BVkcsRUFVSyxDQUFFLENBVlA7QUFXcEI2QixFQUFBQSxRQVhvQixvQkFXWDVCLEtBWFcsRUFXSixDQUFFLENBWEU7QUFZcEJLLEVBQUFBLFNBWm9CLHFCQVlWTCxLQVpVLEVBWUgsQ0FBRSxDQVpDO0FBYXBCMEQsRUFBQUEsVUFib0Isc0JBYVQxRCxLQWJTLEVBYUYsQ0FBRSxDQWJBO0FBY3BCMkQsRUFBQUEsT0Fkb0IsbUJBY1ozRCxLQWRZLEVBY0wsQ0FBRSxDQWRHO0FBZXBCbUMsRUFBQUEsT0Fmb0IsbUJBZVpuQyxLQWZZLEVBZUwsQ0FBRSxDQWZHO0FBZ0JwQm9DLEVBQUFBLE1BaEJvQixrQkFnQmJwQyxLQWhCYSxFQWdCTixDQUFFLENBaEJJO0FBaUJwQm5DLEVBQUFBLFlBQVksRUFBRSxJQWpCTTtBQWtCcEJELEVBQUFBLGFBQWEsRUFBRSxJQWxCSztBQW1CcEJtSCxFQUFBQSxrQkFBa0IsRUFBRSxJQW5CQTtBQW9CcEJuQyxFQUFBQSxpQkFBaUIsRUFBRSxJQXBCQztBQXFCcEJxQyxFQUFBQSxtQkFBbUIsRUFBRUUsd0JBckJEO0FBc0JwQnpDLEVBQUFBLHVCQUF1QixFQUFFMEMsc0JBdEJMO0FBdUJwQnpDLEVBQUFBLHlCQUF5QixFQUFFLElBdkJQO0FBd0JwQjVELEVBQUFBLG9CQUFvQixFQUFFLElBeEJGO0FBeUJwQkMsRUFBQUEsVUFBVSxFQUFFLElBekJRO0FBMEJwQndELEVBQUFBLHVCQUF1QixFQUFFO0FBMUJMLEM7QUFpVnhCLHFDQUFTbEQsU0FBVDtlQUVlQSxTIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBjcmVhdGVSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cG9seWZpbGx9IGZyb20gJ3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZnV6enkgZnJvbSAnZnV6enknO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Y29uc29sZSBhcyBDb25zb2xlfSBmcm9tICdnbG9iYWwvd2luZG93JztcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJy4vYWNjZXNzb3InO1xuaW1wb3J0IEtleUV2ZW50IGZyb20gJy4va2V5ZXZlbnQnO1xuaW1wb3J0IERyb3Bkb3duTGlzdCwge0xpc3RJdGVtfSBmcm9tICcuL2Ryb3Bkb3duLWxpc3QnO1xuaW1wb3J0IHtTZWFyY2h9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcblxuY29uc3QgREVGQVVMVF9DTEFTUyA9ICd0eXBlYWhlYWQnO1xuLyoqXG4gKiBDb3BpZWQgbW9zdGx5IGZyb20gJ3JlYWN0LXR5cGVhaGVhZCcsIGFuIGF1dG8tY29tcGxldGluZyB0ZXh0IGlucHV0XG4gKlxuICogUmVuZGVycyBhbiB0ZXh0IGlucHV0IHRoYXQgc2hvd3Mgb3B0aW9ucyBuZWFyYnkgdGhhdCB5b3UgY2FuIHVzZSB0aGVcbiAqIGtleWJvYXJkIG9yIG1vdXNlIHRvIHNlbGVjdC5cbiAqL1xuXG5jb25zdCBUeXBlYWhlYWRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RCZ2R9O1xuICBib3gtc2hhZG93OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdFNoYWRvd307XG5cbiAgOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG5gO1xuXG5jb25zdCBJbnB1dEJveCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDhweDtcbmA7XG5cbmNvbnN0IFR5cGVhaGVhZElucHV0ID0gc3R5bGVkLmlucHV0YFxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlY29uZGFyeUlucHV0fSA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlY29uZGFyeUlucHV0QmdkfTtcbiAgfVxuYDtcblxuY29uc3QgSW5wdXRJY29uID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgdG9wOiAxNHB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dFBsYWNlaG9sZGVyQ29sb3J9O1xuYDtcblxuZnVuY3Rpb24gZ2VuZXJhdGVTZWFyY2hGdW5jdGlvbihwcm9wcykge1xuICBjb25zdCB7c2VhcmNoT3B0aW9ucywgZmlsdGVyT3B0aW9ufSA9IHByb3BzO1xuICBpZiAodHlwZW9mIHNlYXJjaE9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAoZmlsdGVyT3B0aW9uICE9PSBudWxsKSB7XG4gICAgICBDb25zb2xlLndhcm4oJ3NlYXJjaE9wdGlvbnMgcHJvcCBpcyBiZWluZyB1c2VkLCBmaWx0ZXJPcHRpb24gcHJvcCB3aWxsIGJlIGlnbm9yZWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlYXJjaE9wdGlvbnM7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGZpbHRlck9wdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIHVzZSBjdXN0b20gZmlsdGVyIG9wdGlvblxuICAgIHJldHVybiAodmFsdWUsIG9wdGlvbnMpID0+IG9wdGlvbnMuZmlsdGVyKG8gPT4gZmlsdGVyT3B0aW9uKHZhbHVlLCBvKSk7XG4gIH1cblxuICBjb25zdCBtYXBwZXIgPVxuICAgIHR5cGVvZiBmaWx0ZXJPcHRpb24gPT09ICdzdHJpbmcnXG4gICAgICA/IEFjY2Vzc29yLmdlbmVyYXRlQWNjZXNzb3IoZmlsdGVyT3B0aW9uKVxuICAgICAgOiBBY2Nlc3Nvci5JREVOVElUWV9GTjtcblxuICByZXR1cm4gKHZhbHVlLCBvcHRpb25zKSA9PlxuICAgIGZ1enp5LmZpbHRlcih2YWx1ZSwgb3B0aW9ucywge2V4dHJhY3Q6IG1hcHBlcn0pLm1hcChyZXMgPT4gb3B0aW9uc1tyZXMuaW5kZXhdKTtcbn1cblxuZnVuY3Rpb24gZ2V0T3B0aW9uc0ZvclZhbHVlKHZhbHVlLCBwcm9wcywgc3RhdGUpIHtcbiAgY29uc3Qge29wdGlvbnMsIHNob3dPcHRpb25zV2hlbkVtcHR5fSA9IHByb3BzO1xuXG4gIGlmICghcHJvcHMuc2VhcmNoYWJsZSkge1xuICAgIC8vIGRpcmVjdGx5IHBhc3MgdGhyb3VnaCBvcHRpb25zIGlmIGNhbiBub3QgYmUgc2VhcmNoZWRcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuICBpZiAoc2hvdWxkU2tpcFNlYXJjaCh2YWx1ZSwgc3RhdGUsIHNob3dPcHRpb25zV2hlbkVtcHR5KSkge1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgY29uc3Qgc2VhcmNoT3B0aW9ucyA9IGdlbmVyYXRlU2VhcmNoRnVuY3Rpb24ocHJvcHMpO1xuICByZXR1cm4gc2VhcmNoT3B0aW9ucyh2YWx1ZSwgb3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFNraXBTZWFyY2goaW5wdXQsIHN0YXRlLCBzaG93T3B0aW9uc1doZW5FbXB0eSkge1xuICBjb25zdCBlbXB0eVZhbHVlID0gIWlucHV0IHx8IGlucHV0LnRyaW0oKS5sZW5ndGggPT09IDA7XG5cbiAgLy8gdGhpcy5zdGF0ZSBtdXN0IGJlIGNoZWNrZWQgYmVjYXVzZSBpdCBtYXkgbm90IGJlIGRlZmluZWQgeWV0IGlmIHRoaXMgZnVuY3Rpb25cbiAgLy8gaXMgY2FsbGVkIGZyb20gd2l0aGluIGdldEluaXRpYWxTdGF0ZVxuICBjb25zdCBpc0ZvY3VzZWQgPSBzdGF0ZSAmJiBzdGF0ZS5pc0ZvY3VzZWQ7XG4gIHJldHVybiAhKHNob3dPcHRpb25zV2hlbkVtcHR5ICYmIGlzRm9jdXNlZCkgJiYgZW1wdHlWYWx1ZTtcbn1cblxuY2xhc3MgVHlwZWFoZWFkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGN1c3RvbUNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbWF4VmlzaWJsZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICByZXN1bHRzVHJ1bmNhdGVkTWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcbiAgICBmaXhlZE9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxuICAgIGFsbG93Q3VzdG9tVmFsdWVzOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGluaXRpYWxWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgdGV4dGFyZWE6IFByb3BUeXBlcy5ib29sLFxuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgb25PcHRpb25TZWxlY3RlZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25LZXlQcmVzczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25LZXlVcDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBmaWx0ZXJPcHRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgc2VhcmNoT3B0aW9uczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzcGxheU9wdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBpbnB1dERpc3BsYXlPcHRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgZm9ybUlucHV0T3B0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGRlZmF1bHRDbGFzc05hbWVzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjdXN0b21MaXN0Q29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBjdXN0b21MaXN0SXRlbUNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgY3VzdG9tTGlzdEhlYWRlckNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgc2hvd09wdGlvbnNXaGVuRW1wdHk6IFByb3BUeXBlcy5ib29sLFxuICAgIHNlYXJjaGFibGU6IFByb3BUeXBlcy5ib29sXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvcHRpb25zOiBbXSxcbiAgICBjdXN0b21DbGFzc2VzOiB7fSxcbiAgICBhbGxvd0N1c3RvbVZhbHVlczogMCxcbiAgICBpbml0aWFsVmFsdWU6ICcnLFxuICAgIHZhbHVlOiAnJyxcbiAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHRleHRhcmVhOiBmYWxzZSxcbiAgICBpbnB1dFByb3BzOiB7fSxcbiAgICBvbk9wdGlvblNlbGVjdGVkKG9wdGlvbikge30sXG4gICAgb25DaGFuZ2UoZXZlbnQpIHt9LFxuICAgIG9uS2V5RG93bihldmVudCkge30sXG4gICAgb25LZXlQcmVzcyhldmVudCkge30sXG4gICAgb25LZXlVcChldmVudCkge30sXG4gICAgb25Gb2N1cyhldmVudCkge30sXG4gICAgb25CbHVyKGV2ZW50KSB7fSxcbiAgICBmaWx0ZXJPcHRpb246IG51bGwsXG4gICAgc2VhcmNoT3B0aW9uczogbnVsbCxcbiAgICBpbnB1dERpc3BsYXlPcHRpb246IG51bGwsXG4gICAgZGVmYXVsdENsYXNzTmFtZXM6IHRydWUsXG4gICAgY3VzdG9tTGlzdENvbXBvbmVudDogRHJvcGRvd25MaXN0LFxuICAgIGN1c3RvbUxpc3RJdGVtQ29tcG9uZW50OiBMaXN0SXRlbSxcbiAgICBjdXN0b21MaXN0SGVhZGVyQ29tcG9uZW50OiBudWxsLFxuICAgIHNob3dPcHRpb25zV2hlbkVtcHR5OiB0cnVlLFxuICAgIHNlYXJjaGFibGU6IHRydWUsXG4gICAgcmVzdWx0c1RydW5jYXRlZE1lc3NhZ2U6IG51bGxcbiAgfTtcblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgIC8vICBpbnZva2VkIGFmdGVyIGEgY29tcG9uZW50IGlzIGluc3RhbnRpYXRlZCBhcyB3ZWxsIGFzIGJlZm9yZSBpdCBpcyByZS1yZW5kZXJlZFxuICAgIGNvbnN0IHNlYXJjaFJlc3VsdHMgPSBnZXRPcHRpb25zRm9yVmFsdWUoc3RhdGUuZW50cnlWYWx1ZSwgcHJvcHMsIHN0YXRlKTtcblxuICAgIHJldHVybiB7c2VhcmNoUmVzdWx0c307XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcblxuICAgICAgLy8gVGhpcyBzaG91bGQgYmUgY2FsbGVkIHNvbWV0aGluZyBlbHNlLCAnZW50cnlWYWx1ZSdcbiAgICAgIGVudHJ5VmFsdWU6IHRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5wcm9wcy5pbml0aWFsVmFsdWUsXG5cbiAgICAgIC8vIEEgdmFsaWQgdHlwZWFoZWFkIHZhbHVlXG4gICAgICBzZWxlY3Rpb246IHRoaXMucHJvcHMudmFsdWUsXG5cbiAgICAgIC8vIEluZGV4IG9mIHRoZSBzZWxlY3Rpb25cbiAgICAgIHNlbGVjdGlvbkluZGV4OiBudWxsLFxuXG4gICAgICAvLyBLZWVwIHRyYWNrIG9mIHRoZSBmb2N1cyBzdGF0ZSBvZiB0aGUgaW5wdXQgZWxlbWVudCwgdG8gZGV0ZXJtaW5lXG4gICAgICAvLyB3aGV0aGVyIHRvIHNob3cgb3B0aW9ucyB3aGVuIGVtcHR5IChpZiBzaG93T3B0aW9uc1doZW5FbXB0eSBpcyB0cnVlKVxuICAgICAgaXNGb2N1c2VkOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBjYWxsIGZvY3VzIG9uIGVudHJ5IG9yIGRpdiB0byB0cmlnZ2VyIGtleSBldmVudHMgbGlzdGVuZXJcbiAgICBpZiAodGhpcy5lbnRyeS5jdXJyZW50KSB7XG4gICAgICB0aGlzLmVudHJ5LmN1cnJlbnQuZm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb290LmN1cnJlbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICByb290ID0gY3JlYXRlUmVmKCk7XG4gIGVudHJ5ID0gY3JlYXRlUmVmKCk7XG5cbiAgZm9jdXMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZW50cnkuY3VycmVudCkge1xuICAgICAgdGhpcy5lbnRyeS5jdXJyZW50LmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9oYXNDdXN0b21WYWx1ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5wcm9wcy5hbGxvd0N1c3RvbVZhbHVlcyA+IDAgJiZcbiAgICAgIHRoaXMuc3RhdGUuZW50cnlWYWx1ZS5sZW5ndGggPj0gdGhpcy5wcm9wcy5hbGxvd0N1c3RvbVZhbHVlcyAmJlxuICAgICAgdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzLmluZGV4T2YodGhpcy5zdGF0ZS5lbnRyeVZhbHVlKSA8IDBcbiAgICApO1xuICB9O1xuXG4gIF9nZXRDdXN0b21WYWx1ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5faGFzQ3VzdG9tVmFsdWUoKSA/IHRoaXMuc3RhdGUuZW50cnlWYWx1ZSA6IG51bGw7XG4gIH07XG5cbiAgX3JlbmRlckluY3JlbWVudGFsU2VhcmNoUmVzdWx0cygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRoaXMucHJvcHMuY3VzdG9tTGlzdENvbXBvbmVudFxuICAgICAgICBmaXhlZE9wdGlvbnM9e3RoaXMucHJvcHMuZml4ZWRPcHRpb25zfVxuICAgICAgICBvcHRpb25zPXtcbiAgICAgICAgICB0aGlzLnByb3BzLm1heFZpc2libGVcbiAgICAgICAgICAgID8gdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzLnNsaWNlKDAsIHRoaXMucHJvcHMubWF4VmlzaWJsZSlcbiAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzXG4gICAgICAgIH1cbiAgICAgICAgYXJlUmVzdWx0c1RydW5jYXRlZD17XG4gICAgICAgICAgdGhpcy5wcm9wcy5tYXhWaXNpYmxlICYmIHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cy5sZW5ndGggPiB0aGlzLnByb3BzLm1heFZpc2libGVcbiAgICAgICAgfVxuICAgICAgICByZXN1bHRzVHJ1bmNhdGVkTWVzc2FnZT17dGhpcy5wcm9wcy5yZXN1bHRzVHJ1bmNhdGVkTWVzc2FnZX1cbiAgICAgICAgb25PcHRpb25TZWxlY3RlZD17dGhpcy5fb25PcHRpb25TZWxlY3RlZH1cbiAgICAgICAgYWxsb3dDdXN0b21WYWx1ZXM9e3RoaXMucHJvcHMuYWxsb3dDdXN0b21WYWx1ZXN9XG4gICAgICAgIGN1c3RvbVZhbHVlPXt0aGlzLl9nZXRDdXN0b21WYWx1ZSgpfVxuICAgICAgICBjdXN0b21DbGFzc2VzPXt0aGlzLnByb3BzLmN1c3RvbUNsYXNzZXN9XG4gICAgICAgIGN1c3RvbUxpc3RJdGVtQ29tcG9uZW50PXt0aGlzLnByb3BzLmN1c3RvbUxpc3RJdGVtQ29tcG9uZW50fVxuICAgICAgICBjdXN0b21MaXN0SGVhZGVyQ29tcG9uZW50PXt0aGlzLnByb3BzLmN1c3RvbUxpc3RIZWFkZXJDb21wb25lbnR9XG4gICAgICAgIHNlbGVjdGlvbkluZGV4PXt0aGlzLnN0YXRlLnNlbGVjdGlvbkluZGV4fVxuICAgICAgICBkZWZhdWx0Q2xhc3NOYW1lcz17dGhpcy5wcm9wcy5kZWZhdWx0Q2xhc3NOYW1lc31cbiAgICAgICAgZGlzcGxheU9wdGlvbj17dGhpcy5wcm9wcy5kaXNwbGF5T3B0aW9ufVxuICAgICAgICBzZWxlY3RlZEl0ZW1zPXt0aGlzLnByb3BzLnNlbGVjdGVkSXRlbXN9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICBnZXRTZWxlY3Rpb24oKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5zdGF0ZS5zZWxlY3Rpb25JbmRleDtcblxuICAgIGlmICh0aGlzLl9oYXNDdXN0b21WYWx1ZSgpKSB7XG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuZW50cnlWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGluZGV4LS07XG4gICAgfVxuICAgIGlmICh0aGlzLl9oYXNGaXhlZE9wdGlvbnMoKSkge1xuICAgICAgcmV0dXJuIGluZGV4IDwgdGhpcy5wcm9wcy5maXhlZE9wdGlvbnMubGVuZ3RoXG4gICAgICAgID8gdGhpcy5wcm9wcy5maXhlZE9wdGlvbnNbaW5kZXhdXG4gICAgICAgIDogdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzW2luZGV4IC0gdGhpcy5wcm9wcy5maXhlZE9wdGlvbnMubGVuZ3RoXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0c1tpbmRleF07XG4gIH1cblxuICBfb25PcHRpb25TZWxlY3RlZCA9IChvcHRpb24sIGV2ZW50KSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuc2VhcmNoYWJsZSkge1xuICAgICAgLy8gcmVzZXQgZW50cnkgaW5wdXRcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWFyY2hSZXN1bHRzOiBnZXRPcHRpb25zRm9yVmFsdWUoJycsIHRoaXMucHJvcHMsIHRoaXMuc3RhdGUpLFxuICAgICAgICBzZWxlY3Rpb246ICcnLFxuICAgICAgICBlbnRyeVZhbHVlOiAnJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMub25PcHRpb25TZWxlY3RlZChvcHRpb24sIGV2ZW50KTtcbiAgfTtcblxuICAvLyB1c2UgKCkgPT4ge30gdG8gYXZvaWQgYmluZGluZyAndGhpcydcbiAgX29uVGV4dEVudHJ5VXBkYXRlZCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5zZWFyY2hhYmxlKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZW50cnkuY3VycmVudC52YWx1ZTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlYXJjaFJlc3VsdHM6IGdldE9wdGlvbnNGb3JWYWx1ZSh2YWx1ZSwgdGhpcy5wcm9wcywgdGhpcy5zdGF0ZSksXG4gICAgICAgIHNlbGVjdGlvbjogJycsXG4gICAgICAgIGVudHJ5VmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX29uRW50ZXIgPSBldmVudCA9PiB7XG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKTtcbiAgICBpZiAoIXNlbGVjdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX29uT3B0aW9uU2VsZWN0ZWQoc2VsZWN0aW9uLCBldmVudCk7XG4gIH07XG5cbiAgX29uRXNjYXBlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0aW9uSW5kZXg6IG51bGxcbiAgICB9KTtcbiAgfTtcblxuICBfb25UYWIgPSBldmVudCA9PiB7XG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKTtcbiAgICBsZXQgb3B0aW9uID0gc2VsZWN0aW9uXG4gICAgICA/IHNlbGVjdGlvblxuICAgICAgOiB0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHMubGVuZ3RoID4gMFxuICAgICAgPyB0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHNbMF1cbiAgICAgIDogbnVsbDtcblxuICAgIGlmIChvcHRpb24gPT09IG51bGwgJiYgdGhpcy5faGFzQ3VzdG9tVmFsdWUoKSkge1xuICAgICAgb3B0aW9uID0gdGhpcy5fZ2V0Q3VzdG9tVmFsdWUoKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9uICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5fb25PcHRpb25TZWxlY3RlZChvcHRpb24sIGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgZXZlbnRNYXAgPSBldmVudCA9PiB7XG4gICAgY29uc3QgZXZlbnRzID0ge307XG5cbiAgICBldmVudHNbS2V5RXZlbnQuRE9NX1ZLX1VQXSA9IHRoaXMubmF2VXA7XG4gICAgZXZlbnRzW0tleUV2ZW50LkRPTV9WS19ET1dOXSA9IHRoaXMubmF2RG93bjtcbiAgICBldmVudHNbS2V5RXZlbnQuRE9NX1ZLX1JFVFVSTl0gPSBldmVudHNbS2V5RXZlbnQuRE9NX1ZLX0VOVEVSXSA9IHRoaXMuX29uRW50ZXI7XG4gICAgZXZlbnRzW0tleUV2ZW50LkRPTV9WS19FU0NBUEVdID0gdGhpcy5fb25Fc2NhcGU7XG4gICAgZXZlbnRzW0tleUV2ZW50LkRPTV9WS19UQUJdID0gdGhpcy5fb25UYWI7XG5cbiAgICByZXR1cm4gZXZlbnRzO1xuICB9O1xuXG4gIF9uYXYgPSBkZWx0YSA9PiB7XG4gICAgaWYgKCF0aGlzLl9oYXNIaW50KCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IG5ld0luZGV4ID1cbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0aW9uSW5kZXggPT09IG51bGxcbiAgICAgICAgPyBkZWx0YSA9PT0gMVxuICAgICAgICAgID8gMFxuICAgICAgICAgIDogZGVsdGFcbiAgICAgICAgOiB0aGlzLnN0YXRlLnNlbGVjdGlvbkluZGV4ICsgZGVsdGE7XG4gICAgbGV0IGxlbmd0aCA9IHRoaXMucHJvcHMubWF4VmlzaWJsZVxuICAgICAgPyB0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHMuc2xpY2UoMCwgdGhpcy5wcm9wcy5tYXhWaXNpYmxlKS5sZW5ndGhcbiAgICAgIDogdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzLmxlbmd0aDtcbiAgICBpZiAodGhpcy5faGFzQ3VzdG9tVmFsdWUoKSkge1xuICAgICAgbGVuZ3RoICs9IDE7XG4gICAgfVxuXG4gICAgaWYgKG5ld0luZGV4IDwgMCkge1xuICAgICAgbmV3SW5kZXggKz0gbGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAobmV3SW5kZXggPj0gbGVuZ3RoKSB7XG4gICAgICBuZXdJbmRleCAtPSBsZW5ndGg7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0aW9uSW5kZXg6IG5ld0luZGV4fSk7XG4gIH07XG5cbiAgbmF2RG93biA9ICgpID0+IHtcbiAgICB0aGlzLl9uYXYoMSk7XG4gIH07XG5cbiAgbmF2VXAgPSAoKSA9PiB7XG4gICAgdGhpcy5fbmF2KC0xKTtcbiAgfTtcblxuICBfb25DaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQpO1xuICAgIH1cblxuICAgIHRoaXMuX29uVGV4dEVudHJ5VXBkYXRlZCgpO1xuICB9O1xuXG4gIF9vbktleURvd24gPSBldmVudCA9PiB7XG4gICAgLy8gSWYgdGhlcmUgYXJlIG5vIHZpc2libGUgZWxlbWVudHMsIGRvbid0IHBlcmZvcm0gc2VsZWN0b3IgbmF2aWdhdGlvbi5cbiAgICAvLyBKdXN0IHBhc3MgdGhpcyB1cCB0byB0aGUgdXBzdHJlYW0gb25LZXlkb3duIGhhbmRsZXIuXG4gICAgLy8gQWxzbyBza2lwIGlmIHRoZSB1c2VyIGlzIHByZXNzaW5nIHRoZSBzaGlmdCBrZXksIHNpbmNlIG5vbmUgb2Ygb3VyIGhhbmRsZXJzIGFyZSBsb29raW5nIGZvciBzaGlmdFxuICAgIGlmICghdGhpcy5faGFzSGludCgpIHx8IGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmV2ZW50TWFwKClbZXZlbnQua2V5Q29kZV07XG5cbiAgICBpZiAoaGFuZGxlcikge1xuICAgICAgaGFuZGxlcihldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLm9uS2V5RG93bihldmVudCk7XG4gICAgfVxuICAgIC8vIERvbid0IHByb3BhZ2F0ZSB0aGUga2V5c3Ryb2tlIGJhY2sgdG8gdGhlIERPTS9icm93c2VyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICBfb25Gb2N1cyA9IGV2ZW50ID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtpc0ZvY3VzZWQ6IHRydWV9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkZvY3VzKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5vbkZvY3VzKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgX29uQmx1ciA9IGV2ZW50ID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtpc0ZvY3VzZWQ6IGZhbHNlfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5vbkJsdXIoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBfcmVuZGVySGlkZGVuSW5wdXQoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLm5hbWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9e3RoaXMucHJvcHMubmFtZX0gdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0aW9ufSAvPjtcbiAgfVxuXG4gIF9oYXNIaW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHMubGVuZ3RoID4gMCB8fCB0aGlzLl9oYXNDdXN0b21WYWx1ZSgpO1xuICB9XG5cbiAgX2hhc0ZpeGVkT3B0aW9ucygpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0aGlzLnByb3BzLmZpeGVkT3B0aW9ucykgJiYgdGhpcy5wcm9wcy5maXhlZE9wdGlvbnMubGVuZ3RoO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlucHV0Q2xhc3NlcyA9IHt9O1xuICAgIGlucHV0Q2xhc3Nlc1t0aGlzLnByb3BzLmN1c3RvbUNsYXNzZXMuaW5wdXRdID0gQm9vbGVhbih0aGlzLnByb3BzLmN1c3RvbUNsYXNzZXMuaW5wdXQpO1xuICAgIGNvbnN0IGlucHV0Q2xhc3NMaXN0ID0gY2xhc3NOYW1lcyhpbnB1dENsYXNzZXMpO1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgIFtERUZBVUxUX0NMQVNTXTogdGhpcy5wcm9wcy5kZWZhdWx0Q2xhc3NOYW1lc1xuICAgIH07XG4gICAgY2xhc3Nlc1t0aGlzLnByb3BzLmNsYXNzTmFtZV0gPSBCb29sZWFuKHRoaXMucHJvcHMuY2xhc3NOYW1lKTtcbiAgICBjb25zdCBjbGFzc0xpc3QgPSBjbGFzc05hbWVzKGNsYXNzZXMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUeXBlYWhlYWRXcmFwcGVyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NMaXN0fVxuICAgICAgICByZWY9e3RoaXMucm9vdH1cbiAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgb25LZXlEb3duPXt0aGlzLl9vbktleURvd259XG4gICAgICAgIG9uS2V5UHJlc3M9e3RoaXMucHJvcHMub25LZXlQcmVzc31cbiAgICAgICAgb25LZXlVcD17dGhpcy5wcm9wcy5vbktleVVwfVxuICAgICAgICBvbkZvY3VzPXt0aGlzLl9vbkZvY3VzfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5fcmVuZGVySGlkZGVuSW5wdXQoKX1cbiAgICAgICAge3RoaXMucHJvcHMuc2VhcmNoYWJsZSA/IChcbiAgICAgICAgICA8SW5wdXRCb3g+XG4gICAgICAgICAgICA8VHlwZWFoZWFkSW5wdXRcbiAgICAgICAgICAgICAgcmVmPXt0aGlzLmVudHJ5fVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wcy5pbnB1dFByb3BzfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dENsYXNzTGlzdH1cbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW50cnlWYWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlfVxuICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuX29uQmx1cn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SW5wdXRJY29uPlxuICAgICAgICAgICAgICA8U2VhcmNoIGhlaWdodD1cIjE4cHhcIiAvPlxuICAgICAgICAgICAgPC9JbnB1dEljb24+XG4gICAgICAgICAgPC9JbnB1dEJveD5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIHt0aGlzLl9yZW5kZXJJbmNyZW1lbnRhbFNlYXJjaFJlc3VsdHMoKX1cbiAgICAgIDwvVHlwZWFoZWFkV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG5cbnBvbHlmaWxsKFR5cGVhaGVhZCk7XG5cbmV4cG9ydCBkZWZhdWx0IFR5cGVhaGVhZDtcbiJdfQ==