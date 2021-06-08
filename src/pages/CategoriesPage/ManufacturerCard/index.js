import React from 'react';

import './index.scss'

const ManufacturerCard = (props) => {
    return (
        <div className="categories-page-manufacturers__wrapper-card">
            <img src={props.logo} alt=""/>
        </div>
    )
};

export default ManufacturerCard;