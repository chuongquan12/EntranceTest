import axiosClient from './axiosClient'

const employeeApi = {
    getAllEmployee: () => {
        const url = `/employee`
        return axiosClient.get(url)
    },

    getByIdEmployee: (id) => {
        const url = `/employee/${id}`
        return axiosClient.get(url)
    },

    deleteEmployee: (id) => {
        const url = `/employee/${id}`
        return axiosClient.delete(url)
    },
}
export default employeeApi
