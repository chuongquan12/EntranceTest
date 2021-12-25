import axiosClient from './axiosClient'

const departmentApi = {
    getAllDepartment: () => {
        const url = `/department`
        return axiosClient.get(url)
    },
}
export default departmentApi
