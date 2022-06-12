import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errMessage, setErrMessage] = useState("");
    const searchApi = async (searchTerm) => {
        try {
            const { data } = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "Salt Lake City",
                },
            });
            setResults(data.businesses);
        } catch (err) {
            setErrMessage("Something went wrong!");
        }
    };
    useEffect(() => {
        searchApi("pasta");
    }, []);
    return [searchApi, results, errMessage];
};
