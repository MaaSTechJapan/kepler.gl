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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9kYXRhLXRhYmxlLW1vZGFsLmpzIl0sIm5hbWVzIjpbImRnU2V0dGluZ3MiLCJzaWRlUGFkZGluZyIsInZlcnRpY2FsUGFkZGluZyIsImhlaWdodCIsIlN0eWxlZE1vZGFsIiwic3R5bGVkIiwiZGl2IiwiRGF0YXNldENhdGFsb2ciLCJEYXRhc2V0TW9kYWxUYWIiLCJwcm9wcyIsImFjdGl2ZSIsIkRhdGFzZXRUYWJzIiwiUmVhY3QiLCJtZW1vIiwiYWN0aXZlRGF0YXNldCIsImRhdGFzZXRzIiwic2hvd0RhdGFzZXRUYWJsZSIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsImRhdGFzZXQiLCJpZCIsImRpc3BsYXlOYW1lIiwiRGF0YVRhYmxlTW9kYWxGYWN0b3J5IiwiZGVwcyIsIkRhdGFHcmlkRmFjdG9yeSIsIkRhdGFHcmlkIiwiRGF0YVRhYmxlTW9kYWwiLCJkYXRhSWQiLCJ3aWR0aCIsInJvd3MiLCJhbGxEYXRhIiwiZmllbGRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUc7QUFDakJDLEVBQUFBLFdBQVcsRUFBRSxNQURJO0FBRWpCQyxFQUFBQSxlQUFlLEVBQUUsTUFGQTtBQUdqQkMsRUFBQUEsTUFBTSxFQUFFO0FBSFMsQ0FBbkI7O0FBTUEsSUFBTUMsV0FBVyxHQUFHQyw2QkFBT0MsR0FBVixtQkFBakI7O0FBS0EsSUFBTUMsY0FBYyxHQUFHRiw2QkFBT0MsR0FBVixxQkFFUE4sVUFBVSxDQUFDRSxlQUZKLEVBRXVCRixVQUFVLENBQUNDLFdBRmxDLENBQXBCOztBQUtPLElBQU1PLGVBQWUsR0FBR0gsNkJBQU9DLEdBQVYscUJBRUMsVUFBQUcsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0MsTUFBTixHQUFlLE9BQWYsR0FBeUIsYUFBOUI7QUFBQSxDQUZOLENBQXJCOzs7O0FBZUEsSUFBTUMsV0FBVyxHQUFHQyxrQkFBTUMsSUFBTixDQUFXO0FBQUEsTUFBRUMsYUFBRixRQUFFQSxhQUFGO0FBQUEsTUFBaUJDLFFBQWpCLFFBQWlCQSxRQUFqQjtBQUFBLE1BQTJCQyxnQkFBM0IsUUFBMkJBLGdCQUEzQjtBQUFBLHNCQUNwQyxnQ0FBQyxjQUFEO0FBQWdCLElBQUEsU0FBUyxFQUFDO0FBQTFCLEtBQ0dDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxRQUFkLEVBQXdCSSxHQUF4QixDQUE0QixVQUFBQyxPQUFPO0FBQUEsd0JBQ2xDLGdDQUFDLGVBQUQ7QUFDRSxNQUFBLFNBQVMsRUFBQyxtQkFEWjtBQUVFLE1BQUEsTUFBTSxFQUFFQSxPQUFPLEtBQUtOLGFBRnRCO0FBR0UsTUFBQSxHQUFHLEVBQUVNLE9BQU8sQ0FBQ0MsRUFIZjtBQUlFLE1BQUEsT0FBTyxFQUFFO0FBQUEsZUFBTUwsZ0JBQWdCLENBQUNJLE9BQU8sQ0FBQ0MsRUFBVCxDQUF0QjtBQUFBO0FBSlgsb0JBTUUsZ0NBQUMsd0JBQUQ7QUFBYyxNQUFBLE9BQU8sRUFBRUQ7QUFBdkIsTUFORixDQURrQztBQUFBLEdBQW5DLENBREgsQ0FEb0M7QUFBQSxDQUFYLENBQXBCOzs7QUFlUFQsV0FBVyxDQUFDVyxXQUFaLEdBQTBCLGFBQTFCO0FBRUFDLHFCQUFxQixDQUFDQyxJQUF0QixHQUE2QixDQUFDQyxvQkFBRCxDQUE3Qjs7QUFFQSxTQUFTRixxQkFBVCxDQUErQkcsUUFBL0IsRUFBeUM7QUFDdkMsTUFBTUMsY0FBYyxHQUFHZixrQkFBTUMsSUFBTixDQUFXLGlCQUF5RDtBQUFBLFFBQXZERSxRQUF1RCxTQUF2REEsUUFBdUQ7QUFBQSxRQUE3Q2EsTUFBNkMsU0FBN0NBLE1BQTZDO0FBQUEsUUFBckN6QixNQUFxQyxTQUFyQ0EsTUFBcUM7QUFBQSxRQUE3QmEsZ0JBQTZCLFNBQTdCQSxnQkFBNkI7QUFBQSxRQUFYYSxLQUFXLFNBQVhBLEtBQVc7O0FBQ3pGLFFBQUksQ0FBQ2QsUUFBRCxJQUFhLENBQUNhLE1BQWxCLEVBQTBCO0FBQ3hCLGFBQU8sSUFBUDtBQUNEOztBQUVELFFBQU1kLGFBQWEsR0FBR0MsUUFBUSxDQUFDYSxNQUFELENBQTlCO0FBQ0EsUUFBTUUsSUFBSSxHQUFHaEIsYUFBYSxDQUFDaUIsT0FBM0I7QUFFQSx3QkFDRSxnQ0FBQyxXQUFEO0FBQWEsTUFBQSxTQUFTLEVBQUM7QUFBdkIsb0JBQ0UsZ0NBQUMsV0FBRDtBQUNFLE1BQUEsYUFBYSxFQUFFakIsYUFEakI7QUFFRSxNQUFBLFFBQVEsRUFBRUMsUUFGWjtBQUdFLE1BQUEsZ0JBQWdCLEVBQUVDO0FBSHBCLE1BREYsZUFNRSxnQ0FBQyxRQUFEO0FBQVUsTUFBQSxLQUFLLEVBQUVhLEtBQWpCO0FBQXdCLE1BQUEsTUFBTSxFQUFFMUIsTUFBaEM7QUFBd0MsTUFBQSxJQUFJLEVBQUUyQixJQUE5QztBQUFvRCxNQUFBLE9BQU8sRUFBRWhCLGFBQWEsQ0FBQ2tCO0FBQTNFLE1BTkYsQ0FERjtBQVVELEdBbEJzQixDQUF2Qjs7QUFvQkFMLEVBQUFBLGNBQWMsQ0FBQ0wsV0FBZixHQUE2QixnQkFBN0I7QUFDQSxTQUFPSyxjQUFQO0FBQ0Q7O2VBRWNKLHFCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IERhdGFHcmlkRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9kYXRhZ3JpZCc7XG5pbXBvcnQgRGF0YXNldExhYmVsIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2RhdGFzZXQtbGFiZWwnO1xuXG5jb25zdCBkZ1NldHRpbmdzID0ge1xuICBzaWRlUGFkZGluZzogJzM4cHgnLFxuICB2ZXJ0aWNhbFBhZGRpbmc6ICcxNnB4JyxcbiAgaGVpZ2h0OiAnMzZweCdcbn07XG5cbmNvbnN0IFN0eWxlZE1vZGFsID0gc3R5bGVkLmRpdmBcbiAgbWluLWhlaWdodDogNzB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbmA7XG5cbmNvbnN0IERhdGFzZXRDYXRhbG9nID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogJHtkZ1NldHRpbmdzLnZlcnRpY2FsUGFkZGluZ30gJHtkZ1NldHRpbmdzLnNpZGVQYWRkaW5nfSAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IERhdGFzZXRNb2RhbFRhYiA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAke3Byb3BzID0+IChwcm9wcy5hY3RpdmUgPyAnYmxhY2snIDogJ3RyYW5zcGFyZW50Jyl9O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMzVweDtcbiAgbWFyZ2luOiAwIDNweDtcbiAgcGFkZGluZzogMCA1cHg7XG5cbiAgOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBEYXRhc2V0VGFicyA9IFJlYWN0Lm1lbW8oKHthY3RpdmVEYXRhc2V0LCBkYXRhc2V0cywgc2hvd0RhdGFzZXRUYWJsZX0pID0+IChcbiAgPERhdGFzZXRDYXRhbG9nIGNsYXNzTmFtZT1cImRhdGFzZXQtbW9kYWwtY2F0YWxvZ1wiPlxuICAgIHtPYmplY3QudmFsdWVzKGRhdGFzZXRzKS5tYXAoZGF0YXNldCA9PiAoXG4gICAgICA8RGF0YXNldE1vZGFsVGFiXG4gICAgICAgIGNsYXNzTmFtZT1cImRhdGFzZXQtbW9kYWwtdGFiXCJcbiAgICAgICAgYWN0aXZlPXtkYXRhc2V0ID09PSBhY3RpdmVEYXRhc2V0fVxuICAgICAgICBrZXk9e2RhdGFzZXQuaWR9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNob3dEYXRhc2V0VGFibGUoZGF0YXNldC5pZCl9XG4gICAgICA+XG4gICAgICAgIDxEYXRhc2V0TGFiZWwgZGF0YXNldD17ZGF0YXNldH0gLz5cbiAgICAgIDwvRGF0YXNldE1vZGFsVGFiPlxuICAgICkpfVxuICA8L0RhdGFzZXRDYXRhbG9nPlxuKSk7XG5cbkRhdGFzZXRUYWJzLmRpc3BsYXlOYW1lID0gJ0RhdGFzZXRUYWJzJztcblxuRGF0YVRhYmxlTW9kYWxGYWN0b3J5LmRlcHMgPSBbRGF0YUdyaWRGYWN0b3J5XTtcblxuZnVuY3Rpb24gRGF0YVRhYmxlTW9kYWxGYWN0b3J5KERhdGFHcmlkKSB7XG4gIGNvbnN0IERhdGFUYWJsZU1vZGFsID0gUmVhY3QubWVtbygoe2RhdGFzZXRzLCBkYXRhSWQsIGhlaWdodCwgc2hvd0RhdGFzZXRUYWJsZSwgd2lkdGh9KSA9PiB7XG4gICAgaWYgKCFkYXRhc2V0cyB8fCAhZGF0YUlkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVEYXRhc2V0ID0gZGF0YXNldHNbZGF0YUlkXTtcbiAgICBjb25zdCByb3dzID0gYWN0aXZlRGF0YXNldC5hbGxEYXRhO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRNb2RhbCBjbGFzc05hbWU9XCJkYXRhc2V0LW1vZGFsXCI+XG4gICAgICAgIDxEYXRhc2V0VGFic1xuICAgICAgICAgIGFjdGl2ZURhdGFzZXQ9e2FjdGl2ZURhdGFzZXR9XG4gICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgIHNob3dEYXRhc2V0VGFibGU9e3Nob3dEYXRhc2V0VGFibGV9XG4gICAgICAgIC8+XG4gICAgICAgIDxEYXRhR3JpZCB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSByb3dzPXtyb3dzfSBjb2x1bW5zPXthY3RpdmVEYXRhc2V0LmZpZWxkc30gLz5cbiAgICAgIDwvU3R5bGVkTW9kYWw+XG4gICAgKTtcbiAgfSk7XG5cbiAgRGF0YVRhYmxlTW9kYWwuZGlzcGxheU5hbWUgPSAnRGF0YVRhYmxlTW9kYWwnO1xuICByZXR1cm4gRGF0YVRhYmxlTW9kYWw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFUYWJsZU1vZGFsRmFjdG9yeTtcbiJdfQ==