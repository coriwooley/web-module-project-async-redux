import React from "react";
import { connect } from "react-redux";
import { getCatFact } from "../actions";

const RandomCatFact = props => {
    const {catFact, error, isFetching, getCatFact} = props

    const handleClick = e => {
        e.preventDefault()
        getCatFact()
    }


    return(
        <div className="factDiv">
            <h2 className="title-h2">🐈Click To Generate🐈<br/>🐈A Random Cat Fact🐈</h2>
            {isFetching && <h4>😸LOADING😸</h4>}
            {catFact && <h4 className="catFact">{catFact}</h4>}
            {error && <h4 className="errorBox">{error}</h4>}
            <div className="buttonDiv">
            <button onClick={handleClick} className="button">MEOW!</button>
            <h3>😸</h3>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        catFact: state.catFact,
        error: state.error,
        isFetching: state.isFetching
    })
}

export default connect(mapStateToProps, {getCatFact})(RandomCatFact);