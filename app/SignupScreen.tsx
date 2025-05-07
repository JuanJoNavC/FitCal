import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get('window');

export default function SignupScreen() {
    const navigation = useRouter();

    return (
        <View style={{ flex: 1, backgroundColor: '#7b66f4' }}>
            <SafeAreaView >
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.back()} style={styles.arrowContainer}>
                        <View style={styles.arrowButton}>
                            <ArrowLeftIcon size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        source={require('@/assets/images/SignUp1.png')}
                        style={styles.image}
                    />
                </View>
            </SafeAreaView>

            <View style={styles.bottomContainer}>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Nombres Completos</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingrese su nombre"
                    />

                    <Text style={styles.label}>Correo Electronico</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingrese su correo electronico"
                    />

                    <Text style={styles.label}>Contaseña</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingrese su contraseña"
                        secureTextEntry
                    />
                    <Text style={styles.label}>Repetir Contraseña</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Repita su contraseña"
                        secureTextEntry
                    />
                    <TouchableOpacity style={styles.loginButton} onPress={() => navigation.push('/LoginScreen')}>
                        <Text style={styles.loginButtonText}>Registrarse</Text>
                    </TouchableOpacity>

                    <Text style={styles.orText}></Text>

                    <View style={styles.socialContainer}>
                        <TouchableOpacity style={styles.socialButton}>
                            <Image source={require('@/assets/images/google.png')} style={styles.socialIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialButton}>
                            <Image source={require('@/assets/images/apple.png')} style={styles.socialIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialButton}>
                            <Image source={require('@/assets/images/facebook.png')} style={styles.socialIcon} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.signupContainer}>
                        <Text style={styles.signupPrompt}>Ya tienes cuenta?</Text>
                        <TouchableOpacity onPress={() => navigation.push('/LoginScreen')}>
                            <Text style={styles.signupLink}>   Inciar Sesion</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    arrowContainer: {
        marginLeft: 16,
        marginTop: 8,
    },
    arrowButton: {
        backgroundColor: '#facc15',
        padding: 8,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 22,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        margin: 10,
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    image: {
        width: width * 0.8,
        height: height * 0.3,

    },
    bottomContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: width * 0.08,
        paddingTop: height * 0.02,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    formContainer: {
        marginTop: 20,
        gap: 12,
    },
    label: {
        color: '#374151',
        marginLeft: 16,
        fontSize: 18,
    },
    input: {
        backgroundColor: '#f3f4f6',
        color: '#374151',
        padding: 16,
        borderRadius: 24,
        fontSize: 18,
    },
    forgotPasswordContainer: {
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    forgotPasswordText: {
        color: '#374151',
    },
    loginButton: {
        backgroundColor: '#facc15',
        paddingVertical: 12,
        borderRadius: 16,
    },
    loginButtonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#374151',
    },
    orText: {
        paddingVertical: 5,
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 24,
        marginTop: 16,
    },
    socialButton: {
        backgroundColor: '#f3f4f6',
        padding: 8,
        borderRadius: 24,
    },
    socialIcon: {
        width: width * 0.1,
        height: width * 0.1,
        resizeMode: 'contain',
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 28,
    },
    signupPrompt: {
        color: '#6b7280',
        fontWeight: '600',
        fontSize: 16,
    },
    signupLink: {
        color: '#facc15',
        fontWeight: '600',
        fontSize: 16,
    },
});