import React, {Component} from 'react';
import './person-detalis.css'
export  default class PersonDetalis  extends Component{
    render() {
        return(
            <div className="person-details card m-1">
                <img className='person-image' src='#' />
                <div className="card-body">
                    <h4>R2-D2</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>male</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>male</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>male</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
};

