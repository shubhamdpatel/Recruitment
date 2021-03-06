import {recruit} from '../axois';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';

export const AUTHENTICATION = 'AUTHENTICATION';
export const LOGOUT = 'LOGOUT';

export const authentication = (token, user) => {
  return {
    type: AUTHENTICATION,
    token,
    user,
  };
};

export const Init = () => {
  return async dispatch => {
    const loginUser = await AsyncStorage.getItem('user');
    if (loginUser !== null) {
      const objectValue = JSON.parse(loginUser);
      const token = objectValue.user.token;
      const user = objectValue.user.user;
      if (token !== null) {
        console.log('token fetched');
        dispatch(authentication(token, user));
      }
    }
  };
};

export const signUp = (data, userType) => {
  return async dispatch => {
    try {
      const response = await recruit.post('/register', data, {
        params: {
          userType: userType,
        },
      });

      const resData = response.data;

      if (resData.error === 'EMAIL_EXISTS') {
        Toast.show('This email exists alreday');
      }

      try {
        const jsonValue = JSON.stringify({
          user: resData,
        });
        await AsyncStorage.setItem('user', jsonValue);
        await dispatch(authentication(resData.token, resData.user));
      } catch (error) {
        console.log('Data Not Save In Async-Storage', error);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const signIn = (email, password) => {
  return async dispatch => {
    try {
      const response = await recruit.post('/login', {
        email,
        password,
      });

      const resData = response.data;
      // return resData;
      try {
        const jsonValue = JSON.stringify({
          user: resData,
        });

        await AsyncStorage.setItem('user', jsonValue);
        dispatch(authentication(resData.token, resData.user));
      } catch (error) {
        console.log('Data Not Save In Async-Storage', error);
      }
    } catch (error) {
      if (error.response.data.error) {
        const errorMsg = error.response.data.error;
        Toast.show(`${errorMsg}`);
      }
    }
  };
};

export const logout = () => {
  return async dispatch => {
    await AsyncStorage.clear();
    dispatch({type: LOGOUT});
  };
};
