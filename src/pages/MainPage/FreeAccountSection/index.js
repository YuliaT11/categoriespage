import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

import photoContactor from '../../../assets/images/photoContractor.png';
import photoOwner from '../../../assets/images/photoOwner.png';
import photoView1 from '../../../assets/images/photoView1.png';
import photoView2 from '../../../assets/images/photoView2.png';
import Button from  '../../../components/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '50px',

        '& p': {
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '24px',
            color: '#6D7EA5',
            marginTop: '24px'
        },
    },
    card: {
        background: 'white',
        marginBottom: '80px',
        padding: '32px',
        display: 'flex',
        boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.04)',

        '&:last-child': {
            float: 'right'
        },

        '& h5': {
            fontWeight: 'bold',
            fontSize: '20px',
            lineHeight: '28px',
            color: '#20374F',
        },

        '& p': {
            fontWeight: 'normal',
            fontSize: '14px',
            lineHeight: '22px',
            color: '#20374F',
            margin: '15px 0 32px'
        },

        '& img': {
            width: '116px',
            height: '116px',
            marginRight: '32px'
        },

        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',

            '& img': {
                marginRight: 0
            },

            '& div': {
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                marginTop: '20px'
            }
        },
        [theme.breakpoints.up('md')]: {
            width: '446px',

            '&.card-big': {
                width: '590px',
            },

        },
    },
    button: {
        width: '165px'
    }
}));

const FreeAccountSection = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            alignItems="center"
            className={classes.root}
            spacing={6}
        >
            <Grid
                item
                xs={12}
                md={6}
            >
                <Typography variant="h5" component="h5">
                    Get Your Free Account Today!
                </Typography>
                <Typography variant="subtitle1" component="p">
                    Our goal is to give control back to contractors and property owners.
                    When you sign up for our free account you will be able to easily track current and past orders, receive discount offers, and early notice of products on sale.
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                md={6}
            >
                <div className={classes.card}>
                    <img src={photoContactor} alt="Photo Contractor"/>
                    <div>
                        <Typography variant="h6" component="h5">
                            Are you a Contractor?
                        </Typography>
                        <Typography variant="subtitle1" component="p">
                            Sign up for a free account to receive contractor-only discounts and offers via email. Get new product releases sent directly to your inbox from local building suppliers.
                        </Typography>
                        <Button className={classes.button}>Sign Me Up!</Button>
                    </div>
                </div>
                <div className={classes.card}>
                    <img src={photoOwner} alt="Photo Owner"/>
                    <div>
                        <Typography variant="h6" component="h5">
                            Are you a Property Owner <br/>
                            or Manager?
                        </Typography>
                        <Typography variant="subtitle1" component="p">
                            Sign up for your free account today to get exclusive offers and discounts via email. You will receive our monthly newsletter with new product ideas and project inspiration ideas for your next construction project.
                        </Typography>
                        <Button className={classes.button}>Sign Me Up!</Button>
                    </div>
                </div>
            </Grid>
            <Grid
                item
                xs={12}
                md={8}
            >
                <div className={`${classes.card} card-big`}>
                    <img src={photoView1} alt="Photo Contractor"/>
                    <div>
                        <Typography variant="h6" component="h5">
                            Are you a Building Materials Supplier?
                        </Typography>
                        <Typography variant="subtitle1" component="p">
                            Do you have a physical yard, showroom, and trucks to transport building materials? Would you love to earn more business online without investing in expensive digital infrastructure? The OrderDesk Software is designed just for you. Simply add in your product information, set your shipping rules, and start selling. Our OrderDesk team is here to help get you started!
                        </Typography>
                        <Button className={classes.button}>Learn more</Button>
                    </div>
                </div>
                <div className={`${classes.card} card-big`}>
                    <img src={photoView2} alt="Photo Owner"/>
                    <div>
                        <Typography variant="h6" component="h5">
                            Are you a Building Materials Manufacturer?
                        </Typography>
                        <Typography variant="subtitle1" component="p">
                            Whether it's manufactured from concrete, steel, wood, drywall & more, the OrderDesk system is your way to get to market and reach a larger customer base.  Gain ultimate control of the distribution of your products. Select which suppliers are allowed to list your products and set the minimum listed price. Use it to find out which products are the most searched for, to better understand what to put into production next. Let Order Desk system work for you!
                        </Typography>
                        <Button className={classes.button}>Learn more</Button>
                    </div>
                </div>
            </Grid>
            <Grid
                item
                xs={12}
                md={4}
            >
                <Typography variant="h5" component="h5">
                    Be our partner
                </Typography>
                <Typography variant="subtitle1" component="p">
                    Our goal is to help the building materials industry grow by making it easier for existing local manufacturers and suppliers like yourself, reach your customers. Our easy-to-use system will allow you to connect with your customers in real-time.
                </Typography>
            </Grid>
        </Grid>
    )
};

export default FreeAccountSection;