export const propsArrived = {
    cinema: {
        hall: {
            hallName: 'Test Hall',
            city: "Test city",
            date: "2019-11-11T11:11:11.942+00:00",
            movie: "Test movie",
            rows: [
                {
                    _id: "RT01",
                    rowNumber: 1,
                    skip: false,
                    places: []
                },
                {
                    _id: "RT02",
                    rowNumber: 2,
                    skip: true,
                    places: []
                },
            ]
        },
        loading: false
    }
};

export const propsPending = { cinema: { hall: { hallName: '', rows: [] }, loading: true } };

export const orderInfoMiscPositive = {
    totalPrice: 15.45,
    orderPlaces: [
        {
            rowId: "RT01",
            placeId: "PT01",
            rowNumber: 1,
            placeNumber: 1,
        }
    ]
};

export const orderInfoMiscNegative = {
    totalPrice: 0,
    orderPlaces: []
};

export const rowProps = {
    row: {
        _id: 'RT01',
        rowNumber: 1,
        skip: true,
        places: [
            {
                "_id": "PT09",
            },
            {
                "_id": "PT10",
            },
        ]
    }
};

export const placeProps = {
    placeId: 'PT01',
    rowId: "RT01",
    rowNumber: 1,
    place: {
        _id: "PT01",
        placeNumber: 1,
        isReserved: false,
        isOccupied: false,
        skipLeft: 1,
        skipRight: 1,
        type: "chair",
        price: "10$"
    }
};

export const orderPayload = {
    rowNumber: 1,
    placeNumber: 1,
    r_id: 'RT01',
    p_id: 'PT01',
    price: 15.50
};

export const cinemaInitialState = {
    loading: true,
    hall: {
        hallName: '',
        city: '',
        movie: '',
        date: '',
        rows: []
    }
};

export const cinema = {
    loading: false,
    hall: {
        hallName: 'Test Hall',
        city: '',
        movie: '',
        date: '',
        rows: [
            {
                _id: "RT01",
                rowNumber: 1,
                places: [
                    {
                        _id: "PT01",
                        placeNumber: 1,
                        isReserved: false,
                        isOccupied: false
                    }
                ]
            }
        ]
    }
};

export const orderInitialState = {
    orderPlaces: [],
    totalPrice: 0
};

export const orderReducerPayload = {
    rowNumber: 1,
    placeNumber: 1,
    rowId: 'RT01',
    placeId: 'PT01',
    price: 15.50
};