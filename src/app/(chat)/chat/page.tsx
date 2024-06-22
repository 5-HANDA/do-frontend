import { getCrewList } from '@/api/crew/CrewList'
import ChatList from '@/components/pages/chat/ChatList'
import { CrewType } from '@/type/CrewType'

export default async function ChatPage() {
    const crewList: CrewType[] = await getCrewList()
    // console.log('crewList:', crewList)

    return (
        <div className=" bg-[#FBFBFD] h-[calc(100dvh-120px)] overflow-y-scroll">
            <ChatList crewList={crewList} />
        </div>
    )
}
