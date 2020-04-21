"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _window = _interopRequireDefault(require("global/window"));

var _document = _interopRequireDefault(require("global/document"));

var _console = _interopRequireDefault(require("global/console"));

var _miniSvgDataUri = _interopRequireDefault(require("mini-svg-data-uri"));

var _userFeedbacks = require("../constants/user-feedbacks");

var _domUtils = require("./dom-utils");

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

/**
 * This file is copied from https://github.com/tsayen/dom-to-image
 * Modified by heshan0131 to allow loading external stylesheets and inline webfonts
 */
var inliner = newInliner();
var fontFaces = newFontFaces();
var images = newImages(); // Default impl options

var defaultOptions = {
  // Default is to fail on error, no placeholder
  imagePlaceholder: undefined,
  // Default cache bust is false, it will use the cache
  cacheBust: false
};
var domtoimage = {
  toSvg: toSvg,
  toPng: toPng,
  toJpeg: toJpeg,
  toBlob: toBlob,
  toPixelData: toPixelData,
  impl: {
    fontFaces: fontFaces,
    images: images,
    inliner: inliner,
    options: {}
  }
};
/**
   * @param {Node} node - The DOM Node object to render
   * @param {Object} options - Rendering options
   * @param {Function} options.filter - Should return true if passed node should be included in the output
   *          (excluding node means excluding it's children as well). Not called on the root node.
   * @param {String} options.bgcolor - color for the background, any valid CSS color value.
   * @param {Number} options.width - width to be applied to node before rendering.
   * @param {Number} options.height - height to be applied to node before rendering.
   * @param {Object} options.style - an object whose properties to be copied to node's style before rendering.
   * @param {Number} options.quality - a Number between 0 and 1 indicating image quality (applicable to JPEG only),
              defaults to 1.0.
    * @param {String} options.imagePlaceholder - dataURL to use as a placeholder for failed images, default behaviour is to fail fast on images we can't fetch
    * @param {Boolean} options.cacheBust - set to true to cache bust by appending the time to the request url
    * @return {Promise} - A promise that is fulfilled with a SVG image data URL
    * */

function toSvg(node, options) {
  options = options || {};
  copyOptions(options);
  return Promise.resolve(node).then(function (nd) {
    return cloneNode(nd, options.filter, true);
  }).then(embedFonts).then(inlineImages).then(applyOptions).then(function (clone) {
    return makeSvgDataUri(clone, options.width || (0, _domUtils.getWidth)(node), options.height || (0, _domUtils.getHeight)(node));
  });

  function applyOptions(clone) {
    if (options.bgcolor) clone.style.backgroundColor = options.bgcolor;
    if (options.width) clone.style.width = "".concat(options.width, "px");
    if (options.height) clone.style.height = "".concat(options.height, "px");
    if (options.style) Object.keys(options.style).forEach(function (property) {
      clone.style[property] = options.style[property];
    });
    return clone;
  }
}
/**
 * @param {Node} node - The DOM Node object to render
 * @param {Object} options - Rendering options, @see {@link toSvg}
 * @return {Promise} - A promise that is fulfilled with a Uint8Array containing RGBA pixel data.
 * */


function toPixelData(node, options) {
  return draw(node, options || {}).then(function (canvas) {
    return canvas.getContext('2d').getImageData(0, 0, (0, _domUtils.getWidth)(node), (0, _domUtils.getHeight)(node)).data;
  });
}
/**
 * @param {Node} node - The DOM Node object to render
 * @param {Object} options - Rendering options, @see {@link toSvg}
 * @return {Promise} - A promise that is fulfilled with a PNG image data URL
 * */


function toPng(node, options) {
  return draw(node, options || {}).then(function (canvas) {
    return canvas.toDataURL();
  });
}
/**
 * @param {Node} node - The DOM Node object to render
 * @param {Object} options - Rendering options, @see {@link toSvg}
 * @return {Promise} - A promise that is fulfilled with a JPEG image data URL
 * */


function toJpeg(node, options) {
  options = options || {};
  return draw(node, options).then(function (canvas) {
    return canvas.toDataURL('image/jpeg', options.quality || 1.0);
  });
}
/**
 * @param {Node} node - The DOM Node object to render
 * @param {Object} options - Rendering options, @see {@link toSvg}
 * @return {Promise} - A promise that is fulfilled with a PNG image blob
 * */


function toBlob(node, options) {
  return draw(node, options || {}).then(_domUtils.canvasToBlob);
}

function copyOptions(options) {
  // Copy options to impl options for use in impl
  if (typeof options.imagePlaceholder === 'undefined') {
    domtoimage.impl.options.imagePlaceholder = defaultOptions.imagePlaceholder;
  } else {
    domtoimage.impl.options.imagePlaceholder = options.imagePlaceholder;
  }

  if (typeof options.cacheBust === 'undefined') {
    domtoimage.impl.options.cacheBust = defaultOptions.cacheBust;
  } else {
    domtoimage.impl.options.cacheBust = options.cacheBust;
  }
}

function draw(domNode, options) {
  return toSvg(domNode, options).then(_domUtils.makeImage).then((0, _domUtils.delay)(100)).then(function (image) {
    var canvas = newCanvas(domNode);
    canvas.getContext('2d').drawImage(image, 0, 0);
    return canvas;
  });

  function newCanvas(dNode) {
    var canvas = _document["default"].createElement('canvas');

    canvas.width = options.width || (0, _domUtils.getWidth)(dNode);
    canvas.height = options.height || (0, _domUtils.getHeight)(dNode);

    if (options.bgcolor) {
      var ctx = canvas.getContext('2d');
      ctx.fillStyle = options.bgcolor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    return canvas;
  }
}

function cloneNode(node, filter, root) {
  if (!root && filter && !filter(node)) {
    return Promise.resolve();
  }

  return Promise.resolve(node).then(makeNodeCopy).then(function (clone) {
    return cloneChildren(node, clone, filter);
  }).then(function (clone) {
    return (0, _domUtils.processClone)(node, clone);
  });

  function makeNodeCopy(nd) {
    if (nd instanceof _window["default"].HTMLCanvasElement) {
      return (0, _domUtils.makeImage)(nd.toDataURL());
    }

    return nd.cloneNode(false);
  }

  function cloneChildrenInOrder(parent, arrChildren, flt) {
    var done = Promise.resolve();
    arrChildren.forEach(function (child) {
      done = done.then(function () {
        return cloneNode(child, flt);
      }).then(function (childClone) {
        if (childClone) {
          parent.appendChild(childClone);
        }
      });
    });
    return done;
  }

  function cloneChildren(original, clone, flt) {
    var children = original.childNodes;

    if (children.length === 0) {
      return Promise.resolve(clone);
    }

    return cloneChildrenInOrder(clone, (0, _domUtils.asArray)(children), flt).then(function () {
      return clone;
    });
  }
}

function embedFonts(node) {
  return fontFaces.resolveAll().then(function (cssText) {
    var styleNode = _document["default"].createElement('style');

    node.appendChild(styleNode);
    styleNode.appendChild(_document["default"].createTextNode(cssText));
    return node;
  });
}

function inlineImages(node) {
  return images.inlineAll(node).then(function () {
    return node;
  });
}

function makeSvgDataUri(node, width, height) {
  return Promise.resolve(node).then(function (nd) {
    nd.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
    var serializedString = new _window["default"].XMLSerializer().serializeToString(nd);
    var xhtml = (0, _domUtils.escapeXhtml)(serializedString);
    var foreignObject = "<foreignObject x=\"0\" y=\"0\" width=\"100%\" height=\"100%\">".concat(xhtml, "</foreignObject>");
    var svgStr = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"".concat(width, "\" height=\"").concat(height, "\">").concat(foreignObject, "</svg>"); // Optimizing SVGs in data URIs
    // see https://codepen.io/tigt/post/optimizing-svgs-in-data-uris
    // the best way of encoding SVG in a data: URI is data:image/svg+xml,[actual data].
    // We don’t need the ;charset=utf-8 parameter because the given SVG is ASCII.

    return (0, _miniSvgDataUri["default"])(svgStr);
  });
}

function newInliner() {
  var URL_REGEX = /url\(['"]?([^'"]+?)['"]?\)/g;
  return {
    inlineAll: inlineAll,
    shouldProcess: shouldProcess,
    impl: {
      readUrls: readUrls,
      inline: inline
    }
  };

  function shouldProcess(string) {
    return string.search(URL_REGEX) !== -1;
  }

  function readUrls(string) {
    var result = [];
    var match;

    while ((match = URL_REGEX.exec(string)) !== null) {
      result.push(match[1]);
    }

    return result.filter(function (url) {
      return !(0, _domUtils.isDataUrl)(url);
    });
  }

  function urlAsRegex(url0) {
    return new RegExp("(url\\(['\"]?)(".concat((0, _domUtils.escape)(url0), ")(['\"]?\\))"), 'g');
  }

  function inline(string, url, baseUrl, get) {
    return Promise.resolve(url).then(function (ul) {
      return baseUrl ? (0, _domUtils.resolveUrl)(ul, baseUrl) : ul;
    }).then(function (ul) {
      return typeof get === 'function' ? get(ul) : (0, _domUtils.getAndEncode)(ul, domtoimage.impl.options);
    }).then(function (data) {
      return (0, _domUtils.dataAsUrl)(data, (0, _domUtils.mimeType)(url));
    }).then(function (dataUrl) {
      return string.replace(urlAsRegex(url), "$1".concat(dataUrl, "$3"));
    });
  }

  function inlineAll(string, baseUrl, get) {
    if (!shouldProcess(string) || (0, _domUtils.isSrcAsDataUrl)(string)) {
      return Promise.resolve(string);
    }

    return Promise.resolve(string).then(readUrls).then(function (urls) {
      var done = Promise.resolve(string);
      urls.forEach(function (url) {
        done = done.then(function (str) {
          return inline(str, url, baseUrl, get);
        });
      });
      return done;
    });
  }
}

function newFontFaces() {
  return {
    resolveAll: resolveAll,
    impl: {
      readAll: readAll
    }
  };

  function resolveAll() {
    return readAll(_document["default"]).then(function (webFonts) {
      return Promise.all(webFonts.map(function (webFont) {
        return webFont.resolve();
      }));
    }).then(function (cssStrings) {
      return cssStrings.join('\n');
    });
  }

  function readAll() {
    return Promise.resolve((0, _domUtils.asArray)(_document["default"].styleSheets)).then(loadExternalStyleSheets).then(getCssRules).then(selectWebFontRules).then(function (rules) {
      return rules.map(newWebFont);
    });

    function selectWebFontRules(cssRules) {
      return cssRules.filter(function (rule) {
        return rule.type === _window["default"].CSSRule.FONT_FACE_RULE;
      }).filter(function (rule) {
        return inliner.shouldProcess(rule.style.getPropertyValue('src'));
      });
    }

    function loadExternalStyleSheets(styleSheets) {
      return Promise.all(styleSheets.map(function (sheet) {
        if (sheet.href) {
          // cloudfont doesn't have allow origin header properly set
          // error response will remain in cache
          var cache = sheet.href.includes('uber-fonts') ? 'no-cache' : 'default';
          return _window["default"].fetch(sheet.href, {
            credentials: 'omit',
            cache: cache
          }).then(function (response) {
            return response.text();
          }).then(setBaseHref(sheet.href)).then(toStyleSheet)["catch"](function (err) {
            // Handle any error that occurred in any of the previous
            // promises in the chain. stylesheet failed to load should not stop
            // the process, hence result in only a warning, instead of reject
            _console["default"].warn(_userFeedbacks.IMAGE_EXPORT_ERRORS.styleSheet, sheet.href);

            _console["default"].log(err);

            return;
          });
        }

        return Promise.resolve(sheet);
      }));

      function setBaseHref(base) {
        base = base.split('/');
        base.pop();
        base = base.join('/');

        function addBaseHrefToUrl(match, p1) {
          var url = /^http/i.test(p1) ? p1 : concatAndResolveUrl(base, p1);
          return "url('".concat(url, "')");
        } // Source: http://stackoverflow.com/a/2676231/3786856


        function concatAndResolveUrl(url, concat) {
          var url1 = url.split('/');
          var url2 = concat.split('/');
          var url3 = [];

          for (var i = 0, l = url1.length; i < l; i++) {
            if (url1[i] === '..') {
              url3.pop();
            } else if (url1[i] !== '.') {
              url3.push(url1[i]);
            }
          }

          for (var _i = 0, _l = url2.length; _i < _l; _i++) {
            if (url2[_i] === '..') {
              url3.pop();
            } else if (url2[_i] !== '.') {
              url3.push(url2[_i]);
            }
          }

          return url3.join('/');
        }

        return function (text) {
          return (0, _domUtils.isSrcAsDataUrl)(text) ? text : text.replace(/url\(['"]?([^'"]+?)['"]?\)/g, addBaseHrefToUrl);
        };
      }

      function toStyleSheet(text) {
        var doc = _document["default"].implementation.createHTMLDocument('');

        var styleElement = _document["default"].createElement('style');

        styleElement.textContent = text;
        doc.body.appendChild(styleElement);
        return styleElement.sheet;
      }
    }

    function getCssRules(styleSheets) {
      var cssRules = [];
      styleSheets.forEach(function (sheet) {
        // try...catch because browser may not able to enumerate rules for cross-domain sheets
        if (!sheet) {
          return;
        }

        var rules;

        try {
          rules = sheet.rules || sheet.cssRules;
        } catch (e) {
          _console["default"].log("'Can't read the css rules of: ".concat(sheet.href), e);

          return;
        }

        if (rules && (0, _typeof2["default"])(rules) === 'object') {
          try {
            (0, _domUtils.asArray)(rules || []).forEach(cssRules.push.bind(cssRules));
          } catch (e) {
            _console["default"].log("Error while reading CSS rules from ".concat(sheet.href), e);

            return;
          }
        } else {
          _console["default"].log('getCssRules can not find cssRules');

          return;
        }
      });
      return cssRules;
    }

    function newWebFont(webFontRule) {
      return {
        resolve: function resolve() {
          var baseUrl = (webFontRule.parentStyleSheet || {}).href;
          return inliner.inlineAll(webFontRule.cssText, baseUrl);
        },
        src: function src() {
          return webFontRule.style.getPropertyValue('src');
        }
      };
    }
  }
}

function newImages() {
  return {
    inlineAll: inlineAll,
    impl: {
      newImage: newImage
    }
  };

  function newImage(element) {
    function inline(get) {
      if (element.src) {
        return Promise.resolve();
      }

      return Promise.resolve(element.src).then(function (ul) {
        return typeof get === 'function' ? get(ul) : (0, _domUtils.getAndEncode)(ul, domtoimage.impl.options);
      }).then(function (data) {
        return (0, _domUtils.dataAsUrl)(data, (0, _domUtils.mimeType)(element.src));
      }).then(function (dataUrl) {
        return new Promise(function (resolve, reject) {
          element.onload = resolve;
          element.onerror = reject;
          element.src = dataUrl;
        });
      });
    }

    return {
      inline: inline
    };
  }

  function inlineAll(node) {
    if (!(node instanceof Element)) {
      return Promise.resolve(node);
    }

    return inlineBackground(node).then(function () {
      if (node instanceof HTMLImageElement) {
        return newImage(node).inline();
      }

      return Promise.all((0, _domUtils.asArray)(node.childNodes).map(function (child) {
        return inlineAll(child);
      }));
    });

    function inlineBackground(nd) {
      var background = nd.style.getPropertyValue('background');

      if (!background) {
        return Promise.resolve(nd);
      }

      return inliner.inlineAll(background).then(function (inlined) {
        nd.style.setProperty('background', inlined, nd.style.getPropertyPriority('background'));
      }).then(function () {
        return nd;
      });
    }
  }
}

var _default = domtoimage;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9kb20tdG8taW1hZ2UuanMiXSwibmFtZXMiOlsiaW5saW5lciIsIm5ld0lubGluZXIiLCJmb250RmFjZXMiLCJuZXdGb250RmFjZXMiLCJpbWFnZXMiLCJuZXdJbWFnZXMiLCJkZWZhdWx0T3B0aW9ucyIsImltYWdlUGxhY2Vob2xkZXIiLCJ1bmRlZmluZWQiLCJjYWNoZUJ1c3QiLCJkb210b2ltYWdlIiwidG9TdmciLCJ0b1BuZyIsInRvSnBlZyIsInRvQmxvYiIsInRvUGl4ZWxEYXRhIiwiaW1wbCIsIm9wdGlvbnMiLCJub2RlIiwiY29weU9wdGlvbnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJuZCIsImNsb25lTm9kZSIsImZpbHRlciIsImVtYmVkRm9udHMiLCJpbmxpbmVJbWFnZXMiLCJhcHBseU9wdGlvbnMiLCJjbG9uZSIsIm1ha2VTdmdEYXRhVXJpIiwid2lkdGgiLCJoZWlnaHQiLCJiZ2NvbG9yIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInByb3BlcnR5IiwiZHJhdyIsImNhbnZhcyIsImdldENvbnRleHQiLCJnZXRJbWFnZURhdGEiLCJkYXRhIiwidG9EYXRhVVJMIiwicXVhbGl0eSIsImNhbnZhc1RvQmxvYiIsImRvbU5vZGUiLCJtYWtlSW1hZ2UiLCJpbWFnZSIsIm5ld0NhbnZhcyIsImRyYXdJbWFnZSIsImROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJyb290IiwibWFrZU5vZGVDb3B5IiwiY2xvbmVDaGlsZHJlbiIsIndpbmRvdyIsIkhUTUxDYW52YXNFbGVtZW50IiwiY2xvbmVDaGlsZHJlbkluT3JkZXIiLCJwYXJlbnQiLCJhcnJDaGlsZHJlbiIsImZsdCIsImRvbmUiLCJjaGlsZCIsImNoaWxkQ2xvbmUiLCJhcHBlbmRDaGlsZCIsIm9yaWdpbmFsIiwiY2hpbGRyZW4iLCJjaGlsZE5vZGVzIiwibGVuZ3RoIiwicmVzb2x2ZUFsbCIsImNzc1RleHQiLCJzdHlsZU5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsImlubGluZUFsbCIsInNldEF0dHJpYnV0ZSIsInNlcmlhbGl6ZWRTdHJpbmciLCJYTUxTZXJpYWxpemVyIiwic2VyaWFsaXplVG9TdHJpbmciLCJ4aHRtbCIsImZvcmVpZ25PYmplY3QiLCJzdmdTdHIiLCJVUkxfUkVHRVgiLCJzaG91bGRQcm9jZXNzIiwicmVhZFVybHMiLCJpbmxpbmUiLCJzdHJpbmciLCJzZWFyY2giLCJyZXN1bHQiLCJtYXRjaCIsImV4ZWMiLCJwdXNoIiwidXJsIiwidXJsQXNSZWdleCIsInVybDAiLCJSZWdFeHAiLCJiYXNlVXJsIiwiZ2V0IiwidWwiLCJkYXRhVXJsIiwicmVwbGFjZSIsInVybHMiLCJzdHIiLCJyZWFkQWxsIiwid2ViRm9udHMiLCJhbGwiLCJtYXAiLCJ3ZWJGb250IiwiY3NzU3RyaW5ncyIsImpvaW4iLCJzdHlsZVNoZWV0cyIsImxvYWRFeHRlcm5hbFN0eWxlU2hlZXRzIiwiZ2V0Q3NzUnVsZXMiLCJzZWxlY3RXZWJGb250UnVsZXMiLCJydWxlcyIsIm5ld1dlYkZvbnQiLCJjc3NSdWxlcyIsInJ1bGUiLCJ0eXBlIiwiQ1NTUnVsZSIsIkZPTlRfRkFDRV9SVUxFIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInNoZWV0IiwiaHJlZiIsImNhY2hlIiwiaW5jbHVkZXMiLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwicmVzcG9uc2UiLCJ0ZXh0Iiwic2V0QmFzZUhyZWYiLCJ0b1N0eWxlU2hlZXQiLCJlcnIiLCJjb25zb2xlIiwid2FybiIsIklNQUdFX0VYUE9SVF9FUlJPUlMiLCJzdHlsZVNoZWV0IiwibG9nIiwiYmFzZSIsInNwbGl0IiwicG9wIiwiYWRkQmFzZUhyZWZUb1VybCIsInAxIiwidGVzdCIsImNvbmNhdEFuZFJlc29sdmVVcmwiLCJjb25jYXQiLCJ1cmwxIiwidXJsMiIsInVybDMiLCJpIiwibCIsImRvYyIsImltcGxlbWVudGF0aW9uIiwiY3JlYXRlSFRNTERvY3VtZW50Iiwic3R5bGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJib2R5IiwiZSIsImJpbmQiLCJ3ZWJGb250UnVsZSIsInBhcmVudFN0eWxlU2hlZXQiLCJzcmMiLCJuZXdJbWFnZSIsImVsZW1lbnQiLCJyZWplY3QiLCJvbmxvYWQiLCJvbmVycm9yIiwiRWxlbWVudCIsImlubGluZUJhY2tncm91bmQiLCJIVE1MSW1hZ2VFbGVtZW50IiwiYmFja2dyb3VuZCIsImlubGluZWQiLCJzZXRQcm9wZXJ0eSIsImdldFByb3BlcnR5UHJpb3JpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBeUJBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQTlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQTRCQSxJQUFNQSxPQUFPLEdBQUdDLFVBQVUsRUFBMUI7QUFDQSxJQUFNQyxTQUFTLEdBQUdDLFlBQVksRUFBOUI7QUFDQSxJQUFNQyxNQUFNLEdBQUdDLFNBQVMsRUFBeEIsQyxDQUNBOztBQUNBLElBQU1DLGNBQWMsR0FBRztBQUNyQjtBQUNBQyxFQUFBQSxnQkFBZ0IsRUFBRUMsU0FGRztBQUdyQjtBQUNBQyxFQUFBQSxTQUFTLEVBQUU7QUFKVSxDQUF2QjtBQU9BLElBQU1DLFVBQVUsR0FBRztBQUNqQkMsRUFBQUEsS0FBSyxFQUFMQSxLQURpQjtBQUVqQkMsRUFBQUEsS0FBSyxFQUFMQSxLQUZpQjtBQUdqQkMsRUFBQUEsTUFBTSxFQUFOQSxNQUhpQjtBQUlqQkMsRUFBQUEsTUFBTSxFQUFOQSxNQUppQjtBQUtqQkMsRUFBQUEsV0FBVyxFQUFYQSxXQUxpQjtBQU1qQkMsRUFBQUEsSUFBSSxFQUFFO0FBQ0pkLElBQUFBLFNBQVMsRUFBVEEsU0FESTtBQUVKRSxJQUFBQSxNQUFNLEVBQU5BLE1BRkk7QUFHSkosSUFBQUEs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Q2lELFVBQUwsRUFBaUI7QUFDZixlQUFPNUosT0FBTyxDQUFDQyxPQUFSLENBQWdCRSxFQUFoQixDQUFQO0FBQ0Q7O0FBRUQsYUFBT3ZCLE9BQU8sQ0FDWGdGLFNBREksQ0FDTWdHLFVBRE4sRUFFSjFKLElBRkksQ0FFQyxVQUFBMkosT0FBTyxFQUFJO0FBQ2YxSixRQUFBQSxFQUFFLENBQUNXLEtBQUgsQ0FBU2dKLFdBQVQsQ0FBcUIsWUFBckIsRUFBbUNELE9BQW5DLEVBQTRDMUosRUFBRSxDQUFDVyxLQUFILENBQVNpSixtQkFBVCxDQUE2QixZQUE3QixDQUE1QztBQUNELE9BSkksRUFLSjdKLElBTEksQ0FLQztBQUFBLGVBQU1DLEVBQU47QUFBQSxPQUxELENBQVA7QUFNRDtBQUNGO0FBQ0Y7O2VBRWNiLFUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG4vKipcclxuICogVGhpcyBmaWxlIGlzIGNvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS90c2F5ZW4vZG9tLXRvLWltYWdlXHJcbiAqIE1vZGlmaWVkIGJ5IGhlc2hhbjAxMzEgdG8gYWxsb3cgbG9hZGluZyBleHRlcm5hbCBzdHlsZXNoZWV0cyBhbmQgaW5saW5lIHdlYmZvbnRzXHJcbiAqL1xyXG5cclxuaW1wb3J0IHdpbmRvdyBmcm9tICdnbG9iYWwvd2luZG93JztcclxuaW1wb3J0IGRvY3VtZW50IGZyb20gJ2dsb2JhbC9kb2N1bWVudCc7XHJcbmltcG9ydCBjb25zb2xlIGZyb20gJ2dsb2JhbC9jb25zb2xlJztcclxuaW1wb3J0IHN2Z1RvTWluaURhdGFVUkkgZnJvbSAnbWluaS1zdmctZGF0YS11cmknO1xyXG5pbXBvcnQge0lNQUdFX0VYUE9SVF9FUlJPUlN9IGZyb20gJ2NvbnN0YW50cy91c2VyLWZlZWRiYWNrcyc7XHJcbmltcG9ydCB7XHJcbiAgY2FudmFzVG9CbG9iLFxyXG4gIGVzY2FwZSxcclxuICBlc2NhcGVYaHRtbCxcclxuICBkZWxheSxcclxuICBwcm9jZXNzQ2xvbmUsXHJcbiAgYXNBcnJheSxcclxuICBtYWtlSW1hZ2UsXHJcbiAgbWltZVR5cGUsXHJcbiAgZGF0YUFzVXJsLFxyXG4gIGlzRGF0YVVybCxcclxuICBpc1NyY0FzRGF0YVVybCxcclxuICByZXNvbHZlVXJsLFxyXG4gIGdldFdpZHRoLFxyXG4gIGdldEhlaWdodCxcclxuICBnZXRBbmRFbmNvZGVcclxufSBmcm9tICcuL2RvbS11dGlscyc7XHJcblxyXG5jb25zdCBpbmxpbmVyID0gbmV3SW5saW5lcigpO1xyXG5jb25zdCBmb250RmFjZXMgPSBuZXdGb250RmFjZXMoKTtcclxuY29uc3QgaW1hZ2VzID0gbmV3SW1hZ2VzKCk7XHJcbi8vIERlZmF1bHQgaW1wbCBvcHRpb25zXHJcbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xyXG4gIC8vIERlZmF1bHQgaXMgdG8gZmFpbCBvbiBlcnJvciwgbm8gcGxhY2Vob2xkZXJcclxuICBpbWFnZVBsYWNlaG9sZGVyOiB1bmRlZmluZWQsXHJcbiAgLy8gRGVmYXVsdCBjYWNoZSBidXN0IGlzIGZhbHNlLCBpdCB3aWxsIHVzZSB0aGUgY2FjaGVcclxuICBjYWNoZUJ1c3Q6IGZhbHNlXHJcbn07XHJcblxyXG5jb25zdCBkb210b2ltYWdlID0ge1xyXG4gIHRvU3ZnLFxyXG4gIHRvUG5nLFxyXG4gIHRvSnBlZyxcclxuICB0b0Jsb2IsXHJcbiAgdG9QaXhlbERhdGEsXHJcbiAgaW1wbDoge1xyXG4gICAgZm9udEZhY2VzLFxyXG4gICAgaW1hZ2VzLFxyXG4gICAgaW5saW5lcixcclxuICAgIG9wdGlvbnM6IHt9XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlIC0gVGhlIERPTSBOb2RlIG9iamVjdCB0byByZW5kZXJcclxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFJlbmRlcmluZyBvcHRpb25zXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gb3B0aW9ucy5maWx0ZXIgLSBTaG91bGQgcmV0dXJuIHRydWUgaWYgcGFzc2VkIG5vZGUgc2hvdWxkIGJlIGluY2x1ZGVkIGluIHRoZSBvdXRwdXRcclxuICAgKiAgICAgICAgICAoZXhjbHVkaW5nIG5vZGUgbWVhbnMgZXhjbHVkaW5nIGl0J3MgY2hpbGRyZW4gYXMgd2VsbCkuIE5vdCBjYWxsZWQgb24gdGhlIHJvb3Qgbm9kZS5cclxuICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5iZ2NvbG9yIC0gY29sb3IgZm9yIHRoZSBiYWNrZ3JvdW5kLCBhbnkgdmFsaWQgQ1NTIGNvbG9yIHZhbHVlLlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRpb25zLndpZHRoIC0gd2lkdGggdG8gYmUgYXBwbGllZCB0byBub2RlIGJlZm9yZSByZW5kZXJpbmcuXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMuaGVpZ2h0IC0gaGVpZ2h0IHRvIGJlIGFwcGxpZWQgdG8gbm9kZSBiZWZvcmUgcmVuZGVyaW5nLlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLnN0eWxlIC0gYW4gb2JqZWN0IHdob3NlIHByb3BlcnRpZXMgdG8gYmUgY29waWVkIHRvIG5vZGUncyBzdHlsZSBiZWZvcmUgcmVuZGVyaW5nLlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRpb25zLnF1YWxpdHkgLSBhIE51bWJlciBiZXR3ZWVuIDAgYW5kIDEgaW5kaWNhdGluZyBpbWFnZSBxdWFsaXR5IChhcHBsaWNhYmxlIHRvIEpQRUcgb25seSksXHJcbiAgICAgICAgICAgICAgZGVmYXVsdHMgdG8gMS4wLlxyXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5pbWFnZVBsYWNlaG9sZGVyIC0gZGF0YVVSTCB0byB1c2UgYXMgYSBwbGFjZWhvbGRlciBmb3IgZmFpbGVkIGltYWdlcywgZGVmYXVsdCBiZWhhdmlvdXIgaXMgdG8gZmFpbCBmYXN0IG9uIGltYWdlcyB3ZSBjYW4ndCBmZXRjaFxyXG4gICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMuY2FjaGVCdXN0IC0gc2V0IHRvIHRydWUgdG8gY2FjaGUgYnVzdCBieSBhcHBlbmRpbmcgdGhlIHRpbWUgdG8gdGhlIHJlcXVlc3QgdXJsXHJcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gQSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggYSBTVkcgaW1hZ2UgZGF0YSBVUkxcclxuICAgICogKi9cclxuZnVuY3Rpb24gdG9Tdmcobm9kZSwgb3B0aW9ucykge1xyXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gIGNvcHlPcHRpb25zKG9wdGlvbnMpO1xyXG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUobm9kZSlcclxuICAgIC50aGVuKG5kID0+IGNsb25lTm9kZShuZCwgb3B0aW9ucy5maWx0ZXIsIHRydWUpKVxyXG4gICAgLnRoZW4oZW1iZWRGb250cylcclxuICAgIC50aGVuKGlubGluZUltYWdlcylcclxuICAgIC50aGVuKGFwcGx5T3B0aW9ucylcclxuICAgIC50aGVuKGNsb25lID0+XHJcbiAgICAgIG1ha2VTdmdEYXRhVXJpKGNsb25lLCBvcHRpb25zLndpZHRoIHx8IGdldFdpZHRoKG5vZGUpLCBvcHRpb25zLmhlaWdodCB8fCBnZXRIZWlnaHQobm9kZSkpXHJcbiAgICApO1xyXG5cclxuICBmdW5jdGlvbiBhcHBseU9wdGlvbnMoY2xvbmUpIHtcclxuICAgIGlmIChvcHRpb25zLmJnY29sb3IpIGNsb25lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuYmdjb2xvcjtcclxuXHJcbiAgICBpZiAob3B0aW9ucy53aWR0aCkgY2xvbmUuc3R5bGUud2lkdGggPSBgJHtvcHRpb25zLndpZHRofXB4YDtcclxuICAgIGlmIChvcHRpb25zLmhlaWdodCkgY2xvbmUuc3R5bGUuaGVpZ2h0ID0gYCR7b3B0aW9ucy5oZWlnaHR9cHhgO1xyXG5cclxuICAgIGlmIChvcHRpb25zLnN0eWxlKVxyXG4gICAgICBPYmplY3Qua2V5cyhvcHRpb25zLnN0eWxlKS5mb3JFYWNoKHByb3BlcnR5ID0+IHtcclxuICAgICAgICBjbG9uZS5zdHlsZVtwcm9wZXJ0eV0gPSBvcHRpb25zLnN0eWxlW3Byb3BlcnR5XTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNsb25lO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSAtIFRoZSBET00gTm9kZSBvYmplY3QgdG8gcmVuZGVyXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gUmVuZGVyaW5nIG9wdGlvbnMsIEBzZWUge0BsaW5rIHRvU3ZnfVxyXG4gKiBAcmV0dXJuIHtQcm9taXNlfSAtIEEgcHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aXRoIGEgVWludDhBcnJheSBjb250YWluaW5nIFJHQkEgcGl4ZWwgZGF0YS5cclxuICogKi9cclxuZnVuY3Rpb24gdG9QaXhlbERhdGEobm9kZSwgb3B0aW9ucykge1xyXG4gIHJldHVybiBkcmF3KG5vZGUsIG9wdGlvbnMgfHwge30pLnRoZW4oXHJcbiAgICBjYW52YXMgPT4gY2FudmFzLmdldENvbnRleHQoJzJkJykuZ2V0SW1hZ2VEYXRhKDAsIDAsIGdldFdpZHRoKG5vZGUpLCBnZXRIZWlnaHQobm9kZSkpLmRhdGFcclxuICApO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtOb2RlfSBub2RlIC0gVGhlIERPTSBOb2RlIG9iamVjdCB0byByZW5kZXJcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBSZW5kZXJpbmcgb3B0aW9ucywgQHNlZSB7QGxpbmsgdG9Tdmd9XHJcbiAqIEByZXR1cm4ge1Byb21pc2V9IC0gQSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggYSBQTkcgaW1hZ2UgZGF0YSBVUkxcclxuICogKi9cclxuZnVuY3Rpb24gdG9Qbmcobm9kZSwgb3B0aW9ucykge1xyXG4gIHJldHVybiBkcmF3KG5vZGUsIG9wdGlvbnMgfHwge30pLnRoZW4oY2FudmFzID0+IGNhbnZhcy50b0RhdGFVUkwoKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgLSBUaGUgRE9NIE5vZGUgb2JqZWN0IHRvIHJlbmRlclxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFJlbmRlcmluZyBvcHRpb25zLCBAc2VlIHtAbGluayB0b1N2Z31cclxuICogQHJldHVybiB7UHJvbWlzZX0gLSBBIHByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2l0aCBhIEpQRUcgaW1hZ2UgZGF0YSBVUkxcclxuICogKi9cclxuZnVuY3Rpb24gdG9KcGVnKG5vZGUsIG9wdGlvbnMpIHtcclxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICByZXR1cm4gZHJhdyhub2RlLCBvcHRpb25zKS50aGVuKGNhbnZhcyA9PiBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJywgb3B0aW9ucy5xdWFsaXR5IHx8IDEuMCkpO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtOb2RlfSBub2RlIC0gVGhlIERPTSBOb2RlIG9iamVjdCB0byByZW5kZXJcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBSZW5kZXJpbmcgb3B0aW9ucywgQHNlZSB7QGxpbmsgdG9Tdmd9XHJcbiAqIEByZXR1cm4ge1Byb21pc2V9IC0gQSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggYSBQTkcgaW1hZ2UgYmxvYlxyXG4gKiAqL1xyXG5mdW5jdGlvbiB0b0Jsb2Iobm9kZSwgb3B0aW9ucykge1xyXG4gIHJldHVybiBkcmF3KG5vZGUsIG9wdGlvbnMgfHwge30pLnRoZW4oY2FudmFzVG9CbG9iKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29weU9wdGlvbnMob3B0aW9ucykge1xyXG4gIC8vIENvcHkgb3B0aW9ucyB0byBpbXBsIG9wdGlvbnMgZm9yIHVzZSBpbiBpbXBsXHJcbiAgaWYgKHR5cGVvZiBvcHRpb25zLmltYWdlUGxhY2Vob2xkZXIgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBkb210b2ltYWdlLmltcGwub3B0aW9ucy5pbWFnZVBsYWNlaG9sZGVyID0gZGVmYXVsdE9wdGlvbnMuaW1hZ2VQbGFjZWhvbGRlcjtcclxuICB9IGVsc2Uge1xyXG4gICAgZG9tdG9pbWFnZS5pbXBsLm9wdGlvbnMuaW1hZ2VQbGFjZWhvbGRlciA9IG9wdGlvbnMuaW1hZ2VQbGFjZWhvbGRlcjtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5jYWNoZUJ1c3QgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBkb210b2ltYWdlLmltcGwub3B0aW9ucy5jYWNoZUJ1c3QgPSBkZWZhdWx0T3B0aW9ucy5jYWNoZUJ1c3Q7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvbXRvaW1hZ2UuaW1wbC5vcHRpb25zLmNhY2hlQnVzdCA9IG9wdGlvbnMuY2FjaGVCdXN0O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZHJhdyhkb21Ob2RlLCBvcHRpb25zKSB7XHJcbiAgcmV0dXJuIHRvU3ZnKGRvbU5vZGUsIG9wdGlvbnMpXHJcbiAgICAudGhlbihtYWtlSW1hZ2UpXHJcbiAgICAudGhlbihkZWxheSgxMDApKVxyXG4gICAgLnRoZW4oaW1hZ2UgPT4ge1xyXG4gICAgICBjb25zdCBjYW52YXMgPSBuZXdDYW52YXMoZG9tTm9kZSk7XHJcbiAgICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XHJcbiAgICAgIHJldHVybiBjYW52YXM7XHJcbiAgICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gbmV3Q2FudmFzKGROb2RlKSB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNhbnZhcy53aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgZ2V0V2lkdGgoZE5vZGUpO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IGdldEhlaWdodChkTm9kZSk7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuYmdjb2xvcikge1xyXG4gICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IG9wdGlvbnMuYmdjb2xvcjtcclxuICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNhbnZhcztcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb25lTm9kZShub2RlLCBmaWx0ZXIsIHJvb3QpIHtcclxuICBpZiAoIXJvb3QgJiYgZmlsdGVyICYmICFmaWx0ZXIobm9kZSkpIHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUobm9kZSlcclxuICAgIC50aGVuKG1ha2VOb2RlQ29weSlcclxuICAgIC50aGVuKGNsb25lID0+IGNsb25lQ2hpbGRyZW4obm9kZSwgY2xvbmUsIGZpbHRlcikpXHJcbiAgICAudGhlbihjbG9uZSA9PiBwcm9jZXNzQ2xvbmUobm9kZSwgY2xvbmUpKTtcclxuXHJcbiAgZnVuY3Rpb24gbWFrZU5vZGVDb3B5KG5kKSB7XHJcbiAgICBpZiAobmQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuIG1ha2VJbWFnZShuZC50b0RhdGFVUkwoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmQuY2xvbmVOb2RlKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsb25lQ2hpbGRyZW5Jbk9yZGVyKHBhcmVudCwgYXJyQ2hpbGRyZW4sIGZsdCkge1xyXG4gICAgbGV0IGRvbmUgPSBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIGFyckNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICBkb25lID0gZG9uZVxyXG4gICAgICAgIC50aGVuKCgpID0+IGNsb25lTm9kZShjaGlsZCwgZmx0KSlcclxuICAgICAgICAudGhlbihjaGlsZENsb25lID0+IHtcclxuICAgICAgICAgIGlmIChjaGlsZENsb25lKSB7XHJcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZENsb25lKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRvbmU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbG9uZUNoaWxkcmVuKG9yaWdpbmFsLCBjbG9uZSwgZmx0KSB7XHJcbiAgICBjb25zdCBjaGlsZHJlbiA9IG9yaWdpbmFsLmNoaWxkTm9kZXM7XHJcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2xvbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjbG9uZUNoaWxkcmVuSW5PcmRlcihjbG9uZSwgYXNBcnJheShjaGlsZHJlbiksIGZsdCkudGhlbigoKSA9PiBjbG9uZSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbWJlZEZvbnRzKG5vZGUpIHtcclxuICByZXR1cm4gZm9udEZhY2VzLnJlc29sdmVBbGwoKS50aGVuKGNzc1RleHQgPT4ge1xyXG4gICAgY29uc3Qgc3R5bGVOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgIG5vZGUuYXBwZW5kQ2hpbGQoc3R5bGVOb2RlKTtcclxuICAgIHN0eWxlTm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3NUZXh0KSk7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5saW5lSW1hZ2VzKG5vZGUpIHtcclxuICByZXR1cm4gaW1hZ2VzLmlubGluZUFsbChub2RlKS50aGVuKCgpID0+IG5vZGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlU3ZnRGF0YVVyaShub2RlLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShub2RlKS50aGVuKG5kID0+IHtcclxuICAgIG5kLnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCcpO1xyXG4gICAgY29uc3Qgc2VyaWFsaXplZFN0cmluZyA9IG5ldyB3aW5kb3cuWE1MU2VyaWFsaXplcigpLnNlcmlhbGl6ZVRvU3RyaW5nKG5kKTtcclxuXHJcbiAgICBjb25zdCB4aHRtbCA9IGVzY2FwZVhodG1sKHNlcmlhbGl6ZWRTdHJpbmcpO1xyXG4gICAgY29uc3QgZm9yZWlnbk9iamVjdCA9IGA8Zm9yZWlnbk9iamVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPiR7eGh0bWx9PC9mb3JlaWduT2JqZWN0PmA7XHJcbiAgICBjb25zdCBzdmdTdHIgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIke3dpZHRofVwiIGhlaWdodD1cIiR7aGVpZ2h0fVwiPiR7Zm9yZWlnbk9iamVjdH08L3N2Zz5gO1xyXG5cclxuICAgIC8vIE9wdGltaXppbmcgU1ZHcyBpbiBkYXRhIFVSSXNcclxuICAgIC8vIHNlZSBodHRwczovL2NvZGVwZW4uaW8vdGlndC9wb3N0L29wdGltaXppbmctc3Zncy1pbi1kYXRhLXVyaXNcclxuICAgIC8vIHRoZSBiZXN0IHdheSBvZiBlbmNvZGluZyBTVkcgaW4gYSBkYXRhOiBVUkkgaXMgZGF0YTppbWFnZS9zdmcreG1sLFthY3R1YWwgZGF0YV0uXHJcbiAgICAvLyBXZSBkb27igJl0IG5lZWQgdGhlIDtjaGFyc2V0PXV0Zi04IHBhcmFtZXRlciBiZWNhdXNlIHRoZSBnaXZlbiBTVkcgaXMgQVNDSUkuXHJcbiAgICByZXR1cm4gc3ZnVG9NaW5pRGF0YVVSSShzdmdTdHIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdJbmxpbmVyKCkge1xyXG4gIGNvbnN0IFVSTF9SRUdFWCA9IC91cmxcXChbJ1wiXT8oW14nXCJdKz8pWydcIl0/XFwpL2c7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbmxpbmVBbGwsXHJcbiAgICBzaG91bGRQcm9jZXNzLFxyXG4gICAgaW1wbDoge1xyXG4gICAgICByZWFkVXJscyxcclxuICAgICAgaW5saW5lXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gc2hvdWxkUHJvY2VzcyhzdHJpbmcpIHtcclxuICAgIHJldHVybiBzdHJpbmcuc2VhcmNoKFVSTF9SRUdFWCkgIT09IC0xO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVhZFVybHMoc3RyaW5nKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgIGxldCBtYXRjaDtcclxuICAgIHdoaWxlICgobWF0Y2ggPSBVUkxfUkVHRVguZXhlYyhzdHJpbmcpKSAhPT0gbnVsbCkge1xyXG4gICAgICByZXN1bHQucHVzaChtYXRjaFsxXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0LmZpbHRlcih1cmwgPT4ge1xyXG4gICAgICByZXR1cm4gIWlzRGF0YVVybCh1cmwpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cmxBc1JlZ2V4KHVybDApIHtcclxuICAgIHJldHVybiBuZXcgUmVnRXhwKGAodXJsXFxcXChbXFwnXCJdPykoJHtlc2NhcGUodXJsMCl9KShbXFwnXCJdP1xcXFwpKWAsICdnJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbmxpbmUoc3RyaW5nLCB1cmwsIGJhc2VVcmwsIGdldCkge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1cmwpXHJcbiAgICAgIC50aGVuKHVsID0+IChiYXNlVXJsID8gcmVzb2x2ZVVybCh1bCwgYmFzZVVybCkgOiB1bCkpXHJcbiAgICAgIC50aGVuKHVsID0+ICh0eXBlb2YgZ2V0ID09PSAnZnVuY3Rpb24nID8gZ2V0KHVsKSA6IGdldEFuZEVuY29kZSh1bCwgZG9tdG9pbWFnZS5pbXBsLm9wdGlvbnMpKSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhQXNVcmwoZGF0YSwgbWltZVR5cGUodXJsKSkpXHJcbiAgICAgIC50aGVuKGRhdGFVcmwgPT4gc3RyaW5nLnJlcGxhY2UodXJsQXNSZWdleCh1cmwpLCBgJDEke2RhdGFVcmx9JDNgKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbmxpbmVBbGwoc3RyaW5nLCBiYXNlVXJsLCBnZXQpIHtcclxuICAgIGlmICghc2hvdWxkUHJvY2VzcyhzdHJpbmcpIHx8IGlzU3JjQXNEYXRhVXJsKHN0cmluZykpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzdHJpbmcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzdHJpbmcpXHJcbiAgICAgIC50aGVuKHJlYWRVcmxzKVxyXG4gICAgICAudGhlbih1cmxzID0+IHtcclxuICAgICAgICBsZXQgZG9uZSA9IFByb21pc2UucmVzb2x2ZShzdHJpbmcpO1xyXG4gICAgICAgIHVybHMuZm9yRWFjaCh1cmwgPT4ge1xyXG4gICAgICAgICAgZG9uZSA9IGRvbmUudGhlbihzdHIgPT4gaW5saW5lKHN0ciwgdXJsLCBiYXNlVXJsLCBnZXQpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZG9uZTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdGb250RmFjZXMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc29sdmVBbGwsXHJcbiAgICBpbXBsOiB7cmVhZEFsbH1cclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiByZXNvbHZlQWxsKCkge1xyXG4gICAgcmV0dXJuIHJlYWRBbGwoZG9jdW1lbnQpXHJcbiAgICAgIC50aGVuKHdlYkZvbnRzID0+IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwod2ViRm9udHMubWFwKHdlYkZvbnQgPT4gd2ViRm9udC5yZXNvbHZlKCkpKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oY3NzU3RyaW5ncyA9PiBjc3NTdHJpbmdzLmpvaW4oJ1xcbicpKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlYWRBbGwoKSB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGFzQXJyYXkoZG9jdW1lbnQuc3R5bGVTaGVldHMpKVxyXG4gICAgICAudGhlbihsb2FkRXh0ZXJuYWxTdHlsZVNoZWV0cylcclxuICAgICAgLnRoZW4oZ2V0Q3NzUnVsZXMpXHJcbiAgICAgIC50aGVuKHNlbGVjdFdlYkZvbnRSdWxlcylcclxuICAgICAgLnRoZW4ocnVsZXMgPT4gcnVsZXMubWFwKG5ld1dlYkZvbnQpKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzZWxlY3RXZWJGb250UnVsZXMoY3NzUnVsZXMpIHtcclxuICAgICAgcmV0dXJuIGNzc1J1bGVzXHJcbiAgICAgICAgLmZpbHRlcihydWxlID0+IHJ1bGUudHlwZSA9PT0gd2luZG93LkNTU1J1bGUuRk9OVF9GQUNFX1JVTEUpXHJcbiAgICAgICAgLmZpbHRlcihydWxlID0+IGlubGluZXIuc2hvdWxkUHJvY2VzcyhydWxlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3NyYycpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZEV4dGVybmFsU3R5bGVTaGVldHMoc3R5bGVTaGVldHMpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFxyXG4gICAgICAgIHN0eWxlU2hlZXRzLm1hcChzaGVldCA9PiB7XHJcbiAgICAgICAgICBpZiAoc2hlZXQuaHJlZikge1xyXG4gICAgICAgICAgICAvLyBjbG91ZGZvbnQgZG9lc24ndCBoYXZlIGFsbG93IG9yaWdpbiBoZWFkZXIgcHJvcGVybHkgc2V0XHJcbiAgICAgICAgICAgIC8vIGVycm9yIHJlc3BvbnNlIHdpbGwgcmVtYWluIGluIGNhY2hlXHJcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlID0gc2hlZXQuaHJlZi5pbmNsdWRlcygndWJlci1mb250cycpID8gJ25vLWNhY2hlJyA6ICdkZWZhdWx0JztcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1xyXG4gICAgICAgICAgICAgIC5mZXRjaChzaGVldC5ocmVmLCB7Y3JlZGVudGlhbHM6ICdvbWl0JywgY2FjaGV9KVxyXG4gICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcclxuICAgICAgICAgICAgICAudGhlbihzZXRCYXNlSHJlZihzaGVldC5ocmVmKSlcclxuICAgICAgICAgICAgICAudGhlbih0b1N0eWxlU2hlZXQpXHJcbiAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgYW55IGVycm9yIHRoYXQgb2NjdXJyZWQgaW4gYW55IG9mIHRoZSBwcmV2aW91c1xyXG4gICAgICAgICAgICAgICAgLy8gcHJvbWlzZXMgaW4gdGhlIGNoYWluLiBzdHlsZXNoZWV0IGZhaWxlZCB0byBsb2FkIHNob3VsZCBub3Qgc3RvcFxyXG4gICAgICAgICAgICAgICAgLy8gdGhlIHByb2Nlc3MsIGhlbmNlIHJlc3VsdCBpbiBvbmx5IGEgd2FybmluZywgaW5zdGVhZCBvZiByZWplY3RcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihJTUFHRV9FWFBPUlRfRVJST1JTLnN0eWxlU2hlZXQsIHNoZWV0LmhyZWYpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2hlZXQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBmdW5jdGlvbiBzZXRCYXNlSHJlZihiYXNlKSB7XHJcbiAgICAgICAgYmFzZSA9IGJhc2Uuc3BsaXQoJy8nKTtcclxuICAgICAgICBiYXNlLnBvcCgpO1xyXG4gICAgICAgIGJhc2UgPSBiYXNlLmpvaW4oJy8nKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkQmFzZUhyZWZUb1VybChtYXRjaCwgcDEpIHtcclxuICAgICAgICAgIGNvbnN0IHVybCA9IC9eaHR0cC9pLnRlc3QocDEpID8gcDEgOiBjb25jYXRBbmRSZXNvbHZlVXJsKGJhc2UsIHAxKTtcclxuICAgICAgICAgIHJldHVybiBgdXJsKCcke3VybH0nKWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTb3VyY2U6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NzYyMzEvMzc4Njg1NlxyXG4gICAgICAgIGZ1bmN0aW9uIGNvbmNhdEFuZFJlc29sdmVVcmwodXJsLCBjb25jYXQpIHtcclxuICAgICAgICAgIGNvbnN0IHVybDEgPSB1cmwuc3BsaXQoJy8nKTtcclxuICAgICAgICAgIGNvbnN0IHVybDIgPSBjb25jYXQuc3BsaXQoJy8nKTtcclxuICAgICAgICAgIGNvbnN0IHVybDMgPSBbXTtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdXJsMS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHVybDFbaV0gPT09ICcuLicpIHtcclxuICAgICAgICAgICAgICB1cmwzLnBvcCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHVybDFbaV0gIT09ICcuJykge1xyXG4gICAgICAgICAgICAgIHVybDMucHVzaCh1cmwxW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB1cmwyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodXJsMltpXSA9PT0gJy4uJykge1xyXG4gICAgICAgICAgICAgIHVybDMucG9wKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodXJsMltpXSAhPT0gJy4nKSB7XHJcbiAgICAgICAgICAgICAgdXJsMy5wdXNoKHVybDJbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdXJsMy5qb2luKCcvJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGV4dCA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gaXNTcmNBc0RhdGFVcmwodGV4dClcclxuICAgICAgICAgICAgPyB0ZXh0XHJcbiAgICAgICAgICAgIDogdGV4dC5yZXBsYWNlKC91cmxcXChbJ1wiXT8oW14nXCJdKz8pWydcIl0/XFwpL2csIGFkZEJhc2VIcmVmVG9VcmwpO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIHRvU3R5bGVTaGVldCh0ZXh0KSB7XHJcbiAgICAgICAgY29uc3QgZG9jID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KCcnKTtcclxuICAgICAgICBjb25zdCBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG5cclxuICAgICAgICBzdHlsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIGRvYy5ib2R5LmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdHlsZUVsZW1lbnQuc2hlZXQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDc3NSdWxlcyhzdHlsZVNoZWV0cykge1xyXG4gICAgICBjb25zdCBjc3NSdWxlcyA9IFtdO1xyXG4gICAgICBzdHlsZVNoZWV0cy5mb3JFYWNoKHNoZWV0ID0+IHtcclxuICAgICAgICAvLyB0cnkuLi5jYXRjaCBiZWNhdXNlIGJyb3dzZXIgbWF5IG5vdCBhYmxlIHRvIGVudW1lcmF0ZSBydWxlcyBmb3IgY3Jvc3MtZG9tYWluIHNoZWV0c1xyXG4gICAgICAgIGlmICghc2hlZXQpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJ1bGVzO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBydWxlcyA9IHNoZWV0LnJ1bGVzIHx8IHNoZWV0LmNzc1J1bGVzO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGAnQ2FuJ3QgcmVhZCB0aGUgY3NzIHJ1bGVzIG9mOiAke3NoZWV0LmhyZWZ9YCwgZSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocnVsZXMgJiYgdHlwZW9mIHJ1bGVzID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXNBcnJheShydWxlcyB8fCBbXSkuZm9yRWFjaChjc3NSdWxlcy5wdXNoLmJpbmQoY3NzUnVsZXMpKTtcclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yIHdoaWxlIHJlYWRpbmcgQ1NTIHJ1bGVzIGZyb20gJHtzaGVldC5ocmVmfWAsIGUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXRDc3NSdWxlcyBjYW4gbm90IGZpbmQgY3NzUnVsZXMnKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIGNzc1J1bGVzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG5ld1dlYkZvbnQod2ViRm9udFJ1bGUpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICByZXNvbHZlOiAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBiYXNlVXJsID0gKHdlYkZvbnRSdWxlLnBhcmVudFN0eWxlU2hlZXQgfHwge30pLmhyZWY7XHJcbiAgICAgICAgICByZXR1cm4gaW5saW5lci5pbmxpbmVBbGwod2ViRm9udFJ1bGUuY3NzVGV4dCwgYmFzZVVybCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcmM6ICgpID0+IHdlYkZvbnRSdWxlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3NyYycpXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdJbWFnZXMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGlubGluZUFsbCxcclxuICAgIGltcGw6IHtcclxuICAgICAgbmV3SW1hZ2VcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBuZXdJbWFnZShlbGVtZW50KSB7XHJcbiAgICBmdW5jdGlvbiBpbmxpbmUoZ2V0KSB7XHJcbiAgICAgIGlmIChlbGVtZW50LnNyYykge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVsZW1lbnQuc3JjKVxyXG4gICAgICAgIC50aGVuKHVsID0+XHJcbiAgICAgICAgICB0eXBlb2YgZ2V0ID09PSAnZnVuY3Rpb24nID8gZ2V0KHVsKSA6IGdldEFuZEVuY29kZSh1bCwgZG9tdG9pbWFnZS5pbXBsLm9wdGlvbnMpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4gZGF0YUFzVXJsKGRhdGEsIG1pbWVUeXBlKGVsZW1lbnQuc3JjKSkpXHJcbiAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICBkYXRhVXJsID0+XHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICBlbGVtZW50Lm9ubG9hZCA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgICAgZWxlbWVudC5vbmVycm9yID0gcmVqZWN0O1xyXG4gICAgICAgICAgICAgIGVsZW1lbnQuc3JjID0gZGF0YVVybDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlubGluZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlubGluZUFsbChub2RlKSB7XHJcbiAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5saW5lQmFja2dyb3VuZChub2RlKS50aGVuKCgpID0+IHtcclxuICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ld0ltYWdlKG5vZGUpLmlubGluZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChhc0FycmF5KG5vZGUuY2hpbGROb2RlcykubWFwKGNoaWxkID0+IGlubGluZUFsbChjaGlsZCkpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGlubGluZUJhY2tncm91bmQobmQpIHtcclxuICAgICAgY29uc3QgYmFja2dyb3VuZCA9IG5kLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQnKTtcclxuXHJcbiAgICAgIGlmICghYmFja2dyb3VuZCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gaW5saW5lclxyXG4gICAgICAgIC5pbmxpbmVBbGwoYmFja2dyb3VuZClcclxuICAgICAgICAudGhlbihpbmxpbmVkID0+IHtcclxuICAgICAgICAgIG5kLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kJywgaW5saW5lZCwgbmQuc3R5bGUuZ2V0UHJvcGVydHlQcmlvcml0eSgnYmFja2dyb3VuZCcpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IG5kKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvbXRvaW1hZ2U7XHJcbiJdfQ==