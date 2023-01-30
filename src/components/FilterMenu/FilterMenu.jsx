import React from 'react';

const FilterMenu = ({item}) => {
    const {id, src, name, type} = item;

    return (
        <div key={id} className="main__menu-card">
            <img src={src} alt={name}/>
            <h4>{name}</h4>
        </div>
    );
};

export default FilterMenu;