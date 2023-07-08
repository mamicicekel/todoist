import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import styles from './AddToDo.styles';

export default function AddToDo(props) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textinput}
                clearButtonMode='while-editing'
                placeholder='Todo'
                placeholderTextColor="#42B4D0"
                value={props.value}
                onChangeText={props.onChangeText}
            />
            <Pressable
            
                style={props.value.length > 0 ? styles.buttonEnabled : styles.buttonDisabled}
                onPress={props.onPress}
                disabled={props.value.length > 0 ? false : true}>
                <Text style={styles.buttonText}>+ Add New</Text>
            </Pressable>
        </View>
    )
}