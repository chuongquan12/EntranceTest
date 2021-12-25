import React from 'react'
import PropTypes from 'prop-types'
import './ListEmployee.scss'
import { Col, Row, Table } from 'antd'
import { textListEmployee } from '../../../../constants/content'
import AvatarTable from '../AvatarTable'

const { Column } = Table

ListEmployee.propTypes = {
    isSelectRow: PropTypes.bool,
    selectedRow: PropTypes.func,
}

ListEmployee.defaultProps = {
    isSelectRow: false,
    selectedRow: null,
}

const columns = textListEmployee.columns

function ListEmployee({ isSelectRow, dataSource, onFocusRow, selectedRow }) {
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => selectedRow(selectedRows),
    }
    return (
        <Row>
            <Col xs={24}>
                <Table
                    rowSelection={
                        isSelectRow
                            ? {
                                  type: 'checkbox',
                                  ...rowSelection,
                              }
                            : false
                    }
                    onRow={(record) => {
                        return {
                            onClick: () => {
                                onFocusRow(record.id)
                            },
                        }
                    }}
                    pagination={false}
                    dataSource={dataSource}
                    scroll={{ y: 475 }}
                >
                    <Column
                        title="Image"
                        key="urlImage"
                        width={60}
                        render={(record) =>
                            AvatarTable({
                                src: record.urlImage,
                            })
                        }
                    />
                    {columns.map((value) => {
                        return <Column {...value} />
                    })}
                </Table>
            </Col>
        </Row>
    )
}

export default ListEmployee
