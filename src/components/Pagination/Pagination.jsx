import React, { PureComponent } from 'react';
import './_Pagination.scss';
import PropTypes from 'prop-types';

/**
 * @description Class representing pagination component
 *
 * @class Pagination
 *
 * @extends PureComponent
 */
class Pagination extends PureComponent {
    render() {
    const { currentPage, pageCount, onPageChange } = this.props;
    const previousButtonDisabled = currentPage === 1 ? true: false;
    const nextButtonDisabled = currentPage === pageCount ? true: false;

    return (
      <div>
        {
        pageCount > 0 ? (
          <div className="pagination">
            <button
              id="previous-button"
              className="pagination__button"
              type="submit"
              disabled={previousButtonDisabled}
              onClick={() => onPageChange(currentPage - 1)}>
              Previous
            </button>

            <div className="pagination__items">
              <span className="pagination__page">
                Page
              </span>
              <div className="pagination__current-page" id="current-page">
                { currentPage }
              </div>
                of
              <span className="pagination__all-pages" id="page-count">
                { pageCount }
              </span>
            </div>

            <button
              id="next-button"
              className="pagination__button"
              type="button"
              disabled={nextButtonDisabled}
              onClick={() => onPageChange(currentPage + 1)}>
              Next
            </button>
          </div>
        )
        : null }
      </div>
    );
  }
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
