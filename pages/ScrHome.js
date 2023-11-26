import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useFonts, Roboto_900Black, Roboto_400Regular_Italic } from '@expo-google-fonts/roboto';

export default function ScrHome({ navigation }) {
  const scrDiscard = () => {
    navigation.navigate('ScrDiscard');
  };
  const scrMyDiscards = () => {
    navigation.navigate('ScrMyDiscards');
  };
  const mySchedules = () => {
    navigation.navigate('ScrMySchedules');
  };
  const scrBalance = () => {
    navigation.navigate('ScrBalance')
  };
  const [fontLoaded] = useFonts({
    Roboto_900Black, Roboto_400Regular_Italic,
})

if(!fontLoaded) {
    return null ;
}
  return (
    <View style={styles.view_main}>
      <LinearGradient
        style={styles.gradient_top}
        colors={['#2B92D6', '#0ED028']}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 0.5, y: 0.5 }}>
        <AccountCircleIcon style={styles.AccountCircleIcon} />
        <View style={styles.view_top_text}>
          <Text style={styles.text_welcome}>Bem-Vindo</Text>
          <Text style={styles.text_username}>Nome de Usuário</Text>
        </View>
        <NotificationsNoneIcon style={styles.NotificationsNoneIcon} />

        <View style={styles.view_button_text_input}>
          <TouchableOpacity
            onPress={scrDiscard}
            style={styles.button_text_input}>
            <SearchIcon style={styles.SearchIcon} />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '90%',
              }}>
              <Text style={{ marginLeft: '-1rem', fontFamily: 'Roboto_400Regular_Italic' }}>
                O que você quer descartar?
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View style={styles.view_center}></View>

      <LinearGradient
        style={styles.gradient_bottom}
        colors={['#2B92D6', '#0ED028']}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 0.5, y: 0.5 }}>
        <TouchableOpacity style={styles.bottomIcons}>
          <HomeOutlinedIcon style={styles.icons_blue} />
        </TouchableOpacity>
        <TouchableOpacity onPress={scrMyDiscards} style={styles.bottomIcons}>
          <AutorenewOutlinedIcon style={styles.icons_white} />
        </TouchableOpacity>
        <TouchableOpacity onPress={mySchedules} style={styles.bottomIcons}>
          <CalendarMonthOutlinedIcon style={styles.icons_white} />
        </TouchableOpacity>
        <TouchableOpacity onPress={scrBalance} style={styles.bottomIcons}>
          <AccountCircleOutlinedIcon style={styles.icons_white} />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  icons_white: {
    width: '100%',
    height: '100%',
    color: 'white',
  },
  icons_blue: {
    width: '100%',
    height: '100%',
    color: '#004AAD',
  },
  bottomIcons: {
    width: '25%',
    height: '55%',
  },
  view_main: {
    height: '100vh',
    minheight: '100vh',
    display: 'flex',
  },
  gradient_top: {
    height: '20%',
    width: '100%',
    alignItems: 'center',
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  AccountCircleIcon: {
    width: 150,
    height: 50,
    color: 'white',
    marginLeft: '-70%',
    marginTop: '2rem',
    marginBottom: '-2.8rem',
  },
  view_top_text: {
    alignItems: 'center',
  },
  text_welcome: {
    fontSize: 15,
    color: 'white',
    fontStyle: 'bold',
    fontFamily: 'Roboto_900Black'
  },
  text_username: {
    fontSize: 13,
    color: 'white',
    marginBottom: '-2.7rem',
    fontFamily: 'Roboto_400Regular_Italic'
  },
  NotificationsNoneIcon: {
    width: 25,
    height: 50,
    color: 'white',
    marginLeft: '75%',
  },
  view_button_text_input: {
    width: '90%',
    height: '25%',
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: '1.5rem',
  },
  button_text_input: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    flexDirection: 'row',
    width: '70%',
    flex: 1,
  },
  SearchIcon: {
    color: '#0157C8',
    width: 30,
  },
  view_center: {
    height: '70%',
    widght: '100%',
    color: '#F5F5F5',
  },
  gradient_bottom: {
    height: '10%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
