import React from 'react'
import PropTypes from 'prop-types'
import './Filter.scss'
import { Col, Form, Input, Row, Select } from 'antd'
import { classNameComponents } from '../../../../constants/className'
import { textFilter } from '../../../../constants/content'

const { Option } = Select

Filter.propTypes = {
    listDepartment: PropTypes.array,
}

Filter.defaultProps = {
    listDepartment: [],
}

const className = classNameComponents.classFilter
const text = textFilter

function Filter({ listDepartment, changeFilter }) {
    return (
        <Row justify="center">
            <Col xs={24} className={`${className}`}>
                <span className={`${className}__header`}>{text.titleHeader}</span>
                <Form.Item className={`${className}__label`} label={text.labelName}>
                    <Input
                        className={`${className}__input`}
                        style={{ width: 200 }}
                        placeholder={text.placeholderName}
                        bordered={false}
                    />
                </Form.Item>
                <Form.Item className={`${className}__label`} label={text.labelEmployeeId}>
                    <Select
                        defaultValue={text.listOptionEmployeeId[0].value}
                        style={{ width: 200 }}
                        bordered={false}
                        className={`${className}__select`}
                    >
                        {text.listOptionEmployeeId.length > 0 &&
                            text.listOptionEmployeeId.map((value, index) => {
                                return (
                                    <Option
                                        key={index}
                                        value={value.value}
                                        className={`${className}__select--item`}
                                    >
                                        {value.text}
                                    </Option>
                                )
                            })}
                    </Select>
                </Form.Item>
                <Form.Item className={`${className}__label`} label={text.labelDepartment}>
                    <Select
                        defaultValue={listDepartment[0].name}
                        style={{ width: 200 }}
                        bordered={false}
                        className={`${className}__select`}
                        onChange={(value) => changeFilter({ type: 'department', value: value })}
                    >
                        {listDepartment.length > 0 &&
                            listDepartment.map((value, index) => {
                                return (
                                    <Option
                                        key={index}
                                        value={value.name}
                                        className={`${className}__select--item`}
                                    >
                                        {value.name}
                                    </Option>
                                )
                            })}
                    </Select>
                </Form.Item>
                <Form.Item className={`${className}__label`} label={text.labelMore}>
                    <Select
                        defaultValue={text.listOptionMore[0].value}
                        style={{ width: 200 }}
                        bordered={false}
                        className={`${className}__select`}
                    >
                        {text.listOptionMore.length > 0 &&
                            text.listOptionMore.map((value, index) => {
                                return (
                                    <Option
                                        key={index}
                                        value={value.value}
                                        className={`${className}__select--item`}
                                    >
                                        {value.text}
                                    </Option>
                                )
                            })}
                    </Select>
                </Form.Item>
            </Col>
        </Row>
    )
}

export default Filter
