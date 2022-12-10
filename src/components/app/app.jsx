import React from 'react';
import './app.css'
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";
import PersonDetalis from "../person-detalis/person-detalis";

const App = () => {
    return (
        <div>

            <Header/>

            <RandomPlanet/>
            <div className="row mb-2">
                <div className="col-md-6">
                <ItemList/>
                </div>
                <div className="col-md-6">
                    <PersonDetalis/>
                </div>
            </div>
        </div>
    );
};

export default App;