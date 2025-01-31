'use client'
import React, { useEffect } from 'react'

interface SliderModalProps {
    children: React.ReactNode
    isModalOpen: boolean
    onChangeModal: () => void
    backgroundClose: boolean
    bottom?: boolean
}

export default function SliderModal({
    children,
    isModalOpen,
    onChangeModal,
    backgroundClose,
    bottom,
}: SliderModalProps) {
    // 모달 오픈시 body 스크롤 막기
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isModalOpen])

    return (
        <>
            <div
                onClick={backgroundClose ? onChangeModal : () => {}}
                className={`
                    fixed top-0 left-0  z-[200]
                    w-screen h-svh
                    transition-all
                    ${isModalOpen ? '' : 'hidden'}`}
            ></div>
            <div
                style={{
                    transform: isModalOpen ? 'translateY(0)' : 'translateY(100%)',
                    transition: 'transform 0.3s ease-out',
                }}
                className={`
                    ${bottom ? `bottom-[80px]` : 'bottom-0'}
                    fixed right-0 left-0 z-[300]
                    rounded-t-2xl w-screen 
                    bg-white
                    pb-8
                    flex flex-col justify-center items-center
                    ${isModalOpen ? 'drop-shadow-[0_-10px_20px_rgba(0,0,0,0.2)]' : ''}
                `}
            >
                <div className="w-full py-3 flex justify-center">
                    <svg width="40" height="4" viewBox="0 0 40 4" fill="none">
                        <rect width="40" height="4" rx="2" fill="#E5E5E5" />
                    </svg>
                </div>
                {children}
            </div>
        </>
    )
}
