import React from 'react'

class Counter extends React.Component {




    constructor(props) {
        super(props);

        this.state = {
            seconds: 0,
            seconds2: 0,
            seconds3: 0
        };

    }
    tick() {
        if (this.state.seconds < 20000) {
            this.setState(prevState => ({
                seconds: prevState.seconds + 100
            }));
        }
    }

    tick2() {
        if (this.state.seconds2 < 10000) {
            this.setState(prevState => ({
                seconds2: prevState.seconds + 100
            }));
        }
    }



    tick3() {
        if (this.state.seconds3 < 1000) {
            this.setState(prevState => ({
                seconds3: prevState.seconds + 100
            }));
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 10);
        this.interval = setInterval(() => this.tick2(), 10);
        this.interval = setInterval(() => this.tick3(), 10);

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }





    render() {
        return <div className="Counter">

            <div> <span>{this.state.seconds} + </span><span>Км кабелей</span></div>
            <div> <span>{this.state.seconds2} + </span><span>Видеокамер</span></div>
            <div> <span>{this.state.seconds3} + </span><span>Объектов</span></div>




    </div>;

    }
}


export default Counter