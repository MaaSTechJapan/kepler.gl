"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _panelHeaderAction = _interopRequireDefault(require("../panel-header-action"));

var _icons = require("../../common/icons");

var _styledComponents2 = require("../../common/styled-components");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: space-between;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  .layer-group__visibility-toggle {\n    margin-right: 12px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding-bottom: 12px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledInteractionPanel = _styledComponents["default"].div(_templateObject());

var StyledLayerGroupItem = _styledComponents["default"].div(_templateObject2());

var LayerLabel = (0, _styledComponents["default"])(_styledComponents2.PanelLabelBold)(_templateObject3(), function (props) {
  return props.active ? props.theme.textColor : props.theme.labelColor;
});

function LayerGroupSelectorFactory() {
  var LayerGroupSelector = function LayerGroupSelector(_ref) {
    var layers = _ref.layers,
        editableLayers = _ref.editableLayers,
        onChange = _ref.onChange,
        topLayers = _ref.topLayers;
    return /*#__PURE__*/_react["default"].createElement(StyledInteractionPanel, {
      className: "map-style__layer-group__selector"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "layer-group__header"
    }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, "Map Layers")), /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelContent, {
      className: "map-style__layer-group"
    }, editableLayers.map(function (slug) {
      return /*#__PURE__*/_react["default"].createElement(StyledLayerGroupItem, {
        className: "layer-group__select",
        key: slug
      }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabelWrapper, null, /*#__PURE__*/_react["default"].createElement(_panelHeaderAction["default"], {
        className: "layer-group__visibility-toggle",
        id: "".concat(slug, "-toggle"),
        tooltip: layers[slug] ? 'hide' : 'show',
        onClick: function onClick() {
          return onChange({
            visibleLayerGroups: _objectSpread({}, layers, (0, _defineProperty2["default"])({}, slug, !layers[slug]))
          });
        },
        IconComponent: layers[slug] ? _icons.EyeSeen : _icons.EyeUnseen,
        active: layers[slug],
        flush: true
      }), /*#__PURE__*/_react["default"].createElement(LayerLabel, {
        active: layers[slug]
      }, slug)), /*#__PURE__*/_react["default"].createElement(_styledComponents2.CenterFlexbox, {
        className: "layer-group__bring-top"
      }, /*#__PURE__*/_react["default"].createElement(_panelHeaderAction["default"], {
        id: "".concat(slug, "-top"),
        tooltip: "Move to top of data layers",
        disabled: !layers[slug],
        IconComponent: _icons.Upload,
        active: topLayers[slug],
        onClick: function onClick() {
          return onChange({
            topLayerGroups: _objectSpread({}, topLayers, (0, _defineProperty2["default"])({}, slug, !topLayers[slug]))
          });
        }
      })));
    })));
  };

  return LayerGroupSelector;
}

var _default = LayerGroupSelectorFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbWFwLXN0eWxlLXBhbmVsL21hcC1sYXllci1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJTdHlsZWRJbnRlcmFjdGlvblBhbmVsIiwic3R5bGVkIiwiZGl2IiwiU3R5bGVkTGF5ZXJHcm91cEl0ZW0iLCJMYXllckxhYmVsIiwiUGFuZWxMYWJlbEJvbGQiLCJwcm9wcyIsImFjdGl2ZSIsInRoZW1lIiwidGV4dENvbG9yIiwibGFiZWxDb2xvciIsIkxheWVyR3JvdXBTZWxlY3RvckZhY3RvcnkiLCJMYXllckdyb3VwU2VsZWN0b3IiLCJsYXllcnMiLCJlZGl0YWJsZUxheWVycyIsIm9uQ2hhbmdlIiwidG9wTGF5ZXJzIiwibWFwIiwic2x1ZyIsInZpc2libGVMYXllckdyb3VwcyIsIkV5ZVNlZW4iLCJFeWVVbnNlZW4iLCJVcGxvYWQiLCJ0b3BMYXllckdyb3VwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUEsSUFBTUEsc0JBQXNCLEdBQUdDLDZCQUFPQyxHQUFWLG1CQUE1Qjs7QUFJQSxJQUFNQyxvQkFBb0IsR0FBR0YsNkJBQU9DLEdBQVYsb0JBQTFCOztBQWNBLElBQU1FLFVBQVUsR0FBRyxrQ0FBT0MsaUNBQVAsQ0FBSCxxQkFDTCxVQUFBQyxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDQyxNQUFOLEdBQWVELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxTQUEzQixHQUF1Q0gsS0FBSyxDQUFDRSxLQUFOLENBQVlFLFVBQXhEO0FBQUEsQ0FEQSxDQUFoQjs7QUFJQSxTQUFTQyx5QkFBVCxHQUFxQztBQUNuQyxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUEsUUFBRUMsTUFBRixRQUFFQSxNQUFGO0FBQUEsUUFBVUMsY0FBVixRQUFVQSxjQUFWO0FBQUEsUUFBMEJDLFFBQTFCLFFBQTBCQSxRQUExQjtBQUFBLFFBQW9DQyxTQUFwQyxRQUFvQ0EsU0FBcEM7QUFBQSx3QkFDekIsZ0NBQUMsc0JBQUQ7QUFBd0IsTUFBQSxTQUFTLEVBQUM7QUFBbEMsb0JBQ0U7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLG9CQUNFLGdDQUFDLDZCQUFELHFCQURGLENBREYsZUFJRSxnQ0FBQywrQkFBRDtBQUFjLE1BQUEsU0FBUyxFQUFDO0FBQXhCLE9BQ0dGLGNBQWMsQ0FBQ0csR0FBZixDQUFtQixVQUFBQyxJQUFJO0FBQUEsMEJBQ3RCLGdDQUFDLG9CQUFEO0FBQXNCLFFBQUEsU0FBUyxFQUFDLHFCQUFoQztBQUFzRCxRQUFBLEdBQUcsRUFBRUE7QUFBM0Qsc0JBQ0UsZ0NBQUMsb0NBQUQscUJBQ0UsZ0NBQUMsNkJBQUQ7QUFDRSxRQUFBLFNBQVMsRUFBQyxnQ0FEWjtBQUVFLFFBQUEsRUFBRSxZQUFLQSxJQUFMLFlBRko7QUFHRSxRQUFBLE9BQU8sRUFBRUwsTUFBTSxDQUFDSyxJQUFELENBQU4sR0FBZSxNQUFmLEdBQXdCLE1BSG5DO0FBSUUsUUFBQSxPQUFPLEVBQUU7QUFBQSxpQkFDUEgsUUFBUSxDQUFDO0FBQ1BJLFlBQUFBLGtCQUFrQixvQkFDYk4sTUFEYSx1Q0FFZkssSUFGZSxFQUVSLENBQUNMLE1BQU0sQ0FBQ0ssSUFBRCxDQUZDO0FBRFgsV0FBRCxDQUREO0FBQUEsU0FKWDtBQVlFLFFBQUEsYUFBYSxFQUFFTCxNQUFNLENBQUNLLElBQUQsQ0FBTixHQUFlRSxjQUFmLEdBQXlCQyxnQkFaMUM7QUFhRSxRQUFBLE1BQU0sRUFBRVIsTUFBTSxDQUFDSyxJQUFELENBYmhCO0FBY0UsUUFBQSxLQUFLO0FBZFAsUUFERixlQWlCRSxnQ0FBQyxVQUFEO0FBQVksUUFBQSxNQUFNLEVBQUVMLE1BQU0sQ0FBQ0ssSUFBRDtBQUExQixTQUFtQ0EsSUFBbkMsQ0FqQkYsQ0FERixlQW9CRSxnQ0FBQyxnQ0FBRDtBQUFlLFFBQUEsU0FBUyxFQUFDO0FBQXpCLHNCQUNFLGdDQUFDLDZCQUFEO0FBQ0UsUUFBQSxFQUFFLFlBQUtBLElBQUwsU0FESjtBQUVFLFFBQUEsT0FBTyxFQUFDLDRCQUZWO0FBR0UsUUFBQSxRQUFRLEVBQUUsQ0FBQ0wsTUFBTSxDQUFDSyxJQUFELENBSG5CO0FBSUUsUUFBQSxhQUFhLEVBQUVJLGFBSmpCO0FBS0UsUUFBQSxNQUFNLEVBQUVOLFNBQVMsQ0FBQ0UsSUFBRCxDQUxuQjtBQU1FLFFBQUEsT0FBTyxFQUFFO0FBQUEsaUJBQ1BILFFBQVEsQ0FBQztBQUNQUSxZQUFBQSxjQUFjLG9CQUNUUCxTQURTLHVDQUVYRSxJQUZXLEVBRUosQ0FBQ0YsU0FBUyxDQUFDRSxJQUFELENBRk47QUFEUCxXQUFELENBREQ7QUFBQTtBQU5YLFFBREYsQ0FwQkYsQ0FEc0I7QUFBQSxLQUF2QixDQURILENBSkYsQ0FEeUI7QUFBQSxHQUEzQjs7QUFrREEsU0FBT04sa0JBQVA7QUFDRDs7ZUFFY0QseUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFBhbmVsSGVhZGVyQWN0aW9uIGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9wYW5lbC1oZWFkZXItYWN0aW9uJztcclxuaW1wb3J0IHtFeWVTZWVuLCBFeWVVbnNlZW4sIFVwbG9hZH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBQYW5lbExhYmVsLFxyXG4gIFBhbmVsQ29udGVudCxcclxuICBQYW5lbExhYmVsQm9sZCxcclxuICBQYW5lbExhYmVsV3JhcHBlcixcclxuICBDZW50ZXJGbGV4Ym94XHJcbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgU3R5bGVkSW50ZXJhY3Rpb25QYW5lbCA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRMYXllckdyb3VwSXRlbSA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICAubGF5ZXItZ3JvdXBfX3Zpc2liaWxpdHktdG9nZ2xlIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBMYXllckxhYmVsID0gc3R5bGVkKFBhbmVsTGFiZWxCb2xkKWBcclxuICBjb2xvcjogJHtwcm9wcyA9PiAocHJvcHMuYWN0aXZlID8gcHJvcHMudGhlbWUudGV4dENvbG9yIDogcHJvcHMudGhlbWUubGFiZWxDb2xvcil9O1xyXG5gO1xyXG5cclxuZnVuY3Rpb24gTGF5ZXJHcm91cFNlbGVjdG9yRmFjdG9yeSgpIHtcclxuICBjb25zdCBMYXllckdyb3VwU2VsZWN0b3IgPSAoe2xheWVycywgZWRpdGFibGVMYXllcnMsIG9uQ2hhbmdlLCB0b3BMYXllcnN9KSA9PiAoXHJcbiAgICA8U3R5bGVkSW50ZXJhY3Rpb25QYW5lbCBjbGFzc05hbWU9XCJtYXAtc3R5bGVfX2xheWVyLWdyb3VwX19zZWxlY3RvclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheWVyLWdyb3VwX19oZWFkZXJcIj5cclxuICAgICAgICA8UGFuZWxMYWJlbD5NYXAgTGF5ZXJzPC9QYW5lbExhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFBhbmVsQ29udGVudCBjbGFzc05hbWU9XCJtYXAtc3R5bGVfX2xheWVyLWdyb3VwXCI+XHJcbiAgICAgICAge2VkaXRhYmxlTGF5ZXJzLm1hcChzbHVnID0+IChcclxuICAgICAgICAgIDxTdHlsZWRMYXllckdyb3VwSXRlbSBjbGFzc05hbWU9XCJsYXllci1ncm91cF9fc2VsZWN0XCIga2V5PXtzbHVnfT5cclxuICAgICAgICAgICAgPFBhbmVsTGFiZWxXcmFwcGVyPlxyXG4gICAgICAgICAgICAgIDxQYW5lbEhlYWRlckFjdGlvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGF5ZXItZ3JvdXBfX3Zpc2liaWxpdHktdG9nZ2xlXCJcclxuICAgICAgICAgICAgICAgIGlkPXtgJHtzbHVnfS10b2dnbGVgfVxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcD17bGF5ZXJzW3NsdWddID8gJ2hpZGUnIDogJ3Nob3cnfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVMYXllckdyb3Vwczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4ubGF5ZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW3NsdWddOiAhbGF5ZXJzW3NsdWddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgSWNvbkNvbXBvbmVudD17bGF5ZXJzW3NsdWddID8gRXllU2VlbiA6IEV5ZVVuc2Vlbn1cclxuICAgICAgICAgICAgICAgIGFjdGl2ZT17bGF5ZXJzW3NsdWddfVxyXG4gICAgICAgICAgICAgICAgZmx1c2hcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxMYXllckxhYmVsIGFjdGl2ZT17bGF5ZXJzW3NsdWddfT57c2x1Z308L0xheWVyTGFiZWw+XHJcbiAgICAgICAgICAgIDwvUGFuZWxMYWJlbFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxDZW50ZXJGbGV4Ym94IGNsYXNzTmFtZT1cImxheWVyLWdyb3VwX19icmluZy10b3BcIj5cclxuICAgICAgICAgICAgICA8UGFuZWxIZWFkZXJBY3Rpb25cclxuICAgICAgICAgICAgICAgIGlkPXtgJHtzbHVnfS10b3BgfVxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcD1cIk1vdmUgdG8gdG9wIG9mIGRhdGEgbGF5ZXJzXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshbGF5ZXJzW3NsdWddfVxyXG4gICAgICAgICAgICAgICAgSWNvbkNvbXBvbmVudD17VXBsb2FkfVxyXG4gICAgICAgICAgICAgICAgYWN0aXZlPXt0b3BMYXllcnNbc2x1Z119XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wTGF5ZXJHcm91cHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLnRvcExheWVycyxcclxuICAgICAgICAgICAgICAgICAgICAgIFtzbHVnXTogIXRvcExheWVyc1tzbHVnXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NlbnRlckZsZXhib3g+XHJcbiAgICAgICAgICA8L1N0eWxlZExheWVyR3JvdXBJdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1BhbmVsQ29udGVudD5cclxuICAgIDwvU3R5bGVkSW50ZXJhY3Rpb25QYW5lbD5cclxuICApO1xyXG5cclxuICByZXR1cm4gTGF5ZXJHcm91cFNlbGVjdG9yO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXllckdyb3VwU2VsZWN0b3JGYWN0b3J5O1xyXG4iXX0=