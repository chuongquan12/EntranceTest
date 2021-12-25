import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'antd'
import { classNameComponents } from '../../../../constants/className'

import './AvatarTable.scss'

AvatarTable.propTypes = {
    src: PropTypes.string,
    element: PropTypes.object,
}

AvatarTable.defaultProps = {
    src: '',
    element: null,
}

function AvatarTable({ src }) {
    return <Image src={src} className={`${classNameComponents.avatar}`} />
}

export default AvatarTable
