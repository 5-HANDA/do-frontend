import { redirect } from 'next/navigation'

import getSuggestionCrewList from '@/api/crew/getSuggestionCrewList'
import getBaseRegion from '@/api/crew/getBaseRegion'
import getHobbies from '@/api/survey/getHobbies'

import CrewInfoSlider from '@/components/pages/crew/CrewInfoSlider'
import CrewNotFound from '@/components/pages/crew/CrewNotFound'
import CrewHeader from '@/components/pages/crew/CreawHeader'

export default async function CrewPage({ searchParams }: { searchParams: { [key: string]: string } }) {
    const hobbies = await getHobbies()
    const region = await getBaseRegion()
    const suggestionCrewIdList = await getSuggestionCrewList(parseInt(searchParams.hobbyId), region.regionId)

    const focusedHobbyId = searchParams.hobbyId
    if (!focusedHobbyId) {
        return redirect(`/crew?hobbyId=${hobbies[0].hobbyId}`)
    }

    return (
        <main className="w-full h-[calc(100dvh-140px)]">
            <CrewHeader focusedHobbyId={parseInt(focusedHobbyId)} hobbies={hobbies} />
            {suggestionCrewIdList.length === 0 ? (
                <CrewNotFound hobbyId={parseInt(searchParams.hobbyId)} />
            ) : (
                <CrewInfoSlider suggestionCrewIdList={suggestionCrewIdList} />
            )}
        </main>
    )
}
