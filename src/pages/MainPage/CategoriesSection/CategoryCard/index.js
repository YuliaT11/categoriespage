import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

import CategoryBanner1 from '../../../../assets/images/banner-rock-panel-aztec.png';
import CategoryBanner2 from '../../../../assets/images/banner-rock-panel-aztec1.png';
import CategoryBanner3 from '../../../../assets/images/banner-rock-panel-aztec2.png';
import CategoryBanner4 from '../../../../assets/images/banner-rock-panel-aztec3.png';
import CategoryBanner5 from '../../../../assets/images/banner-rock-panel-aztec4.png';

const useStyles = makeStyles((theme) => ({
    card: {
        width: '151px',
        minHeight: '395px',
        background: '#FFFFFF',
        boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.03)',
        borderRadius: '8px',
        marginTop: '40px',

        [theme.breakpoints.up('sm')]: {
            width: '208px',
        },

        '& .card-header': {
            position: 'relative',
            height: '175px',
            backgroundSize: 'cover',
            borderRadius: '8px 8px 0 0',

            '& .category-name': {
                position: 'absolute',
                bottom: '0',
                left: '24px',
                fontWeight: 'bold',
                fontSize: '18px',
                lineHeight: '26px',
                display: 'flex',
                alignItems: 'center',
                color: '#FFFFFF',
            }
        },

        '& ul': {
            padding: '0 24px',
        },

        '& li a, li': {
            color: '#636F7E',
            listStyle: 'none',
            borderBottom: '1px solid #E5EAF4',
            textDecoration: 'none',
            padding: '8px 0'
        }
    },
}));

const CategoryCard = ({category, subcategories}) => {
    const classes = useStyles();

    return (
        <div className={classes.card}>
            <div
                className="card-header"
                style={{
                    backgroundImage: category.name === "Building Envelope"
                        ? `url(${CategoryBanner1})`
                        : category.name === "Rentals"
                            ? `url(${CategoryBanner4})`
                            : category.name === "Aggregates"
                                ? `url(${CategoryBanner3})`
                                : category.name === "Hardscape"
                                    ? `url(${CategoryBanner5})`
                                    :  category.name === "Lumber"
                                        ? `url(${CategoryBanner2})`
                                        : category.name === "Masonry"
                                            ? `url(${CategoryBanner3})` : null

                }}
            >
               <p className="category-name">{category.name}</p>
            </div>
            <div>
                <ul>
                    {
                        subcategories.map((item, index) =>
                            item && item.name && <li key={index}>
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