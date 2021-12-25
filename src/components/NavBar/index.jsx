import React from 'react'
import PropTypes from 'prop-types'

import './NavBar.scss'
import { textNavbar } from '../../constants/content'
import { classNameComponents } from '../../constants/className'
import { Col, Dropdown, Menu, Row } from 'antd'

NavBar.propTypes = {
    onClickExtra: PropTypes.func,
    onClickFilter: PropTypes.func,
    breadcrumb: PropTypes.string,
}

NavBar.defaultProps = {
    onClickExtra: null,
    onClickFilter: null,
    breadcrumb: '',
}

const className = classNameComponents.classNavbar
const text = textNavbar

function NavBar({ onClickExtra, onClickFilter, breadcrumb }) {
    const menu = (
        <Menu>
            {text.listExtra.length > 0 &&
                text.listExtra.map((value, index) => {
                    return (
                        <Menu.Item key={index}>
                            <span onClick={() => onClickExtra(value.value)}>{value.text}</span>
                        </Menu.Item>
                    )
                })}
        </Menu>
    )

    return (
        <Row className={`${className}`} align="middle" justify="space-between">
            <Col xs={8} className={`${className}__breadcrumb`}>
                <Row justify="start" align="middle">
                    <span className={`${className}__breadcrumb--title`}>{text.titleHeader}</span>
                    <span className={`${className}__breadcrumb--desc`}>{breadcrumb}</span>
                </Row>
            </Col>
            <Col xs={8} className={`${className}__action`}>
                <Row justify="end">
                    <button
                        type="button"
                        className={`${className}__action--icon`}
                        onClick={() => onClickFilter()}
                    >
                        {text.iconFilter}
                    </button>
                    <Dropdown overlay={menu} placement="bottomRight" arrow trigger={['click']}>
                        <button type="button" className={`${className}__action--icon`}>
                            {text.iconDropdown}
                        </button>
                    </Dropdown>
                </Row>
            </Col>
        </Row>
    )
}

export default NavBar
