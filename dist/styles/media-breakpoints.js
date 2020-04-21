"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.media = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    @media (min-width: ", "px) {\n      ", ";\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    @media (max-width: ", "px) {\n      ", ";\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    @media (max-width: ", "px) {\n      ", ";\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// These are useful for test or when theme doesn't define them
var breakPoints = {
  palm: 588,
  desk: 768
};
var media = {
  palm: function palm() {
    return (0, _styledComponents.css)(_templateObject(), function (props) {
      return (props.theme.breakPoints || breakPoints).palm;
    }, _styledComponents.css.apply(void 0, arguments));
  },
  portable: function portable() {
    return (0, _styledComponents.css)(_templateObject2(), function (props) {
      return (props.theme.breakPoints || breakPoints).desk;
    }, _styledComponents.css.apply(void 0, arguments));
  },
  desk: function desk() {
    return (0, _styledComponents.css)(_templateObject3(), function (props) {
      return (props.theme.breakPoints || breakPoints).desk + 1;
    }, _styledComponents.css.apply(void 0, arguments));
  }
};
exports.media = media;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZXMvbWVkaWEtYnJlYWtwb2ludHMuanMiXSwibmFtZXMiOlsiYnJlYWtQb2ludHMiLCJwYWxtIiwiZGVzayIsIm1lZGlhIiwiY3NzIiwicHJvcHMiLCJ0aGVtZSIsInBvcnRhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBLElBQU1BLFdBQVcsR0FBRztBQUNsQkMsRUFBQUEsSUFBSSxFQUFFLEdBRFk7QUFFbEJDLEVBQUFBLElBQUksRUFBRTtBQUZZLENBQXBCO0FBS08sSUFBTUMsS0FBSyxHQUFHO0FBQ25CRixFQUFBQSxJQUFJLEVBQUU7QUFBQSxlQUFhRyxxQkFBYixxQkFDaUIsVUFBQUMsS0FBSztBQUFBLGFBQUksQ0FBQ0EsS0FBSyxDQUFDQyxLQUFOLENBQVlOLFdBQVosSUFBMkJBLFdBQTVCLEVBQXlDQyxJQUE3QztBQUFBLEtBRHRCLEVBRUFHLDhDQUZBO0FBQUEsR0FEYTtBQU9uQkcsRUFBQUEsUUFBUSxFQUFFO0FBQUEsZUFBYUgscUJBQWIsc0JBQ2EsVUFBQUMsS0FBSztBQUFBLGFBQUksQ0FBQ0EsS0FBSyxDQUFDQyxLQUFOLENBQVlOLFdBQVosSUFBMkJBLFdBQTVCLEVBQXlDRSxJQUE3QztBQUFBLEtBRGxCLEVBRUpFLDhDQUZJO0FBQUEsR0FQUztBQWFuQkYsRUFBQUEsSUFBSSxFQUFFO0FBQUEsZUFBYUUscUJBQWIsc0JBQ2lCLFVBQUFDLEtBQUs7QUFBQSxhQUFJLENBQUNBLEtBQUssQ0FBQ0MsS0FBTixDQUFZTixXQUFaLElBQTJCQSxXQUE1QixFQUF5Q0UsSUFBekMsR0FBZ0QsQ0FBcEQ7QUFBQSxLQUR0QixFQUVBRSw4Q0FGQTtBQUFBO0FBYmEsQ0FBZCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7Y3NzfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG4vLyBUaGVzZSBhcmUgdXNlZnVsIGZvciB0ZXN0IG9yIHdoZW4gdGhlbWUgZG9lc24ndCBkZWZpbmUgdGhlbVxyXG5jb25zdCBicmVha1BvaW50cyA9IHtcclxuICBwYWxtOiA1ODgsXHJcbiAgZGVzazogNzY4XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbWVkaWEgPSB7XHJcbiAgcGFsbTogKC4uLmFyZ3MpID0+IGNzc2BcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke3Byb3BzID0+IChwcm9wcy50aGVtZS5icmVha1BvaW50cyB8fCBicmVha1BvaW50cykucGFsbX1weCkge1xyXG4gICAgICAke2NzcyguLi5hcmdzKX07XHJcbiAgICB9XHJcbiAgYCxcclxuXHJcbiAgcG9ydGFibGU6ICguLi5hcmdzKSA9PiBjc3NgXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHtwcm9wcyA9PiAocHJvcHMudGhlbWUuYnJlYWtQb2ludHMgfHwgYnJlYWtQb2ludHMpLmRlc2t9cHgpIHtcclxuICAgICAgJHtjc3MoLi4uYXJncyl9O1xyXG4gICAgfVxyXG4gIGAsXHJcblxyXG4gIGRlc2s6ICguLi5hcmdzKSA9PiBjc3NgXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJHtwcm9wcyA9PiAocHJvcHMudGhlbWUuYnJlYWtQb2ludHMgfHwgYnJlYWtQb2ludHMpLmRlc2sgKyAxfXB4KSB7XHJcbiAgICAgICR7Y3NzKC4uLmFyZ3MpfTtcclxuICAgIH1cclxuICBgXHJcbn07XHJcbiJdfQ==