import { createContext, useState, useEffect } from "react";
import { OLD_API_URL } from "../keys.config";

export const CommitteesContext = createContext();

export const CommitteesProvider = ({ children }) => {
    const [committees, setCommittees] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    useEffect(() => {
        setIsFetching(true);
        fetch(`${OLD_API_URL}/committee`)
            .then((res) => res.json())
            .then(({ data }) => {
                setCommittees(data);
                setIsFetching(false);
            });
    }, []);
    return (
        <CommitteesContext.Provider value={{ committees, isFetching }}>
            {children}
        </CommitteesContext.Provider>
    );
};
