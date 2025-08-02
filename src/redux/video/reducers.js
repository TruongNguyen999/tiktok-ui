import { GET_VIDEO_LIST } from "../types"

const initialState = []

const videoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEO_LIST:
            return [...action.payload]

        default: 
            return state;
    }
}

export default videoReducer