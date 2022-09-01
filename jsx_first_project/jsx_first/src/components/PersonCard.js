import React, {Component} from 'react';

class PersonCard extends Component {
    render(){
        return(
    <div>
        <h1>{this.props.person_name}</h1>
        <h4>Age: {this.props.person_age}</h4>
        <h4>Hair Color: {this.props.person_hair_color}</h4>
    </div>
    );
    }
}

export default PersonCard;