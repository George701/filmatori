import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reservePlace, setEmptyPlace } from '../../../actions/cinema';
import { addPlaceToOrder, removePlaceFromOrder } from '../../../actions/order';

export const Place = ({ placeId, reservePlace, addPlaceToOrder, setEmptyPlace, removePlaceFromOrder, place: { _id, skipLeft, skipRight, placeNumber, isReserved, isOccupied, type, price }, rowId, rowNumber }) => {
    const placeClasses = () => {
        let credentials = '';

        isReserved ? credentials += 'place-reserved ' : isOccupied ? credentials += 'place-sold ' : credentials += 'place-empty '

        type === 'sofa' ? credentials += 'place-sofa' : credentials += 'place-chair';

        return credentials;
    };

    const onClick = e => {
        if (!isOccupied) {
            !isReserved
                ?
                reservePlace(e.target.id, rowId) && addPlaceToOrder(rowNumber, placeNumber, rowId, e.target.id, price)
                :
                setEmptyPlace(e.target.id, rowId) && removePlaceFromOrder(rowNumber, placeNumber, rowId, e.target.id, price);
        }
    }

    const getPlaceSkip = skip => {
        while (skip > 0) {
            skip--;
            return <span className='place-body' />
        }
    }

    return (
        <Fragment>
            {skipLeft !== 0 && getPlaceSkip(skipLeft)}
            <span className='place-body' >
                <span className={`place-unit ${placeClasses()}`} onClick={e => onClick(e)} id={_id}>
                    {placeNumber}
                    {!isOccupied && !isReserved && <div className="tooltiptext">
                        <div>{`price: ${price}$`}</div>
                        <div>{`type: ${type}`}</div>
                    </div>}
                </span>
            </span>
            {skipRight !== 0 && getPlaceSkip(skipRight)}
        </Fragment>
    )
}

Place.propTypes = {
    place: PropTypes.object.isRequired,
    reservePlace: PropTypes.func.isRequired,
    setEmptyPlace: PropTypes.func.isRequired,
    addPlaceToOrder: PropTypes.func.isRequired,
    removePlaceFromOrder: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
    place: state.cinema.hall
        .rows.filter(row => row._id === ownProps.rowId)[0]
        .places.filter(place => place._id === ownProps.placeId)[0]
});

export default connect(mapStateToProps, { reservePlace, addPlaceToOrder, setEmptyPlace, removePlaceFromOrder })(Place)
