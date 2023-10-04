import axiosIntance from "../utils/axiosInstance";
import tokenMethod from "../utils/token";

export const authService = {
  login(payload = {}) {
    return axiosIntance.post(`/customer/login`, payload);
  },
  register(payload = {}) {
    return axiosIntance.post(`/customer/register`, payload);
  },
  getProfile() {
    return axiosIntance.get(`/customer/profiles`, {
      headers: {
        Authorization: `Bearer ${tokenMethod.get()?.accessToken}`,
      },
    });
  },
  updateProfile(payload = {}) {
    return axiosIntance.put(`/customer/profiles`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
