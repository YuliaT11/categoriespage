import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import Carousel from 'react-multi-carousel';

import ProductCard from '../ProductCard';
import { useStyles } from './styles';
import 'react-multi-carousel/lib/styles.css';
import './style.scss';

const responsiveCounts = {
    superLargeDesktop: {
      breakpoint: {
          max: 4000,
          min: 3000
      },
      items: 7,
    },
    desktop: {
      breakpoint: {
          max: 3000,
          min: 1024
      },
      items: 4,
    },
    mobile: {
      breakpoint: {
          max: 464,
          min: 0
      },
      items: 1,
    },
};

const FeaturedProducts = ({ title, description, products = [] }) => {
    const classes = useStyles();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalSlides, setTotalSlides] = useState(0);

    useEffect(() => {
        setTotalSlides(products.length);
    }, [products.length]);

    return (
        <Box className={`featured-products-container ${classes.root}`}>
            <Container className={classes.container}>
                <Typography variant="h5" className={classes.title}>
                  {title}
                </Typography>
                <Typography variant="body1" className={classes.description}>
                  {description}
                </Typography>
                <Box className={classes.carouselContainer}>
                    <Carousel
                        className={classes.carousel}
                        showDots={true}
                        arrows={true}
                        responsive={responsiveCounts}
                    >
                        {
                            products.map((product, index) => (
                                <ProductCard key={index.toString()} product={product} />
                            ))
                        }
                    </Carousel>
                </Box>
            </Container>
        </Box>
    );
};

export default FeaturedProducts;
