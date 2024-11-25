import { Text, TouchableOpacity, View, StyleSheet, TextInput } from "react-native";
import Google from '../assets/images/google';
import Warning from "@/assets/images/warning";
import Eyeslash from "@/assets/images/eyeslash";
import Checkbox from "@/assets/images/checkbox";


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
            <View style={styles.inputWrapper}>
                <View style={styles.passwordTextWrapper}>
                    <Text style={styles.inputText}>Password</Text>
                    <Text style={styles.forgotPassText}>Forgot Password</Text>
                </View>
                <TextInput style={styles.inputTag} placeholder={'*******'} placeholderTextColor={'#BABABA'}></TextInput>
                <TouchableOpacity style={styles.eyeIcon}>
                    <Eyeslash></Eyeslash>
                </TouchableOpacity>
                <View style={styles.enterCorrectWrapper}>
                    <Warning></Warning>
                    <Text style={styles.warningText}>Please enter correct password</Text>
                </View>
                <View style={styles.keepMeWrapper}>
                    <Checkbox></Checkbox>
                    <Text style={styles.keepMeSignedText}>Keep me signed in</Text>
                </View>
                <TouchableOpacity style={styles.loginButtonTag}>
                    <Text style={styles.loginTextTag}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.signUpText}>Don’t have an Account? Sign up here</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fffff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 28,


    },
    title: {
        fontFamily: 'SFProDisplay-Regular',
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
        fontFamily: 'SFProDisplay-Regular',
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
        fontFamily: 'SFProDisplay-Regular',
        fontSize: 14,
        fontWeight: 500,
        color: '#4B5768',
    },
    inputWrapper: {
        justifyContent: 'flex-start',
        width: '100%',
        marginBottom: 24,
        position: 'relative',
    },
    inputText: {
        fontFamily: 'SFProDisplay-Regular',
        fontSize: 14,
        fontWeight: 400,
        color: '#000000BF',
        marginBottom: 4
    },
    inputTag: {
        borderColor: '#C2B2E0',
        backgroundColor: '#fffff',
        borderWidth: 1,
        borderStyle: 'solid',
        width: '100%',
        paddingVertical: 12,
        borderRadius: 6,
        paddingLeft: 16,
    },
    passwordTextWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
        top: '50%',
        transform: [{ translateY: -77 }],
    },
    enterCorrectWrapper: {
        flexDirection: 'row',
        gap: 4,
        alignItems: 'flex-end'
    },

    forgotPassText: {
        fontFamily: 'SFProDisplay-Regular',
        fontSize: 14,
        fontWeight: 500,
        color: '#1443C3',

    },
    warningText: {
        fontFamily: 'SFProDisplay-Regular',
        fontSize: 12,
        fontWeight: 400,
        color: '#EA2A2A',
        marginTop: 7
    },

    keepMeWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop: 25,
    },

    keepMeSignedText: {
        fontFamily: 'SFProDisplay-Regular',
        fontSize: 14,
        fontWeight: 400,
        color: '#191D23'
    },
    loginButtonTag: {
        width: '100%',
        height: 50,
        marginTop: 12,
        backgroundColor: '#1443C3',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        gap: 15,
    },
    loginTextTag: {
        fontFamily: 'SFProDisplay-Regular',
        fontSize: 16,
        fontWeight: 500,
        color: '#FEFEFE'
    },
    signUpText: {
        marginTop: 10,
        justifyContent: 'center',
        fontFamily: 'SFProDisplay-Regular',
        fontSize: 14,
        fontWeight: 400,
        color: '#1443C3',
        textAlign:'center',
    }
})