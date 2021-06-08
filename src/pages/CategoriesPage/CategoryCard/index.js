import React from 'react';
import { Link } from 'react-router-dom';

import CategoryBanner1 from '../../../assets/images/banner-rock-panel-aztec 1 (1).png'
import CategoryBanner2 from '../../../assets/images/banner-rock-panel-aztec 1.png'
import CategoryBanner3 from '../../../assets/images/banner-rock-panel-aztec 1 (2).png'
import CategoryBanner4 from '../../../assets/images/banner-rock-panel-aztec 1 (3).png'
import CategoryBanner5 from '../../../assets/images/banner-rock-panel-aztec 1 (4).png'

import './index.scss'

const CategoryCard = (props) => {
    return (
        <div className="categories-page-categories__wrapper-card">
            <Link to={`/category/${props.categoryName.toLowerCase().replaceAll(' ', '')}`}>
                <h3 className="categories-page-categories__wrapper-card__title">{props.categoryName}</h3>
            </Link>
            <div className="categories-page-categories__wrapper-card__image">
                {
                    props.categoryName === 'Building Envelope'
                        ? <img src={CategoryBanner1} />
                        : props.categoryName === 'Masonry'
                        ? <img src={CategoryBanner2} />
                        : props.categoryName === 'Aggregates'
                        ? <img src={CategoryBanner3} />
                        : props.categoryName === 'Hardscape'
                        ? <img src={CategoryBanner4} />
                        : <img src={CategoryBanner5} />
                }
            </div>
            <div>
                <ul>
                    {
                        props.subcategories.map((item, index) =>
                            <li key={index}>
                                <Link
                                    to={`/products/category/${item.name.toLowerCase().replaceAll(' ', '')}`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
};

export default CategoryCard;