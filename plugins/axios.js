import { initializeAxios } from '@/static/api'

export default function ({
    $axios
}) {

    $axios.onRequest((config) => {
        config.headers.Authorization = 'Client-ID 3IKN24RoRpwQTZw01uOAtVZsNMvwCaoh25-okysNdws'
    })
    initializeAxios($axios)
}
