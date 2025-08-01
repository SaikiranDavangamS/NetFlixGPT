const initialState =  {
    gptState:false
}


const gptReducer = (state = initialState,action) => {
    switch (action.type) {
        case 'SET_GPT_STATE':
            return { ...state, gptState:!state.gptState };
        default:
            return state;
    }
}

export default gptReducer;


