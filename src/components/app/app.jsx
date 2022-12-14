import React, {Component} from 'react';
import './app.css'
import Header from "../header/header";
import SwqpiService from "../../services/swapi-service";
import {SwapiServiceProvider} from "../swapi-service-context"
import RandomPlanet from "../random-planet";
import {PeoplePage, PlanetsPage, StarshipsPage} from "../pages";

export default  class App extends  Component{


    state={
        selectedPerson :1,
        swapiService: new SwqpiService()
    }

    render() {
        return (
            <div>
                <SwapiServiceProvider value={this.state.swapiService}>
                <Header />
                <RandomPlanet />
                 <PeoplePage/>
                    <PlanetsPage/>
                    <StarshipsPage/>
                </SwapiServiceProvider>
            </div>
        );
    }
};

