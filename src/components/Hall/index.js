import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { setHall } from '../../actions/cinema';

import Loader from '../layout/Loader'
import OrderInfo from './OrderInfo'
import Row from './Row';

export const Hall = ({ setHall, cinema: { hall: { hallName, city, movie, date, rows }, loading } }) => {
    useEffect(() => {
        setHall();
    }, [setHall]);
    return loading ?
        <Loader />
        :
        <div className='hall-container'>
            <h1 className='hall-header'>{hallName}</h1>
            <div className="hall-info">
                <span className="hall-info-unit">{city}, <Moment format='MMMM Do, h:mm a'>{date}</Moment></span>
                <span className="hall-info-unit">{movie}</span>
            </div>
            <div className='hall-main'>
                <div className='hall-screen'>Screen</div>
                <div className='hall-places'>
                    {rows !== undefined && rows.map(row => (
                        <Row key={row._id} row={row} />
                    ))}
                </div>
            </div>
            <OrderInfo />
        </div>
};

Hall.propTypes = {
    setHall: PropTypes.func.isRequired,
    cinema: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    cinema: state.cinema
});

export default connect(mapStateToProps, { setHall })(Hall);
