import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";

import yelp from "../api/yelp";

const ResultsDetailScreen = ({ navigation }) => {
    const [result, setResult] = useState({});
    const id = navigation.getParam("id");
    const getResult = async (id) => {
        const { data } = await yelp.get(`/${id}`);
        setResult(data);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text style={styles.textStyle}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <Image
                            style={styles.imageStyle}
                            source={{ uri: item }}
                        />
                    );
                }}
            />
        </View>
    );
};

export default ResultsDetailScreen;

const styles = StyleSheet.create({
    textStyle: {
        fontWeight: "bold",
        margin: 15,
    },
    imageStyle: {
        width: "100%",
        height: 200,
        marginBottom: 10,
    },
});
