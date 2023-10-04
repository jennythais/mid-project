import axiosIntance from "../utils/axiosInstance"

export const questionService = {
    getQuestion(query=""){
        return axiosIntance.get(`/questions${query}`)
    },
    getQuestionId(id=""){
        return axiosIntance.get(`/questions${id}`)
    }
}