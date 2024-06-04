import React from 'react'
import Link from 'next/link'

import HOBBINGLogo from '@/components/images/HOBBINGLogo'
import RunMonster from '@/components/images/monsters/RunMonster'
import LoginForm from './LoginForm'
import BasicNextButton from '@/components/common/BasicNextButton'
import GoogleLogin from './GoogleLogin'

export default function MainLogin() {
    return (
        <>
            <div className="w-full h-[35svh] flex justify-center items-end">
                <div className="w-1/2 h-1/2 mb-10">
                    <HOBBINGLogo />
                </div>
            </div>
            <div className="w-full h-[45svh] flex flex-col justify-start items-center space-y-4">
                <LoginForm />
                <BasicNextButton path="/" text="로그인" theme="red" />
                <GoogleLogin />
                <div className="w-full h-[10%] flex flex-row justify-evenly">
                    <Link href="/account" className="w-[40%] flex justify-center items-center">
                        <p className="font-Pretendard text-[15px] text-[#646464]">ID/PW 찾기</p>
                    </Link>
                    <Link href="/signup?step=1" className="w-[40%] flex justify-center items-center">
                        <p className="font-Pretendard text-[15px] text-hobbing-red underline underline-offset-4 font-bold">
                            회원가입
                        </p>
                    </Link>
                </div>
            </div>
            <div className="w-full h-[20svh] overflow-hidden flex justify-center relative">
                <div className="w-full h-full absolute -bottom-10">
                    <RunMonster />
                </div>
            </div>
        </>
    )
}
