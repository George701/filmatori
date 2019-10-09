import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Row = ({ row: { rowNumber, skip, place } }) => {
    return (
        <div>
            <span>{rowNumber}</span>
            {skip && <hr />}
        </div>
    )
}

Row.propTypes = {
    row: PropTypes.object.isRequired,
}

export default Row;
