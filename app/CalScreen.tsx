import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';

import ResultadoCalorias from '@/components/ResultadoCalorias';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';

export default function HomeScreen() {
  const [sexo, setSexo] = useState('Hombre');
  const [edad, setEdad] = useState('');
  const [peso, setPeso] = useState('');
  const [estatura, setEstatura] = useState('');
  const [opcion1, setOpcion1] = useState('');
  const [opcion2, setOpcion2] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [caloriasResultado, setCaloriasResultado] = useState<number | null>(null);
  const navigation = useRouter();




  const handleSubmit = () => {
    //Validar que campos no estén vacíos
    if (!edad || !peso || !estatura) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    if (isNaN(Number(edad)) || isNaN(Number(peso)) || isNaN(Number(estatura))) {
      alert('Por favor, ingresa valores válidos para edad, peso y estatura.');
      return;
    }

    if (Number(edad) < 0 || Number(peso) < 0 || Number(estatura) < 0) {
      alert('Por favor, ingresa valores positivos para edad, peso y estatura.');
      return;
    }

    // Si todo está bien, puedes realizar el cálculo
    const caloriasDiarias = calcularCalorias(Number(edad), Number(peso), Number(estatura), sexo, opcion1, opcion2);

    setCaloriasResultado(caloriasDiarias);
    setModalVisible(true); // mostrar el modal
  };

  // Función para calcular las calorías diarias
  const calcularCalorias = (edad: number, peso: number, estatura: number, sexo: string, actividad: string, objetivo: string) => {
    let tasaMetabolicaBasal = 10 * peso + 6.25 * estatura - 5 * edad + (sexo === 'Hombre' ? 5 : -161); // Fórmula de Harris-Benedict

    // Ajustar según el nivel de actividad física
    let factorActividad = 1.2;  // Sedentario por defecto
    switch (opcion1) {
      case 'opcion2':
        factorActividad = 1.375;
        break;
      case 'opcion3':
        factorActividad = 1.55;
        break;
      case 'opcion4':
        factorActividad = 1.725;
        break;
      case 'opcion5':
        factorActividad = 1.9;
        break;
    }

    // Ajustar según el objetivo
    let factorObjetivo = 0;
    switch (opcion2) {
      case 'opcionA':
        factorObjetivo = 0.2;  // Reducir un 15% para pérdida de peso
        break;
      case 'opcionB':
        factorObjetivo = -0.15;  // Aumentar un 20% para ganancia muscular
        break;
      case 'opcionC':
        factorObjetivo = 0;  // No hay ajuste para mantener el peso
        break;
    }

    // Calcular calorías diarias
    const caloriasDiarias = tasaMetabolicaBasal * factorActividad * (1 + factorObjetivo);

    return Math.round(caloriasDiarias); // Redondear a un número entero
  };

  return (
    <View style={styles.outerContainer}>
      {/* Floating Image overlapping container */}
      <Image
        source={require('@/assets/images/FitCalLogonb.png')}
        style={styles.reactLogo}
      />
      <TouchableOpacity onPress={() => navigation.back()} style={styles.arrowContainer}>
        <View style={styles.arrowButton}>
          <ArrowLeftIcon size={20} color="black" />
        </View>
      </TouchableOpacity>

      {/* Rounded background container */}
      <View style={styles.scrollContainer}>
        <View style={styles.parallaxContent}>
          {/* Return Button */}
          <ThemedView style={styles.formContainer}>
            <ThemedText style={styles.subtitle}>Sexo</ThemedText>
            <Picker selectedValue={sexo} onValueChange={setSexo}>
              <Picker.Item label="Hombre" value="Hombre" />
              <Picker.Item label="Mujer" value="Mujer" />
            </Picker>

            <ThemedText style={styles.subtitle}>Edad</ThemedText>
            <TextInput style={styles.input} keyboardType="numeric" value={edad} onChangeText={setEdad} placeholder="Introduce tu edad" />

            <ThemedText style={styles.subtitle}>Peso (kg)</ThemedText>
            <TextInput style={styles.input} keyboardType="numeric" value={peso} onChangeText={setPeso} placeholder="Introduce tu peso" />

            <ThemedText style={styles.subtitle}>Estatura (cm)</ThemedText>
            <TextInput style={styles.input} keyboardType="numeric" value={estatura} onChangeText={setEstatura} placeholder="Introduce tu estatura" />

            <ThemedText style={styles.subtitle}>¿Cuál es tu nivel de actividad?</ThemedText>
            <Picker selectedValue={opcion1} onValueChange={setOpcion1}>
              <Picker.Item label="Sedentario: Poco o nada de ejercicio" value="opcion1" />
              <Picker.Item label="Ligero: 1-3 días de actividad" value="opcion2" />
              <Picker.Item label="Moderado: 3-5 días de actividad" value="opcion3" />
              <Picker.Item label="Intenso: 6-7 días de actividad" value="opcion4" />
              <Picker.Item label="Muy intenso: Trabajo físico diario" value="opcion5" />
            </Picker>

            <ThemedText style={styles.subtitle}>¿Cuál es tu objetivo?</ThemedText>
            <Picker selectedValue={opcion2} onValueChange={setOpcion2}>
              <Picker.Item label="Aumentar masa muscular" value="opcionA" />
              <Picker.Item label="Bajar grasa corporal" value="opcionB" />
              <Picker.Item label="Mantener peso actual" value="opcionC" />
            </Picker>

            <Pressable style={styles.sendButton} onPress={handleSubmit}>
              <Text style={styles.sendButtonText}>Calcular</Text>
            </Pressable>

            <ResultadoCalorias visible={modalVisible} onClose={() => setModalVisible(false)} caloriasDiarias={caloriasResultado ?? 0} />
          </ThemedView>
        </View>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#7b66f4',
  },
  reactLogo: {
    width: 300,
    height: 400,
    position: 'absolute',
    resizeMode: 'contain',
    alignSelf: 'center',
    top: 0,
    zIndex: 2,

  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 150, // push down to make space for floating image
    paddingTop: 80, // ensure content doesn't hide under image
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
    overflow: 'hidden',
  },
  parallaxContent: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  headerContainer: {
    marginLeft: 16,
    marginTop: 8,
  },
  arrowContainer: {
    marginLeft: 16,
    marginRight: 468,
    marginTop: 30,
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
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
    marginTop: 16,
  },
  formContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    height: 44,
    borderColor: '#d1d5db',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
    backgroundColor: '#f9fafb',
  },
  sendButton: {
    backgroundColor: '#facc15',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },
  sendButtonText: {
    color: '#1f2937',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
