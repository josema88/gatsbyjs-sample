import React from 'react'

export default class Movie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>{this.props.data.title}</h1>
                <p>{`Genre: ${this.props.data.genre}`}</p>
                <img src={this.props.data.image}></img>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.props.data.trailer}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}