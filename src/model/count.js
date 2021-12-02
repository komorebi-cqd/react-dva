function delay(timeout){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        },timeout)
    })
}

const count = {
    namespace: 'count',
    state: 0,
    reducers:{
        increase(state){
            return state + 1
        },
        decrease(state){
            return state -1
        }
    },
    effects:{
        *asyncIncrease(action,{put}){
            console.log('asyncIncrease',action);
            yield delay(1000);
            yield put({type: 'increase'})
        },
        *asyncDecrease(action,{put}){
            yield delay(2000)
            yield put({type: 'decrease'})
        }
    }
}


export default count;