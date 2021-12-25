import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import './Main.scss'
import { Col, Row } from 'antd'
import { classNameComponents } from '../../../../constants/className'
import { textMain } from '../../../../constants/content'

import Chart from '../Chart'

Main.propTypes = {
    data: PropTypes.object,
}

Main.defaultProps = {
    data: null,
}

const className = classNameComponents.classMainEmployee
const text = textMain

function Main({ data }) {
    return (
        <>
            {data && (
                <Row className={`${className}`}>
                    <Col xs={24}>
                        <Row align="middle" justify="start" className={`${className}__header`}>
                            <span className={`${className}__header--text`}>
                                {data.detail.firstName + ' ' + data.detail.lastName}
                            </span>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <span className={`${className}__text`}>{text.textImg}</span>
                                <img
                                    className={`${className}__img`}
                                    src={data.imgAvatar}
                                    alt={data.detail.firstName + ' ' + data.detail.lastName}
                                />
                                <span className={`${className}__icon`}>{text.icon}</span>
                            </Col>
                            <Col xs={18}>
                                <span className={`${className}__text`}>{text.textInspections}</span>
                                <Chart data={data.inspections} />
                            </Col>
                        </Row>
                        <Row align="middle">
                            <Col xs={6}>
                                <span className={`${className}__text`}>
                                    {text.textTotalInspections}
                                </span>
                                <span className={`${className}__text`}>
                                    {data.inspections.length}
                                </span>
                            </Col>
                            <Col xs={6}>
                                <span className={`${className}__text`}>{text.textOpenIssues}</span>
                                <span className={`${className}__text`}>{4}</span>
                            </Col>
                            <Col xs={6}>
                                <span className={`${className}__text`}>{text.textLastLogin}</span>
                                <span className={`${className}__text`}>
                                    {moment(data.lastLogin).format('l')}
                                </span>
                            </Col>
                            <Col xs={6}>
                                <span className={`${className}__text`}>{text.textSites}</span>
                                <span className={`${className}__text`}>{data.sites}</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            )}
        </>
    )
}

export default Main
