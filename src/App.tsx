import React, {ReactElement, useEffect, useState} from 'react';
import './App.css';
import {RouteNames} from "./RouteNames";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./views/Home";

function App(): ReactElement {

    const [hasScrollbar, setHasScrollbar] = useState<boolean>(false);

    document.addEventListener('DOMSubtreeModified', (e) => checkScrollBar());

    useEffect(() => checkScrollBar(), [hasScrollbar]);

    const checkScrollBar = () => {
        let hasVerticalScrollbar;
        let rootElement = document.documentElement;
        hasVerticalScrollbar = rootElement.scrollHeight > rootElement.clientHeight;
        setHasScrollbar(hasVerticalScrollbar);
    }

    return (
        <>
            <Router>
                <Switch>
                    <Route path="/">
                        <Router>
                            <Switch>
                                <Route path={RouteNames.ROOT}><Home/></Route>
                                <Route path={RouteNames.HOME}><Home/></Route>
                            </Switch>
                        </Router>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
