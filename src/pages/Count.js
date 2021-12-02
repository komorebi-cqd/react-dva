import React from 'react'
import { connect } from 'dva'

function Count(props) {
    return (
        <div>
            <h3>{props.number}</h3>
            <button onClick={props.onAsyncIncrease}>异步加</button>
            <button onClick={props.onIncrease}>加</button>
            <button onClick={props.onDecrease}>减</button>
            <button onClick={props.onAsyncDecrease}>异步减</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    number: state.count
})

const mapDispatchToProps = (dispatch) => ({
    onAsyncIncrease: () => {
        dispatch({
            type:  'count/asyncIncrease'
        })
    },
    onIncrease: () => {
        dispatch({
            type:  'count/increase'
        })
    },
    onDecrease: () => {
        dispatch({
            type:  'count/decrease'
        })
    },
    onAsyncDecrease: () => {
        dispatch({
            type: 'count/asyncDecrease'
        })
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(Count);
