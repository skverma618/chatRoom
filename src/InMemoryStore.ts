import { Chat, Store, UserId } from "./store/Store";

interface Room {
    roomId: string;
    chats: Chat[];
}

export class InMemoryStore implements Store {
    private store: Map<string, Room>;
    private globalChatId: number = 0;

    constructor() {
        this.store = new Map<string, Room>();
    }

    initRoom(roomId: string) {
        this.store.set(roomId, {
            roomId,
            chats: [],
        });
    }
    getChats(roomId: string, limit: number, offset: number) {
        const room = this.store.get(roomId);
        if (!room) return [];
        return room.chats.reverse().slice(offset, offset + limit);
    }

    addChat(roomId: string, name: string, userId: UserId, message: string) {
        const room = this.store.get(roomId);
        if (!room) return [];

        room.chats.push({
            id: (this.globalChatId++).toString(),
            name: name,
            userId: userId,
            message: message,
            timestamp: new Date(),
            upvotes: [],
        });
    }

    upvoteChat(userId: UserId, chatId: string, roomId: string) { 
        const room = this.store.get(roomId);
        if (!room) return [];

        const chat = room.chats.find(({id}) => {
            id === chatId
        })

        if(chat){
            chat.upvotes.push(userId);
        }
    }
}
