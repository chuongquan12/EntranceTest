import { Col, Row } from 'antd'
import React from 'react'
import Header from '../../../../components/Header'
import NavBar from '../../../../components/NavBar'

function DetailPage(props) {
    return (
        <Row>
            <Col xs={24}>
                <Row>
                    <Header />
                </Row>
                <Row>
                    <NavBar />
                </Row>
            </Col>
            <div>DetailPage</div>
        </Row>
    )
}

export default DetailPage
