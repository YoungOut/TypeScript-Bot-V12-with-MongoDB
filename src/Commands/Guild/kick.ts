import { Command } from "../../Interfaces"

export const command: Command = {
    name: "kick",
    description: "Sirve para expulsar a un usuario de un servidor",
    aliases: ["k"],
    run: async(client, message, args) => {

        var botperms = message.guild.me.hasPermission("KICK_MEMBERS")
        if(!botperms) return message.channel.send("No tengo los suficientes permisos para ejecutar este comando.")

        var perms = message.member.hasPermission("KICK_MEMBERS")
        if(!perms) return message.channel.send("No tenes los permisos suficientes para ejecutar este comando.")

        const usuario = message.mentions.members.first()
        if(!usuario) return message.channel.send("Debes mencionar al usuario a expulsar.")

       

        const razon = args.slice(1).join(" ")
        if(!razon) return message.channel.send("Debes especificar un porque de la expulsion.")

        message.guild.member(usuario).kick(razon)
        
        message.channel.send(`El usuario ${usuario.user.username} fue expulsado con la razon: ${razon}.\nResponsable de la expulsion: <@${message.author.id}>`)

    },
};