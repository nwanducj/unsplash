import { $axios } from '@/static/api'

// 3IKN24RoRpwQTZw01uOAtVZsNMvwCaoh25 - okysNdws
class Photo {
    getPhoto(photo_id) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.get(`/photos/${photo_id}`)
                resolve(response.data)
            }
            catch (error) {
                reject(error)
            }
        })
    }
    getPhotos(page = 1, per_page = 8) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.get(`/photos?page=${page}&per_page=${per_page}`)
                resolve(response.data)
            }
            catch (error) {
                reject(error)
            }
        })
    }
    searchPhotos(query, page = 1, per_page = 8) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $axios.get(`search/photos?query=${query}&page=${page}&per_page=${per_page}`)
                resolve(response.data.results)
            }
            catch (error) {
                reject(error)
            }
        })
    }
}

const PhotoController = new Photo()

export { PhotoController }
