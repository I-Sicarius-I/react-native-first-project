import { Client, Avatars, Account, Databases } from "react-native-appwrite";

export const client = new Client()
        .setProject('6ae7739800344b4c373a')
        .setPlatform('dev.sicarius.react.native')


export const account = new Account(client)

export const avatars = new Avatars(client)

export const db = new Databases(client);