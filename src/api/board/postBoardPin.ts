'use server'
import { useGetServerToken } from '@/actions/useGetServerToken'
import { error } from 'console'
import { redirect } from 'next/navigation'

export async function postBoardPin(boardId: string) {
    const auth = await useGetServerToken()
    const response = await fetch(
        `${process.env.BASE_URL}/board-service/v1/users/crew/board-interaction/${boardId}/pin`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${auth.token}`,
            },
        },
    )
    const data = await response.json()
    if (data.isSuccess) {
        redirect('/boardlist')
    } else {
        console.log('Board delete response:', error)
    }
    return data
}
