import React, { useCallback } from 'react';
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Box,
} from '@material-ui/core';

import Button from '../Button';
import notFound from '../../assets/images/notfound.png';
import { useStyles } from './styles';

const ProductCard = ({ product, className }) => {
    const classes = useStyles();

    const ProductTag = useCallback(({ status }) => {
        switch (status) {
            case "ready":
                return (
                    <Box className={classes.tagReady} component="span">
                        Ready now
                    </Box>
                );
            default:
                return <></>;
        }
    }, []);

    return (
        <Card className={`${classes.productCard} ${className}`}>
            <Box className={classes.productCardInner}>
                <ProductTag status={product.status} />
                <CardMedia
                    component="img"
                    image={notFound}
                    title={product.name}
                />
                <div className={classes.contentWrapper}>
                    <CardContent>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12}>
                                <Typography className={classes.productName} variant="h5">
                                    {product.category}
                                </Typography>
                                <Typography className={classes.productSeries} variant="body1">
                                    {product.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body2" className={classes.description}>
                                    Material: {product.material}
                                </Typography>
                                <Typography variant="body2" className={classes.description}>
                                    Available Size: {product?.otherSizes?.slice(0, 3).join(", ")}
                                </Typography>
                            </Grid>
                            {
                                product.price ? (
                                    <Grid item xs={12}>
                                        <Typography variabnt="body1" className={classes.fromPrice}>
                                            From: ${product.price}
                                        </Typography>
                                        <Typography variabnt="body1">
                                            $482.79 / Pallet
                                        </Typography>
                                    </Grid>
                                ) : (
                                    <Grid item xs={12}>
                                        <Typography variabnt="body1">No Pricing</Typography>
                                    </Grid>
                                )
                            }
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button variant="default" className={classes.btnViewDetails}>
                            View Details
                        </Button>
                    </CardActions>
                </div>
            </Box>
        </Card>
    );
};

export default ProductCard;
