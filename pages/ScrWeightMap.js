import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import { LinearGradient } from 'expo-linear-gradient';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {
  useFonts,
  Roboto_900Black,
  Roboto_400Regular_Italic,
} from '@expo-google-fonts/roboto';
import axios from 'axios';

const url = "http://api.wmomodavix.com.br/submit/discard";

export default function Peso_mapa({ route,navigation }) {
//  const [infoDiscard, setInfoDiscard] = useState([]);
  const [region, setRegion] = useState('');
  const [email, setEmail] = useState('jose@mane.com.br');
  const [msg, setMsg] = useState('');
  const [slideValue, setSlideValue] = useState(40);

  const [fontLoaded] = useFonts({
    Roboto_900Black,
    Roboto_400Regular_Italic,
  });
  const {devices} = route.params

  const handleRegions = (e) => {
    setRegion(e.target.textContent)
  }

  const handleSubmit = () => {
    let config = {
      withCredencials: false,
      responseType: "json",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
    };
    let json = {
      "email": email,
      "devices": JSON.stringify(devices),
      "region": region,
      "peso": slideValue
    };
    axios
      .post(url, json, config)
      .then((res) => {
        if (res.data.success) {
          setMsg(res.data.msg);
          navigation.navigate('ScrMySchedules')
        } else {
          setMsg(res.data.msg);
        }
      })
      .catch((err) => {
        setMsg("Erro ao tentar enviar o registro.");
        console.log(err);
      });
  }

  console.log(devices);

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
        <Text style={styles.text_gradient_top}>Qual o peso estimado?</Text>
        <DiscreteSlider />
      </LinearGradient>
      <View style={styles.view_center}>
        <Text style={styles.text_view_center}>
          Encontre o ponto de coleta mais próximo de:
        </Text>
        <Autocomplete
          disablePortal
          onChange={handleRegions}
          closeText
          id="combo-box-demo"
          options={regions}
          sx={styles.auto_complete}
          renderInput={(params) => (
            <TextField {...params} label="Escolha a região" />
          )}
        />
      </View>
      <LinearGradient
        style={styles.gradient_bottom}
        colors={['#2B92D6', '#0ED028']}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 0.5, y: 0.5 }}>
        <TouchableOpacity onPress={ () => { handleSubmit() } }>
          <Text style={styles.text_gradient_bottom}>Confirmar</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
const regions = [
  { label: 'Vitória - ES', uf: 'ES' },
  { label: 'Cariacica - ES', uf: 'ES' },
  { label: 'Vila Velha - ES', uf: 'ES' },
  { label: 'Serra - ES', uf: 'ES' },
  { label: 'Viana - ES', uf: 'ES' },
];
const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: '0 auto',
    marginTop: 30,
  },
  margin: {
    height: theme.spacing(4),
  },
}));

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 10,
    label: '10',
  },
  {
    value: 20,
    label: '20',
  },
  {
    value: 30,
    label: '30',
  },
  {
    value: 40,
    label: '40',
  },
  {
    value: 50,
    label: '50',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

function DiscreteSlider() {
  const classes = useStyles();

  const [slideValue, setSlideValue] = useState(100);

  const handleChange = (event, newValue) => {
    setSlideValue(newValue);
  };

  // const handleInfoDiscards = () => {
  //   setInfoDiscard([
  //     email,
  //     devices,
  //     region,
  //     slideValue
  //   ]);
  // };

  return (
    <div className={classes.root}>
      <Slider
        onChange={handleChange}
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={5}
        marks={marks}
        valueLabelDisplay="on"
        min={0}
        max={50}
      />
    </div>
  );
}

const styles = StyleSheet.create({
  gradient_top: {
    height: '30%',
    width: '100%',
    alignItems: 'center',
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    justifyContent: 'center',
  },
  view_main: {
    height: '100vh',
    minheight: '100vh',
    display: 'flex',
  },
  text_gradient_top: {
    fontSize: 20,
    marginTop: '2rem',
    fontStyle: 'bold',
    fontFamily: 'Roboto_900Black'
  },
  view_center: {
    height: '60%',
    width: '100%',
    alignItems: 'center',
  },
  gradient_bottom: {
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_gradient_bottom: {
    fontSize: 24,
    fontStyle: 'bold',
    fontFamily: 'Roboto_900Black'
  },
  text_view_center: {
    fontStyle: 'bold',
    color: '#004AAD',
    marginTop: '1rem',
  },
  auto_complete: {
    width: '80%',
    marginTop: '1rem',
  },
});
