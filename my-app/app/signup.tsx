import Checkbox from "@/assets/images/checkbox";
import Eyeslash from "@/assets/images/eyeslash";
import Google from "@/assets/images/google";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignUp() {
    const [flag, setFlag] = useState(false);
    const [inputValue, setInputValue] = useState({
        fullname: '',
        email: '',
        password: '',
        repeatedPassword: ''
    })

    const changeValue = (e: any, id: any) => {
        setInputValue({ ...inputValue, [id]: e.nativeEvent.text })
    }

    const checkedEmail = () => {
        try {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(inputValue.email)) throw new Error('This email is invalid');
            console.log(inputValue);
        } catch (err: any) {
            console.log(err.message);
        }
    }
    

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Signup</Text>
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
                <Text style={styles.inputText}>Full Name</Text>
                <TextInput style={styles.inputTag} placeholder={'Your  Name'} placeholderTextColor={'#BABABA'} onChange={(e) => changeValue(e, 'fullname')}></TextInput>
            </View>
            <View style={styles.inputWrapper}>
                <Text style={styles.inputText}>Email</Text>
                <TextInput style={styles.inputTag} placeholder={'Namel@email.com'} placeholderTextColor={'#BABABA'} onChange={(e) => changeValue(e, 'email')}></TextInput>
            </View>
            <View style={styles.inputWrapper}>
                <Text style={styles.inputText}>Password</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputTag} placeholder={'*******'} placeholderTextColor={'#BABABA'} secureTextEntry onChange={(e) => changeValue(e, 'password')}></TextInput>
                    <TouchableOpacity style={styles.eyeIcon}>
                        <Eyeslash></Eyeslash>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.inputWrapper}>
                <Text style={styles.inputText}>Confirm Password</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputTag} placeholder={'*******'} placeholderTextColor={'#BABABA'} secureTextEntry onChange={(e) => changeValue(e, 'repeatedPassword')}></TextInput>
                    <TouchableOpacity style={styles.eyeIcon}>
                        <Eyeslash></Eyeslash>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.keepMeWrapper}>
                <TouchableOpacity onPress={() => {
                    console.log('Before:', flag);
                    setFlag(!flag);
                    console.log('After:', !flag);
                }} style={[styles.checkbox, flag && styles.checkboxChecked]}>
                    {flag && <Checkbox />}
                </TouchableOpacity>

                <Text style={styles.keepMeSignedText}>By Creating an Account, i accept Hiring Hub terms of Use and Privacy Policy</Text>
            </View>
            <TouchableOpacity style={styles.signupButtonTag} onPress={checkedEmail}>
                <Text style={styles.signupTextTag}>SignUp</Text>
            </TouchableOpacity>
            <Text style={styles.signUpText}>Have an Account? Sign in here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fffff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 17,
    },
    title: {
        fontFamily: 'SFProDisplay-Regular',
        fontSize: 24,
        fontWeight: 700,
        color: '#191D23',
        marginBottom: 20,
    },
    googleButtonTag: {
        backgroundColor: '#F4F7FF',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        width: '100%',
        borderRadius: 2,
        paddingVertical: 10,
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
        marginVertical: 30,
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

    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    inputText: {
        fontFamily: 'SFProDisplay-Regular',
        fontSize: 14,
        fontWeight: 400,
        color: '#000000B'
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
    eyeIcon: {
        position: 'absolute',
        right: 16,
    },

    keepMeWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop: 15,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#5ACDBE',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    checkboxChecked: {
        backgroundColor: '#FFFFFF'
    },
    keepMeSignedText: {
        fontFamily: 'SFProDisplay-Regular',
        fontSize: 14,
        fontWeight: 400,
        color: '#191D23'
    },
    signupButtonTag: {
        width: '100%',
        height: 50,
        marginTop: 12,
        backgroundColor: '#1443C3',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        gap: 15,
    },
    signupTextTag: {
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
        textAlign: 'center',
    },
})