import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setHall } from '../../actions/cinema';
import Row from './Row';

export const Hall = ({ setHall, cinema: { hall: { hallName, rows }, loading } }) => {
    useEffect(() => {
        setHall();
    }, [setHall]);
    return loading ?
        <h1>Loading</h1>
        :
        <Fragment>
            <h1 className='hall-header'>{hallName}</h1>
            <div className='hall-main'>
                <div className='hall-screen'>Screen</div>
                <div className='hall-places'>
                    {rows !== undefined && rows.map(row => (
                        <Row key={row._id} row={row} />
                    ))}
                </div>
            </div>
        </Fragment>
};

Hall.propTypes = {
    setHall: PropTypes.func.isRequired,
    cinema: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    cinema: state.cinema
});

export default connect(mapStateToProps, { setHall })(Hall);
