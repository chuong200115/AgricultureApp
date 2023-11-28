import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './styleRegister';
import { useNavigation } from '@react-navigation/native'

const Register = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={styles.logoIcon}
          source={require('../../images/Logo_BK.png')}
        />
        <Text style={styles.dangNhap}>Đăng Ký</Text>
      </View>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Tên đăng nhập"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Xác nhận mật khẩu"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Handle register button press
          }}
        >
          <Text style={styles.buttonText}>Đăng Ký</Text>
        </TouchableOpacity>  
        <View style={styles.haveAnAccount}>
          <Text>Bạn đã có tài khoản? </Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
            <Text style={styles.signinButton}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>      
      </View>      
    </View>
  );
};

export default Register;