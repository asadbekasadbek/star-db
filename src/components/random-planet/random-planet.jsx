import React, {Component} from 'react';
import './random-planet.css';
import SwqpiService from '../../services/swapi-service'
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
export default  class RandomPlanet extends Component{


    swapiService =new SwqpiService();
    state ={
        planet:{},
        loading:true,
        error:false
    }

    componentDidCatch(error, errorInfo) {

    }

    componentDidMount() {
        this.updatePlanet()
        this.interval=  setInterval(this.updatePlanet,5000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded=(planet) => {
        this.setState({planet,loading:false});

    }

    onError =(err)=>{
        this.setState({
            error:true
        })
    }

    updatePlanet =()=>{
        const id =Math.floor(Math.random()*17)+2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    };
    render() {

        const { planet:{id,name,population,rotationPeriod,diameter},loading ,error} = this.state;
        if(error){
            return <div style={{display:"flex", justifyContent:"center"}} className="random-planet  rounded m-1">
                       <ErrorIndicator/>
                   </div>
        }
         if(loading){
             return  <div style={{display:"flex",justifyContent:"center"}}>   <Spinner/></div>
         }
        return(
            <div className="random-planet  rounded m-1">
              <img className="planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
                <div className='m-3'>
                    <h4>{name}</h4>
                    <ul className="list-group">
                        <li  className="list-group-item">
                            <span className="term">Population</span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
};

