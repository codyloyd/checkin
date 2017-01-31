'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/home/cody/coder/checkInApp/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _firebase = require('../lib/firebase');

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _layout2.default,
    null,
    _react2.default.createElement(
      'button',
      { onClick: function onClick() {
          return _firebase2.default.auth.signIn();
        } },
      'signin'
    ),
    _react2.default.createElement(
      'button',
      { onClick: function onClick() {
          return _firebase2.default.auth.signOut();
        } },
      'signout'
    ),
    _react2.default.createElement(
      'h1',
      null,
      'Index Page'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sint officia cumque quas soluta, quae earum ea, quam exercitationem saepe veritatis fuga voluptatum dolor animi nesciunt voluptas eaque, consectetur porro!'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sint officia cumque quas soluta, quae earum ea, quam exercitationem saepe veritatis fuga voluptatum dolor animi nesciunt voluptas eaque, consectetur porro!'
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbImF1dGgiLCJzaWduSW4iLCJzaWduT3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O2tCQUVlLFlBQU07QUFDckIsU0FDQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBUSxTQUFTO0FBQUEsaUJBQU0sbUJBQUdBLElBQUgsQ0FBUUMsTUFBUixFQUFOO0FBQUEsU0FBakI7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUEsUUFBUSxTQUFTO0FBQUEsaUJBQU0sbUJBQUdELElBQUgsQ0FBUUUsT0FBUixFQUFOO0FBQUEsU0FBakI7QUFBQTtBQUFBLEtBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSEY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSkY7QUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEYsR0FEQTtBQVFFLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvY29keS9jb2Rlci9jaGVja0luQXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBGYiBmcm9tICcuLi9saWIvZmlyZWJhc2UnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbnJldHVybiAoXG48TGF5b3V0PlxuICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IEZiLmF1dGguc2lnbkluKCl9ID5zaWduaW48L2J1dHRvbj5cbiAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBGYi5hdXRoLnNpZ25PdXQoKX0gPnNpZ25vdXQ8L2J1dHRvbj5cbiAgPGgxPkluZGV4IFBhZ2U8L2gxPlxuICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRW9zIHNpbnQgb2ZmaWNpYSBjdW1xdWUgcXVhcyBzb2x1dGEsIHF1YWUgZWFydW0gZWEsIHF1YW0gZXhlcmNpdGF0aW9uZW0gc2FlcGUgdmVyaXRhdGlzIGZ1Z2Egdm9sdXB0YXR1bSBkb2xvciBhbmltaSBuZXNjaXVudCB2b2x1cHRhcyBlYXF1ZSwgY29uc2VjdGV0dXIgcG9ycm8hPC9wPlxuICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRW9zIHNpbnQgb2ZmaWNpYSBjdW1xdWUgcXVhcyBzb2x1dGEsIHF1YWUgZWFydW0gZWEsIHF1YW0gZXhlcmNpdGF0aW9uZW0gc2FlcGUgdmVyaXRhdGlzIGZ1Z2Egdm9sdXB0YXR1bSBkb2xvciBhbmltaSBuZXNjaXVudCB2b2x1cHRhcyBlYXF1ZSwgY29uc2VjdGV0dXIgcG9ycm8hPC9wPiAgXG48L0xheW91dD5cbil9Il19