import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './ToDoCard.styles';
import CheckBox from '@react-native-community/checkbox';

export default function ToDoCard({ text, deleteTask }) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const handleToggleCheckBox = () => {
        setToggleCheckBox(!toggleCheckBox)
    }

    return (
        <Pressable onPress={handleToggleCheckBox} onLongPress={deleteTask}>
            <View style={!toggleCheckBox ? styles.containerEnabled : styles.containerDisabled}>
                <Text style={toggleCheckBox ? styles.doneText : styles.text}>{text}</Text>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
            </View>
        </Pressable>
    )
}
