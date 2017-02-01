webpackHotUpdate(4,{

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _values = __webpack_require__(137);
	
	var _values2 = _interopRequireDefault(_values);
	
	var _getPrototypeOf = __webpack_require__(76);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(80);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(81);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(83);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(82);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
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
	    { title: 'New Team' },
	    _react2.default.createElement(
	      'h1',
	      null,
	      'NEW TEAM'
	    ),
	    _react2.default.createElement(
	      'p',
	      null,
	      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sint officia cumque quas soluta, quae earum ea, quam exercitationem saepe veritatis fuga voluptatum dolor animi nesciunt voluptas eaque, consectetur porro!'
	    ),
	    _react2.default.createElement(TeamForm, null),
	    _react2.default.createElement(TeamList, null)
	  );
	};
	
	var TeamForm = function (_React$Component) {
	  (0, _inherits3.default)(TeamForm, _React$Component);
	
	  function TeamForm(props) {
	    (0, _classCallCheck3.default)(this, TeamForm);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (TeamForm.__proto__ || (0, _getPrototypeOf2.default)(TeamForm)).call(this, props));
	
	    _this.state = { value: '' };
	    _this.handleChange = _this.handleChange.bind(_this);
	    return _this;
	  }
	
	  (0, _createClass3.default)(TeamForm, [{
	    key: 'handleChange',
	    value: function handleChange(event) {
	      this.setState({ value: event.target.value });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('input', { value: this.state.value, onChange: this.handleChange }),
	        _react2.default.createElement('input', { type: 'submit', onClick: function onClick() {
	            return _firebase2.default.db.createTeam(_this2.state.value);
	          } })
	      );
	    }
	  }]);
	  return TeamForm;
	}(_react2.default.Component);
	
	var TeamList = function (_React$Component2) {
	  (0, _inherits3.default)(TeamList, _React$Component2);
	
	  function TeamList(props) {
	    (0, _classCallCheck3.default)(this, TeamList);
	
	    var _this3 = (0, _possibleConstructorReturn3.default)(this, (TeamList.__proto__ || (0, _getPrototypeOf2.default)(TeamList)).call(this, props));
	
	    _this3.state = {};
	    return _this3;
	  }
	
	  (0, _createClass3.default)(TeamList, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this4 = this;
	
	      var teamsRef = _firebase2.default.db.teamsRef;
	      teamsRef.on('value', function (snap) {
	        console.log(snap.val());
	        _this4.setState(snap.val());
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'ul',
	        null,
	        (0, _values2.default)(this.state).map(function (team) {
	          return _react2.default.createElement(
	            'li',
	            null,
	            team.name
	          );
	        })
	      );
	    }
	  }]);
	  return TeamList;
	}(_react2.default.Component);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL25ld1RlYW0uanMiXSwibmFtZXMiOlsiVGVhbUZvcm0iLCJwcm9wcyIsInN0YXRlIiwidmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsImRiIiwiY3JlYXRlVGVhbSIsIkNvbXBvbmVudCIsIlRlYW1MaXN0IiwidGVhbXNSZWYiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJzbmFwIiwidmFsIiwibWFwIiwidGVhbSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7a0JBRWU7QUFBQSxTQUNYO0FBQUE7QUFBQSxNQUFRLE9BQU0sVUFBZDtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGRjtBQUdFLGtDQUFDLFFBQUQsT0FIRjtBQUlFLGtDQUFDLFFBQUQ7QUFKRixHQURXO0FBQUEsQzs7SUFTVEEsUTs7O0FBQ0osb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSUFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhLEVBQUNDLE9BQU8sRUFBUixFQUFiO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUhpQjtBQUlsQjs7OztpQ0FDWUMsSyxFQUFPO0FBQ2xCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDSixPQUFPRyxNQUFNRSxNQUFOLENBQWFMLEtBQXJCLEVBQWQ7QUFDRDs7OzZCQUNRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRSxpREFBTyxPQUFPLEtBQUtELEtBQUwsQ0FBV0MsS0FBekIsRUFBZ0MsVUFBVSxLQUFLQyxZQUEvQyxHQURGO0FBRUUsaURBQU8sTUFBSyxRQUFaLEVBQXFCLFNBQVM7QUFBQSxtQkFBTSxtQkFBR0ssRUFBSCxDQUFNQyxVQUFOLENBQWlCLE9BQUtSLEtBQUwsQ0FBV0MsS0FBNUIsQ0FBTjtBQUFBLFdBQTlCO0FBRkYsT0FERjtBQU1EOzs7RUFoQm9CLGdCQUFNUSxTOztJQW1CdkJDLFE7OztBQUNKLG9CQUFZWCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMklBQ1hBLEtBRFc7O0FBRWpCLFdBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRmlCO0FBR2xCOzs7O3dDQUNtQjtBQUFBOztBQUNsQixVQUFNVyxXQUFXLG1CQUFHSixFQUFILENBQU1JLFFBQXZCO0FBQ0FBLGVBQVNDLEVBQVQsQ0FBWSxPQUFaLEVBQXFCLGdCQUFPO0FBQzFCQyxnQkFBUUMsR0FBUixDQUFZQyxLQUFLQyxHQUFMLEVBQVo7QUFDQSxlQUFLWCxRQUFMLENBQWNVLEtBQUtDLEdBQUwsRUFBZDtBQUNELE9BSEQ7QUFJRDs7OzZCQUNPO0FBQ04sYUFDRTtBQUFBO0FBQUE7QUFDRyw4QkFBYyxLQUFLaEIsS0FBbkIsRUFBMEJpQixHQUExQixDQUE4QjtBQUFBLGlCQUFRO0FBQUE7QUFBQTtBQUFLQyxpQkFBS0M7QUFBVixXQUFSO0FBQUEsU0FBOUI7QUFESCxPQURGO0FBS0Q7OztFQWxCb0IsZ0JBQU1WLFMiLCJmaWxlIjoibmV3VGVhbS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9jb2R5L2NvZGVyL2NoZWNrSW5BcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IEZiIGZyb20gJy4uL2xpYi9maXJlYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICAgIDxMYXlvdXQgdGl0bGU9XCJOZXcgVGVhbVwiPlxuICAgICAgPGgxPk5FVyBURUFNPC9oMT5cbiAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBFb3Mgc2ludCBvZmZpY2lhIGN1bXF1ZSBxdWFzIHNvbHV0YSwgcXVhZSBlYXJ1bSBlYSwgcXVhbSBleGVyY2l0YXRpb25lbSBzYWVwZSB2ZXJpdGF0aXMgZnVnYSB2b2x1cHRhdHVtIGRvbG9yIGFuaW1pIG5lc2NpdW50IHZvbHVwdGFzIGVhcXVlLCBjb25zZWN0ZXR1ciBwb3JybyE8L3A+XG4gICAgICA8VGVhbUZvcm0gLz5cbiAgICAgIDxUZWFtTGlzdCAvPlxuICAgIDwvTGF5b3V0PlxuKVxuXG5jbGFzcyBUZWFtRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7dmFsdWU6ICcnfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KCkgPT4gRmIuZGIuY3JlYXRlVGVhbSh0aGlzLnN0YXRlLnZhbHVlKX0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9IFxufVxuXG5jbGFzcyBUZWFtTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB0ZWFtc1JlZiA9IEZiLmRiLnRlYW1zUmVmXG4gICAgdGVhbXNSZWYub24oJ3ZhbHVlJywgc25hcCA9PntcbiAgICAgIGNvbnNvbGUubG9nKHNuYXAudmFsKCkpXG4gICAgICB0aGlzLnNldFN0YXRlKHNuYXAudmFsKCkpXG4gICAgfSlcbiAgfVxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8dWw+XG4gICAgICAgIHtPYmplY3QudmFsdWVzKHRoaXMuc3RhdGUpLm1hcCh0ZWFtID0+IDxsaT57dGVhbS5uYW1lfTwvbGk+KX1cbiAgICAgIDwvdWw+XG4gICAgKVxuICB9XG59ICJdfQ==
	    if (true) {
	      module.hot.accept()

	      var Component = module.exports.default || module.exports
	      Component.__route = "/newTeam"

	      if (module.hot.status() !== 'idle') {
	        var components = next.router.components
	        for (var r in components) {
	          if (!components.hasOwnProperty(r)) continue

	          if (components[r].Component.__route === "/newTeam") {
	            next.router.update(r, Component)
	          }
	        }
	      }
	    }
	  

/***/ },

/***/ 137:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(138), __esModule: true };

/***/ },

/***/ 138:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(140);
	module.exports = __webpack_require__(1).Object.values;

/***/ },

/***/ 139:
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(12)
	  , toIObject = __webpack_require__(27)
	  , isEnum    = __webpack_require__(58).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(8)
	  , $values = __webpack_require__(139)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9uZXdUZWFtLmpzP2E5M2EiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3ZhbHVlcy5qcz82NGE1Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC92YWx1ZXMuanM/MTkxMjczMSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtdG8tYXJyYXkuanM/MTkxMjczMSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzLmpzPzE5MTI3MzEiXSwibmFtZXMiOlsiVGVhbUZvcm0iLCJwcm9wcyIsInN0YXRlIiwidmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsImRiIiwiY3JlYXRlVGVhbSIsIkNvbXBvbmVudCIsIlRlYW1MaXN0IiwidGVhbXNSZWYiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJzbmFwIiwidmFsIiwibWFwIiwidGVhbSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OzttQkFFZTtBQUFBLFVBQ1g7QUFBQTtBQUFBLE9BQVEsT0FBTSxVQUFkO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGO0FBR0UsbUNBQUMsUUFBRCxPQUhGO0FBSUUsbUNBQUMsUUFBRDtBQUpGLElBRFc7QUFBQSxFOztLQVNUQSxROzs7QUFDSixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDJJQUNYQSxLQURXOztBQUVqQixXQUFLQyxLQUFMLEdBQWEsRUFBQ0MsT0FBTyxFQUFSLEVBQWI7QUFDQSxXQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBSGlCO0FBSWxCOzs7O2tDQUNZQyxLLEVBQU87QUFDbEIsWUFBS0MsUUFBTCxDQUFjLEVBQUNKLE9BQU9HLE1BQU1FLE1BQU4sQ0FBYUwsS0FBckIsRUFBZDtBQUNEOzs7OEJBQ1E7QUFBQTs7QUFDUCxjQUNFO0FBQUE7QUFBQTtBQUNFLGtEQUFPLE9BQU8sS0FBS0QsS0FBTCxDQUFXQyxLQUF6QixFQUFnQyxVQUFVLEtBQUtDLFlBQS9DLEdBREY7QUFFRSxrREFBTyxNQUFLLFFBQVosRUFBcUIsU0FBUztBQUFBLG9CQUFNLG1CQUFHSyxFQUFILENBQU1DLFVBQU4sQ0FBaUIsT0FBS1IsS0FBTCxDQUFXQyxLQUE1QixDQUFOO0FBQUEsWUFBOUI7QUFGRixRQURGO0FBTUQ7OztHQWhCb0IsZ0JBQU1RLFM7O0tBbUJ2QkMsUTs7O0FBQ0oscUJBQVlYLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0SUFDWEEsS0FEVzs7QUFFakIsWUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFGaUI7QUFHbEI7Ozs7eUNBQ21CO0FBQUE7O0FBQ2xCLFdBQU1XLFdBQVcsbUJBQUdKLEVBQUgsQ0FBTUksUUFBdkI7QUFDQUEsZ0JBQVNDLEVBQVQsQ0FBWSxPQUFaLEVBQXFCLGdCQUFPO0FBQzFCQyxpQkFBUUMsR0FBUixDQUFZQyxLQUFLQyxHQUFMLEVBQVo7QUFDQSxnQkFBS1gsUUFBTCxDQUFjVSxLQUFLQyxHQUFMLEVBQWQ7QUFDRCxRQUhEO0FBSUQ7Ozs4QkFDTztBQUNOLGNBQ0U7QUFBQTtBQUFBO0FBQ0csK0JBQWMsS0FBS2hCLEtBQW5CLEVBQTBCaUIsR0FBMUIsQ0FBOEI7QUFBQSxrQkFBUTtBQUFBO0FBQUE7QUFBS0Msa0JBQUtDO0FBQVYsWUFBUjtBQUFBLFVBQTlCO0FBREgsUUFERjtBQUtEOzs7R0FsQm9CLGdCQUFNVixTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CN0IsbUJBQWtCLHlEOzs7Ozs7O0FDQWxCO0FBQ0EsdUQ7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLEc7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLEUiLCJmaWxlIjoiNC5hMDRiYzE4YjQzYjljYjI4NjE4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBGYiBmcm9tICcuLi9saWIvZmlyZWJhc2UnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgICA8TGF5b3V0IHRpdGxlPVwiTmV3IFRlYW1cIj5cbiAgICAgIDxoMT5ORVcgVEVBTTwvaDE+XG4gICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRW9zIHNpbnQgb2ZmaWNpYSBjdW1xdWUgcXVhcyBzb2x1dGEsIHF1YWUgZWFydW0gZWEsIHF1YW0gZXhlcmNpdGF0aW9uZW0gc2FlcGUgdmVyaXRhdGlzIGZ1Z2Egdm9sdXB0YXR1bSBkb2xvciBhbmltaSBuZXNjaXVudCB2b2x1cHRhcyBlYXF1ZSwgY29uc2VjdGV0dXIgcG9ycm8hPC9wPlxuICAgICAgPFRlYW1Gb3JtIC8+XG4gICAgICA8VGVhbUxpc3QgLz5cbiAgICA8L0xheW91dD5cbilcblxuY2xhc3MgVGVhbUZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge3ZhbHVlOiAnJ307XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eygpID0+IEZiLmRiLmNyZWF0ZVRlYW0odGhpcy5zdGF0ZS52YWx1ZSl9Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSBcbn1cblxuY2xhc3MgVGVhbUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgdGVhbXNSZWYgPSBGYi5kYi50ZWFtc1JlZlxuICAgIHRlYW1zUmVmLm9uKCd2YWx1ZScsIHNuYXAgPT57XG4gICAgICBjb25zb2xlLmxvZyhzbmFwLnZhbCgpKVxuICAgICAgdGhpcy5zZXRTdGF0ZShzbmFwLnZhbCgpKVxuICAgIH0pXG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPHVsPlxuICAgICAgICB7T2JqZWN0LnZhbHVlcyh0aGlzLnN0YXRlKS5tYXAodGVhbSA9PiA8bGk+e3RlYW0ubmFtZX08L2xpPil9XG4gICAgICA8L3VsPlxuICAgIClcbiAgfVxufSBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9uZXdUZWFtLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC92YWx1ZXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC92YWx1ZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QudmFsdWVzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3ZhbHVlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTM4XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsInZhciBnZXRLZXlzICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgaXNFbnVtICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzRW50cmllcyl7XG4gIHJldHVybiBmdW5jdGlvbihpdCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdChpdClcbiAgICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBpICAgICAgPSAwXG4gICAgICAsIHJlc3VsdCA9IFtdXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKE8sIGtleSA9IGtleXNbaSsrXSkpe1xuICAgICAgcmVzdWx0LnB1c2goaXNFbnRyaWVzID8gW2tleSwgT1trZXldXSA6IE9ba2V5XSk7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC10by1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTM5XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9iamVjdC12YWx1ZXMtZW50cmllc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICR2YWx1ZXMgPSByZXF1aXJlKCcuL19vYmplY3QtdG8tYXJyYXknKShmYWxzZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICB2YWx1ZXM6IGZ1bmN0aW9uIHZhbHVlcyhpdCl7XG4gICAgcmV0dXJuICR2YWx1ZXMoaXQpO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXMuanNcbi8vIG1vZHVsZSBpZCA9IDE0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiXSwic291cmNlUm9vdCI6IiJ9