

interface User {
    id: string,
    name: string
}
interface roomUsers {
    users: User[]
}

export class UserManager {
    private rooms: Map<string, roomUsers>;

    constructor() {
        this.rooms = new Map<string, roomUsers>();
    }

    addUser(roomId: string, userId: string, name: string) {
        if(!this.rooms.get(roomId)) {
            this.rooms.set(roomId, {
                users: []
            })
        }

        const room = this.rooms.get(roomId);
        room?.users.push({
            id: userId,
            name
        })

    }

    removeUser(roomId: string, userId: string) {
        console.log("removed user");
        const users = this.rooms.get(roomId)?.users;
        if (users) {
            users.filter(({id}) => id !== userId);
        }
    }

    getUser(roomId: string, userId: string): User | null {
        const user = this.rooms.get(roomId)?.users.find((({id}) => id === userId));
        return user ?? null;
    }

}