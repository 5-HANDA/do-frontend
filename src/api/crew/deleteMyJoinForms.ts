'use server'

import { useGetServerToken } from '@/actions/useGetServerToken'
import { revalidateTag } from 'next/cache'

export default async function deleteMyJoinForms({ joinFormId }: { joinFormId: string }) {
    const auth = await useGetServerToken()

    const res = await fetch(`${process.env.BASE_URL}/crew-service/v1/users/crew/cancellation/join/${joinFormId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `${auth.token}`,
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json()
    if (data.isSuccess) {
        revalidateTag('myJoinForms')
    }
    return data.data
}
