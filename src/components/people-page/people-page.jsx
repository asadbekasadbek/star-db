import React, {Component} from 'react';
import ItemList from "../item-list";
import PersonDetalis from "../person-detalis";
import ErrorIndicator from "../error-indicator";
import ErrorButton from "../error-button";

class PeoplePage extends Component {

    state={
        selectedPerson: 1,
        hasError:false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError:true})
    }

    onPersonSelected =(id)=>{
        this.setState({
            selectedPerson:id
        })
    }

    render() {

        if(this.state.hasError){
            return <div style={{display:"flex", justifyContent:"center"}} className="random-planet  rounded m-1">
                <ErrorIndicator/>
            </div>
        }

        return (
            <div className="row mb-2">
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onPersonSelected} />
                </div>
                <div className="col-md-6">
                    <PersonDetalis personId={this.state.selectedPerson} />
                </div>
                 <ErrorButton/>
            </div>
        );
    }
}

export default PeoplePage;