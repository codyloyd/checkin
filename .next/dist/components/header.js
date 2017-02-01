'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/home/cody/coder/checkInApp/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _firebase = require('../lib/firebase');

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'header',
      null,
      _react2.default.createElement(
        'p',
        null,
        'This is the header.. '
      ),
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
        'button',
        { onClick: function onClick() {
            return console.log(_firebase2.default.auth.currentUser().displayName);
          } },
        'user'
      )
    ),
    _react2.default.createElement(
      'style',
      { jsx: true },
      '\n  header {\n    width: 100%;\n    height: 50px;\n    border: solid black 1px;\n    padding: 10px;\n  }\n  '
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbImF1dGgiLCJzaWduSW4iLCJzaWduT3V0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRVc2VyIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O2tCQUdlO0FBQUEsU0FDZjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFFQTtBQUFBO0FBQUEsVUFBUSxTQUFTO0FBQUEsbUJBQU0sbUJBQUdBLElBQUgsQ0FBUUMsTUFBUixFQUFOO0FBQUEsV0FBakI7QUFBQTtBQUFBLE9BRkE7QUFHQTtBQUFBO0FBQUEsVUFBUSxTQUFTO0FBQUEsbUJBQU0sbUJBQUdELElBQUgsQ0FBUUUsT0FBUixFQUFOO0FBQUEsV0FBakI7QUFBQTtBQUFBLE9BSEE7QUFJQTtBQUFBO0FBQUEsVUFBUSxTQUFTO0FBQUEsbUJBQU1DLFFBQVFDLEdBQVIsQ0FBWSxtQkFBR0osSUFBSCxDQUFRSyxXQUFSLEdBQXNCQyxXQUFsQyxDQUFOO0FBQUEsV0FBakI7QUFBQTtBQUFBO0FBSkEsS0FERjtBQU9FO0FBQUE7QUFBQSxRQUFPLFNBQVA7QUFBQTtBQUFBO0FBUEYsR0FEZTtBQUFBLEMiLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2NvZHkvY29kZXIvY2hlY2tJbkFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGYiBmcm9tICcuLi9saWIvZmlyZWJhc2UnXG5cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuPGRpdj5cbiAgPGhlYWRlcj5cbiAgICA8cD5UaGlzIGlzIHRoZSBoZWFkZXIuLiA8L3A+XG4gIDxidXR0b24gb25DbGljaz17KCkgPT4gRmIuYXV0aC5zaWduSW4oKX0gPnNpZ25pbjwvYnV0dG9uPlxuICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IEZiLmF1dGguc2lnbk91dCgpfSA+c2lnbm91dDwvYnV0dG9uPlxuICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKEZiLmF1dGguY3VycmVudFVzZXIoKS5kaXNwbGF5TmFtZSl9ID51c2VyPC9idXR0b24+XG4gIDwvaGVhZGVyPlxuICA8c3R5bGUganN4PntgXG4gIGhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgYH08L3N0eWxlPlxuPC9kaXY+XG4pIl19