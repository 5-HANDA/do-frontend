'use server'
import { useGetServerToken } from '@/actions/useGetServerToken'

export async function GetBoardPin(crewId: string) {
    const auth = await useGetServerToken()
    const response = await fetch(`${process.env.BASE_URL}/read-only-service/v1/users/crew/board/${crewId}/pinned`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${auth.token}`,
        },
    })
    const data = await response.json()
    if (!data.isSuccess) {
        console.error('고정 게시글을 불러오는데 실패했습니다.')
    }
    return data.data
}
