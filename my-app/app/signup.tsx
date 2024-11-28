import Eyeslash from "@/assets/images/eyeslash";
import Google from "@/assets/images/google";
import { StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

export default function SignUp() {
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
                    <TextInput style={styles.inputTag} placeholder={'Your  Name'} placeholderTextColor={'#BABABA'}></TextInput>
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputText}>Full Name</Text>
                    <TextInput style={styles.inputTag} placeholder={'Namel@email.com'} placeholderTextColor={'#BABABA'}></TextInput>
                </View>
                <View style={styles.inputWrapper}>
                <Text style={styles.inputText}>Password</Text>
                <TextInput style={styles.inputTag} placeholder={'*******'} placeholderTextColor={'#BABABA'}></TextInput>
                </View>
                <TouchableOpacity style={styles.eyeIcon1}>
                    <Eyeslash></Eyeslash>
                </TouchableOpacity>
                <View style={styles.inputWrapper}>
                <Text style={styles.inputText}>Confirm Password</Text>
                <TextInput style={styles.inputTag} placeholder={'*******'} placeholderTextColor={'#BABABA'}></TextInput>
                </View>
                <TouchableOpacity style={styles.eyeIcon2}>
                    <Eyeslash></Eyeslash>
                </TouchableOpacity>
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
    inputWrapper:{
        justifyContent: 'flex-start',
        width: '100%',
        marginBottom: 24,
        position: 'relative',
    },
    inputText:{
        fontFamily: 'SFProDisplay-Regular',
        fontSize: 14,
        fontWeight: 400,
        color: '#000000B'
        },
    inputTag:{
        borderColor: '#C2B2E0',
        backgroundColor: '#fffff',
        borderWidth: 1,
        borderStyle: 'solid',
        width: '100%',
        paddingVertical: 12,
        borderRadius: 6,
        paddingLeft: 16,
    },
    eyeIcon1:{
        position: 'absolute',
        right: 10,
        top: '50%',
        transform: [{ translateY: -77 }],
    },
    eyeIcon2:{

    }
})