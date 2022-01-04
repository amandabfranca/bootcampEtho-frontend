import {useSelector} from "react-redux";
import {State} from "../../../store/store/store.types";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import { LoginPath } from "../../../screens/login/login.types";

export default function UserGuard({children}: any) {
    const isUserAuthenticated = useSelector((state: State) => !!state.user.data)
    const navigate = useNavigate()

    useEffect(
        () => {
            if (!isUserAuthenticated) {
                navigate(LoginPath)
            }
        },
        [isUserAuthenticated]
    )

   if (isUserAuthenticated) return children

        return null
    }
