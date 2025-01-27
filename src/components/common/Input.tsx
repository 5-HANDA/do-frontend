import React, { useEffect, forwardRef, RefObject } from 'react'

interface InputProps {
    title?: string
    required?: boolean
    index?: number
    focusedIndex?: number
    id: string
    name?: string
    type: string
    placeholder: string
    value: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onFocus?: () => void
    ref?: ((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement>
    children?: React.ReactNode
    readOnly?: boolean // readOnly를 boolean으로 변경
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            title,
            required,
            index,
            focusedIndex,
            id,
            name,
            type,
            placeholder,
            value,
            onChange,
            onFocus,
            children,
            readOnly, // boolean으로 변경된 readOnly prop
        },
        ref,
    ) => {
        useEffect(() => {
            const now_utc = Date.now()
            const timeOff = new Date().getTimezoneOffset() * 60000
            const today = new Date(now_utc - timeOff).toISOString().split('T')[0]

            const birthDateElement = document.getElementById('birthDate')
            if (birthDateElement) {
                birthDateElement.setAttribute('max', today)
            }
        }, [])

        return (
            <div
                className={`w-full h-[50px] px-3 rounded-xl border-[1px] flex flex-row justify-center 
                    ${
                        index === focusedIndex
                            ? 'bg-hobbing-light-pink border-hobbing-pink'
                            : 'bg-white border-hobbing-gray'
                    }`}
            >
                <div className="w-full h-full flex flex-col justify-center">
                    {title && (
                        <label htmlFor={id} className="text-[#646464] text-[11px] font-Pretendard">
                            {title}
                            {required && <span className="text-hobbing-red"> *</span>}
                        </label>
                    )}
                    <input
                        id={id}
                        name={name} // name 속성 추가
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        onFocus={onFocus}
                        ref={ref}
                        readOnly={readOnly} // readOnly 속성을 boolean으로 설정
                        className="w-full h-auto outline-none border-none bg-transparent caret-hobbing-pink text-[13px] sm:text-[12px] md:text-[15px] font-Pretendard font-medium text-left"
                    />
                </div>
                {children}
            </div>
        )
    },
)

Input.displayName = 'Input'

export default Input
