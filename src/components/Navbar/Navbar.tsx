import React from 'react';
import {StyledMenu, StyledMenuItem} from "./theme";

import {ListItemText} from "@material-ui/core";
import Button from '@material-ui/core/Button/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon/ListItemIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router-dom';


const Navbar = () => {
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="navigationMenu">
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                Открыть Меню
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                    <Button color="inherit"
                            onClick={()=>{history.push('/users/')}}
                    >
                        <ListItemIcon>
                            <AccountCircleIcon fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText primary="Пользователи"/>
                    </Button>
                </StyledMenuItem>
            </StyledMenu>
        </div>
    );
};

export default Navbar;
