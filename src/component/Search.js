import React, {Component} from 'react';
import {Col} from "reactstrap";
import {Link} from "react-router-dom";

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: ""
        }
    }

    render() {
        return (
            <div>
                <div className="inputGroupM">
                    <div className="inputGroup">
                        <input type="text" onChange={(e) => this.setState({inputText: e.target.value})}  placeholder="Поиск..." />
                    </div>
                    <Link to={'/main-provider/news/' + this.state.inputText} className="pt-2 searchBtn">ПОИСК</Link>
                </div>
            </div>
        );
    }
}

export default Search;