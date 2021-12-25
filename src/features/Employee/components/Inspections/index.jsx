import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'

import './Inspections.scss'
import { classNameComponents } from '../../../../constants/className'
import { Col, Form, Input, Row, Table } from 'antd'
import { textInspections } from '../../../../constants/content'

Inspections.propTypes = {
    data: PropTypes.object,
}

Inspections.defaultProps = {
    data: null,
}

const className = classNameComponents.classDetailInspections
const text = textInspections

function Inspections({ data }) {
    const [dataSource, setDataSource] = useState([])
    useEffect(() => {
        data && setDataSource(formatDataSource(data.inspections))
    }, [data])

    return (
        <>
            {data && (
                <Row className={`${className}`}>
                    <Col xs={24}>
                        <Row align="middle" justify="start" className={`${className}__header`}>
                            <span className={`${className}__header--text`}>{text.titleHeader}</span>
                        </Row>
                        <Row align="middle" justify="start" className={`${className}__listBtn`}>
                            <span className={`${className}__listBtn--btn active`}>
                                {text.textBtn1}
                            </span>
                            <span className={`${className}__listBtn--btn`}>{text.textBtn2}</span>
                        </Row>
                        <Row align="middle" justify="center" className={`${className}__list`}>
                            {dataSource.length > 0 && (
                                <Table
                                    columns={text.columns}
                                    pagination={false}
                                    dataSource={dataSource}
                                    scroll={{ y: 475 }}
                                />
                            )}
                        </Row>
                    </Col>
                </Row>
            )}
        </>
    )
}

const formatDataSource = (dataSource) => {
    const response = []

    dataSource.length > 0 &&
        dataSource.map((value) => {
            const item = {
                id: value.id,
                checkList: value.checkList,
                date: moment(value.date).format('lll'),
                duration: moment(value.duration).format('LT'),
            }
            return response.push(item)
        })

    return response
}

export default Inspections
