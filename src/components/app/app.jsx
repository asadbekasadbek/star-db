import React, {Component} from 'react';
import './app.css'
import Header from "../header/header";
import SwqpiService from "../../services/swapi-service";
import ItemDetalis from "../item-detalis";
import Record from "../Record/record";
import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components'

export default  class App extends  Component{

    swapiService =new SwqpiService();


    state={
        selectedPerson :1
    }

    onPersonSelected =(id)=>{
         this.setState({
             selectedPerson:id
         })
    }


    render() {

        const {getPerson,getStarship,getPersonImage,getStarshipImage ,getAllPeople}=this.swapiService;

        const personDetails =(
            <ItemDetalis getData={getPerson}  itemId={11} getImageUrl={getPersonImage} >
                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />
            </ItemDetalis>
        )

        const starshipDetails =(
            <ItemDetalis getData={getStarship}   itemId={5} getImageUrl={getStarshipImage} >
                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
                <Record field="costInCredits" label="Cost" />
            </ItemDetalis>
        );

        return (
            <div>
                <Header/>
                {/*<RandomPlanet  getData={this.swapiService}/>*/}
                {/*<Row left={personDetails} right={starshipDetails} />*/}
                <PersonDetails itemId={11} />
                <PlanetDetails itemId={5}/>
                <StarshipDetails itemId={9} />


                <PersonList>
                    {({name}) =><span>{name}</span>}
                </PersonList>
                <StarshipList>
                    {({name}) =><span>{name}</span>}
                </StarshipList>
                <PlanetList>
                    {({name}) =><span>{name}</span>}
                </PlanetList>

            </div>
        );
    }
};

