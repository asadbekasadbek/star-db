import React, {Component} from 'react';
import Row from "../Row";
import {PlanetDetails, PlanetList} from "../sw-components";

class PlanetsPage extends Component {
    state={
        selectedItem:2
    }

    onItemSelected=(selectedItem)=>{
        this.setState({selectedItem})
    }
    render() {
        const {selectedItem} =this.state
        return (
            <div>
                <Row left={<PlanetList onItemSelected={this.onItemSelected} />} right={ <PlanetDetails itemId={selectedItem} />}/>
            </div>
        );
    }
}

export default PlanetsPage;