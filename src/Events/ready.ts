import { Event } from "../Interfaces";
import "colors"

export const event: Event = {
    name: "ready",
    run: (client) => {
        console.log(`${client.user.username} fue conectado a Discord.`.bgGreen)
    }
}