import { Text, TouchableOpacity, View, StyleSheet, TextInput } from "react-native";
import Google from '../assets/images/google';


export default function LogIn() {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Log In</Text>
            <TouchableOpacity style={styles.googleButtonTag}>
                <Google></Google>
                <Text style={styles.googleButtonText}>Sign in with Google</Text>
            </TouchableOpacity>
            <View style={styles.signInTag}>
                <View style={styles.lineTag}></View>
                <Text style={styles.signInText}>or sign in with</Text>
                <View style={styles.lineTag}></View>
            </View>
            <View style={styles.inputWrapper}>
                <Text style={styles.inputText}>Email Adress</Text>
                <TextInput style={styles.inputTag} placeholder={'Rhebhek@gmail.com'} placeholderTextColor={'#BABABA'}></TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fffff',
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 28,

    },
    title: {
        fontFamily: 'SF Pro Display',
        fontSize: 24,
        fontWeight: 700,
        color: '#191D23',
        marginBottom: 72,
    },

    googleButtonTag: {
        backgroundColor: '#F4F7FF',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        width: '100%',
        borderRadius: 2,
        paddingVertical: 16,
    },
    googleButtonText: {
        textAlign: 'center',
        fontFamily: 'SF Pro Display',
        fontSize: 14,
        fontWeight: 500,
        color: '#131212',
    },
    signInTag: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40,
        width: '100%',
        gap: 15,
    },
    lineTag: {
        backgroundColor: '#CBD2E0',
        height: 1,
        width: '30%',
    },
    signInText: {
        textAlign: 'center',
        fontFamily: 'SF Pro Display',
        fontSize: 14,
        fontWeight: 500,
        color: '#4B5768',
    },
    inputWrapper: {
        justifyContent: 'flex-start',
        width: '100%',
    },
    inputText: {
        fontFamily: 'SF Pro Display',
        fontSize: 14,
        fontWeight: 400,
        color: '#000000BF',
    },
    inputTag: {
        borderColor: '#C2B2E0',
        backgroundColor: '#fffff',
        borderWidth: 1,
        borderStyle: 'solid',
        width: '100%',
        paddingVertical: 12,
        borderRadius: 6,

    },
})