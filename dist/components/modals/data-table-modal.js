"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DatasetTabs = exports.DatasetModalTab = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _datagrid = _interopRequireDefault(require("../common/datagrid"));

var _datasetLabel = _interopRequireDefault(require("../common/dataset-label"));

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  border-bottom: 3px solid ", ";\n  cursor: pointer;\n  display: flex;\n  height: 35px;\n  margin: 0 3px;\n  padding: 0 5px;\n\n  :first-child {\n    margin-left: 0;\n    padding-left: 0;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  padding: ", " ", " 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  min-height: 70vh;\n  overflow: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var dgSettings = {
  sidePadding: '38px',
  verticalPadding: '16px',
  height: '36px'
};

var StyledModal = _styledComponents["default"].div(_templateObject());

var DatasetCatalog = _styledComponents["default"].div(_templateObject2(), dgSettings.verticalPadding, dgSettings.sidePadding);

var DatasetModalTab = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.active ? 'black' : 'transparent';
});

exports.DatasetModalTab = DatasetModalTab;

var DatasetTabs = _react["default"].memo(function (_ref) {
  var activeDataset = _ref.activeDataset,
      datasets = _ref.datasets,
      showDatasetTable = _ref.showDatasetTable;
  return /*#__PURE__*/_react["default"].createElement(DatasetCatalog, {
    className: "dataset-modal-catalog"
  }, Object.values(datasets).map(function (dataset) {
    return /*#__PURE__*/_react["default"].createElement(DatasetModalTab, {
      className: "dataset-modal-tab",
      active: dataset === activeDataset,
      key: dataset.id,
      onClick: function onClick() {
        return showDatasetTable(dataset.id);
      }
    }, /*#__PURE__*/_react["default"].createElement(_datasetLabel["default"], {
      dataset: dataset
    }));
  }));
});

exports.DatasetTabs = DatasetTabs;
DatasetTabs.displayName = 'DatasetTabs';
DataTableModalFactory.deps = [_datagrid["default"]];

function DataTableModalFactory(DataGrid) {
  var DataTableModal = _react["default"].memo(function (_ref2) {
    var datasets = _ref2.datasets,
        dataId = _ref2.dataId,
        height = _ref2.height,
        showDatasetTable = _ref2.showDatasetTable,
        width = _ref2.width;

    if (!datasets || !dataId) {
      return null;
    }

    var activeDataset = datasets[dataId];
    var rows = activeDataset.allData;
    return /*#__PURE__*/_react["default"].createElement(StyledModal, {
      className: "dataset-modal"
    }, /*#__PURE__*/_react["default"].createElement(DatasetTabs, {
      activeDataset: activeDataset,
      datasets: datasets,
      showDatasetTable: showDatasetTable
    }), /*#__PURE__*/_react["default"].createElement(DataGrid, {
      width: width,
      height: height,
      rows: rows,
      columns: activeDataset.fields
    }));
  });

  DataTableModal.displayName = 'DataTableModal';
  return DataTableModal;
}

var _default = DataTableModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9kYXRhLXRhYmxlLW1vZGFsLmpzIl0sIm5hbWVzIjpbImRnU2V0dGluZ3MiLCJzaWRlUGFkZGluZyIsInZlcnRpY2FsUGFkZGluZyIsImhlaWdodCIsIlN0eWxlZE1vZGFsIiwic3R5bGVkIiwiZGl2IiwiRGF0YXNldENhdGFsb2ciLCJEYXRhc2V0TW9kYWxUYWIiLCJwcm9wcyIsImFjdGl2ZSIsIkRhdGFzZXRUYWJzIiwiUmVhY3QiLCJtZW1vIiwiYWN0aXZlRGF0YXNldCIsImRhdGFzZXRzIiwic2hvd0RhdGFzZXRUYWJsZSIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsImRhdGFzZXQiLCJpZCIsImRpc3BsYXlOYW1lIiwiRGF0YVRhYmxlTW9kYWxGYWN0b3J5IiwiZGVwcyIsIkRhdGFHcmlkRmFjdG9yeSIsIkRhdGFHcmlkIiwiRGF0YVRhYmxlTW9kYWwiLCJkYXRhSWQiLCJ3aWR0aCIsInJvd3MiLCJhbGxEYXRhIiwiZmllbGRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUc7QUFDakJDLEVBQUFBLFdBQVcsRUFBRSxNQURJO0FBRWpCQyxFQUFBQSxlQUFlLEVBQUUsTUFGQTtBQUdqQkMsRUFBQUEsTUFBTSxFQUFFO0FBSFMsQ0FBbkI7O0FBTUEsSUFBTUMsV0FBVyxHQUFHQyw2QkFBT0MsR0FBVixtQkFBakI7O0FBS0EsSUFBTUMsY0FBYyxHQUFHRiw2QkFBT0MsR0FBVixxQkFFUE4sVUFBVSxDQUFDRSxlQUZKLEVBRXVCRixVQUFVLENBQUNDLFdBRmxDLENBQXBCOztBQUtPLElBQU1PLGVBQWUsR0FBR0gsNkJBQU9DLEdBQVYscUJBRUMsVUFBQUcsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0MsTUFBTixHQUFlLE9BQWYsR0FBeUIsYUFBOUI7QUFBQSxDQUZOLENBQXJCOzs7O0FBZUEsSUFBTUMsV0FBVyxHQUFHQyxrQkFBTUMsSUFBTixDQUFXO0FBQUEsTUFBRUMsYUFBRixRQUFFQSxhQUFGO0FBQUEsTUFBaUJDLFFBQWpCLFFBQWlCQSxRQUFqQjtBQUFBLE1BQTJCQyxnQkFBM0IsUUFBMkJBLGdCQUEzQjtBQUFBLHNCQUNwQyxnQ0FBQyxjQUFEO0FBQWdCLElBQUEsU0FBUyxFQUFDO0FBQTFCLEtBQ0dDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxRQUFkLEVBQXdCSSxHQUF4QixDQUE0QixVQUFBQyxPQUFPO0FBQUEsd0JBQ2xDLGdDQUFDLGVBQUQ7QUFDRSxNQUFBLFNBQVMsRUFBQyxtQkFEWjtBQUVFLE1BQUEsTUFBTSxFQUFFQSxPQUFPLEtBQUtOLGFBRnRCO0FBR0UsTUFBQSxHQUFHLEVBQUVNLE9BQU8sQ0FBQ0MsRUFIZjtBQUlFLE1BQUEsT0FBTyxFQUFFO0FBQUEsZUFBTUwsZ0JBQWdCLENBQUNJLE9BQU8sQ0FBQ0MsRUFBVCxDQUF0QjtBQUFBO0FBSlgsb0JBTUUsZ0NBQUMsd0JBQUQ7QUFBYyxNQUFBLE9BQU8sRUFBRUQ7QUFBdkIsTUFORixDQURrQztBQUFBLEdBQW5DLENBREgsQ0FEb0M7QUFBQSxDQUFYLENBQXBCOzs7QUFlUFQsV0FBVyxDQUFDVyxXQUFaLEdBQTBCLGFBQTFCO0FBRUFDLHFCQUFxQixDQUFDQyxJQUF0QixHQUE2QixDQUFDQyxvQkFBRCxDQUE3Qjs7QUFFQSxTQUFTRixxQkFBVCxDQUErQkcsUUFBL0IsRUFBeUM7QUFDdkMsTUFBTUMsY0FBYyxHQUFHZixrQkFBTUMsSUFBTixDQUFXLGlCQUF5RDtBQUFBLFFBQXZERSxRQUF1RCxTQUF2REEsUUFBdUQ7QUFBQSxRQUE3Q2EsTUFBNkMsU0FBN0NBLE1BQTZDO0FBQUEsUUFBckN6QixNQUFxQyxTQUFyQ0EsTUFBcUM7QUFBQSxRQUE3QmEsZ0JBQTZCLFNBQTdCQSxnQkFBNkI7QUFBQSxRQUFYYSxLQUFXLFNBQVhBLEtBQVc7O0FBQ3pGLFFBQUksQ0FBQ2QsUUFBRCxJQUFhLENBQUNhLE1BQWxCLEVBQTBCO0FBQ3hCLGFBQU8sSUFBUDtBQUNEOztBQUVELFFBQU1kLGFBQWEsR0FBR0MsUUFBUSxDQUFDYSxNQUFELENBQTlCO0FBQ0EsUUFBTUUsSUFBSSxHQUFHaEIsYUFBYSxDQUFDaUIsT0FBM0I7QUFFQSx3QkFDRSxnQ0FBQyxXQUFEO0FBQWEsTUFBQSxTQUFTLEVBQUM7QUFBdkIsb0JBQ0UsZ0NBQUMsV0FBRDtBQUNFLE1BQUEsYUFBYSxFQUFFakIsYUFEakI7QUFFRSxNQUFBLFFBQVEsRUFBRUMsUUFGWjtBQUdFLE1BQUEsZ0JBQWdCLEVBQUVDO0FBSHBCLE1BREYsZUFNRSxnQ0FBQyxRQUFEO0FBQVUsTUFBQSxLQUFLLEVBQUVhLEtBQWpCO0FBQXdCLE1BQUEsTUFBTSxFQUFFMUIsTUFBaEM7QUFBd0MsTUFBQSxJQUFJLEVBQUUyQixJQUE5QztBQUFvRCxNQUFBLE9BQU8sRUFBRWhCLGFBQWEsQ0FBQ2tCO0FBQTNFLE1BTkYsQ0FERjtBQVVELEdBbEJzQixDQUF2Qjs7QUFvQkFMLEVBQUFBLGNBQWMsQ0FBQ0wsV0FBZixHQUE2QixnQkFBN0I7QUFDQSxTQUFPSyxjQUFQO0FBQ0Q7O2VBRWNKLHFCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBEYXRhR3JpZEZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9jb21tb24vZGF0YWdyaWQnO1xyXG5pbXBvcnQgRGF0YXNldExhYmVsIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2RhdGFzZXQtbGFiZWwnO1xyXG5cclxuY29uc3QgZGdTZXR0aW5ncyA9IHtcclxuICBzaWRlUGFkZGluZzogJzM4cHgnLFxyXG4gIHZlcnRpY2FsUGFkZGluZzogJzE2cHgnLFxyXG4gIGhlaWdodDogJzM2cHgnXHJcbn07XHJcblxyXG5jb25zdCBTdHlsZWRNb2RhbCA9IHN0eWxlZC5kaXZgXHJcbiAgbWluLWhlaWdodDogNzB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5gO1xyXG5cclxuY29uc3QgRGF0YXNldENhdGFsb2cgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogJHtkZ1NldHRpbmdzLnZlcnRpY2FsUGFkZGluZ30gJHtkZ1NldHRpbmdzLnNpZGVQYWRkaW5nfSAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IERhdGFzZXRNb2RhbFRhYiA9IHN0eWxlZC5kaXZgXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJHtwcm9wcyA9PiAocHJvcHMuYWN0aXZlID8gJ2JsYWNrJyA6ICd0cmFuc3BhcmVudCcpfTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgbWFyZ2luOiAwIDNweDtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuXHJcbiAgOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhc2V0VGFicyA9IFJlYWN0Lm1lbW8oKHthY3RpdmVEYXRhc2V0LCBkYXRhc2V0cywgc2hvd0RhdGFzZXRUYWJsZX0pID0+IChcclxuICA8RGF0YXNldENhdGFsb2cgY2xhc3NOYW1lPVwiZGF0YXNldC1tb2RhbC1jYXRhbG9nXCI+XHJcbiAgICB7T2JqZWN0LnZhbHVlcyhkYXRhc2V0cykubWFwKGRhdGFzZXQgPT4gKFxyXG4gICAgICA8RGF0YXNldE1vZGFsVGFiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZGF0YXNldC1tb2RhbC10YWJcIlxyXG4gICAgICAgIGFjdGl2ZT17ZGF0YXNldCA9PT0gYWN0aXZlRGF0YXNldH1cclxuICAgICAgICBrZXk9e2RhdGFzZXQuaWR9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2hvd0RhdGFzZXRUYWJsZShkYXRhc2V0LmlkKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxEYXRhc2V0TGFiZWwgZGF0YXNldD17ZGF0YXNldH0gLz5cclxuICAgICAgPC9EYXRhc2V0TW9kYWxUYWI+XHJcbiAgICApKX1cclxuICA8L0RhdGFzZXRDYXRhbG9nPlxyXG4pKTtcclxuXHJcbkRhdGFzZXRUYWJzLmRpc3BsYXlOYW1lID0gJ0RhdGFzZXRUYWJzJztcclxuXHJcbkRhdGFUYWJsZU1vZGFsRmFjdG9yeS5kZXBzID0gW0RhdGFHcmlkRmFjdG9yeV07XHJcblxyXG5mdW5jdGlvbiBEYXRhVGFibGVNb2RhbEZhY3RvcnkoRGF0YUdyaWQpIHtcclxuICBjb25zdCBEYXRhVGFibGVNb2RhbCA9IFJlYWN0Lm1lbW8oKHtkYXRhc2V0cywgZGF0YUlkLCBoZWlnaHQsIHNob3dEYXRhc2V0VGFibGUsIHdpZHRofSkgPT4ge1xyXG4gICAgaWYgKCFkYXRhc2V0cyB8fCAhZGF0YUlkKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjdGl2ZURhdGFzZXQgPSBkYXRhc2V0c1tkYXRhSWRdO1xyXG4gICAgY29uc3Qgcm93cyA9IGFjdGl2ZURhdGFzZXQuYWxsRGF0YTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U3R5bGVkTW9kYWwgY2xhc3NOYW1lPVwiZGF0YXNldC1tb2RhbFwiPlxyXG4gICAgICAgIDxEYXRhc2V0VGFic1xyXG4gICAgICAgICAgYWN0aXZlRGF0YXNldD17YWN0aXZlRGF0YXNldH1cclxuICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cclxuICAgICAgICAgIHNob3dEYXRhc2V0VGFibGU9e3Nob3dEYXRhc2V0VGFibGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8RGF0YUdyaWQgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gcm93cz17cm93c30gY29sdW1ucz17YWN0aXZlRGF0YXNldC5maWVsZHN9IC8+XHJcbiAgICAgIDwvU3R5bGVkTW9kYWw+XHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICBEYXRhVGFibGVNb2RhbC5kaXNwbGF5TmFtZSA9ICdEYXRhVGFibGVNb2RhbCc7XHJcbiAgcmV0dXJuIERhdGFUYWJsZU1vZGFsO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhVGFibGVNb2RhbEZhY3Rvcnk7XHJcbiJdfQ==