/*'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

function circlePath(cx, cy, r){
    return 'M '+cx+' '+cy+' m -'+r+', 0 a '+r+','+r+' 0 1,0 '+(r*2)+',0 a '+r+','+r+' 0 1,0 -'+(r*2)+',0';
}

var Compute_ElasticLoadBalancing_ELLoadBalancer = React.createClass({
  displayName: 'ActionAccessibility',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
			 //React.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z' })
      [
				React.createElement('path', { d: circlePath(50,48.75,30.43), fill: '#f58536' }),
				React.createElement('path', { d: 'M24.42 39.87h11.05v17.76H24.42zM59.73 27.74h9.86v9.86h-9.86zM59.73 43.82h9.86v9.86h-9.86zM59.73 59.91h9.86v9.86h-9.86z', fill: '#fff' }),
				React.createElement('path', { d: 'M57.01 50.05l1.64-.81 1.08-.53-1.08-.54-1.46-.72-4.4-2.17v2.17H39.58l15.01-9.61 1.19 1.84 2.49-4.2.73-1.24.73-1.22-1.4.17-1.59.18-4.7.55 1.13 1.74-18.41 11.79-2.03 1.3 2.42 1.54 18.02 11.55-1.13 1.74 4.7.55 1.59.18 1.4.17-.73-1.22-.73-1.24-2.49-4.2-1.19 1.84-15.01-9.61h13.21v2.09l4.22-2.09', fill: '#fff' })
			]
    );
  }

});

module.exports = Compute_ElasticLoadBalancing_ELLoadBalancer;
*/

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

let Compute_ElasticLoadBalancing_ELLoadBalancer = (props) => (
	<SvgIcon {...props}>

<circle cx="50" cy="48.75" r="30.43" fill="#f58536"/>
<path fill="#fff" d="M24.42 39.87h11.05v17.76H24.42zM59.73 27.74h9.86v9.86h-9.86zM59.73 43.82h9.86v9.86h-9.86zM59.73 59.91h9.86v9.86h-9.86z"/>
<path fill="#fff" d="M57.01 50.05l1.64-.81 1.08-.53-1.08-.54-1.46-.72-4.4-2.17v2.17H39.58l15.01-9.61 1.19 1.84 2.49-4.2.73-1.24.73-1.22-1.4.17-1.59.18-4.7.55 1.13 1.74-18.41 11.79-2.03 1.3 2.42 1.54 18.02 11.55-1.13 1.74 4.7.55 1.59.18 1.4.17-.73-1.22-.73-1.24-2.49-4.2-1.19 1.84-15.01-9.61h13.21v2.09l4.22-2.09" />

	</SvgIcon>
);

Compute_ElasticLoadBalancing_ELLoadBalancer.displayName = 'ActionHome';
Compute_ElasticLoadBalancing_ELLoadBalancer.muiName = 'SvgIcon';

module.exports = Compute_ElasticLoadBalancing_ELLoadBalancer;
