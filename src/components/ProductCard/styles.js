import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    btnViewDetails: {
        padding: '8px 13px',
        fontSize: 14,
        width: '100%',
    },
    productName: {
        fontSize: '18px',
        fontWeight: '600',
        color: '#333333',
        marginBlock: '5px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        '-webkit-line-clamp': 2,
        '-webkit-box-orient': 'vertical',
    },
    productSeries: {
        fontSize: '12px',
        color: '#333333',
    },
    productCard: {
        boxShadow: 'none',
        position: 'relative',
        margin: '0 10px',
    },
    productCardInner: {
        background: '#fff',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    contentWrapper: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    tagReady: {
        position: 'absolute',
        top: 10,
        left: 10,
        background: '#51CC73',
        borderRadius: 50,
        padding: '4px 10px',
        fontSize: 12,
        color: 'white',
    },
    description: {
        color: '#909090',
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '21px',
    },
    fromPrice: {
        fontSize: 16,
        fontWeight: 600,
    },
});
