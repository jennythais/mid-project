import axiosIntance from "../utils/axiosInstance";

export const courseService = {
  getCourse(query = "") {
    return axiosIntance.get(`/courses${query}`);
  },
  getCourseSlug(slug = "") {
    return axiosIntance.get(`/courses/${slug}`);
  },
};
