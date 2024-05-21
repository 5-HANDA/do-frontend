import BasicNextButton from '@/components/common/BasicNextButton'
import ProgressBar from '@/components/common/ProgressBar'
import ButterMonster from '@/components/images/monsters/ButterMonster'
import SignUpFormStep2 from './SignUpFormStep2'

export default function SignUpStep2() {
    return (
        <div className="w-full " style={{ height: 'calc(100vh - 60px)' }}>
            <div className="w-full h-1/6 flex flex-col justify-end pb-5 px-10 relative overflow-x-clip ">
                <div className="w-1/2 h-5/6  absolute -top-10 -right-20 ">
                    <ButterMonster />
                </div>
                <p className=" font-Pretendard text-[28px] sm:text-[25px] md:text-[30px] font-extrabold">SIGNUP</p>
                <p className=" font-Pretendard text-[13px] sm:text-[12px] md:text-[15px] text-[#646464]">
                    나의 취미를 찾기 위한 여행을 시작합니다.
                </p>
            </div>
            <div className="w-full h-3/6 px-10">
                <SignUpFormStep2 />
            </div>
            <div className="w-full h-2/6 px-10 flex flex-col justify-around items-center">
                <BasicNextButton path="/signup?step=3" text="NEXT" />
                <div className="w-5/6 h-auto">
                    <ProgressBar step={1} total={5} />
                </div>
            </div>
        </div>
    )
}
