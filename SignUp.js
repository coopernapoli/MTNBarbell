import React, {useState} from 'react';
import {View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
    KeyboardAvoidingView,} from 'react-native';


export default function SignUp ({toggleSignUp}) {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleSubmit = () => {
    
  };

  return (
<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setNewEmail}
        value={newEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        textAlign='right'
      />
      </View>
      <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setNewPassword}
        value={newPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      </View>
      <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={setConfirmNewPassword}
        value={confirmNewPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleSignUp} style={styles.backBtn}>
        <Text style={styles.backText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
</TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
inputWrapper: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    },
input: {
    flex:1,
    },
    
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#193153',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});