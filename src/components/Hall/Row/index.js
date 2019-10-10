import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Place from '../Place';

const Row = ({ row: { _id, rowNumber, skip, places } }) => {

    const generateRow = places.map(place => (
        <Place key={place._id} place={place} row_id={_id} />
    ));

    return (
        <Fragment>
            <div className='row-main'>
                <span className='row-number'>{rowNumber}</span>
                <div className='row-places'>
                    {generateRow}
                </div>
                <span className='row-number'>{rowNumber}</span>
            </div>
            {skip && <div className='row-main'></div>}
        </Fragment>
    )
}

Row.propTypes = {
    row: PropTypes.object.isRequired,
}

export default Row;
