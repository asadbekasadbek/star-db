import React from 'react';
import './error-indicator.css'
import gif from './1OYp.gif'
const ErrorIndicator = () => {
    return (
        <div className='error-indicator' >
         <div style={{display:"flex",justifyContent:'center'}} > <img width="200px" height="100px" src={gif} alt="error" /></div>
             <div>
            <span className="boom" >BOOM!</span>
            <span> something has gone terribly wrong</span>
            <span> (but we alread sent droids to fix it)</span>
             </div>
        </div>
    );
};

export default ErrorIndicator;