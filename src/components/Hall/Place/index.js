import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reservePlace, occupyPlace, setEmptyPlace } from '../../../actions/cinema';

export const Place = ({ reservePlace, occupyPlace, setEmptyPlace, place: { _id, skip, placeNumber, isReserved, isOccupied, type, price }, rowId, rowNumber }) => {

    const placeClasses = () => {
        let credentials = '';

        isReserved ? credentials += 'place-reserved ' : isOccupied ? credentials += 'place-sold ' : credentials += 'place-empty '

        type === 'sofa' ? credentials += 'place-sofa' : credentials += 'place-chair';

        return credentials;
    };

    const onClick = e => {
        if (!isOccupied) {
            !isReserved ? reservePlace(e.target.id, rowId)
                :
                window.confirm(`Row № ${rowNumber} place № ${placeNumber} is booked already, but it is not sold yet. Do you wish to buy it for ${price}?`)
                    ?
                    occupyPlace(e.target.id, rowId)
                    :
                    setEmptyPlace(e.target.id, rowId);
        }
    }

    const getPlaceSkip = () => {
        while (skip > 0) {
            skip--;
            return <span className='place-body' />
        }
    }

    return (
        <Fragment>
            {skip !== 0 && getPlaceSkip()}
            <span className='place-body' >
                <span className={`place-unit ${placeClasses()}`} onClick={e => onClick(e)} id={_id}>
                    {placeNumber}
                    {!isOccupied && !isReserved && <div className="tooltiptext">
                        <div>{`price: ${price}`}</div>
                        <div>{`type: ${type}`}</div>
                    </div>}
                </span>
            </span>
        </Fragment>
    )
}

Place.propTypes = {
    place: PropTypes.object.isRequired,
    reservePlace: PropTypes.func.isRequired,
    occupyPlace: PropTypes.func.isRequired,
    setEmptyPlace: PropTypes.func.isRequired,
}

export default connect(null, { reservePlace, occupyPlace, setEmptyPlace })(Place)
