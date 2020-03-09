import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../App.scss';

import TextLogo from '../images/logo.png'

import { Menu, Popover, Position, Button, Pane, toaster } from 'evergreen-ui';

const Navigation = props => {
    // const [loggedIn, setLoggedIn] = useState(false);

    // useEffect(() => {
    //     if (localStorage.getItem('token')) {
    //         setLoggedIn(true);
    //     }
    // }, []);

    // const handleLogout = e => {
    //     localStorage.removeItem('token');
    //     setLoggedIn(false);
    //      props.history.push("/");
    // };

    return (
        <>
            <Pane
                paddingTop="20px"
                paddingLeft="20px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="flex-start"
                height="100vh"
                width="20vw"
                background="#C5DDFC"
                borderRight="5px dotted #5DEECA"
            >
                <img src={TextLogo} alt="logo" className="nav-logo" />
                <Menu>
                    <Menu.Group>
                        <Menu.Item icon="people" secondaryText="dashboard" is="a" href="/dashboard" textDecoration="none">Bedroom...</Menu.Item>
                        <Menu.Item icon="diagram-tree" secondaryText="tracker" is="a" href="/tracker" textDecoration="none">Pillow...</Menu.Item>
                        <Menu.Item icon="cog" is="a" href="/entries" textDecoration="none" secondaryText="entries">Sheets...</Menu.Item>
                    </Menu.Group>
                    <Menu.Divider />
                    <Menu.Group>
                        <Menu.Item icon="log-out" secondaryText="logout" intent="danger">Go to Sleep...</Menu.Item>
                    </Menu.Group>
                </Menu>
            </Pane>
        </>
    )

}

export default Navigation;