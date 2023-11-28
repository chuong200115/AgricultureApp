import React, {useState} from 'react'
import { View, Text, TouchableOpacity, TextInput, Keyboard, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { LineChart } from 'react-native-chart-kit';
import styles from './styleLogin';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={styles.logoIcon}
          source={require('../../images/Logo_BK.png')}
        />
        <Text style={styles.dangNhap}>Đăng Nhập</Text>
      </View>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Tên đăng nhập"
        />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.quenmatkhau}>Quên mật khẩu?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Monitor')}
        >
          <Text style={styles.buttonText}>Đăng Nhập</Text>
        </TouchableOpacity>
        
        <View style={styles.haveAnAccount}>
          <Text>Bạn chưa có tài khoản? </Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
            <Text style={styles.signupButton}>Đăng kí ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Login 