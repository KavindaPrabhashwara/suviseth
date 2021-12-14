import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
    return (
        <div>
            <li className='cards__item'>
                <Link className='cards__item__link' to={ props.path }>
                    <figure className="cards__items__pic-rap" data-category={ props.label }>
                        <img src={ props.src } alt={ props.alt } />
                        <div className='cards__items__info'>
                            <h5 className='cards__items__text'>{ props.text }</h5>
                        </div>
                    </figure>
                </Link>
            </li>
        </div>
    );
}

export default CardItem;
