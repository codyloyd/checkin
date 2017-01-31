'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/home/cody/coder/checkInApp/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _link = require('/home/cody/coder/checkInApp/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('/home/cody/coder/checkInApp/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? 'Check In!' : _ref$title;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _head2.default,
      null,
      _react2.default.createElement(
        'title',
        null,
        title
      ),
      _react2.default.createElement('meta', { charSet: 'utf-8' }),
      _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' })
    ),
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(_header2.default, null),
      children
    ),
    _react2.default.createElement(
      'style',
      { jsx: true },
      '\n  body {\n    background: #DDFFDC;\n    font-family: Arial, Helvetica, Sans;\n  }\n  .container {\n    max-width: 800px;\n    margin: 0 auto;\n  }\n  '
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbImNoaWxkcmVuIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZTtBQUFBLE1BQUdBLFFBQUgsUUFBR0EsUUFBSDtBQUFBLHdCQUFhQyxLQUFiO0FBQUEsTUFBYUEsS0FBYiw4QkFBcUIsV0FBckI7QUFBQSxTQUNiO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFTQTtBQUFULE9BREY7QUFFRSw4Q0FBTSxTQUFRLE9BQWQsR0FGRjtBQUdFLDhDQUFNLE1BQUssVUFBWCxFQUFzQixTQUFRLHVDQUE5QjtBQUhGLEtBREY7QUFNRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFdBQWY7QUFDRSwyREFERjtBQUVJRDtBQUZKLEtBTkY7QUFVQTtBQUFBO0FBQUEsUUFBTyxTQUFQO0FBQUE7QUFBQTtBQVZBLEdBRGE7QUFBQSxDIiwiZmlsZSI6ImxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9jb2R5L2NvZGVyL2NoZWNrSW5BcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgdGl0bGUgPSAnQ2hlY2sgSW4hJyB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+eyB0aXRsZSB9PC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG4gICAgPC9IZWFkPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICB7IGNoaWxkcmVuIH1cbiAgICA8L2Rpdj5cbiAgPHN0eWxlIGpzeD57YFxuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAjRERGRkRDO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBTYW5zO1xuICB9XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgYH08L3N0eWxlPiAgXG4gIDwvZGl2PlxuKSJdfQ==