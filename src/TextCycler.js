import React, { Component } from 'react';
import './TextCycler.css';

const textArray = ["test", "test1", "test2"]

class TextCycler extends Component {
    constructor(wps) {
        super();
        this.wps = wps
        this.state = { textIdx: 0 };

        if (this.props.wps == null) {
            this.props.wps = 400;
        }
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
            let currentIdx = this.state.textIdx;
            // Changes text every 100 milliseconds (should have as prop)
            this.setState({ textIdx: currentIdx + 1 });
        }, 100);
    }

    componentDidUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        const wps = this.props;
        let text = textArray[this.state.textIdx % textArray.length];

        return (
            <section>
                <h1>{text}</h1>
            </section>
        )
    }
}

export default TextCycler;
