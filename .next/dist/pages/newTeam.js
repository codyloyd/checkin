'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = require('/home/cody/coder/checkInApp/node_modules/babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _getPrototypeOf = require('/home/cody/coder/checkInApp/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/home/cody/coder/checkInApp/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/home/cody/coder/checkInApp/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/home/cody/coder/checkInApp/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/home/cody/coder/checkInApp/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

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

//we can refactor these out into their own files later.. 
//for now it's easier if we keep it all together
//Eric would yell at us for using classes here....
//I'd like to get around it, but I don't think there is a way with firebase


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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL25ld1RlYW0uanMiXSwibmFtZXMiOlsiVGVhbUZvcm0iLCJwcm9wcyIsInN0YXRlIiwidmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsImRiIiwiY3JlYXRlVGVhbSIsIkNvbXBvbmVudCIsIlRlYW1MaXN0IiwidGVhbXNSZWYiLCJvbiIsInNuYXAiLCJ2YWwiLCJtYXAiLCJ0ZWFtIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztrQkFFZTtBQUFBLFNBQ1g7QUFBQTtBQUFBLE1BQVEsT0FBTSxVQUFkO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUZGO0FBR0Usa0NBQUMsUUFBRCxPQUhGO0FBSUUsa0NBQUMsUUFBRDtBQUpGLEdBRFc7QUFBQSxDOztBQVVmO0FBQ0E7QUFDQTtBQUNBOzs7SUFDTUEsUTs7O0FBQ0osb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSUFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhLEVBQUNDLE9BQU8sRUFBUixFQUFiO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUhpQjtBQUlsQjs7OztpQ0FDWUMsSyxFQUFPO0FBQ2xCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDSixPQUFPRyxNQUFNRSxNQUFOLENBQWFMLEtBQXJCLEVBQWQ7QUFDRDs7OzZCQUNRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRSxpREFBTyxPQUFPLEtBQUtELEtBQUwsQ0FBV0MsS0FBekIsRUFBZ0MsVUFBVSxLQUFLQyxZQUEvQyxHQURGO0FBRUUsaURBQU8sTUFBSyxRQUFaLEVBQXFCLFNBQVM7QUFBQSxtQkFBTSxtQkFBR0ssRUFBSCxDQUFNQyxVQUFOLENBQWlCLE9BQUtSLEtBQUwsQ0FBV0MsS0FBNUIsQ0FBTjtBQUFBLFdBQTlCO0FBRkYsT0FERjtBQU1EOzs7RUFoQm9CLGdCQUFNUSxTOztJQW1CdkJDLFE7OztBQUNKLG9CQUFZWCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMklBQ1hBLEtBRFc7O0FBRWpCLFdBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRmlCO0FBR2xCOzs7O3dDQUNtQjtBQUFBOztBQUNsQixVQUFNVyxXQUFXLG1CQUFHSixFQUFILENBQU1JLFFBQXZCO0FBQ0FBLGVBQVNDLEVBQVQsQ0FBWSxPQUFaLEVBQXFCLGdCQUFPO0FBQzFCLGVBQUtQLFFBQUwsQ0FBY1EsS0FBS0MsR0FBTCxFQUFkO0FBQ0QsT0FGRDtBQUdEOzs7NkJBQ087QUFDTixhQUNFO0FBQUE7QUFBQTtBQUNHLDhCQUFjLEtBQUtkLEtBQW5CLEVBQTBCZSxHQUExQixDQUE4QjtBQUFBLGlCQUFRO0FBQUE7QUFBQTtBQUFLQyxpQkFBS0M7QUFBVixXQUFSO0FBQUEsU0FBOUI7QUFESCxPQURGO0FBS0Q7OztFQWpCb0IsZ0JBQU1SLFMiLCJmaWxlIjoibmV3VGVhbS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9jb2R5L2NvZGVyL2NoZWNrSW5BcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IEZiIGZyb20gJy4uL2xpYi9maXJlYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICAgIDxMYXlvdXQgdGl0bGU9XCJOZXcgVGVhbVwiPlxuICAgICAgPGgxPk5FVyBURUFNPC9oMT5cbiAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBFb3Mgc2ludCBvZmZpY2lhIGN1bXF1ZSBxdWFzIHNvbHV0YSwgcXVhZSBlYXJ1bSBlYSwgcXVhbSBleGVyY2l0YXRpb25lbSBzYWVwZSB2ZXJpdGF0aXMgZnVnYSB2b2x1cHRhdHVtIGRvbG9yIGFuaW1pIG5lc2NpdW50IHZvbHVwdGFzIGVhcXVlLCBjb25zZWN0ZXR1ciBwb3JybyE8L3A+XG4gICAgICA8VGVhbUZvcm0gLz5cbiAgICAgIDxUZWFtTGlzdCAvPlxuICAgIDwvTGF5b3V0PlxuKVxuXG5cbi8vd2UgY2FuIHJlZmFjdG9yIHRoZXNlIG91dCBpbnRvIHRoZWlyIG93biBmaWxlcyBsYXRlci4uIFxuLy9mb3Igbm93IGl0J3MgZWFzaWVyIGlmIHdlIGtlZXAgaXQgYWxsIHRvZ2V0aGVyXG4vL0VyaWMgd291bGQgeWVsbCBhdCB1cyBmb3IgdXNpbmcgY2xhc3NlcyBoZXJlLi4uLlxuLy9JJ2QgbGlrZSB0byBnZXQgYXJvdW5kIGl0LCBidXQgSSBkb24ndCB0aGluayB0aGVyZSBpcyBhIHdheSB3aXRoIGZpcmViYXNlXG5jbGFzcyBUZWFtRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7dmFsdWU6ICcnfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KCkgPT4gRmIuZGIuY3JlYXRlVGVhbSh0aGlzLnN0YXRlLnZhbHVlKX0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9IFxufVxuXG5jbGFzcyBUZWFtTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB0ZWFtc1JlZiA9IEZiLmRiLnRlYW1zUmVmXG4gICAgdGVhbXNSZWYub24oJ3ZhbHVlJywgc25hcCA9PntcbiAgICAgIHRoaXMuc2V0U3RhdGUoc25hcC52YWwoKSlcbiAgICB9KVxuICB9XG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgIDx1bD5cbiAgICAgICAge09iamVjdC52YWx1ZXModGhpcy5zdGF0ZSkubWFwKHRlYW0gPT4gPGxpPnt0ZWFtLm5hbWV9PC9saT4pfVxuICAgICAgPC91bD5cbiAgICApXG4gIH1cbn0gIl19