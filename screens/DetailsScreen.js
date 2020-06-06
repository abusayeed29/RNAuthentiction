import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class DetailsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    style={styles.btn}
                    title="Go To Details Screen Again"
                    onPress={() => this.props.navigation.push('Details')}
                />
                <Button
                    style={styles.btn}
                    title="Go To home Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    style={styles.btn}
                    title="Go Back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    style={styles.btn}
                    title="Go to first Screen"
                    onPress={() => this.props.navigation.popToTop()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    btn:{
        paddingBottom:10
    }
})
