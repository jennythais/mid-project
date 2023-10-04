import axiosIntance from "../utils/axiosInstance"

export const galleryService = {
    getGallery(query=""){
        return axiosIntance.get(`/galleries${query}`)
    },
    getGallerySlug(slug=""){
        return axiosIntance.get(`/galleries${slug}`)
    }
}