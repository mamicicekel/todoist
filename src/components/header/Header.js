import React from 'react';
import { Text, } from 'react-native';
import styles from './Header.styles';
import LinearGradient from 'react-native-linear-gradient';

export default function Header() {
    return (
        <LinearGradient style={styles.header} colors={['#94F8FF', '#04CCFF',]} start={{ x: 0.19, y: 0.2 }} end={{ x: 0.22, y: 1 }}>
            <Text style={styles.headerText}>ACTIVITES</Text>
        </LinearGradient>
    )
}