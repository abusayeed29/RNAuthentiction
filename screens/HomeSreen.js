import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, navigation } from 'react-native'

export default class HomeSreen extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Go to Details"
                    onPress={()=> this.props.navigation.navigate('Details')}
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
    }
})
