import React, { useEffect, useState } from 'react';
import axios from "axios";

import { ReactComponent as Ellipse } from '../../assets/icons/Ellipse.svg'
import { ReactComponent as PatternOrange } from '../../assets/icons/pattern-orange.svg'
import { ReactComponent as PatternBlue } from '../../assets/icons/pattern-blue.svg'
import { ReactComponent as Phone } from '../../assets/icons/Phone.svg'
import { ReactComponent as Email } from '../../assets/icons/email.svg'
import Texture1 from '../../assets/images/insulation-masonry-orderdesk 35.png'
import Texture2 from '../../assets/images/insulation-masonry-orderdesk 35 (1).png'
import Texture3 from '../../assets/images/insulation-masonry-orderdesk 35 (2).png'
import Texture4 from '../../assets/images/insulation-masonry-orderdesk 35 (3).png'
import Manufacturer1 from '../../assets/images/rinox-logo 1.png'
import Manufacturer2 from '../../assets/images/permacon (2) 1.png'
import Manufacturer3 from '../../assets/images/assets_0bdcf7e901d84addad16c112f9513277_ec75be8361bf4bb09d52260d88e0ca84 2.png'
import Manufacturer4 from '../../assets/images/Rectangle.png'
import Manufacturer5 from '../../assets/images/Meridian-Brick 1.png'
import Manufacturer6 from '../../assets/images/brickcraft-logo 1 (1).png'
import Manufacturer7 from '../../assets/images/shouldice stone 1.png'
import CategoryCard from './CategoryCard';
import ManufacturerCard from './ManufacturerCard';

import './index.scss';

const CategoriesPage = () => {
    const manufacturers = [Manufacturer1, Manufacturer2, Manufacturer3, Manufacturer4, Manufacturer5, Manufacturer6, Manufacturer7];
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.request({
            method: 'get',
            url: 'https://product.masonryorderdesk.ca/services/product/api/categories'
        }).then(res => setCategories(res.data))
    }, [])

    return (
        <div className="categories-page">
            <header className="categories-page-header">
                <div className="categories-page-header__content categories-page__container">
                    <h3>Shop Building Materials Online</h3>
                    <h1>Shop Local <br/> Building Materials</h1>
                    <h4>Search by Manufacterers, Syles, Colous Availability & More</h4>
                    <img src="https://tradefy.s3.amazonaws.com/images/products+and+reviews+hero.svg"/>
                </div>
            </header>
            <section className="categories-page-categories categories-page__container">
                <div className="bg-icon">
                    <Ellipse/>
                </div>
                <p className="categories-page-section__article">Shop by Category</p>
                <div className="categories-page-categories__wrapper">
                    {
                        categories.length > 0 && categories.map((category, index) =>
                            <CategoryCard
                                categoryName={category.name}
                                subcategories={category.subcategories}
                                key={index}
                            />
                        )
                    }
                </div>
            </section>
            <section className="categories-page-info categories-page__container">
                <img className="bg-icon bg-icon-one" src={Texture1}/>
                <img className="bg-icon bg-icon-two" src={Texture2}/>
                <img className="bg-icon bg-icon-three" src={Texture3}/>
                <img className="bg-icon bg-icon-four" src={Texture4}/>
                <div className="categories-page-info__content">
                    <div className="categories-page-info__content-column">
                        <div className="categories-page-info__content-column__image">
                            <img src="https://tradefy.s3.amazonaws.com/images/Material+Order+Desk+Sample+Panel.svg" alt=""/>
                            <div className="icon-bg-blu">
                                <PatternBlue/>
                            </div>
                        </div>
                    </div>
                    <div className="categories-page-info__content-column">
                        <div className="categories-page-info__content-column__title">
                            <h3>Order a Free Sample From Any Product Page</h3>
                            <div className="icon-bg-org">
                                <PatternOrange/>
                            </div>
                        </div>
                        <div className="categories-page-info__content-column__description">
                            <p>Due to screen differences actual colour may vary. To ensure the colour, texture and size is correct for your project get a free physical sample prior to ordering.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="categories-page-manufacturers categories-page__container">
                <p className="categories-page-section__article">Popular Manufacturers</p>
                <div className="categories-page-manufacturers__wrapper">
                    {
                        manufacturers.map((logo, index) =>
                            <ManufacturerCard
                                logo={logo}
                                key={index}
                            />
                        )
                    }
                </div>
            </section>
            <section className="categories-page-contacts">
                <h3>Can’t Find Your Building Materials?</h3>
                <div className="categories-page-contacts__content">
                    <img src="https://tradefy.s3.amazonaws.com/images/call+us+to+find+building+materials+you+cant+find.svg" alt=""/>
                    <div className="categories-page-contacts__content-details">
                        <p>Our team of building material experts will help you find the right products, arrange samples & delivery anywhere in north america</p>
                        <div>
                            <Phone/>
                            <a href="tel:1-866-421-1339">1-866-421-1339</a>
                        </div>
                        <div>
                            <Email/>
                            <a href="mailto:contact@masonryorderdesk.ca">contact@masonryorderdesk.ca</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default CategoriesPage;