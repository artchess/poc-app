import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20, paddingBottom: 5, paddingTop: 5
    },
    strong: {
        fontWeight: 'bold', marginBottom: 1
    }
});

const RepositoryItem = (props) => {
    return (
        <View key={props.id} style={styles.container}>
            <Text style={styles.strong}>Id: {props.id}</Text>
            <Text>Title: {props.title}</Text>
            <Text>Description: {props.description}</Text>
            <Text>Price: {props.price}</Text>
        </View>
    )
}

export default RepositoryItem;