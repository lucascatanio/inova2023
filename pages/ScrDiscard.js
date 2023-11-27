import React, { useState, MouseEvent } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BatteryChargingFullOutlinedIcon from '@mui/icons-material/BatteryChargingFullOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import ElectricalServicesOutlinedIcon from '@mui/icons-material/ElectricalServicesOutlined';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useFonts, Roboto_900Black, Roboto_400Regular_Italic } from '@expo-google-fonts/roboto';

export default function ScrDiscard({ navigation }) {
  const [devices, setDevices] = React.useState([]);

  const handleDevices = (
    MouseEvent,
    newDevices
  ) => {
    if (newDevices.length) {
      setDevices(newDevices);
    }
    
  };

  const scrWeightMap = () => {
    navigation.navigate('ScrWeightMap', {devices});
  };
  const [fontLoaded] = useFonts({
    Roboto_900Black,
    Roboto_400Regular_Italic,
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={styles.view_main}>
      <LinearGradient
        style={styles.gradient_top}
        colors={['#2B92D6', '#0ED028']}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 0.5, y: 0.5 }}>
        <Text style={styles.text_gradient_top}>O que você vai descartar?</Text>
      </LinearGradient>
      <View style={styles.view_center}>
        <View style={styles.view_group_buttons}>
          <View style={styles.view_2_buttons}>
            <ToggleButtonGroup
              value={devices}
              onChange={handleDevices}
              aria-label="type"
              size="large"
              style={styles.group_buttons}>
              <ToggleButton value="battery" aria-label="battery">
                <View style={styles.view_button_icon}>
                  <BatteryChargingFullOutlinedIcon style={styles.icon_button} />
                  <Text style={{ color: '#004AAD' }}>Pilhas e</Text>
                  <Text style={{ color: '#004AAD' }}>Baterias</Text>
                </View>
              </ToggleButton>
              <ToggleButton
                value="eletrical_devices"
                aria-label="eletrical_devices">
                <View style={styles.view_group_buttons}>
                  <ElectricalServicesOutlinedIcon style={styles.icon_button} />
                  <Text style={{ color: '#004AAD' }}>Cabos e fios</Text>
                </View>
              </ToggleButton>
            </ToggleButtonGroup>
          </View>
          <View style={styles.view_2_buttons}>
            <ToggleButtonGroup
              value={devices}
              onChange={handleDevices}
              aria-label="type"
              size="large"
              style={styles.group_buttons}>
              <ToggleButton
                value="electronic_devices"
                aria-label="electronic_devices">
                <View style={styles.view_group_buttons}>
                  <SmartphoneOutlinedIcon style={styles.icon_button} />
                  <Text style={{ color: '#004AAD' }}>Aparelhos</Text>
                  <Text style={{ color: '#004AAD' }}>Eletrônicos</Text>
                </View>
              </ToggleButton>
              <ToggleButton
                value="home_appliances"
                aria-label="home_appliances">
                <View style={styles.view_group_buttons}>
                  <KitchenOutlinedIcon style={styles.icon_button} />
                  <Text style={{ fontSize: 10, color: '#004AAD' }}>
                    Eletrodomésticos
                  </Text>
                </View>
              </ToggleButton>
            </ToggleButtonGroup>
          </View>
          <View style={styles.view_2_buttons}>
            <ToggleButtonGroup
              value={devices}
              onChange={handleDevices}
              aria-label="type"
              size="large"
              style={styles.group_buttons}>
              <ToggleButton
                value="computer_components"
                aria-label="computer_components">
                <View style={styles.view_group_buttons}>
                  <DesktopWindowsOutlinedIcon style={styles.icon_button} />
                  <Text style={{ fontSize: 10, color: '#004AAD' }}>
                    Componentes de
                  </Text>
                  <Text style={{ fontSize: 10, color: '#004AAD' }}>
                    Informática
                  </Text>
                </View>
              </ToggleButton>
              <ToggleButton value="tools" aria-label="tools">
                <View style={styles.view_group_buttons}>
                  <HandymanOutlinedIcon style={styles.icon_button} />
                  <Text style={{ color: '#004AAD' }}>Ferramentas</Text>
                </View>
              </ToggleButton>
            </ToggleButtonGroup>
          </View>
        </View>
      </View>
      <LinearGradient
        style={styles.gradient_bottom}
        colors={['#2B92D6', '#0ED028']}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 0.5, y: 0.5 }}>
        <TouchableOpacity
          onPress={scrWeightMap}
          style={styles.button_gradient_bottom}>
          <Text style={styles.text_button_gradient_bottom}>Seguinte</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  view_main: {
    height: '100vh',
    minheight: '100vh',
    display: 'flex',
  },
  gradient_top: {
    height: '15%',
    width: '100%',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
  },
  text_gradient_top: {
    fontSize: 18,
    color: 'black',
    fontStyle: 'bold',
    fontFamily: 'Roboto_900Black'
  },
  view_center: {
    height: '75%',
    widght: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view_2_buttons: {
    marginBottom: '0.5rem',
    height: '33%',
    widght: '100%',
  },
  group_buttons: {
    height: '100%',
    widght: '100%',
  },
  icon_button: {
    width: 100,
    height: 80,
    color: '#004AAD',
  },
  view_button_icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient_bottom: {
    height: '10%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  button_gradient_bottom: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_button_gradient_bottom: {
    fontSize: 18,
    color: 'black',
    fontStyle: 'bold',
    fontFamily: 'Roboto_900Black'
  },
  view_group_buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
    widght: '90%',
  },
});
