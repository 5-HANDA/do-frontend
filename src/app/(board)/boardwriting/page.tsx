function BoardWriting() {
    return (
        <div className="h-[calc(100svh-10.5rem)]">
            <textarea
                placeholder="멤버들과 공유하고 싶은 소식을 남겨보세요."
                className="w-full h-full p-4 bg-red-300"
            />
        </div>
    )
}
export default BoardWriting
