import React from 'react';
import ErrorBoundry from "../ErrorBoundry";
import ErrorButton from "../error-button";

const Row = ({left,right}) => {
    return (
        <div className="row mb-2">
            <div className="col-md-6">
                {left}
            </div>
            <div className="col-md-6">
                <ErrorBoundry>
                {right}
                </ErrorBoundry>
            </div>
        </div>
    );
};

export default Row;