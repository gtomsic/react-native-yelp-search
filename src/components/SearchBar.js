import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                value={term}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
                style={styles.inputStyle}
                placeholder="Search..."
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#ffffff",
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        display: "flex",
        flexDirection: "row",
        marginVertical: 10,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15,
        color: "#d1d1d1",
    },
});

export default SearchBar;
