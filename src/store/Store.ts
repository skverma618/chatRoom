export type UserId = string;
export interface Chat {
    id: string,
    name: string,
    userId: UserId,
    message: string,
    timestamp: Date,
    upvotes: UserId[],
}

export abstract class Store {
    constructor() {

    }

    initRoom(roomId: string) {

    }
    getChats(roomId: string, limit: number, offset: number) {

    }

    addChat(roomId: string, name: string, userId: UserId, message: string) {

    }

    upvoteChat(userId: UserId, chatId: string, roomId: string) {

    }
}