import React from 'react'
import { classNameComponents } from '../../../../constants/className'
import { textBtnAdd } from '../../../../constants/content'

import './BtnAddEmployee.scss'

const icon = textBtnAdd.icon
const className = classNameComponents.btnAdd

function BtnAddEmployee(props) {
    return <div className={`${className}`}>{icon}</div>
}

export default BtnAddEmployee
