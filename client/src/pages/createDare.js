///page to upload dares 
//  input type Truth or Dare
/// name of author
/// details of type submitted
// id that auto increments

import React, { Component } from 'react';
import Button from '../components/form/Button';
import Input from '../components/form/Input';
import { Col, Row } from 'reactstrap';


class CreateDare extends Component {
    state = {
        newForm: {
            type: '',
            author: '',
            details: ''

        }
    }

    handleInput(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;
        this.setState({
            [name]:value
        })
    }

    render() {
        return (
            <div>
                <form className="container" onSubmit={this.handleSubmit}>
                <Row>

                    <Button
                    name="type"
                    value="truth"
                    onClick=""
                    title="Truth"
                    />
                    <Button
                    name="type"
                    value="dare"
                    onClick=""
                    title="Dare"
                    />
                    </Row>
                    <Input
                    name="author"
                    type="text"
                    value={this.state.newForm.author}
                    // handleInput={}
                    placeholder="Enter Your Name"/>
                    <Input
                    name="details"
                    type="text"
                    value={this.state.newForm.details}
                    placeholder="Enter Your Text"/>
                    <Button
                    title={"Submit"}
                    onClick={this.handleSubmit}
                    />

                </form>

            </div>
        )
    }
}

export default CreateDare;