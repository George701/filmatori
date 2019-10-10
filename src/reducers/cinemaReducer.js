import { LOAD_HALL, RESERVE_PLACE } from '../actions/constants';

const initialState = {
    loading: true,
    hall: {}
}

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_HALL:
            return {
                ...state,
                // #TODO rewrite
                hall: { ...payload },
                loading: false
            };
        case RESERVE_PLACE:
            // console.log(payload);
            const { p_id, r_id } = payload;
            const { hall } = state;
            console.log(p_id, r_id);
            console.log(hall.rows.map(row =>
                row._id === r_id
                    ?
                    (
                        row.places.map(place =>
                            place._id === p_id
                                ?
                                (console.log(place), { isReserved: true, ...place })
                                :
                                { ...place }),
                        { ...row }
                    )
                    :
                    { ...row }
            ));
            return {
                ...state,
                hall: {
                    ...hall,
                    rows: hall.rows.map(row =>
                        row._id === r_id
                            ?
                            (
                                row.places.map(place =>
                                    place._id === p_id
                                        ?
                                        { isReserved: true, ...place }
                                        :
                                        { ...place }),
                                { ...row }
                            )
                            :
                            { ...row }
                    )
                },
                loading: false
            };
        default:
            return state;
    }
}