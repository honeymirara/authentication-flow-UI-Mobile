import { Text , TouchableOpacity, View , StyleSheet} from "react-native";
import Google from '../assets/images/google';


export default function LogIn() {
    return (
        <View>
            <Text>Log In</Text>
            <TouchableOpacity>
            <Google></Google>
            <Text>Sign in with Google</Text>
            </TouchableOpacity>
           
        </View>
    )
}

const styles = StyleSheet.create({
wrapper: {
    backgroundColor: '#fffff'
}
})