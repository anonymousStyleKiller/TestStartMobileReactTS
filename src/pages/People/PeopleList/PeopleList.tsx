import React from 'react';
import {useStyles} from './theme';
import {useDispatch, useSelector} from "react-redux";
import {selectPeoplesItems, selectPeoplesLoading} from "../../../store/ducs/peoples/selectors";
import {fetchPeople} from "../../../store/ducs/peoples/actionCreators";
import {useHistory} from "react-router-dom";


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Button from '@material-ui/core/Button/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";


const PeopleList = (): React.ReactElement => {
    const history = useHistory();
    const classes = useStyles();
    const dispatch = useDispatch();

    const peoplesInfo = useSelector(selectPeoplesItems);
    const isLoading = useSelector(selectPeoplesLoading);

    React.useEffect(() => {
        dispatch(fetchPeople());
    }, [dispatch, fetchPeople]);

    return (<>
        {!isLoading ?
            <div className={classes.centred}>
                <CircularProgress/>
            </div> :
            <List className={classes.root}>
                {peoplesInfo.map(peoples => {
                    return (<>
                        <ListItem key={peoples._id}>
                            <Button onClick={() => {
                                history.push('/info/' + peoples._id)}}
                                    variant="contained"
                                    color="inherit">
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src={peoples.avatarUrl}/>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={"@" + peoples.username}
                                    secondary={<React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary">
                                            {peoples.fullname}
                                            <br/>
                                        </Typography>
                                        {peoples.text}
                                    </React.Fragment>}/>
                            </Button>
                        </ListItem>
                        <Divider variant="inset" component="li"/>
                    </>)
                })}
            </List>}
            </>)
}


export default PeopleList;
