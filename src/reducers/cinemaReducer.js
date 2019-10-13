import { LOAD_HALL, RESERVE_PLACE, OCCUPY_PLACES, SET_PLACE_EMPTY } from '../actions/constants';

const initialState = {
    loading: true,
    hall: {
        hallName: '',
        city: '',
        movie: '',
        date: '',
        rows: []
    }
}

export default (state = initialState, action) => {
    const { type, payload } = action;
    const { hall } = state;

    switch (type) {
        case LOAD_HALL:
            return {
                ...state,
                hall: {
                    hallName: payload.hallName,
                    city: payload.city,
                    movie: payload.movie,
                    date: payload.date,
                    rows: [...payload.rows]
                },
                loading: false
            };
        case RESERVE_PLACE:
            return {
                ...state,
                loading: false,
                hall: {
                    ...hall,
                    rows: hall.rows.map(row =>
                        row._id === payload.r_id
                            ?
                            {
                                ...row,
                                places: row.places.map(place =>
                                    place._id === payload.p_id
                                        ?
                                        {
                                            ...place,
                                            isReserved: true
                                        }
                                        : { ...place }
                                )
                            }
                            : { ...row }
                    )
                }
            };
        case OCCUPY_PLACES:
            return {
                ...state,
                loading: false,
                hall: {
                    ...hall,
                    rows: hall.rows.map(row => ({
                        ...row,
                        places: row.places.map(place => ({
                            ...place,
                            isOccupied: place.isOccupied || place.isReserved,
                            isReserved: false
                        }))
                    }))
                }
            };
        case SET_PLACE_EMPTY:
            return {
                ...state,
                loading: false,
                hall: {
                    ...hall,
                    rows: hall.rows.map(row =>
                        row._id === payload.r_id
                            ?
                            {
                                ...row,
                                places: row.places.map(place =>
                                    place._id === payload.p_id
                                        ?
                                        {
                                            ...place,
                                            isReserved: false,
                                            isOccupied: false
                                        }
                                        : { ...place }
                                )
                            }
                            : { ...row }
                    )
                }
            };
        default:
            return state;
    }
}