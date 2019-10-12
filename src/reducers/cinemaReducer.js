import { LOAD_HALL, RESERVE_PLACE, OCCUPY_PLACES, SET_PLACE_EMPTY } from '../actions/constants';

const initialState = {
    loading: true,
    hall: {
        hallName: '',
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
            // console.log(payload[0]);
            hall.rows.map(row =>
                payload.map(unit =>
                    row._id === unit.rowId
                    &&
                    row.places.map(place =>
                        place._id === unit.placeId
                        &&
                        (
                            place.isReserved = false,
                            place.isOccupied = true
                        )
                    )
                ));
            // const result = hall.rows.map(row =>
            //     payload.map(unit =>
            //         console.log(row._id === unit.rowId)
            //     )
            // );
            console.log(hall);
            return {
                ...state,
                loading: false,
                hall: {
                    ...hall
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