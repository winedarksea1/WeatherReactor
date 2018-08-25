import { FETCH_WEATHER } from "../actions";

const WeatherReducer =  (state = [], action) => {
    console.log('Action received: ', action);

    switch(action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state];

    }
    return state;
}

export default WeatherReducer;