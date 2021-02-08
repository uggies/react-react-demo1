import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux';

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1);
    return (
        <div>
            <h1>Number of cakes - {props.numOfCakes}</h1>
            <input type="text" value={number} 
                onChange={e=>setNumber(e.target.value)} />
            <button onClick={()=>props.buyCake(number)}>Buy {number} cake(s)</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes : state.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake : (input) => dispatch(buyCake(input))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)