import React from 'react';
import ItemList from '../item-list';
import {
    withData,
    withSwapiService,
    withChildFunction,
    compose
} from '../hoc-helpers';



const renderName = ({ name }) => <span>{name}</span>;



const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    };
};





const PersonList = compose(
    withSwapiService(mapPersonMethodsToProps),
    withData,
    withChildFunction(renderName)
)(ItemList);

const PlanetList =  compose(
    withSwapiService(mapPersonMethodsToProps),
    withData,
    withChildFunction(renderName)
)(ItemList);

const StarshipList =compose(
    withSwapiService(mapPersonMethodsToProps),
    withData,
    withChildFunction(renderName)
)(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
};