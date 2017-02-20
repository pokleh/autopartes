import React from 'react';

import Overlay from './Overlay';
import TopMenu from './TopMenu';
import SideBar from './SideBar';

export default class Dashboard extends React.Component {
	render() {
		return (
			<div>
				<Overlay {...this.props} />
				<TopMenu {...this.props} />
				<div ref="dashboard" className="flex horizontal-start dashboard">
					<SideBar location={this.props.location} toggle={this.props.toggle} dashboard={this.refs.dashboard} />
					<div className="dashboard-container">
						<div className="dashboard-card">
							{this.props.children && React.cloneElement(this.props.children, this.props)}
						</div>
					</div>
				</div>
			</div>
		)
	}

};