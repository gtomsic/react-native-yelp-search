import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.containerStyle}>
            <Image
                style={styles.imageStyle}
                source={{ uri: result.image_url }}
            />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>
                {result.rating} starts, {result.review_count} Reviews
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        marginLeft: 15,
    },
    imageStyle: {
        width: 250,
        height: 150,
        marginBottom: 10,
    },
    nameStyle: {
        fontWeight: "bold",
    },
});

export default ResultsDetail;
