import React from 'react';
import './tiles.css'

function Tile({ img, imgDescription, title, children }) {
    return (
        <tiles>
            {img && <img src={img} alt={imgDescription}/>}
            <h2>{title}</h2>
            {children}
        </tiles>
    );
}

export default Tile;