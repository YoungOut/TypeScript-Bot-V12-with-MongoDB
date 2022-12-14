import Client from "../Client";
import { ClientEvents, RichPresenceAssets } from "discord.js";

interface Run {
    (client: Client, ...args: any[])
}

export interface Event {
    name: keyof ClientEvents;
    run: Run;
}