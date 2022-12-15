import React, {Component} from 'react';
import './random-planet.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import PropTypes from "prop-types";
import SwapiService from "../../services/swapi-service";
export default  class RandomPlanet extends Component{


    state ={
        planet:{},
        loading:true,
        error:false,
        updateInterval: 10000
    }
    swapiService = new SwapiService();
    static propTypes = {
        updateInterval: PropTypes.number
    };
    componentDidMount() {
        const {updateInterval=10000} =this.props
        this.updatePlanet()
        this.interval=  setInterval(this.updatePlanet,updateInterval)
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
        const id = Math.floor(Math.random()*17) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
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
              <img className="planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="error" />
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

