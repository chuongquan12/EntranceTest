import React from 'react'
import PropTypes from 'prop-types'

import './Credentials.scss'
import { Col, Form, Input, Row } from 'antd'
import { classNameComponents } from '../../../../constants/className'
import { textCredentials } from '../../../../constants/content'

Credentials.propTypes = {
    data: PropTypes.object,
}

Credentials.defaultProps = {
    data: null,
}

const className = classNameComponents.classDetailCredentials
const text = textCredentials

function Credentials({ data }) {
    return (
        <>
            {data && (
                <Row className={`${className}`}>
                    <Col xs={24}>
                        <Row align="middle" justify="start" className={`${className}__header`}>
                            <span className={`${className}__header--text`}>{text.titleHeader}</span>
                        </Row>
                        <Row>
                            <Col xs={8}>
                                <Form.Item label={'Username'} className={`${className}__label`}>
                                    <Input
                                        value={data.detail.email}
                                        className={`${className}__text`}
                                        bordered={false}
                                        disabled
                                    />
                                </Form.Item>

                                <Form.Item label={'Password'} className={`${className}__label`}>
                                    <Input
                                        type={'password'}
                                        value={data.credentials.password}
                                        className={`${className}__text`}
                                        bordered={false}
                                        disabled
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={8}>
                                <Form.Item label={'Role'} className={`${className}__label`}>
                                    <Input
                                        value={data.credentials.role}
                                        className={`${className}__text`}
                                        bordered={false}
                                        disabled
                                    />
                                </Form.Item>

                                <Form.Item label={'Site Access'} className={`${className}__label`}>
                                    <Input
                                        value={data.credentials.access}
                                        className={`${className}__text`}
                                        bordered={false}
                                        disabled
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={8}>
                                <Form.Item label={'Employee ID'} className={`${className}__label`}>
                                    <Input
                                        value={data.credentials.employeeId}
                                        className={`${className}__text`}
                                        bordered={false}
                                        disabled
                                    />
                                </Form.Item>

                                <Form.Item label={'PIN'} className={`${className}__label`}>
                                    <Input
                                        value={data.credentials.PIN}
                                        className={`${className}__text`}
                                        bordered={false}
                                        disabled
                                        type={'password'}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            )}
        </>
    )
}

export default Credentials
