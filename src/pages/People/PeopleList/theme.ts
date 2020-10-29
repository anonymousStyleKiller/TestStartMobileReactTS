import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
        },
        inline: {
            display: 'inline',
        },
        centred:{
            textAlign: 'center',
        }
    }),
);