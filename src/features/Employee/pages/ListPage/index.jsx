import { Col, notification, Row } from 'antd'

import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import departmentApi from '../../../../api/departmentApi'
import employeeApi from '../../../../api/employeeApi'
import { setListDepartment } from '../../../../app/departmentSlice'
import { setListEmployees } from '../../../../app/employeeSlice'

import { NavBar } from '../../../../components/index'
import { BtnAddEmployee, Filter, ListEmployee } from '../../components/index'
import ModalConfirm from '../../components/Modal'

function ListPage(props) {
    const dispatch = useDispatch()
    const history = useHistory()

    const employee = useSelector((state) => state.employee)
    const department = useSelector((state) => state.department)

    const [dataSource, setDataSource] = useState(employee.list)
    const [listEmployee, setListEmployee] = useState(employee.list)
    const [selectedRow, setSelectedRow] = useState([])
    const [visibleFilter, setVisibleFilter] = useState(false)
    const [visibleModal, setVisibleModal] = useState(false)
    const [isSelectRow, setIsSelectRow] = useState(false)

    const getAllEmployee = async () => {
        try {
            const response = await employeeApi.getAllEmployee()
            setDataSource(formatDataSource(response))
            setListEmployee(formatDataSource(response))
            dispatch(setListEmployees(response))
        } catch (error) {
            console.log(error)
        }
    }

    const deleteEmployee = async (listDelete) => {
        if (listDelete.length <= 0) return false

        listDelete.map(async (value) => {
            try {
                const response = await employeeApi.deleteEmployee(value.id)
                response && getAllEmployee()
            } catch (error) {
                console.log(error)
            }
        })
    }

    const getAllDepartment = async () => {
        try {
            const listDepartment = [{ name: 'choice', id: '0' }]
            const response = await departmentApi.getAllDepartment()
            const result = [...listDepartment, ...response]
            dispatch(setListDepartment(result))
        } catch (error) {
            console.log(error)
        }
    }

    const handleExtra = (value) => {
        switch (value) {
            case 'select':
                setIsSelectRow(!isSelectRow)
                break
            case 'download':
                setIsSelectRow(false)
                break
            case 'delete':
                selectedRow.length > 0 ? setVisibleModal(true) : openNotification()
                break
            default:
                break
        }
    }

    const handleModalConfirm = () => {
        setVisibleModal(false)
        setIsSelectRow(false)

        deleteEmployee(selectedRow)
        setSelectedRow([])
        window.scrollTo(0, 0)
    }

    const changeFilter = (value) => {
        let response = [...listEmployee]
        switch (value.type) {
            case 'department':
                if (value.value !== 'choice')
                    response = listEmployee.filter((item) => item.department === value.value)
                break

            default:
                break
        }
        setIsSelectRow(false)
        setDataSource(response)
    }

    const onFocusRow = (value) => {
        history.push(`/employee/${value}`)
    }

    useEffect(() => {
        getAllDepartment()
        getAllEmployee()
    }, [selectedRow])

    return (
        <Row>
            <Col xs={24}>
                <NavBar
                    breadcrumb={`${dataSource.length} Employees`}
                    onClickExtra={handleExtra}
                    onClickFilter={() => setVisibleFilter(!visibleFilter)}
                    selectedRow={selectedRow}
                />
                <Row>
                    {visibleFilter && (
                        <Col xs={4}>
                            <Filter listDepartment={department.list} changeFilter={changeFilter} />
                        </Col>
                    )}

                    <Col xs={visibleFilter ? 20 : 24}>
                        <ListEmployee
                            dataSource={dataSource}
                            isSelectRow={isSelectRow}
                            onFocusRow={onFocusRow}
                            selectedRow={(value) => setSelectedRow(value)}
                        />
                    </Col>
                </Row>
                <BtnAddEmployee />

                <ModalConfirm
                    visible={visibleModal}
                    onClose={() => setVisibleModal(!visibleModal)}
                    width={500}
                    data={selectedRow}
                    handleModal={handleModalConfirm}
                />
            </Col>
        </Row>
    )
}

const formatDataSource = (dataSource) => {
    const response = []

    dataSource.length > 0 &&
        dataSource.map((value, index) => {
            const item = {
                key: index,
                id: value.id,
                urlImage: value.imgAvatar,
                name: value.detail.firstName + ' ' + value.detail.lastName,
                employeeId: value.credentials.employeeId,
                position: value.detail.position,
                department: value.detail.department,
                email: value.detail.email,
            }
            return response.push(item)
        })

    return response
}

const openNotification = () => {
    notification['warning']({
        message: 'Something wrong !!!',
        description: 'Please select the employee to delete',
    })
}

export default ListPage
