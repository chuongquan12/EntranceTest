import {
    DownOutlined,
    MenuOutlined,
    FilterOutlined,
    MoreOutlined,
    PlusOutlined,
} from '@ant-design/icons'

export const textHeader = {
    iconMenu: <MenuOutlined />,
    iconDownOutlined: <DownOutlined />,
    textMenu: 'PENSKE',

    textLogo: 'NORTH STAR MOTORS',

    urlAvatarUser:
        'https://lh4.googleusercontent.com/-7JrlR0R9CBc/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcZ9mYxL2PvPrs_8FyCt23gmNAkMnQ/mo/photo.jpg64',
    nameUser: 'Henry Candice',
}

export const textNavbar = {
    titleHeader: 'Employees',
    iconFilter: <FilterOutlined />,
    iconDropdown: <MoreOutlined />,

    listExtra: [
        { value: 'select', text: 'Select Columns' },
        { value: 'download', text: 'Download Employees' },
        { value: 'import', text: 'Import Employees' },
        { value: 'delete', text: 'Delete Employees' },
    ],
}

export const textFilter = {
    titleHeader: 'Filters',
    labelName: 'Name',
    placeholderName: 'Employee Name',
    labelEmployeeId: 'Employee ID',
    listOptionEmployeeId: [{ value: 'all', text: 'ID' }],
    labelDepartment: 'Department',
    listOptionDepartment: [{ value: 'all', text: 'choice' }],
    labelMore: 'More',
    listOptionMore: [{ value: 'all', text: 'choice' }],
}

export const textListEmployee = {
    columns: [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: 150,
        },
        {
            title: 'Employee ID',
            dataIndex: 'employeeId',
            key: 'employeeId',
            width: 75,
        },
        {
            title: 'Position',
            dataIndex: 'position',
            key: 'position',
            width: 100,
        },
        {
            title: 'Department',
            dataIndex: 'department',
            key: 'department',
            width: 75,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: 150,
        },
    ],
}

export const textBtnAdd = {
    icon: <PlusOutlined />,
}

export const textMain = {
    textImg: 'Employee Image',
    textInspections: 'Inspections Completed',
    textTotalInspections: 'Total Inspections',
    textOpenIssues: 'Open Issues',
    textLastLogin: 'Last Login',
    textSites: 'Sites',

    icon: <PlusOutlined />,
}

export const textDetail = {
    titleHeader: 'Details',
}

export const textCredentials = {
    titleHeader: 'Credentials',
}

export const textInspections = {
    titleHeader: 'Employee Inspections',

    textBtn1: 'Inspections',
    textBtn2: 'Issues',

    columns: [
        {
            title: '#',
            dataIndex: 'id',
            key: 'id',
            width: 75,
        },
        {
            title: 'Check List',
            dataIndex: 'checkList',
            key: 'checkList',
            width: 150,
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            width: 150,
        },
        {
            title: 'Duration',
            dataIndex: 'duration',
            key: 'duration',
            width: 75,
        },
    ],
}

export const textModalConfirm = {
    titleHeader: 'Delete Employee',

    textDesc: 'Do you want to delete the employees?',

    textBtnCancel: 'Cancel',
    textBtnConfirm: 'Confirm',
}
