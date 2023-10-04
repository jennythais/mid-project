import axiosIntance from "../utils/axiosInstance";

export const orderService = {
  getPaymentHistories() {
    return axiosIntance.get(`/orders/me`);
  },
  getCourseHistories() {
    return axiosIntance.get(`/orders/courses/me`);
  },
  orderCourse(payload = {}) {
    return axiosIntance.post(`/orders`, payload);
  },
};
