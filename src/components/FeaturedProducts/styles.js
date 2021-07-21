import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: 120,
        paddingBottom: 120,
        background: '#fafafa',
        [theme.breakpoints.down('sm')]: {
            padding: '45px 0'
        }
    },
    container: {
        [theme.breakpoints.down('sm')]: {
            paddingBottom: '45px'
        }
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        fontWeight: '600',
        [theme.breakpoints.down('sm')]: {
             fontSize: '20px',
             justifyContent: 'center',
        },
    },
    carouselContainer: {
        height: '540px'
    },
    carousel: {
        minHeight: '100%',
        alignItems: 'flex-start'
    },
    description: {
        marginTop: 20,
        marginBottom: 40,
        color: '#636F7E',
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            textAlign: 'center',
            lineHeight: '22px',
        },
    },
    buttonLeft: {
        marginLeft: 'auto',
        marginRight: 50,
        cursor: 'pointer',
    },
    buttonRight: {
        cursor: 'pointer',
    },
    slide: {
        paddingRight: 20,
        paddingLeft: 20,
        boxSizing: 'border-box',
    },
    provider: {
        marginRight: -20,
        marginLeft: -20,
        [theme.breakpoints.down('sm')]: {
          margin: '0 auto'
        }
    },
}));
