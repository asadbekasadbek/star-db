import React, {Component} from 'react';
import Row from "../Row";
import {PersonDetails, PersonList} from "../sw-components";

class PeoplePage extends Component {

    state={
        selectedItem:1
    }

    onItemSelected=(selectedItem)=>{
        this.setState({selectedItem})
    }

    render() {
        const {selectedItem} =this.state
        return (
            <div>
                <Row
                    left={<PersonList  onItemSelected={this.onItemSelected} />}
                    right={ <PersonDetails itemId={selectedItem} />}/>
            </div>
        );
    }
}

export default PeoplePage;