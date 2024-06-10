'use client'
import Script from 'next/script'

function KakaoScript() {
    const onLoad = () => {
        if (window.Kakao) {
            if (!window.Kakao.isInitialized()) {
                window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY)
            }
        } else {
            console.error('Kakao SDK 로드 실패')
        }
    }
    return (
        <>
            <Script src="https://developers.kakao.com/sdk/js/kakao.js" async onLoad={onLoad} />
            <Script
                type="text/javascript"
                src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_API_KEY}&autoload=false&libraries=services`}
            />
        </>
    )
}

export default KakaoScript
