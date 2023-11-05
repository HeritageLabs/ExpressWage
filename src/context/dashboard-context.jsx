/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const DashboardContext = createContext({});

export const DashboardProvider = ({ children }) => {

    const [payrollee, setPayrollee] = useState(false);

    const updatePayrollee = (info) => {
        setPayrollee(info);
    };

    const value = { payrollee, updatePayrollee };

    return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>
}