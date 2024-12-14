import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import axios from "axios";


const useUserData = () => {
    const { user, loading } = useAuth();
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
            await axios.get(`http://localhost:5000/user/${user?.email}`)
                .then(res => {

                    setUserData(res.data);
                })
        };

        if (user?.email && !loading) {
            fetchUserData();
        }

    }, [user, loading]);
    console.log(userData)

    return userData;
};


export default useUserData;