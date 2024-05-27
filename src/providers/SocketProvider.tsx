'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'

const SocketContext = createContext<Socket | undefined>(undefined)

export const useSocket = () => useContext(SocketContext)

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
    const [socket, setSocket] = useState<Socket | undefined>(undefined)

    useEffect(() => {
        const socketInstance = io('http://localhost:3000')
        setSocket(socketInstance)

        return () => {
            socketInstance.disconnect()
        }
    }, [])

    return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
}
