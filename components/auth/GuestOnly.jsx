import { useRouter } from "expo-router";
import { Text } from "react-native";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";


const GuestOnly = ({children}) => {
    const { user, authChecked } = useUser();
    const router = useRouter();

    useEffect(() => {
        if(authChecked && user !== null)
        {
            router.replace('/profile');
        }
    }, [user, authChecked])


    if(!authChecked || user){
        return (
            <Text>Loading</Text>
        )
    }



    return children;
}

export default GuestOnly

