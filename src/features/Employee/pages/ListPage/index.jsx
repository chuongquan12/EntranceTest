import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import departmentApi from '../../../../api/departmentApi'
import { setListDepartment } from '../../../../app/departmentSlice'

import NavBar from '../../../../components/NavBar'
import BtnAddEmployee from '../../components/BtnAddEmployee'
import Filter from '../../components/Filter'
import ListEmployee from '../../components/ListEmployee'

function ListPage(props) {
    const dispatch = useDispatch()
    const history = useHistory()

    const employee = useSelector((state) => state.employee)
    const department = useSelector((state) => state.department)

    const [dataSource, setDataSource] = useState(employee.list)
    const [listEmployee, setListEmployee] = useState(employee.list)
    const [visibleFilter, setVisibleFilter] = useState(false)
    const [isSelectRow, setIsSelectRow] = useState(false)

    const handleExtra = (value) => {
        switch (value) {
            case 'select':
                setIsSelectRow(!isSelectRow)
                break

            default:
                break
        }
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

        setDataSource(response)
    }

    const onFocusRow = (value) => {
        history.push(`/employee/${value}`)
    }

    useEffect(() => {
        getAllDepartment()
        setDataSource(formatDataSource(employee.list))
        setListEmployee(formatDataSource(employee.list))
    }, [employee])

    return (
        <Row>
            <Col xs={24}>
                <NavBar
                    breadcrumb={`${dataSource.length} Employees`}
                    onClickExtra={handleExtra}
                    onClickFilter={() => setVisibleFilter(!visibleFilter)}
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
                        />
                    </Col>
                </Row>
                <BtnAddEmployee />
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

export default ListPage
