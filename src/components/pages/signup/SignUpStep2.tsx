import ButterMonster from '@/components/images/monsters/ButterMonster'
import SignUpFormStep2 from './SignUpFormStep2'
import SignUpFormStep2 from './SignUpFormStep2'

export default function SignUpStep2() {
    return (
        <div className="w-full " style={{ height: 'calc(100svh - 60px)' }}>
            <div className="w-full h-[15%]  flex flex-col justify-end pb-5 px-10 relative overflow-x-clip ">
                <div className="w-1/2 h-5/6  absolute -top-10 -right-20 ">
                    <ButterMonster />
                </div>
                <p className=" font-Pretendard text-[28px] sm:text-[25px] md:text-[30px] font-extrabold">SIGNUP</p>
                <p className=" font-Pretendard text-[13px] sm:text-[12px] md:text-[15px] text-[#646464]">
                    나의 취미를 찾기 위한 여행을 시작합니다.
                </p>
            </div>
            <SignUpFormStep2 />
        </div>
    )
}
