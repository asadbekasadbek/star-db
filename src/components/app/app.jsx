import React, {Component} from 'react';
import './app.css'
import Header from "../header/header";
import SwqpiService from "../../services/swapi-service";
import ItemDetalis from "../item-detalis";
import Record from "../Record/record";
import {SwapiServiceProvider} from "../swapi-service-context"
import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components'
import DummySwapiService from "../../services/dummy-swapi-service";
import RandomPlanet from "../random-planet";
import Row from "../Row";

export default  class App extends  Component{


    state={
        selectedPerson :1,
        swapiService: new SwqpiService()
    }
    onServiceChange =()=>{
       this.setState(({swapiService})=>{
           const Service=swapiService instanceof SwqpiService ? DummySwapiService :SwqpiService
           console.log('switched to ',Service.name);
           return{
               swapiService: new Service()
           }
       })
    }
    onPersonSelected =(id)=>{
         this.setState({
             selectedPerson:id
         })
    }


    render() {

        const {getPerson,getStarship,getPersonImage,getStarshipImage ,getAllPeople}=this.state.swapiService;

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
                <SwapiServiceProvider value={this.state.swapiService}>
                <Header onServiceChange={this.onServiceChange}/>
                <RandomPlanet  getData={this.state.swapiService}/>
                <Row left={personDetails} right={starshipDetails} />
                <PersonDetails itemId={11} />
                <PlanetDetails itemId={5}/>
                <StarshipDetails itemId={9} />


                <PersonList/>
                <StarshipList/>
                <PlanetList/>
                </SwapiServiceProvider>
            </div>
        );
    }
};

