const initialState={

    orders:0,
    total:''

};


const reducer =(state = initialState, action)=>{
    const newState= {...state};

    if(action.type==='ADD'){
        newState.orders++;
       
    }
    if(action.type==='SUB'){
        newState.orders--;
    }

    return newState;
};

export default reducer;