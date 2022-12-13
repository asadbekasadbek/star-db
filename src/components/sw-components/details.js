import React from "react";
import ItemDetalis from "../item-detalis";
import SwapiService from "../../services/swapi-service";
import Record from "../Record/record";

 const swapiService = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship,
    getPlanetImage,
    getPersonImage,
    getStarshipImage,
}=swapiService;

const PersonDetails =({itemId}) =>{
    return (
        <ItemDetalis getData={getPerson}  itemId={itemId} getImageUrl={getPersonImage} >
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />
        </ItemDetalis>
    );
}
const PlanetDetails=({itemId}) =>{
    return (
        <ItemDetalis getData={getPlanet}   itemId={itemId} getImageUrl={getPlanetImage} >

        </ItemDetalis>
    );
}
const StarshipDetails =({itemId})=>{
    return (
        <ItemDetalis getData={getStarship}   itemId={itemId} getImageUrl={getStarshipImage} >
            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />
        </ItemDetalis>
    );
}


export {
   PersonDetails,PlanetDetails,StarshipDetails
}