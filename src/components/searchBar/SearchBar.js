import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './SearchBar.styles';

export default function SearchBar(props) {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Search from list"
                onChangeText={(text) => {
                    props.onChangeText(text)
                    props.onSearch(text)
                }}
                value={props.searchText}
            />
        </View>
    )
}