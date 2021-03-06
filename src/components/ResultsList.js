import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results, navigation }) => {
    if (!results.length) {
        return null;
    }
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("Details", { id: item.id })
                            }
                        >
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        marginTop: 15,
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 10,
    },
});

export default withNavigation(ResultsList);
