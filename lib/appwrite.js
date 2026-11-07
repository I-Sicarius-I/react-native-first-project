import { Client, Avatars, Account, Databases, TablesDB } from "react-native-appwrite";

export const client = new Client()
        .setEndpoint('https://fra.cloud.appwrite.io/v1')
        .setProject('6ae7739800344b4c373a')
        .setPlatform('dev.sicarius.react.native')


export const account = new Account(client)

export const avatars = new Avatars(client)

export const db = new TablesDB(client);