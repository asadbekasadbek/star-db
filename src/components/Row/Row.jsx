import React from 'react';
import ErrorBoundry from "../ErrorBoundry";
import PropTypes from "prop-types";

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

Row.prototype={
    left:PropTypes.node,
    right:PropTypes.node
}

export default Row;