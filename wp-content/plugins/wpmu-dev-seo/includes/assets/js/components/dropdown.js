import React from 'react';
import {__} from '@wordpress/i18n';
import classnames from 'classnames';

export default class Dropdown extends React.Component {
	static defaultProps = {
		icon: 'sui-icon-widget-settings-config',
		buttons: [],
		loading: false,
		disabled: false,
		onClick: () => false,
	};

	render() {
		const classNames = classnames("sui-button-icon sui-dropdown-anchor", {
			"sui-button-onload": this.props.loading
		});

		return <div className="sui-dropdown sui-accordion-item-action">
			<button className={classNames}
					aria-label={__('Dropdown', 'wds')}
					disabled={this.props.disabled}>
				<span className="sui-loading-text">
					<span className={this.props.icon}
						  style={{pointerEvents: 'none'}}
						  aria-hidden="true"/>
				</span>
				<span className="sui-icon-loader sui-loading" aria-hidden="true"/>
			</button>

			<ul>
				{this.props.buttons.map(button => <li>{button}</li>)}
			</ul>
		</div>;
	}
}
