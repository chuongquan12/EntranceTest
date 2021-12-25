import { Col, Row } from 'antd'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import employeeApi from '../../../../api/employeeApi'
import { setDetailEmployee } from '../../../../app/employeeSlice'

import NavBar from '../../../../components/NavBar'
import Detail from '../../components/Detail'
import Main from '../../components/Main'
import Credentials from '../../components/Credentials'
import Inspections from '../../components/Inspections'

function DetailPage(props) {
    const match = useRouteMatch()
    const dispatch = useDispatch()

    const employee = useSelector((state) => state.employee)

    const getByIdEmployee = async (id) => {
        try {
            const response = await employeeApi.getByIdEmployee(id)
            dispatch(setDetailEmployee(response))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getByIdEmployee(match.params.id)
    }, [match.params.id])

    return (
        <>
            {employee.detail && (
                <Row>
                    <Col xs={24}>
                        <NavBar
                            breadcrumb={
                                employee.detail &&
                                `> ${employee.detail.detail.firstName} ${employee.detail.detail.lastName}`
                            }
                            onClickExtra={() => console.log('null')}
                            onClickFilter={() => console.log('null')}
                        />

                        <Row>
                            <Col xs={12}>
                                <Main data={employee.detail} />
                            </Col>
                            <Col xs={12}>
                                <Detail data={employee.detail} />
                                <Credentials data={employee.detail} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24}>
                                <Inspections data={employee.detail} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            )}
        </>
    )
}

export default DetailPage
