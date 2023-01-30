import React from 'react';

const Item = ({item}) => {
    const {id, category, name, img, weight, energy} = item;
    return (
        <div key={id} className="product__card">
            <img src={img} alt="Картинка"/>
            <div className="product__name">
                <h3>{name}</h3>
                <h4>{weight}</h4>
                <h5>{energy}</h5>
                <input key={id} type="hidden" value={category}/>
                <h2>Добавить в корзину</h2>
            </div>
        </div>
    );
};

export default Item;