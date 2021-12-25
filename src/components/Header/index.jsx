import React from 'react'
import { Col, Dropdown, Empty, Menu, Row, Select } from 'antd'

import './Header.scss'
import { classNameComponents } from '../../constants/className'
import { textHeader } from '../../constants/content'
import { NavLink } from 'react-router-dom'

const className = classNameComponents.classHeader
const text = textHeader

const menu = (
    <Menu>
        <Empty />
    </Menu>
)
const { Option } = Select

function Header(props) {
    return (
        <Row align="middle" className={`${className}`}>
            <Col xs={8} className={`${className}__menu`}>
                <Row justify="start">
                    <NavLink to={'/employee'}>
                        <span className={`${className}__menu--icon`}>{text.iconMenu}</span>
                        <span className={`${className}__menu--text`}>{text.textMenu}</span>
                    </NavLink>
                </Row>
            </Col>
            <Col xs={8} className={`${className}__select`}>
                <Row justify="center">
                    <Select defaultValue={text.textLogo} style={{ width: 300 }} bordered={false}>
                        <Option value={text.textLogo}>
                            <span className={`${className}__select--text`}>{text.textLogo}</span>
                        </Option>
                    </Select>
                </Row>
            </Col>
            <Col xs={8} className={`${className}__user`}>
                <Row justify="end">
                    <Dropdown overlay={menu} placement="bottomRight" arrow>
                        <span>
                            <img
                                src={text.urlAvatarUser}
                                alt={`Avatar ${text.nameUser}`}
                                className={`${className}__user--img`}
                            />
                            <span className={`${className}__user--name`}> {text.nameUser} </span>
                            {text.iconDownOutlined}
                        </span>
                    </Dropdown>
                </Row>
            </Col>
        </Row>
    )
}

export default Header
