import { useSelector } from "react-redux";
import { selectUser, selectIsLoggedIn, selectIsRefreshing } from "store/auth/selectors";

const useAuth = () => {
    return {
        isLoggedIn: useSelector(selectIsLoggedIn),
        isRefreshing: useSelector(selectIsRefreshing),
        user: useSelector(selectUser),
    };
};

export default useAuth;