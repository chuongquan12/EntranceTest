import React from 'react'
import PropTypes from 'prop-types'

import './Detail.scss'
import { Col, Form, Input, Row } from 'antd'
import { classNameComponents } from '../../../../constants/className'
import { textDetail } from '../../../../constants/content'

Detail.propTypes = {
    data: PropTypes.object,
}

Detail.defaultProps = {
    data: null,
}

const className = classNameComponents.classDetailEmployee
const text = textDetail

function Detail({ data }) {
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
                                <Form.Item label={'First Name'} className={`${className}__label`}>
                                    <Input
                                        value={data.detail.firstName}
                                        className={`${className}__text`}
                                        bordered={false}
                                        disabled
                                    />
                                </Form.Item>

                                <Form.Item label={'Last Name'} className={`${className}__label`}>
                                    <Input
                                        value={data.detail.lastName}
                                        className={`${className}__text`}
                                        bordered={false}
                                        disabled
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={8}>
                                <Form.Item label={'Email'} className={`${className}__label`}>
                                    <Input
                                        value={data.detail.email}
                                        className={`${className}__text`}
                                        bordered={false}
                                        disabled
                                    />
                                </Form.Item>

                                <Form.Item label={'Phone'} className={`${className}__label`}>
                                    <Input
                                        value={data.detail.phone}
                                        className={`${className}__text`}
                                        bordered={false}
                                        disabled
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={8}>
                                <Form.Item label={'Department'} className={`${className}__label`}>
                                    <Input
                                        value={data.detail.department}
                                        className={`${className}__text`}
                                        bordered={false}
                                        disabled
                                    />
                                </Form.Item>

                                <Form.Item label={'Position'} className={`${className}__label`}>
                                    <Input
                                        value={data.detail.position}
                                        className={`${className}__text`}
                                        bordered={false}
                                        disabled
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

export default Detail
