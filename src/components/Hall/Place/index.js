import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reservePlace } from '../../../actions/cinema';

const Place = ({ reservePlace, place: { _id, skip, placeNumber, isReserved, isOccupied, type, price }, row_id }) => {

    // const missinSpots = param => [...Array(param)].map((e, i) => <span className="place-space" key={i}>{' '}</span>)
    const placeClasses = () => {
        let credentials = '';

        isReserved ? credentials += 'place-reserved ' : isOccupied ? credentials += 'place-sold ' : credentials += 'place-empty '

        type === 'sofa' ? credentials += 'place-sofa' : credentials += 'place-chair';

        return credentials;
    };

    const onClick = e => {
        if (!isOccupied) {
            // console.log('not reserved')
            !isReserved ? reservePlace(e.target.id, row_id) : console.log('Place is reserved but not sold');
        }
    }

    return (
        <Fragment>
            {/* {skip !== 0 && missinSpots(skip)} */}
            <span className={`place-body ${placeClasses()}`} onClick={e => onClick(e)} id={_id}>
                {placeNumber}
                {!isOccupied && !isReserved && <div className="tooltiptext">
                    <div>{`price: ${price}`}</div>
                    <div>{`type: ${type}`}</div>
                </div>}
            </span>
        </Fragment>
    )
}

Place.propTypes = {
    place: PropTypes.object.isRequired,
    reservePlace: PropTypes.func.isRequired
}

export default connect(null, { reservePlace })(Place)
