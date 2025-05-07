import { Audio } from 'expo-av';
import React, { useEffect } from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

interface ResultadoCaloriasProps {
    visible: boolean;
    onClose: () => void;
    caloriasDiarias: number;
}

export default function ResultadoCalorias({
    visible,
    onClose,
    caloriasDiarias,
}: ResultadoCaloriasProps) {
    useEffect(() => {
        const playSound = async () => {
            if (visible) {
                const { sound } = await Audio.Sound.createAsync(
                    require('@/assets/sounds/davidlaid1.mp3')
                );
                await sound.playAsync();
            }
        };

        playSound();
    }, [visible]);

    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={styles.overlay}>
                <View style={styles.modalContent}>
                    <Image
                        source={require('@/assets/images/davidlaid.jpg')}
                        style={styles.image}
                    />
                    <Text style={styles.text}>Tu requerimiento calórico diario es:</Text>
                    <Text style={styles.calorias}>{caloriasDiarias} calorías</Text>
                    <Pressable style={styles.sendButton} onPress={onClose}>
                        <Text style={styles.sendButtonText}>Cerrar</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 24,
        borderRadius: 12,
        alignItems: 'center',
        elevation: 10,
    },
    image: {
        width: 250,
        height: 300,
        marginBottom: 12,
    },
    text: {
        fontSize: 16,
        marginBottom: 8,
        textAlign: 'center',
    },
    calorias: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    sendButton: {
        backgroundColor: '#f7ba40',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    sendButtonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
