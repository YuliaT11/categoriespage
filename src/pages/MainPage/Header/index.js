import React from 'react';
import {
    Grid,
    makeStyles,
    useMediaQuery,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import Laptops from '../../../assets/images/laptops.png';
import Button from '../../../components/Button';

const useStyles = makeStyles((theme) => ({
    title: {
        fontWeight: 'bold',
        fontSize: '32px',
        lineHeight: '40px',
        color: 'white',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

        '& span': {
            color: '#F36B32'
        }
    },
    list: {
        fontWeight: '600',
        fontSize: '20px',
        lineHeight: '29px',
        color: '#FFFFFF',
        margin: '60px 0 49px',

        '& .MuiListItem-root': {
            paddingLeft: '0',

            '& .MuiListItemIcon-root': {
                color: '#F36B32',
                minWidth: '35px'
            }
        }
    },
    buttons: {
        marginBottom: '49px',
    },
    numbers: {
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        fontWeight: 'bold',

        [theme.breakpoints.down('sm')]: {
            fontSize: '32px',
            flexDirection: 'column',
            marginTop: '20px',

            '& span': {
                fontWeight: '600',
                fontSize: '12px',
                lineHeight: '20px',
                color: '#FFFFFF',
            }
        },
        [theme.breakpoints.up('sm')]: {
            '&:first-child': {
                justifyContent: 'flex-start',
            },

            '&:second-child': {
                justifyContent: 'center',
            },

            '& span': {
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '20px',
                color: '#FFFFFF',
                marginLeft: '10px'
            }
        },

    }
}));

const Header = () => {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <Grid
            container
            spacing={3}
            alignItems='center'
        >
            <Grid
                item
                md={6}
            >
                <Typography className={classes.title} variant="h4" component="h1">
                    Search <span>Online & Order</span> <br/>
                    From Local Buildng Material Suppliers!
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <List component="nav" className={classes.list} aria-label="contacts">
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleIcon/>
                                </ListItemIcon>
                                <ListItemText primary="No Guessing Stock" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Local Pick-Up Options" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Check & Manage Delivery" />
                            </ListItem>
                            {
                                !matches &&
                                    <>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckCircleIcon/>
                                            </ListItemIcon>
                                            <ListItemText primary="Real-Time Pricing "/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckCircleIcon/>
                                            </ListItemIcon>
                                            <ListItemText primary="Order From Your Suppliers"/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckCircleIcon/>
                                            </ListItemIcon>
                                            <ListItemText primary="Get Free Samples Mailed"/>
                                        </ListItem>
                                    </>
                            }
                        </List>
                    </Grid>
                    {
                        matches &&
                        <Grid item xs={12} sm={6}>
                            <List component="nav" className={classes.list} aria-label="contacts">
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckCircleIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Real-Time Pricing "/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckCircleIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Order From Your Suppliers"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckCircleIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Get Free Samples Mailed"/>
                                </ListItem>
                            </List>
                        </Grid>
                    }
                </Grid>
                <Grid
                    container
                    spacing={3}
                    className={classes.buttons}
                >
                    <Grid item xs={12} sm={4}>
                        <Button variant="outlined">
                            GET FREE ACCOUNT
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Button variant="primary">
                            Browse Materials
                        </Button>
                    </Grid>
                </Grid>
                {
                    matches &&
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid item xs={5}>
                            <Typography className={classes.numbers} variant="h3" component="h4">
                                1.8k+ <span>Products <br/> Listed</span>
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography className={classes.numbers} variant="h3" component="h4">
                                1M+ <span>Website <br/> Visitors</span>
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className={classes.numbers} variant="h3" component="h4">
                                4.8 <span>Order <br/> Rating</span>
                            </Typography>
                        </Grid>
                    </Grid>
                }
            </Grid>
            <Grid item md={6}>
                <img style={{width: '100%'}} src={Laptops} alt=""/>
            </Grid>
            {
                !matches &&
                <Grid
                    container
                >
                    <Grid item xs={4}>
                        <Typography className={classes.numbers} variant="h3" component="h4">
                            1.8k+
                            <span>Products <br/> Listed</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography className={classes.numbers} variant="h3" component="h4">
                            1M+
                            <span>Website <br/> Visitors</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography className={classes.numbers} variant="h3" component="h4">
                            4.8
                            <span>Order <br/> Rating</span>
                        </Typography>
                    </Grid>
                </Grid>
            }
        </Grid>
    )
};

export default Header;