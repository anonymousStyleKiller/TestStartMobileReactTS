import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectInfoItems, selectInfoLoading} from "../../../store/ducs/info/selectors";
import {useStyles} from "../PeopleList/theme";
import {useParams} from 'react-router-dom';
import {fetchInfo} from "../../../store/ducs/info/actionCreators";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";


export const PeopleInfo: React.FC = (): React.ReactElement | null => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const userInfo = useSelector(selectInfoItems);
    const isLoading = useSelector(selectInfoLoading);

    const params: { id: string } = useParams();
    const id = params.id;

    React.useEffect(() => {
        if (id) {
            dispatch(fetchInfo(id));
        }
    }, [dispatch, id]);

    return (
        <>
            {!isLoading ?
                <div className={classes.centred}>
                    <CircularProgress/>
                </div> : userInfo &&
                    <List className={classes.root}>
                            <ListItem key={userInfo[0]._id}>
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src={userInfo[0].avatarUrl}/>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={"@" + userInfo[0].username}
                                    secondary={<React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary">
                                            {userInfo[0].fullname}
                                            <br/>
                                        </Typography>
                                        {userInfo[0].text}
                                    </React.Fragment>}/>
                            </ListItem>
                            <Divider variant="inset" component="li"/>
                        </List>
            }
        </>
    );
};

