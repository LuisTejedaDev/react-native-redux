import { StyleSheet, Text, View } from "react-native"

export default () => {
    return(
        <View style={styles.container}>
            <Text style={{fontWeight: 'bold'}}>React Native + Redux Toolkit</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})