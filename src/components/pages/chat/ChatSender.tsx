interface chatsType {
    uuid: string
    text?: string
    imageUrl?: string
    entryExitNotice?: string
    createdAt: string
}
export default function ChatSender({ chat }: { chat: chatsType }) {
    return (
        <section>
            {chat.text && (
                <div className="flex flex-row m-2 justify-end">
                    <div className="text-gray-500 text-sm mr-2 self-end">
                        {new Date(chat.createdAt).toLocaleTimeString('ko-KR', {
                            hour: '2-digit',
                            minute: '2-digit',
                        })}
                    </div>
                    <div
                        className={`bg-hobbing-red text-white py-2 px-4 rounded-lg text-start ${chat.text.length > 20 ? 'w-2/3' : 'w-auto'} justify-end`}
                    >
                        {chat.text}
                    </div>
                </div>
            )}
            {chat.imageUrl && (
                <div className="flex flex-row m-2">
                    <div className="text-gray-500 text-sm mr-2 self-end">
                        {new Date(chat.createdAt).toLocaleTimeString('ko-KR', {
                            hour: '2-digit',
                            minute: '2-digit',
                        })}
                    </div>
                    <div className="bg-hobbing-red  rounded-lg w-fit justify-end">
                        <img src={chat.imageUrl} alt="Image" className="w-[200px]" />
                    </div>
                </div>
            )}
        </section>
    )
}
