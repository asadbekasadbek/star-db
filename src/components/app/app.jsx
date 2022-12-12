import React, {Component} from 'react';
import './app.css'
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";
import PersonDetalis from "../person-detalis/person-detalis";
import PeoplePage from "../people-page";

export default  class App extends  Component{



    render() {
        return (
            <div>

                <Header/>

                <RandomPlanet/>
               <PeoplePage/>
                <PeoplePage/>
                <PeoplePage/>
            </div>
        );
    }
};

