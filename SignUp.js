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


export default function SignUp ({toggleSignUp, validateEmail, validatePassword}) {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleSubmit = () => {
    let isValid = true;

    if (!validateEmail(newEmail)) {
      setEmailError("Please enter a valid email.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!validatePassword(newPassword)) {
      setPasswordError("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (newPassword !== confirmNewPassword) {
        setConfirmPasswordError("Passwords do not match.");
        isValid = false;
      } else {
        setConfirmPasswordError("");
      }

    if (isValid) {
      // Perform the sign-up process here
    }
    
  };
  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  
  function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

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
      />
      </View>
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
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
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
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
      {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}
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
    width: '100%',
    borderColor: '949494',
    borderWidth: 1,
    borderRadius: 5,
    padding: 14,
    marginBottom: 10,
    flexDirection: 'row',
    textAlign: "center",
    },

input: {
    width: "40%"
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
  errorText: {
    color: "red",
    padding: 3
  }
});