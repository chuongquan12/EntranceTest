import { Col, Row } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import { Redirect, Route, Switch } from 'react-router-dom'
import employeeApi from '../../api/emloyeeApi'
import { setListEmployee } from '../../app/employeeSlice'
import Header from '../../components/Header'

import DetailPage from './pages/DetailPage'
import ListPage from './pages/ListPage'

function Employee(props) {
    const match = useRouteMatch()
    const dispatch = useDispatch()

    const getAllEmployee = async () => {
        try {
            const response = await employeeApi.getAllEmployee()
            dispatch(setListEmployee(response))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllEmployee()
    }, [match.url])

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
