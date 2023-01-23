import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import InputText from '../../components/InputText';
import Colors from '../../constant/Colors';
import Button from '../../components/Button';
import {useTheme} from '@react-navigation/native';

const RegisterScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <FastImage
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/recruitment-agency-e0465.appspot.com/o/images%2Fdefault%2FmenOnDesk.png?alt=media&token=95557100-614f-4ab7-ba67-dcaa9f96a8d9',
        }}
        style={styles.image}
      />

      <View style={{flex: 2}}>
        <View style={{alignSelf: 'flex-start'}}>
          <Text style={styles.label}>Register</Text>
        </View>

        <View>
          <InputText
            value={email}
            onChangeText={email => setEmail(email)}
            placeholder={'Email'}
            inputStyle={{
              marginBottom: 15,
              color: colors.text,
              fontWeight: '700',
            }}
          />

          <InputText
            value={password}
            placeholder={'Password'}
            onChangeText={password => setPassword(password)}
            inputStyle={{
              marginBottom: 15,
              color: colors.text,
              fontWeight: '700',
            }}
          />

          <InputText
            value={password}
            placeholder={'Confirm Password'}
            onChangeText={password => setPassword(password)}
            inputStyle={{
              color: colors.text,
              fontWeight: '700',
            }}
          />

          <Button
            title={'Submit'}
            btnLabelStyle={{fontSize: 18}}
            onPress={() => {}}
          />
        </View>
      </View>

      <View style={styles.bottomText}>
        <Text style={{fontWeight: '400', color: colors.text}}>
          Don You Have An Account ?
        </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Text style={{fontWeight: '500', color: Colors.accent}}>
            Login Here!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: WP(80),
    height: HP(40),
  },
  label: {
    fontSize: 30,
    color: Colors.accent,
    fontWeight: '600',
    marginVertical: 10,
  },
  bottomText: {
    alignItems: 'center',
  },
});

export default RegisterScreen;
