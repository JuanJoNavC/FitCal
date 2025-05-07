import { useRouter } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#7b66f4' }]}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Cuantas calorias necesitas?</Text>

        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/WelcomeImg.png')}
            style={styles.image}
          />
        </View>

        <View style={styles.space}>
          <TouchableOpacity style={styles.signupButton} onPress={() => useRouter().push('/SignupScreen')}>
            <Text style={styles.signupText}>Registrate</Text>
          </TouchableOpacity>

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Ya tienes una cuenta?  </Text>
            <TouchableOpacity>
              <Text style={styles.loginLink} onPress={() => useRouter().push('/LoginScreen')}>Inicia Sesion</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 16,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 45,
    textAlign: 'center',
    padding: 40,
    marginBottom: 100,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: 450,
    height: 400,
    resizeMode: 'contain',
  },
  space: {
    marginTop: 170,
    gap: 16,
  },
  signupButton: {
    paddingVertical: 12,
    backgroundColor: '#FACC15',
    marginHorizontal: 28,
    borderRadius: 12,
  },
  signupText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#374151',
    right: 10,
  },
  loginContainer: {

    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
  loginLink: {
    fontWeight: '600',
    color: '#FACC15',
    fontSize: 18,
  },
});
