import React from 'react'
import Player from './Player'


const Players = (props) => {
    const { players, name } = props

    console.log(players)

    if (players.length > 0) 
        return (
            <div className="scientist-area bg-fafafb pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h3>{name}</h3>
                        <span className="sub-title">
                            <i className="flaticon-user"></i> {players.length}
                        </span>
                    </div>
                    <hr />
                    <div className="row">
                        { players.map(player => <Player player={player} /> ) }
                    </div>
                </div>
            </div>
        )
    else
        return ''
}

export default Players