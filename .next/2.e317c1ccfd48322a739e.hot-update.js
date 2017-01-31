webpackHotUpdate(2,{

/***/ 133:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _layout = __webpack_require__(50);
	
	var _layout2 = _interopRequireDefault(_layout);
	
	var _firebase = __webpack_require__(130);
	
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
	    if (true) {
	      module.hot.accept()

	      var Component = module.exports.default || module.exports
	      Component.__route = "/"

	      if (module.hot.status() !== 'idle') {
	        var components = next.router.components
	        for (var r in components) {
	          if (!components.hasOwnProperty(r)) continue

	          if (components[r].Component.__route === "/") {
	            next.router.update(r, Component)
	          }
	        }
	      }
	    }
	  

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz9mN2VlIl0sIm5hbWVzIjpbImF1dGgiLCJzaWduSW4iLCJzaWduT3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7bUJBRWUsWUFBTTtBQUNyQixVQUNBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxTQUFRLFNBQVM7QUFBQSxrQkFBTSxtQkFBR0EsSUFBSCxDQUFRQyxNQUFSLEVBQU47QUFBQSxVQUFqQjtBQUFBO0FBQUEsTUFERjtBQUVFO0FBQUE7QUFBQSxTQUFRLFNBQVM7QUFBQSxrQkFBTSxtQkFBR0QsSUFBSCxDQUFRRSxPQUFSLEVBQU47QUFBQSxVQUFqQjtBQUFBO0FBQUEsTUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKRjtBQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRixJQURBO0FBUUUsRSIsImZpbGUiOiIyLmUzMTdjMWNjZmQ0ODMyMmE3MzllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IEZiIGZyb20gJy4uL2xpYi9maXJlYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xucmV0dXJuIChcbjxMYXlvdXQ+XG4gIDxidXR0b24gb25DbGljaz17KCkgPT4gRmIuYXV0aC5zaWduSW4oKX0gPnNpZ25pbjwvYnV0dG9uPlxuICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IEZiLmF1dGguc2lnbk91dCgpfSA+c2lnbm91dDwvYnV0dG9uPlxuICA8aDE+SW5kZXggUGFnZTwvaDE+XG4gIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBFb3Mgc2ludCBvZmZpY2lhIGN1bXF1ZSBxdWFzIHNvbHV0YSwgcXVhZSBlYXJ1bSBlYSwgcXVhbSBleGVyY2l0YXRpb25lbSBzYWVwZSB2ZXJpdGF0aXMgZnVnYSB2b2x1cHRhdHVtIGRvbG9yIGFuaW1pIG5lc2NpdW50IHZvbHVwdGFzIGVhcXVlLCBjb25zZWN0ZXR1ciBwb3JybyE8L3A+XG4gIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBFb3Mgc2ludCBvZmZpY2lhIGN1bXF1ZSBxdWFzIHNvbHV0YSwgcXVhZSBlYXJ1bSBlYSwgcXVhbSBleGVyY2l0YXRpb25lbSBzYWVwZSB2ZXJpdGF0aXMgZnVnYSB2b2x1cHRhdHVtIGRvbG9yIGFuaW1pIG5lc2NpdW50IHZvbHVwdGFzIGVhcXVlLCBjb25zZWN0ZXR1ciBwb3JybyE8L3A+ICBcbjwvTGF5b3V0PlxuKX1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=