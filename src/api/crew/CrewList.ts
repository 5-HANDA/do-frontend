'use server'
import { useGetServerToken } from '@/actions/useGetServerToken'

export async function getCrewList() {
    const auth = await useGetServerToken()
    const response = await fetch(`${process.env.BASE_URL}/crew-service/v1/users/crew/list/profile`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${auth.token}`,
        },
    })
    const data = await response.json()

    return data.data
}
