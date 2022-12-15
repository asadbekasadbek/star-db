import React, {Component} from 'react';
import './app.css'
import Header from "../header/header";
import SwqpiService from "../../services/swapi-service";
import {SwapiServiceProvider} from "../swapi-service-context"
import RandomPlanet from "../random-planet";
import {PeoplePage, PlanetsPage, StarshipsPage} from "../pages";
import {BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import {StarshipDetails} from "../sw-components";
import ErrorIndicator from "../error-indicator";


export default  class App extends  Component{


    state={
        selectedPerson :1,
        swapiService: new SwqpiService()
    }

    

    

    render() {
        function StarshipDetail() {
            let {id} = useParams();
            return <StarshipDetails itemId={id} />
        }
        return (
            <div>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <BrowserRouter>
                        <Header />
                        <RandomPlanet />
                        <Routes>
                            <Route path="/" element={<div>welcome Star-db</div>}  />
                            <Route path="/people" element={<PeoplePage/>}  />
                            <Route path="/planets" element={<PlanetsPage/>}  />
                            <Route path="/starships" element={<StarshipsPage />}  />
                            <Route path="/starships/:id" element={<StarshipDetail/>} />
                            <Route path="*" element={<ErrorIndicator/>}/>
                        </Routes>

                    </BrowserRouter>
                </SwapiServiceProvider>
            </div>
        );
    }
};

