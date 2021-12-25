import axiosClient from './axiosClient'

const departmentApi = {
    getAllDepartmentApi: () => {
        const url = `/department`
        return axiosClient.get(url)
    },
}
export default departmentApi
