import { createContext, useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";

export const UserContext = createContext()

export function UserProvider({children}){
    const [user, setUser] = useState();
    const [authChecked, setAuthChecked] = useState(false);

    async function login(email, password){
        try
        {
            await account.createEmailPasswordSession({email: email, password: password});
            const response = await account.get();
            setUser(response);
        } catch(err) {
            throw Error(err);
        }
    }

    async function register(email, password){
        try
        {
            await account.create({
                userId: ID.unique(), 
                email: email, 
                password: password
            });

            await login(email, password);
        } catch(err) {
           throw Error(err);
        }
    }

    async function logout(){
        await account.deleteSession({sessionId: "current"});
        setUser(null);
    }

    async function getInitialUserValue(){
        try{
            const response = await account.get();
            setUser(response);
        } catch(error){
            setUser(null);
        } finally { 
            setAuthChecked(true);
        }
    }

    useEffect(() => {
        getInitialUserValue();
    }, [])

    return (
        <UserContext.Provider value={{user, login, register, logout, authChecked}}>
            {children}
        </UserContext.Provider>
    )
}
