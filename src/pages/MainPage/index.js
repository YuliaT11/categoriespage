import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, makeStyles } from '@material-ui/core';

import Header from './Header';
import CategoriesSection from './CategoriesSection';
import MainBg from '../../assets/images/MainPage-bg.png';
import StepsOrdersSection from './StepsOrdersSection';
import LaptopsSection from './LaptopsSection';
import TestimonialsSection from './TestimonialsSection';
import MaterialsSection from './MaterialsSection';
import OrderFree from './OrderFree';
import FeaturedProducts from '../../components/FeaturedProducts';
import { PRODUCTS } from "./mock";
import FreeAccountSection from './FreeAccountSection';
import Manufacturer1 from '../../assets/images/rinox-logo 1.png';
import Manufacturer2 from '../../assets/images/permacon (2) 1.png';
import Manufacturer3 from '../../assets/images/assets_0bdcf7e901d84addad16c112f9513277_ec75be8361bf4bb09d52260d88e0ca84 2.png';
import Manufacturer4 from '../../assets/images/Rectangle.png';
import Manufacturer5 from '../../assets/images/Meridian-Brick 1.png';
import Manufacturer6 from '../../assets/images/brickcraft-logo 1 (1).png';
import Manufacturer7 from '../../assets/images/shouldice stone 1.png';
import BandsSection from './BandsSection';
import MapSection from '../../assets/images/mapSection.png';
import SubscribeSection from './SubscribeSection';

const useStyles = makeStyles({
    header: {
        position: 'relative',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        paddingTop: '56px',
        paddingBottom: '56px',
        backgroundAttachment: 'fixed'
    },
    container: {
        maxWidth: '1184px',
    },
    mapImg: {
        width: '100%'
    }
});

const MainPage = () => {
    const classes = useStyles();
    const [categories, setCategories] = useState([]);
    const manufacturers = [Manufacturer1, Manufacturer2, Manufacturer3, Manufacturer4, Manufacturer5, Manufacturer6, Manufacturer7];

    const bgMain = {
        backgroundImage: `url(${MainBg})`,
        minHeight: '620px',
        backgroundSize: 'cover'
    };

    useEffect(() => {
        axios.request({
            method: 'get',
            url: 'https://product.masonryorderdesk.ca/services/product/api/categories'
        }).then(res => setCategories(res.data))
    }, []);

    return (
        <div className="main-page">
            <div className={classes.header} style={bgMain}>
                <Container
                    maxWidth="lg"
                    className={classes.container}
                >
                    <Header/>
                </Container>
            </div>
            <Container
                maxWidth="lg"
                className={classes.container}
            >
                <CategoriesSection
                    categories={categories}
                />
            </Container>
            <LaptopsSection
                classNameContainer={classes.container}
            />
            <Container
                maxWidth="lg"
                className={`${classes.container}`}
            >
                <StepsOrdersSection/>
            </Container>
            <Container
                maxWidth="lg"
                className={`${classes.container}`}
            >
                <TestimonialsSection/>
            </Container>
            <Container
                maxWidth="lg"
                className={`${classes.container}`}
            >
                <MaterialsSection/>
            </Container>
            <Container
                maxWidth="lg"
                className={`${classes.container}`}
            >
                <OrderFree/>
            </Container>
            <FeaturedProducts
                title="Featured Products"
                description="Explore our featured products! A mixture of customer favourites and new released building materials ready to be discovered at your fingertips!"
                products={PRODUCTS}
            />
            <Container
                maxWidth="lg"
                className={`${classes.container}`}
            >
                <FreeAccountSection/>
            </Container>
            <Container
                maxWidth="lg"
                className={`${classes.container}`}
            >
                <BandsSection
                    manufacturers={manufacturers}
                />
            </Container>
            <Container
                maxWidth="lg"
                className={`${classes.container}`}
            >
                <img alt="materialOrderDesc map" className={classes.mapImg} src={MapSection}/>
            </Container>
            <SubscribeSection
                classNameContainer={classes.container}
            />
        </div>
    )
};

export default MainPage;