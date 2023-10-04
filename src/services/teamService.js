import axiosIntance from "../utils/axiosInstance"

export const teamService = {
    getTeam(query=""){
        return axiosIntance.get(`/teams${query}`)
    }
}