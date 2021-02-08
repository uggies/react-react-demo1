import React from 'react'

import { connect } from 'react-redux';
import { buyCake } from '../redux';

function CakeContainer(props) {
    return (
        <div>
            <h1>Number of cakes - {props.numOfCakes}</h1>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes : state.numOfCakes
    }
}

const mapDispatchToProps = (disptach) => {
    return {
        buyCake : () => disptach(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
