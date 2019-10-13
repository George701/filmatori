import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cleanOrderList } from '../../actions/order';
import { occupyPlaces } from '../../actions/cinema';

export const OrderInfo = ({ cleanOrderList, occupyPlaces, order: { totalPrice, orderPlaces } }) => {

    const onClick = () => {
        parseFloat(totalPrice) !== 0 &&
            occupyPlaces() && cleanOrderList()
    }

    return (
        <div className='order-block'>
            <div className="order-unit">
                <span className="order-unit-title">
                    Seats:
            </span>
                <span className="order-places order-info-num">
                    {` ${orderPlaces.length}`}
                </span>
            </div>
            <div className="order-unit">
                <span className="order-unit-title">
                    Price:
                </span>
                <span className="order-price order-info-num">
                    {` ${totalPrice}$`}
                </span>
            </div>
            <div className="order-unit">
                <button className={parseFloat(totalPrice) === 0 ? 'btn-disabled' : 'order-btn-buy'} onClick={() => onClick()}>
                    Buy
                </button>
            </div>
        </div>
    )
}

OrderInfo.propTypes = {
    order: PropTypes.object.isRequired,
    cleanOrderList: PropTypes.func.isRequired,
    occupyPlaces: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    order: state.order
});

export default connect(mapStateToProps, { cleanOrderList, occupyPlaces })(OrderInfo)
