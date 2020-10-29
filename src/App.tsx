import Container from '@material-ui/core/Container/Container';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {Route, Switch} from "react-router-dom";
import PeopleList from "./pages/People/PeopleList/PeopleList";
import {PeopleInfo} from "./pages/People/PeopleInfo/PeopleInfo";

function App() {
    return (
        <div className="App">
            <Container>
                <Navbar/>
                <Switch>
                    <Route path="/users" exact><PeopleList/></Route>
                    <Route path="/info/:id"><PeopleInfo/></Route>
                </Switch>
            </Container>
        </div>
    );
}

export default App;
