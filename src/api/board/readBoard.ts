'use server'
import { useGetServerToken } from '@/actions/useGetServerToken'

export async function ReadBoard(boardId: string) {
    const auth = await useGetServerToken()
    const response = await fetch(`${process.env.BASE_URL}/read-only-service/v1/users/crew/board/${boardId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${auth.token}`,
        },
    })
    const data = await response.json()
    if (!data.isSuccess) {
        console.error('게시글 상세 불러오는데 실패했습니다.', data.message)
    }
    return data.data
}
