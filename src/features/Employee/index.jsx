import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { Redirect, Route, Switch } from 'react-router-dom'
import DetailPage from './pages/DetailPage'
import ListPage from './pages/ListPage'

function Employee(props) {
    const match = useRouteMatch()

    return (
        <Switch>
            <Redirect exact from={`${match.url}`} to={`${match.url}/list`} />
            <Route path={`${match.url}/list`} component={ListPage} />
            <Route path={`${match.url}/:id`} component={DetailPage} />
        </Switch>
    )
}

export default Employee
