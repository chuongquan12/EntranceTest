import { Col, Row } from 'antd'
import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Header } from '../../components/index'

import DetailPage from './pages/DetailPage'
import ListPage from './pages/ListPage'

function Employee(props) {
    const match = useRouteMatch()

    return (
        <Row>
            <Col xs={24}>
                <Header />
                <Row>
                    <Col xs={24}>
                        <Switch>
                            <Redirect exact from={`${match.url}`} to={`${match.url}/list`} />
                            <Route path={`${match.url}/list`} component={ListPage} />
                            <Route path={`${match.url}/:id`} component={DetailPage} />
                        </Switch>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Employee
