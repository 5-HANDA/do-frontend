import { redirect } from 'next/navigation'

import { useGetServerToken } from '@/actions/useGetServerToken'

import getBaseRegion from '@/api/crew/getBaseRegion'
import getHobbies from '@/api/survey/getHobbies'
import getNewCrew from '@/api/crew/getNewCrew'

import HomeSection1 from '@/components/pages/home/HomeSection1'
import HomeSection2 from '@/components/pages/home/HomeSection2'

export default async function HomePage() {
    const auth = await useGetServerToken()
    const baseRegion = await getBaseRegion()
    const hobbies = await getHobbies()
    const newCrew = await getNewCrew(hobbies[0].hobbyId, baseRegion.regionId)

    if (auth) {
        if (!baseRegion) {
            redirect('/mypage/region/initial')
        }
        if (!hobbies) {
            redirect('/survey')
        }
        return (
            <main className="w-full h-[calc(100dvh-140px)] relative overflow-y-scroll scrollbar-hide bg-hobbing-bg-gray">
                <HomeSection1 />
                <HomeSection2 hobbies={hobbies} baseRegion={baseRegion} newCrew={newCrew.data} />
                {/* <section className="absolute top-[55dvh] drop-shadow-[0_-10px_20px_rgba(0,0,0,0.2)] w-full h-[60dvh] bg-white rounded-t-3xl p-5">
                    <h1>New 소모임💫</h1>
                </section>
                <section className="absolute top-[110dvh] drop-shadow-[0_-10px_20px_rgba(0,0,0,0.2)] w-full h-[60dvh] bg-white rounded-t-3xl p-5">
                    <h1>우리동네 Hot한 소모임🔥</h1>
                </section> */}
            </main>
        )
    }

    return (
        <>
            Not signed in <br />
        </>
    )
}
