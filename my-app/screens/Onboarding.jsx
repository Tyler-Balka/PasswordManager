import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';
import StepIndicator from 'react-native-step-indicator';

export default function Onboarding() {
    const [currentPosition, setCurrentPosition] = useState(0);
    const steps = [
        { 
            title: 'Sync Everywhere',
            description: 'Access your passwords on all your devices. Your data is encrypted and updated in real-time.',
            image_path: require('../assets/Overlay.png')
        },
        {
            title: 'Smart Generator',
            description: 'Create unbreakable passwords in seconds with our advanced algorithm.',
            image_path: require('../assets/Illustration.png')
        },
        {
            title: 'Secure Vault',
            description: 'Military-grade encryption for all your passwords. Your data never leaves your device.',
            image_path: require('../assets/Illustration-2.png')
        }
    ]
    const currentStep = steps[currentPosition];

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={{ alignSelf: 'flex-end', marginRight: 48, marginBottom: 128 }}>
                    <Text style={{ fontSize: 16, color: '#64748B' }}>Skip</Text>
                </View>
                <View>
                    <Image source={currentStep.image_path} />
                </View>
                <View style={{ marginTop: 64, marginHorizontal: 64, marginBottom: 48 }}>
                    <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', }}>{currentStep.title}</Text>
                    <Text style={{ fontSize: 16, textAlign: 'center', marginVertical: 8, color: '#666', lineHeight: 32 }}>{currentStep.description}</Text>
                </View>
                <View style={{ width: '100%' }}>
                    <StepIndicator
                        currentPosition={currentPosition}
                        stepCount={steps.length}
                        customStyles={{
                            stepIndicatorSize: 7,
                            currentStepIndicatorSize: 7,

                            stepStrokeWidth: 0,
                            currentStepStrokeWidth: 0,

                            stepIndicatorFinishedColor: "#DDE2EC",
                            stepIndicatorUnFinishedColor: "#DDE2EC",
                            stepIndicatorCurrentColor: "#4F46E5",

                            separatorStrokeWidth: 0,
                            separatorStrokeUnfinishedWidth: 0,
                            separatorStrokeFinishedWidth: 0,

                            stepIndicatorLabelFontSize: 1,
                            currentStepIndicatorLabelFontSize: 1,

                            stepIndicatorLabelCurrentColor: "transparent",
                            stepIndicatorLabelFinishedColor: "transparent",
                            stepIndicatorLabelUnFinishedColor: "transparent",
                        }}
                        onPress={(position) => {setCurrentPosition(position)}}
                    />
                    <Pressable 
                        onPress={() => {
                        if (currentPosition < steps.length - 1) {
                            setCurrentPosition(currentPosition + 1);
                        }
                    }}
                    style={{ backgroundColor: '#4F46E5', borderWidth: 1, borderRadius: 12, borderColor: '#4F46E5', paddingHorizontal: 128, paddingVertical: 16, marginTop: 32, width: '100%' }}>
                        <Text style={{ fontSize: 16, color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>{currentPosition === 0 ? 'Get Started' : 'Next'}</Text>
                    </Pressable>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
})