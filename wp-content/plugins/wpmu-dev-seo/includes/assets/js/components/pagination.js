import React from "react";
import {__, sprintf} from "@wordpress/i18n";
import range from "lodash-es/range";
import classnames from 'classnames';
import PaginationUtil from "./utils/pagination-util";

export default class Pagination extends React.Component {
	static defaultProps = {
		count: 0,
		perPage: 10,
		currentPage: 1,
		onClick: () => false
	};

	handleClick(e, pageNumber) {
		e.preventDefault();

		this.props.onClick(pageNumber);
	}

	render() {
		const pageCount = this.getPageCount();

		return <div className="sui-pagination-wrap">
			<span className="sui-pagination-results">{sprintf(__('%s results', 'wds'), this.props.count)}</span>
			<ul className="sui-pagination">
				<li>
					<a href="#" role="button"
					   onClick={(e) => this.handleClick(e, 1)}
					   disabled={this.props.currentPage === 1}>
						<span className="sui-icon-arrow-skip-back" aria-hidden="true"/>
						<span className="sui-screen-reader-text">{__('Go to first page', 'wds')}</span>
					</a>
				</li>

				<li>
					<a href="#" role="button"
					   onClick={(e) => this.handleClick(e, this.props.currentPage - 1)}
					   disabled={this.props.currentPage === 1}>
						<span className="sui-icon-chevron-left" aria-hidden="true"/>
						<span className="sui-screen-reader-text">{__('Go to previous page', 'wds')}</span>
					</a>
				</li>

				{range(1, pageCount + 1).map(
					(pageNumber) => <li className={classnames({'sui-active': pageNumber === this.props.currentPage})}>
						<a href="#" role="button"
						   onClick={(e) => this.handleClick(e, pageNumber)}>
							{pageNumber}
						</a>
					</li>
				)}

				<li>
					<a href="#" role="button"
					   onClick={(e) => this.handleClick(e, this.props.currentPage + 1)}
					   disabled={this.props.currentPage === pageCount}>
						<span className="sui-icon-chevron-right" aria-hidden="true"/>
						<span className="sui-screen-reader-text">{__('Go to next page', 'wds')}</span>
					</a>
				</li>

				<li>
					<a href="#" role="button"
					   onClick={(e) => this.handleClick(e, pageCount)}
					   disabled={this.props.currentPage === pageCount}>
						<span className="sui-icon-arrow-skip-forward" aria-hidden="true"/>
						<span className="sui-screen-reader-text">{__('Go to last page', 'wds')}</span>
					</a>
				</li>
			</ul>
		</div>;
	}

	getPageCount() {
		return PaginationUtil.getPageCount(
			this.props.count,
			this.props.perPage
		);
	}
}
