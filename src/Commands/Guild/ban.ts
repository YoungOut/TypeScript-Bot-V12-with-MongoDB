import { Command } from "../../Interfaces"

export const command: Command = {
    name: "ban",
    description: "Banea a un usuario de un servidor",
    aliases: ["b"],
    run: async(client, message, args) => {
        if(!message.member.hasPermission("BAN_MEMBERS" || "ADMINISTRATOR"))
        message.channel.send("No tenes permisos suficientes para ejecutar ese comando.")
        else {
            if(!message.guild) return;

            const user = message.mentions.members.first()

            if(user) { 
                const member = message.guild.member(user)

                if(member){
                    member
                        .ban({
                            reason: "Sin razon."
                        })
                        .then(() => {
                            message.channel.send("Usuario baneado exitosamente.")
                        })
                        .catch(err => {
                            message.channel.send("Ocurrio un error.")

                            console.error(err);
                        });
                }  else {
                    message.channel.send("Ese usuario no existe en este servidorr.")
                    } 
                  } else {
                    message.channel.send("No mencionaste al usuario a banear.")
                  }
                }
            }
        }