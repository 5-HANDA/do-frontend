import MainHeader from '@/components/layouts/MainHeader'
import MainNavigation from '@/components/layouts/MainNavigation'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <MainHeader title="게시판" />
            {children}
            <MainNavigation />
        </>
    )
}
