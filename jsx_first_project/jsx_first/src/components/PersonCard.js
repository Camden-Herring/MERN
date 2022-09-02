import React, {Component} from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            person_age : this.props.person_age
        }
    }

    IncrementAge = () => {
        this.setState({person_age: this.state.person_age + 1})
    }

    render(){
        return(
    <div>
        <h1>{this.props.person_name}</h1>
        <h4>Age: {this.state.person_age}</h4>
        <h4>Hair Color: {this.props.person_hair_color}</h4>
        <button onClick={this.IncrementAge}>Happy Birthday1!!</button>
    </div>
    );
    }
}

export default PersonCard;