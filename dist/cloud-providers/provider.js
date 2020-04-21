"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _icons = require("../components/common/icons");

// Copyright (c) 2020 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var NAME = 'cloud-provider';
var DISPLAY_NAME = 'Cloud Provider';
var THUMBNAIL = {
  width: 300,
  height: 200
};
var ICON = _icons.Upload;
/**
 * The default provider class
 * @param {object} props
 * @param {string} props.name
 * @param {string} props.displayName
 * @param {ReactElement} props.icon - React element
 * @param {object} props.thumbnail - thumbnail size object
 * @param {number} props.thumbnail.width - thumbnail width in pixels
 * @param {number} props.thumbnail.height - thumbnail height in pixels
 * @public
 * @example
 *
 * const myProvider = new Provider({
 *  name: 'foo',
 *  displayName: 'Foo Storage'
 *  icon: Icon,
 *  thumbnail: {width: 300, height: 200}
 * })
 */

var Provider = /*#__PURE__*/function () {
  function Provider(props) {
    (0, _classCallCheck2["default"])(this, Provider);
    this.name = props.name || NAME;
    this.displayName = props.displayName || DISPLAY_NAME;
    this.icon = props.icon || ICON;
    this.thumbnail = props.thumbnail || THUMBNAIL;
  }
  /**
   * Whether this provider support upload map to a private storage. If truthy, user will be displayed with the storage save icon on the top right of the side bar.
   * @returns {boolean}
   * @public
   */


  (0, _createClass2["default"])(Provider, [{
    key: "hasPrivateStorage",
    value: function hasPrivateStorage() {
      return true;
    }
    /**
     * Whether this provider support share map via a public url, if truthy, user will be displayed with a share map via url under the export map option on the top right of the side bar
     * @returns {boolean}
     * @public
     */

  }, {
    key: "hasSharingUrl",
    value: function hasSharingUrl() {
      return true;
    }
    /**
     * This method is called after user share a map, to display the share url.
     * @param {boolean} fullUrl - Whether to return the full url with domain, or just the location
     * @returns {string} shareUrl
     * @public
     */

  }, {
    key: "getShareUrl",
    value: function getShareUrl() {
      var fullUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return '';
    }
    /**
     * This method is called by kepler.gl demo app to pushes a new location to history, becoming the current location.
     * @param {boolean} fullURL - Whether to return the full url with domain, or just the location
     * @returns {string} mapUrl
     * @public
     */

  }, {
    key: "getMapUrl",
    value: function getMapUrl() {
      var fullURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return '';
    }
    /**
     * This method is called to determine whether user already logged in to this provider
     * @public
     * @returns {boolean} true if a user already logged in
     */

  }, {
    key: "getAccessToken",
    value: function getAccessToken() {
      return true;
    }
    /**
     * This method is called to get the user name of the current user. It will be displayed in the cloud provider tile.
     * @public
     * @returns {string} true if a user already logged in
     */

  }, {
    key: "getUserName",
    value: function getUserName() {
      return '';
    }
    /**
     * This method will be called when user click the login button in the cloud provider tile.
     * Upon login success, `onCloudLoginSuccess` has to be called to notify kepler.gl UI
     * @param {function} onCloudLoginSuccess - callbacks to be called after login success
     * @public
     */

  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(onCloudLoginSuccess) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                onCloudLoginSuccess();
                return _context.abrupt("return");

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function login(_x) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
    /**
     * This method will be called when user click the logout button under the cloud provider tile.
     * Upon login success, `onCloudLoginSuccess` has to be called to notify kepler.gl UI
     * @param {function} onCloudLogoutSuccess - callbacks to be called after logout success
     * @public
     */

  }, {
    key: "logout",
    value: function () {
      var _logout = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(onCloudLogoutSuccess) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                onCloudLogoutSuccess();
                return _context2.abrupt("return");

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function logout(_x2) {
        return _logout.apply(this, arguments);
      }

      return logout;
    }()
    /**
     * This method will be called to upload map for saving and sharing. Kepler.gl will package map data, config, title, description and thumbnail for upload to storage.
     * With the option to overwrite already saved map, and upload as private or public map.
     *
     * @param {Object} param
     * @param {Object} param.mapData - the map object
     * @param {Object} param.mapData.map - {datasets. config, info: {title, description}}
     * @param {Blob} param.mapData.thumbnail - A thumbnail of current map. thumbnail size can be defined by provider by this.thumbnail
     * @param {Object} param.options
     * @param {boolean} param.options.overwrite - whether user choose to overwrite already saved map under the same name
     * @param {boolean} param.options.isPublic - whether user wish to share the map with others. if isPublic is truthy, kepler will call this.getShareUrl() to display an URL they can share with others
     * @public
     */

  }, {
    key: "uploadMap",
    value: function () {
      var _uploadMap = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref) {
        var mapData, _ref$options, options;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                mapData = _ref.mapData, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options;
                return _context3.abrupt("return");

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function uploadMap(_x3) {
        return _uploadMap.apply(this, arguments);
      }

      return uploadMap;
    }()
    /**
     * This method is called to get a list of maps saved by the current logged in user.
     * @returns {Array<Viz>} an array of Viz objects
     * @public
     * @example
     *  async listMaps() {
     *    return [
     *      {
     *        id: 'a',
     *        title: 'My map',
     *        description: 'My first kepler map',
     *        imageUrl: 'http://',
     *        lastModification: 1582677787000,
     *        privateMap: false,
     *        loadParams: {}
     *      }
     *    ];
     *  }
     */

  }, {
    key: "listMaps",
    value: function () {
      var _listMaps = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", []);

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function listMaps() {
        return _listMaps.apply(this, arguments);
      }

      return listMaps;
    }()
    /**
     * This method will be called when user select a map to load from the storage map viewer
     * @param {*} loadParams - the loadParams property of each visualization object
     * @returns {MapResponse} - the map object containing dataset config info and format option
     * @public
     * @example
     * async downloadMap(loadParams) {
     *  const mockResponse = {
     *    map: {
     *      datasets: [],
     *      config: {},
     *      info: {
     *        app: 'kepler.gl',
     *        created_at: ''
     *        title: 'test map',
     *        description: 'Hello this is my test dropbox map'
     *      }
     *    },
     *    // pass csv here if your provider currently only support save / load file as csv
     *    format: 'keplergl'
     *  };
     *
     *  return downloadMap;
     * }
     */

  }, {
    key: "downloadMap",
    value: function () {
      var _downloadMap = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(loadParams) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return");

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function downloadMap(_x4) {
        return _downloadMap.apply(this, arguments);
      }

      return downloadMap;
    }()
    /**
     * @typedef {Object} Viz
     * @property {string} id - An unique id
     * @property {string} title - The title of the map
     * @property {string} description - The description of the map
     * @property {string} imageUrl - The imageUrl of the map
     * @property {number} lastModification - An epoch timestamp in milliseconds
     * @property {boolean} privateMap - Optional, whether if this map is private to the user, or can be accessed by others via URL
     * @property {*} loadParams - A property to be passed to `downloadMap`
     * @public
     */

    /**
     * The returned object of `downloadMap`. The response object should contain: datasets: [], config: {}, and info: {}
     * each dataset object should be {info: {id, label}, data: {...}}
     * to inform how kepler should process your data object, pass in `format`
     * @typedef {Object} MapResponse
     * @property {Object} map
     * @property {Array<Object>} map.datasets
     * @property {Object} map.config
     * @property {Object} map.info
     * @property {string} format - one of 'csv': csv file string, 'geojson': geojson object, 'row': row object, 'keplergl': datasets array saved using KeplerGlSchema.save
     * @public
     */

  }]);
  return Provider;
}();

exports["default"] = Provider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbG91ZC1wcm92aWRlcnMvcHJvdmlkZXIuanMiXSwibmFtZXMiOlsiTkFNRSIsIkRJU1BMQVlfTkFNRSIsIlRIVU1CTkFJTCIsIndpZHRoIiwiaGVpZ2h0IiwiSUNPTiIsIlVwbG9hZCIsIlByb3ZpZGVyIiwicHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJpY29uIiwidGh1bWJuYWlsIiwiZnVsbFVybCIsImZ1bGxVUkwiLCJvbkNsb3VkTG9naW5TdWNjZXNzIiwib25DbG91ZExvZ291dFN1Y2Nlc3MiLCJtYXBEYXRhIiwib3B0aW9ucyIsImxvYWRQYXJhbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQXBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLElBQUksR0FBRyxnQkFBYjtBQUNBLElBQU1DLFlBQVksR0FBRyxnQkFBckI7QUFDQSxJQUFNQyxTQUFTLEdBQUc7QUFBQ0MsRUFBQUEsS0FBSyxFQUFFLEdBQVI7QUFBYUMsRUFBQUEsTUFBTSxFQUFFO0FBQXJCLENBQWxCO0FBQ0EsSUFBTUMsSUFBSSxHQUFHQyxhQUFiO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBbUJxQkMsUTtBQUNuQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBO0FBQ2pCLFNBQUtDLElBQUwsR0FBWUQsS0FBSyxDQUFDQyxJQUFOLElBQWNULElBQTFCO0FBQ0EsU0FBS1UsV0FBTCxHQUFtQkYsS0FBSyxDQUFDRSxXQUFOLElBQXFCVCxZQUF4QztBQUNBLFNBQUtVLElBQUwsR0FBWUgsS0FBSyxDQUFDRyxJQUFOLElBQWNOLElBQTFCO0FBQ0EsU0FBS08sU0FBTCxHQUFpQkosS0FBSyxDQUFDSSxTQUFOLElBQW1CVixTQUFwQztBQUNEO0FBRUQ7Ozs7Ozs7Ozt3Q0FLb0I7QUFDbEIsYUFBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7b0NBS2dCO0FBQ2QsYUFBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7O2tDQU02QjtBQUFBLFVBQWpCVyxPQUFpQix1RUFBUCxLQUFPO0FBQzNCLGFBQU8sRUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7OztnQ0FNMEI7QUFBQSxVQUFoQkMsT0FBZ0IsdUVBQU4sSUFBTTtBQUN4QixhQUFPLEVBQVA7QUFDRDtBQUVEOzs7Ozs7OztxQ0FLaUI7QUFDZixhQUFPLElBQVA7QUFDRDtBQUVEOzs7Ozs7OztrQ0FLYztBQUNaLGFBQU8sRUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7a0hBTVlDLG1COzs7OztBQUNWQSxnQkFBQUEsbUJBQW1COzs7Ozs7Ozs7Ozs7Ozs7OztBQUlyQjs7Ozs7Ozs7OztvSEFNYUMsb0I7Ozs7O0FBQ1hBLGdCQUFBQSxvQkFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhaUJDLGdCQUFBQSxPLFFBQUFBLE8sc0JBQVNDLE8sRUFBQUEsTyw2QkFBVSxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFvQlMsRTs7Ozs7Ozs7Ozs7Ozs7OztBQUdUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5SEF5QmtCQyxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEI7Ozs7Ozs7Ozs7OztBQVlBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtVcGxvYWR9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcclxuXHJcbmNvbnN0IE5BTUUgPSAnY2xvdWQtcHJvdmlkZXInO1xyXG5jb25zdCBESVNQTEFZX05BTUUgPSAnQ2xvdWQgUHJvdmlkZXInO1xyXG5jb25zdCBUSFVNQk5BSUwgPSB7d2lkdGg6IDMwMCwgaGVpZ2h0OiAyMDB9O1xyXG5jb25zdCBJQ09OID0gVXBsb2FkO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBkZWZhdWx0IHByb3ZpZGVyIGNsYXNzXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMubmFtZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMuZGlzcGxheU5hbWVcclxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IHByb3BzLmljb24gLSBSZWFjdCBlbGVtZW50XHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcy50aHVtYm5haWwgLSB0aHVtYm5haWwgc2l6ZSBvYmplY3RcclxuICogQHBhcmFtIHtudW1iZXJ9IHByb3BzLnRodW1ibmFpbC53aWR0aCAtIHRodW1ibmFpbCB3aWR0aCBpbiBwaXhlbHNcclxuICogQHBhcmFtIHtudW1iZXJ9IHByb3BzLnRodW1ibmFpbC5oZWlnaHQgLSB0aHVtYm5haWwgaGVpZ2h0IGluIHBpeGVsc1xyXG4gKiBAcHVibGljXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIGNvbnN0IG15UHJvdmlkZXIgPSBuZXcgUHJvdmlkZXIoe1xyXG4gKiAgbmFtZTogJ2ZvbycsXHJcbiAqICBkaXNwbGF5TmFtZTogJ0ZvbyBTdG9yYWdlJ1xyXG4gKiAgaWNvbjogSWNvbixcclxuICogIHRodW1ibmFpbDoge3dpZHRoOiAzMDAsIGhlaWdodDogMjAwfVxyXG4gKiB9KVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvdmlkZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lIHx8IE5BTUU7XHJcbiAgICB0aGlzLmRpc3BsYXlOYW1lID0gcHJvcHMuZGlzcGxheU5hbWUgfHwgRElTUExBWV9OQU1FO1xyXG4gICAgdGhpcy5pY29uID0gcHJvcHMuaWNvbiB8fCBJQ09OO1xyXG4gICAgdGhpcy50aHVtYm5haWwgPSBwcm9wcy50aHVtYm5haWwgfHwgVEhVTUJOQUlMO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGlzIHByb3ZpZGVyIHN1cHBvcnQgdXBsb2FkIG1hcCB0byBhIHByaXZhdGUgc3RvcmFnZS4gSWYgdHJ1dGh5LCB1c2VyIHdpbGwgYmUgZGlzcGxheWVkIHdpdGggdGhlIHN0b3JhZ2Ugc2F2ZSBpY29uIG9uIHRoZSB0b3AgcmlnaHQgb2YgdGhlIHNpZGUgYmFyLlxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAqIEBwdWJsaWNcclxuICAgKi9cclxuICBoYXNQcml2YXRlU3RvcmFnZSgpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGlzIHByb3ZpZGVyIHN1cHBvcnQgc2hhcmUgbWFwIHZpYSBhIHB1YmxpYyB1cmwsIGlmIHRydXRoeSwgdXNlciB3aWxsIGJlIGRpc3BsYXllZCB3aXRoIGEgc2hhcmUgbWFwIHZpYSB1cmwgdW5kZXIgdGhlIGV4cG9ydCBtYXAgb3B0aW9uIG9uIHRoZSB0b3AgcmlnaHQgb2YgdGhlIHNpZGUgYmFyXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICogQHB1YmxpY1xyXG4gICAqL1xyXG4gIGhhc1NoYXJpbmdVcmwoKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciB1c2VyIHNoYXJlIGEgbWFwLCB0byBkaXNwbGF5IHRoZSBzaGFyZSB1cmwuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBmdWxsVXJsIC0gV2hldGhlciB0byByZXR1cm4gdGhlIGZ1bGwgdXJsIHdpdGggZG9tYWluLCBvciBqdXN0IHRoZSBsb2NhdGlvblxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHNoYXJlVXJsXHJcbiAgICogQHB1YmxpY1xyXG4gICAqL1xyXG4gIGdldFNoYXJlVXJsKGZ1bGxVcmwgPSBmYWxzZSkge1xyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJ5IGtlcGxlci5nbCBkZW1vIGFwcCB0byBwdXNoZXMgYSBuZXcgbG9jYXRpb24gdG8gaGlzdG9yeSwgYmVjb21pbmcgdGhlIGN1cnJlbnQgbG9jYXRpb24uXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBmdWxsVVJMIC0gV2hldGhlciB0byByZXR1cm4gdGhlIGZ1bGwgdXJsIHdpdGggZG9tYWluLCBvciBqdXN0IHRoZSBsb2NhdGlvblxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IG1hcFVybFxyXG4gICAqIEBwdWJsaWNcclxuICAgKi9cclxuICBnZXRNYXBVcmwoZnVsbFVSTCA9IHRydWUpIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB0byBkZXRlcm1pbmUgd2hldGhlciB1c2VyIGFscmVhZHkgbG9nZ2VkIGluIHRvIHRoaXMgcHJvdmlkZXJcclxuICAgKiBAcHVibGljXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgYSB1c2VyIGFscmVhZHkgbG9nZ2VkIGluXHJcbiAgICovXHJcbiAgZ2V0QWNjZXNzVG9rZW4oKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB0byBnZXQgdGhlIHVzZXIgbmFtZSBvZiB0aGUgY3VycmVudCB1c2VyLiBJdCB3aWxsIGJlIGRpc3BsYXllZCBpbiB0aGUgY2xvdWQgcHJvdmlkZXIgdGlsZS5cclxuICAgKiBAcHVibGljXHJcbiAgICogQHJldHVybnMge3N0cmluZ30gdHJ1ZSBpZiBhIHVzZXIgYWxyZWFkeSBsb2dnZWQgaW5cclxuICAgKi9cclxuICBnZXRVc2VyTmFtZSgpIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIHdoZW4gdXNlciBjbGljayB0aGUgbG9naW4gYnV0dG9uIGluIHRoZSBjbG91ZCBwcm92aWRlciB0aWxlLlxyXG4gICAqIFVwb24gbG9naW4gc3VjY2VzcywgYG9uQ2xvdWRMb2dpblN1Y2Nlc3NgIGhhcyB0byBiZSBjYWxsZWQgdG8gbm90aWZ5IGtlcGxlci5nbCBVSVxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uQ2xvdWRMb2dpblN1Y2Nlc3MgLSBjYWxsYmFja3MgdG8gYmUgY2FsbGVkIGFmdGVyIGxvZ2luIHN1Y2Nlc3NcclxuICAgKiBAcHVibGljXHJcbiAgICovXHJcbiAgYXN5bmMgbG9naW4ob25DbG91ZExvZ2luU3VjY2Vzcykge1xyXG4gICAgb25DbG91ZExvZ2luU3VjY2VzcygpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgd2hlbiB1c2VyIGNsaWNrIHRoZSBsb2dvdXQgYnV0dG9uIHVuZGVyIHRoZSBjbG91ZCBwcm92aWRlciB0aWxlLlxyXG4gICAqIFVwb24gbG9naW4gc3VjY2VzcywgYG9uQ2xvdWRMb2dpblN1Y2Nlc3NgIGhhcyB0byBiZSBjYWxsZWQgdG8gbm90aWZ5IGtlcGxlci5nbCBVSVxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uQ2xvdWRMb2dvdXRTdWNjZXNzIC0gY2FsbGJhY2tzIHRvIGJlIGNhbGxlZCBhZnRlciBsb2dvdXQgc3VjY2Vzc1xyXG4gICAqIEBwdWJsaWNcclxuICAgKi9cclxuICBhc3luYyBsb2dvdXQob25DbG91ZExvZ291dFN1Y2Nlc3MpIHtcclxuICAgIG9uQ2xvdWRMb2dvdXRTdWNjZXNzKCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCB0byB1cGxvYWQgbWFwIGZvciBzYXZpbmcgYW5kIHNoYXJpbmcuIEtlcGxlci5nbCB3aWxsIHBhY2thZ2UgbWFwIGRhdGEsIGNvbmZpZywgdGl0bGUsIGRlc2NyaXB0aW9uIGFuZCB0aHVtYm5haWwgZm9yIHVwbG9hZCB0byBzdG9yYWdlLlxyXG4gICAqIFdpdGggdGhlIG9wdGlvbiB0byBvdmVyd3JpdGUgYWxyZWFkeSBzYXZlZCBtYXAsIGFuZCB1cGxvYWQgYXMgcHJpdmF0ZSBvciBwdWJsaWMgbWFwLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtLm1hcERhdGEgLSB0aGUgbWFwIG9iamVjdFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbS5tYXBEYXRhLm1hcCAtIHtkYXRhc2V0cy4gY29uZmlnLCBpbmZvOiB7dGl0bGUsIGRlc2NyaXB0aW9ufX1cclxuICAgKiBAcGFyYW0ge0Jsb2J9IHBhcmFtLm1hcERhdGEudGh1bWJuYWlsIC0gQSB0aHVtYm5haWwgb2YgY3VycmVudCBtYXAuIHRodW1ibmFpbCBzaXplIGNhbiBiZSBkZWZpbmVkIGJ5IHByb3ZpZGVyIGJ5IHRoaXMudGh1bWJuYWlsXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtLm9wdGlvbnNcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBhcmFtLm9wdGlvbnMub3ZlcndyaXRlIC0gd2hldGhlciB1c2VyIGNob29zZSB0byBvdmVyd3JpdGUgYWxyZWFkeSBzYXZlZCBtYXAgdW5kZXIgdGhlIHNhbWUgbmFtZVxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGFyYW0ub3B0aW9ucy5pc1B1YmxpYyAtIHdoZXRoZXIgdXNlciB3aXNoIHRvIHNoYXJlIHRoZSBtYXAgd2l0aCBvdGhlcnMuIGlmIGlzUHVibGljIGlzIHRydXRoeSwga2VwbGVyIHdpbGwgY2FsbCB0aGlzLmdldFNoYXJlVXJsKCkgdG8gZGlzcGxheSBhbiBVUkwgdGhleSBjYW4gc2hhcmUgd2l0aCBvdGhlcnNcclxuICAgKiBAcHVibGljXHJcbiAgICovXHJcbiAgYXN5bmMgdXBsb2FkTWFwKHttYXBEYXRhLCBvcHRpb25zID0ge319KSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgdG8gZ2V0IGEgbGlzdCBvZiBtYXBzIHNhdmVkIGJ5IHRoZSBjdXJyZW50IGxvZ2dlZCBpbiB1c2VyLlxyXG4gICAqIEByZXR1cm5zIHtBcnJheTxWaXo+fSBhbiBhcnJheSBvZiBWaXogb2JqZWN0c1xyXG4gICAqIEBwdWJsaWNcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqICBhc3luYyBsaXN0TWFwcygpIHtcclxuICAgKiAgICByZXR1cm4gW1xyXG4gICAqICAgICAge1xyXG4gICAqICAgICAgICBpZDogJ2EnLFxyXG4gICAqICAgICAgICB0aXRsZTogJ015IG1hcCcsXHJcbiAgICogICAgICAgIGRlc2NyaXB0aW9uOiAnTXkgZmlyc3Qga2VwbGVyIG1hcCcsXHJcbiAgICogICAgICAgIGltYWdlVXJsOiAnaHR0cDovLycsXHJcbiAgICogICAgICAgIGxhc3RNb2RpZmljYXRpb246IDE1ODI2Nzc3ODcwMDAsXHJcbiAgICogICAgICAgIHByaXZhdGVNYXA6IGZhbHNlLFxyXG4gICAqICAgICAgICBsb2FkUGFyYW1zOiB7fVxyXG4gICAqICAgICAgfVxyXG4gICAqICAgIF07XHJcbiAgICogIH1cclxuICAgKi9cclxuICBhc3luYyBsaXN0TWFwcygpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIHdoZW4gdXNlciBzZWxlY3QgYSBtYXAgdG8gbG9hZCBmcm9tIHRoZSBzdG9yYWdlIG1hcCB2aWV3ZXJcclxuICAgKiBAcGFyYW0geyp9IGxvYWRQYXJhbXMgLSB0aGUgbG9hZFBhcmFtcyBwcm9wZXJ0eSBvZiBlYWNoIHZpc3VhbGl6YXRpb24gb2JqZWN0XHJcbiAgICogQHJldHVybnMge01hcFJlc3BvbnNlfSAtIHRoZSBtYXAgb2JqZWN0IGNvbnRhaW5pbmcgZGF0YXNldCBjb25maWcgaW5mbyBhbmQgZm9ybWF0IG9wdGlvblxyXG4gICAqIEBwdWJsaWNcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIGFzeW5jIGRvd25sb2FkTWFwKGxvYWRQYXJhbXMpIHtcclxuICAgKiAgY29uc3QgbW9ja1Jlc3BvbnNlID0ge1xyXG4gICAqICAgIG1hcDoge1xyXG4gICAqICAgICAgZGF0YXNldHM6IFtdLFxyXG4gICAqICAgICAgY29uZmlnOiB7fSxcclxuICAgKiAgICAgIGluZm86IHtcclxuICAgKiAgICAgICAgYXBwOiAna2VwbGVyLmdsJyxcclxuICAgKiAgICAgICAgY3JlYXRlZF9hdDogJydcclxuICAgKiAgICAgICAgdGl0bGU6ICd0ZXN0IG1hcCcsXHJcbiAgICogICAgICAgIGRlc2NyaXB0aW9uOiAnSGVsbG8gdGhpcyBpcyBteSB0ZXN0IGRyb3Bib3ggbWFwJ1xyXG4gICAqICAgICAgfVxyXG4gICAqICAgIH0sXHJcbiAgICogICAgLy8gcGFzcyBjc3YgaGVyZSBpZiB5b3VyIHByb3ZpZGVyIGN1cnJlbnRseSBvbmx5IHN1cHBvcnQgc2F2ZSAvIGxvYWQgZmlsZSBhcyBjc3ZcclxuICAgKiAgICBmb3JtYXQ6ICdrZXBsZXJnbCdcclxuICAgKiAgfTtcclxuICAgKlxyXG4gICAqICByZXR1cm4gZG93bmxvYWRNYXA7XHJcbiAgICogfVxyXG4gICAqL1xyXG4gIGFzeW5jIGRvd25sb2FkTWFwKGxvYWRQYXJhbXMpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IFZpelxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBpZCAtIEFuIHVuaXF1ZSBpZFxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0aXRsZSAtIFRoZSB0aXRsZSBvZiB0aGUgbWFwXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGRlc2NyaXB0aW9uIC0gVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBtYXBcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gaW1hZ2VVcmwgLSBUaGUgaW1hZ2VVcmwgb2YgdGhlIG1hcFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsYXN0TW9kaWZpY2F0aW9uIC0gQW4gZXBvY2ggdGltZXN0YW1wIGluIG1pbGxpc2Vjb25kc1xyXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gcHJpdmF0ZU1hcCAtIE9wdGlvbmFsLCB3aGV0aGVyIGlmIHRoaXMgbWFwIGlzIHByaXZhdGUgdG8gdGhlIHVzZXIsIG9yIGNhbiBiZSBhY2Nlc3NlZCBieSBvdGhlcnMgdmlhIFVSTFxyXG4gICAqIEBwcm9wZXJ0eSB7Kn0gbG9hZFBhcmFtcyAtIEEgcHJvcGVydHkgdG8gYmUgcGFzc2VkIHRvIGBkb3dubG9hZE1hcGBcclxuICAgKiBAcHVibGljXHJcbiAgICovXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSByZXR1cm5lZCBvYmplY3Qgb2YgYGRvd25sb2FkTWFwYC4gVGhlIHJlc3BvbnNlIG9iamVjdCBzaG91bGQgY29udGFpbjogZGF0YXNldHM6IFtdLCBjb25maWc6IHt9LCBhbmQgaW5mbzoge31cclxuICAgKiBlYWNoIGRhdGFzZXQgb2JqZWN0IHNob3VsZCBiZSB7aW5mbzoge2lkLCBsYWJlbH0sIGRhdGE6IHsuLi59fVxyXG4gICAqIHRvIGluZm9ybSBob3cga2VwbGVyIHNob3VsZCBwcm9jZXNzIHlvdXIgZGF0YSBvYmplY3QsIHBhc3MgaW4gYGZvcm1hdGBcclxuICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBNYXBSZXNwb25zZVxyXG4gICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBtYXBcclxuICAgKiBAcHJvcGVydHkge0FycmF5PE9iamVjdD59IG1hcC5kYXRhc2V0c1xyXG4gICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBtYXAuY29uZmlnXHJcbiAgICogQHByb3BlcnR5IHtPYmplY3R9IG1hcC5pbmZvXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGZvcm1hdCAtIG9uZSBvZiAnY3N2JzogY3N2IGZpbGUgc3RyaW5nLCAnZ2VvanNvbic6IGdlb2pzb24gb2JqZWN0LCAncm93Jzogcm93IG9iamVjdCwgJ2tlcGxlcmdsJzogZGF0YXNldHMgYXJyYXkgc2F2ZWQgdXNpbmcgS2VwbGVyR2xTY2hlbWEuc2F2ZVxyXG4gICAqIEBwdWJsaWNcclxuICAgKi9cclxufVxyXG4iXX0=