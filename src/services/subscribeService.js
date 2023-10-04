import axiosIntance from "../utils/axiosInstance"

export const subscribeService = {
    subcribe(payload = {}){
        return axiosIntance.post(`/subscribes`, payload)
    }
}