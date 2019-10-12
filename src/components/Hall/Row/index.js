import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Place from '../Place';

const Row = ({ row: { _id, rowNumber, skip, places } }) => {
    // console.log(`rerender: ${places}`);
    return (
        <Fragment>
            <div className='row-main'>
                <span className='row-number'>{rowNumber}</span>
                <div className='row-places'>
                    {places.map(place => <Place key={place._id} placeId={place._id} rowId={_id} rowNumber={rowNumber} />)}
                </div>
                <span className='row-number'>{rowNumber}</span>
            </div>
            {skip && <div className='row-main' />}
        </Fragment>
    )
}

Row.propTypes = {
    row: PropTypes.object.isRequired,
}

export default Row;
