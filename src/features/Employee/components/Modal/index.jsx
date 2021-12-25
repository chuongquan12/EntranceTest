import React from 'react'
import PropTypes from 'prop-types'
import { Col, Modal, Row } from 'antd'

import './Modal.scss'
import { classNameComponents } from '../../../../constants/className'
import { textModalConfirm } from '../../../../constants/content'

ModalConfirm.propTypes = {
    visible: PropTypes.bool,
    width: PropTypes.number,
    onClose: PropTypes.func,
    data: PropTypes.array,
    handleModal: PropTypes.func,
}

ModalConfirm.defaultProps = {
    visible: false,
    width: 0,
    onClose: null,
    data: [],
    handleModal: null,
}

const className = classNameComponents.modalConfirm
const text = textModalConfirm

function ModalConfirm({ visible, width, onClose, data, handleModal }) {
    return (
        <Modal
            className={`${className}`}
            visible={visible}
            width={width}
            footer={null}
            onCancel={onClose}
        >
            <Row>
                <Col className={`${className}__header`}>
                    <span className={`${className}__header--title`}>{text.titleHeader}</span>
                    <span className={`${className}__header--desc`}>{text.textDesc}</span>
                </Col>
                <Col xs={24} className={`${className}__body`}>
                    {data &&
                        data.length > 0 &&
                        data.map((value, index) => {
                            return (
                                <Row
                                    key={index}
                                    align="middle"
                                    className={`${className}__body--item`}
                                >
                                    <Col xs={8} className={`${className}__body--img`}>
                                        <img src={value.urlImage} alt={value.name} />
                                    </Col>
                                    <Col xs={16} className={`${className}__body--name`}>
                                        <span>{value.name}</span>
                                    </Col>
                                </Row>
                            )
                        })}
                </Col>
                <Col xs={24} className={`${className}__footer`}>
                    <Row justify="end">
                        <button
                            className={`${className}__footer--btn`}
                            onClick={() => handleModal()}
                        >
                            {text.textBtnConfirm}
                        </button>
                        <button className={`${className}__footer--btn`} onClick={() => onClose()}>
                            {text.textBtnCancel}
                        </button>
                    </Row>
                </Col>
            </Row>
        </Modal>
    )
}

export default ModalConfirm
