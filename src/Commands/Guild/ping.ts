import { Command } from "../../Interfaces"

export const command: Command = {
    name: "ping",
    description: "Ver el ping de tu bot",
    aliases: ["p"],
    run: async(client, message, args) => {
        message.channel.send(`Mi latencia es de: ${client.ws.ping}ms`)
    },
};