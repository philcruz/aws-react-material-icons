/*
'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var Compute_ElasticLoadBalancing_ELLoadBalancer = React.createClass({
	displayName: 'ActionAccessibility',

	render: function render() {
		return React.createElement(
			SvgIcon,
			this.props,
			[
				React.createElement('circle', { cx: '50', cy: '48.75', r: '30.43', fill: '#f58536' }),
				React.createElement('path', { d: 'M24.42 39.87h11.05v17.76H24.42zM59.73 27.74h9.86v9.86h-9.86zM59.73 43.82h9.86v9.86h-9.86zM59.73 59.91h9.86v9.86h-9.86z', fill: '#fff' }),
				React.createElement('path', { d: 'M57.01 50.05l1.64-.81 1.08-.53-1.08-.54-1.46-.72-4.4-2.17v2.17H39.58l15.01-9.61 1.19 1.84 2.49-4.2.73-1.24.73-1.22-1.4.17-1.59.18-4.7.55 1.13 1.74-18.41 11.79-2.03 1.3 2.42 1.54 18.02 11.55-1.13 1.74 4.7.55 1.59.18 1.4.17-.73-1.22-.73-1.24-2.49-4.2-1.19 1.84-15.01-9.61h13.21v2.09l4.22-2.09', fill: '#fff' })
			]
		);
	}

});

module.exports = Compute_ElasticLoadBalancing_ELLoadBalancer;
*/

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var Compute_ElasticLoadBalancing_ELLoadBalancer = function (_React$Component) {
	_inherits(Compute_ElasticLoadBalancing_ELLoadBalancer, _React$Component);

	function Compute_ElasticLoadBalancing_ELLoadBalancer() {
		_classCallCheck(this, Compute_ElasticLoadBalancing_ELLoadBalancer);

		return _possibleConstructorReturn(this, (Compute_ElasticLoadBalancing_ELLoadBalancer.__proto__ || Object.getPrototypeOf(Compute_ElasticLoadBalancing_ELLoadBalancer)).call(this));
	}

	_createClass(Compute_ElasticLoadBalancing_ELLoadBalancer, [{
		key: 'render',
		value: function render(props) {
			var iconStyles = {
				height: 100,
				width: 100
			};
			return React.createElement(
				SvgIcon,
				{ viewBox: '0 0 100 100', style: iconStyles },
				React.createElement('circle', { cx: '50', cy: '48.75', r: '30.43', fill: '#f58536' }),
				React.createElement('path', { fill: '#fff', d: 'M24.42 39.87h11.05v17.76H24.42zM59.73 27.74h9.86v9.86h-9.86zM59.73 43.82h9.86v9.86h-9.86zM59.73 59.91h9.86v9.86h-9.86z' }),
				React.createElement('path', { fill: '#fff', d: 'M57.01 50.05l1.64-.81 1.08-.53-1.08-.54-1.46-.72-4.4-2.17v2.17H39.58l15.01-9.61 1.19 1.84 2.49-4.2.73-1.24.73-1.22-1.4.17-1.59.18-4.7.55 1.13 1.74-18.41 11.79-2.03 1.3 2.42 1.54 18.02 11.55-1.13 1.74 4.7.55 1.59.18 1.4.17-.73-1.22-.73-1.24-2.49-4.2-1.19 1.84-15.01-9.61h13.21v2.09l4.22-2.09' })
			);
		}
	}]);

	return Compute_ElasticLoadBalancing_ELLoadBalancer;
}(React.Component);

Compute_ElasticLoadBalancing_ELLoadBalancer.displayName = 'Compute_ElasticLoadBalancing_ELLoadBalancer';
Compute_ElasticLoadBalancing_ELLoadBalancer.muiName = 'SvgIcon';

module.exports = Compute_ElasticLoadBalancing_ELLoadBalancer;