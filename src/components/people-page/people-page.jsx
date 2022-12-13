import React, {Component} from 'react';
import ItemList from "../item-list";
import ItemDetalis from "../item-detalis";
import ErrorIndicator from "../error-indicator";
import Row from "../Row";

class PeoplePage extends Component {
    state={
        selectedPerson: 1,
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
         const {swapiService} =this.props
        if(this.state.hasError){
            return <div style={{display:"flex", justifyContent:"center"}} className="random-planet  rounded m-1">
                <ErrorIndicator/>
            </div>
        }

        const itemList=(
            <ItemList   getDate={swapiService.getAllPeople} onItemSelected={this.onPersonSelected} >
                {(i) => (
                    `${i.name} (${i.birthYear})`
                )}
            </ItemList>
        )
        const personDetalis =( <ItemDetalis itemId={this.state.selectedPerson} />)
        return (
           <Row right={personDetalis} left={itemList} />
        );
    }
}

export default PeoplePage;