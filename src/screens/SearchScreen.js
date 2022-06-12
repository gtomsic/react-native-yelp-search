import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import useResults from "../hooks/useResults";

const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState("");
    const [searchApi, results, errMessage] = useResults();
    const filterResultsByPrice = (price) => {
        return results.filter((result) => {
            return result.price === price;
        });
    };

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errMessage ? <Text>{errMessage}</Text> : null}
            <ScrollView>
                <ResultsList
                    navigation={navigation}
                    results={filterResultsByPrice("$")}
                    title="Cost Effective"
                />
                <ResultsList
                    navigation={navigation}
                    results={filterResultsByPrice("$$")}
                    title="Bit Pricer"
                />
                <ResultsList
                    navigation={navigation}
                    results={filterResultsByPrice("$$$")}
                    title="Big Spender"
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
