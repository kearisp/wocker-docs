import {useCallback} from "react";
import {useLocation} from "react-router-dom";


export const useMatchPath = () => {
    const {pathname} = useLocation();

    return useCallback((to) => {
        return pathname === to || (pathname.startsWith(to) && pathname.charAt(to.length) === "/");
    }, [pathname]);
};
