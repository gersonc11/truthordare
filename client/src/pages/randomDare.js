// load random dare on page after choosing which route to go to
import React, { Component } from 'react';
import API from '../utils/API';
import Button from '../components/form/Button';
import Card from '../components/dares/Card';

class RandomDare extends Component {

    state = {
        dares:[],
        type:"",
        author:"",
        details:"",
        clicked: false
    };

    setType = (e) => {
        let target = e.target;
        let value = target.value;
        let name = target.name;
        this.setState ({
            [name]: value,
            clicked: true
        },
        () => console.log(this.state));
    };

    componentDidMount() {
        API.getDares()
        .then(res => 
            this.setState({
                dares: res.data,
            }, () => console.log(this.state)))
    }

    getOne() {
        console.log("wow")
    }

    render() {
        return (
            <div>
                <Button
                title="Truth"
                name="type"
                value="Truth"
                onClick={this.setType}/>
                <Button
                title="Dare"
                name="type"
                value="Dare"
                onClick={this.setType}
                />

                
            </div>
        )
    }
};

export default RandomDare;