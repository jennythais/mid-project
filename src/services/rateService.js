import axiosIntance from "../utils/axiosInstance"

export const rateService = {
    getRate(query = ""){
        return axiosIntance.get(`/rates${query}`)
    },
    getRateSlug(slug = ""){
        return axiosIntance.get(`/rates${slug}`)
    }
}