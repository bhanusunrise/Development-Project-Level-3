import React from 'react';

const SummeryDetails = ({ title, description }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p className="h4 text-secondary">{description}</p>
        </div>
    );
}

export default SummeryDetails;
