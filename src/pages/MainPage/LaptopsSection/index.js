import React from 'react';
import {Container, Grid, makeStyles, Typography, useMediaQuery} from '@material-ui/core';
import TruckIllustration from '../../../assets/images/truckx5F.png';
import LaptopScreenOne from '../../../assets/images/MacBookPro132.png';
import Button from '../../../components/Button';
import LaptopScreenTwo from '../../../assets/images/MacBookPro133.png';
import PersonIllustration from '../../../assets/images/Illustration-person.png';
import LaptopScreenThree from '../../../assets/images/MacBookPro134.png';
import Illustration from '../../../assets/images/illustration.png';


const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: '150px',
        marginBottom: '150px',
        position: 'relative',

        '& .subtitle-blue': {
            fontSize: '10px',
            color: '#007DFF',
            textTransform: 'uppercase',
            marginBottom: '4px',
            fontWeight: 'bold'
        },

        '& .description': {
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '24px',
            color: '#6D7EA5',
            margin: '24px 0 32px'
        }
    },
    image: {
        width: '100%'
    },
    infoBlock: {
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    illustration: {
        mixBlendMode: 'luminosity',
        position: 'absolute',

        '&.illustration-one': {
            width: '95px',
            top: '-24%',
            left: '-2%',

            '& img': {
                width: '100%'
            }
        },

        '&.illustration-two': {
            width: '47px',
            height: '67px',
            top: '-18%',
            right: '-2%',

            '& img': {
                width: '100%'
            }
        },

        '&.illustration-three': {
            width: '262px',
            height: '237px',
            bottom: '-18%',
            right: '-7%',
            opacity: '0.4',

            '& img': {
                width: '100%'
            }
        },

        '&::after': {
            content: " ",
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            transform: 'translateZ(-1px) scale(1.5)',
            backgroundSize: '100%',
            zIndex: '-1'
        }
    },

}));


const LaptopsSection = ({classNameContainer}) => {
    const matches = useMediaQuery('(min-width:960px)');
    const classes = useStyles();

    return (
        <>
            <Container
                maxWidth="lg"
                className={`${classNameContainer} ${classes.container}`}
            >
                <div className={`${classes.illustration} illustration-one`}>
                    <img src={TruckIllustration} alt="Truck"/>
                </div>
                <Grid
                    container
                    spacing={4}
                    alignItems='center'
                >
                    <Grid
                        item
                        md={6}
                    >
                        <img className={classes.image} src={LaptopScreenOne} alt="Large Assortment of Products"/>
                    </Grid>
                    <Grid
                        item
                        md={6}
                        className={classes.infoBlock}
                    >
                        <Typography className="subtitle-blue" variant="subtitle1" component="p">
                            Shopping Cart
                        </Typography>
                        <Typography className="title" variant="h5" component="h4">
                            Large Assortment of Products
                        </Typography>
                        <Typography className="description" variant="subtitle1" component="p">
                            Search and compare building materials all in one spot. Use our easy-to-use filter to search a wide variety of sizes, colours, and styles.  They're guaranteed to be something for every project.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Container
                maxWidth="lg"
                className={`${classNameContainer} ${classes.container}`}
            >
                <Grid
                    container
                    spacing={4}
                    alignItems='center'
                >
                    <Grid
                        item
                        md={6}
                        style={{order: `${!matches ? '1' : '0'}`}}
                        className={classes.infoBlock}
                    >
                        <Typography className="subtitle-blue" variant="subtitle1" component="p">
                            Product Review
                        </Typography>
                        <Typography className="title" variant="h5" component="h4">
                            Find Real-Time Product Information
                        </Typography>
                        <Typography className="description" variant="subtitle1" component="p">
                            We make it easy for you to see what's in stock and available in your area. With up-to-date product information, you can quickly see detailed information such as dimensions, weight, texture, and more.
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        md={6}
                        style={{order: `${!matches ? '0' : '1'}`}}
                    >
                        <img className={classes.image} src={LaptopScreenTwo} alt="Find Real-Time Product Information"/>
                    </Grid>
                </Grid>
                <div className={`${classes.illustration} illustration-two`}>
                    <img src={PersonIllustration} alt="Truck"/>
                </div>
            </Container>
            <Container
                maxWidth="lg"
                className={`${classNameContainer} ${classes.container}`}
            >
                <Grid
                    container
                    spacing={4}
                    alignItems='center'
                >
                    <Grid
                        item
                        md={6}
                    >
                        <img className={classes.image} src={LaptopScreenThree} alt="Free Learning Centre Blogs & Guides"/>
                    </Grid>
                    <Grid
                        item
                        md={6}
                        className={classes.infoBlock}
                    >
                        <Typography className="subtitle-blue" variant="subtitle1" component="p">
                            Blog page
                        </Typography>
                        <Typography className="title" variant="h5" component="h4">
                            Free Learning Centre Blogs & Guides
                        </Typography>
                        <Typography className="description" variant="subtitle1" component="p">
                            Visit our resource centre for all the latest information, FAQS, style ideas, how-tos, and more.
                        </Typography>
                        <Grid
                            container
                            alignItems='center'
                        >
                            <Grid
                                item
                                xs={12}
                                md={5}
                            >
                                <Button>Explore blogs</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <div className={`${classes.illustration} illustration-three`}>
                    <img src={Illustration} alt="Truck"/>
                </div>
            </Container>
        </>
    )
};

export default LaptopsSection;