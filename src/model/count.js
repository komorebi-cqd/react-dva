const count = {
    namespace: 'count',
    state: 0,
    reducers:{
        increase(state,action){
            console.log(action);
            return state + 1
        },
        deincrease(state){
            return state -1
        }
    }
}


export default count;