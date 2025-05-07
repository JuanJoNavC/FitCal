import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const navigation = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#7b66f4' }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.back()} style={styles.arrowContainer}>
            <View style={styles.arrowButton}>
              <ArrowLeftIcon size={20} color="black" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/LogIn2.png')}
            style={styles.image}
          />
        </View>
      </SafeAreaView>

      <View style={styles.bottomContainer}>
        <View style={styles.formContainer}>
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

          <TouchableOpacity style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>Olvidaste tu contraseña?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.push('/CalScreen')}>
            <Text style={styles.loginButtonText}>Iniciar Sesion</Text>
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
            <Text style={styles.signupPrompt}>Aun no tienes una cuenta?</Text>
            <TouchableOpacity onPress={() => navigation.push('/SignupScreen')}>
              <Text style={styles.signupLink}>   Registrate</Text>
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
    marginTop: 16,
  },
  image: {
    width: 420,
    height: 490,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 32,
    paddingTop: 32,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  formContainer: {
    gap: 12,
  },
  label: {
    color: '#374151', // gray-700
    marginLeft: 16,
    fontSize: 18,
  },
  input: {
    backgroundColor: '#f3f4f6', // gray-100
    color: '#374151', // gray-700
    padding: 16,
    borderRadius: 24,
    marginBottom: 12,
    fontSize: 18,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#374151', // gray-700
  },
  loginButton: {
    backgroundColor: '#facc15', // yellow-400
    paddingVertical: 12,
    borderRadius: 16,
  },
  loginButtonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#374151', // gray-700
  },
  orText: {
    paddingVertical: 5,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
  },
  socialButton: {
    backgroundColor: '#f3f4f6', // gray-100
    padding: 8,
    borderRadius: 24,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 28,
  },
  signupPrompt: {
    color: '#6b7280', // gray-500
    fontWeight: '600',
    fontSize: 16,
  },
  signupLink: {
    color: '#facc15', // yellow-400
    fontWeight: '600',
    fontSize: 16,
  },
});