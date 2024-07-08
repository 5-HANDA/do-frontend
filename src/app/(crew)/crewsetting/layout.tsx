import PageHeader from '@/components/common/PageHeader'

export default function CrewSettingLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <PageHeader />
            {children}
        </>
    )
}
