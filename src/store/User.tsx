import { createContext, Dispatch, SetStateAction, useState } from "react";

export interface UserInfo {
    avatar: string;
    name: string;
    description: string;
}

export interface userStoreInterface {
    userInfo: UserInfo;
    setUserInfo: Dispatch<SetStateAction<UserInfo>>;
}

export const UserStore = createContext<userStoreInterface>({} as userStoreInterface);

const User: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [userInfo, setUserInfo] = useState({
        avatar: "https://avatars.githubusercontent.com/u/15785230?s=40&v=4",
        name: "Panda",
        description:
            'Star on <a href="https://github.com/startpanda" class="color-[#3050fb]" target="_blank" >Github</a>',
    });
    return <UserStore.Provider value={{ userInfo, setUserInfo }}>{children}</UserStore.Provider>;git 
};

export default User;
