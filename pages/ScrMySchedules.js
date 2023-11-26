import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import boxIcon from '../assets/box-icon.png';
import { LinearGradient } from 'expo-linear-gradient';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useFonts, Roboto_900Black, Roboto_400Regular_Italic } from '@expo-google-fonts/roboto';

const AwaitingData = [
  {
    id:'001',
    info:['5555', '13/08/2023  14:42']
  },
  {
    id:'002',
    info:['5556', '25/09/2023  15:30']
  }
]

const FinalizedData = [
  {
    id:'001',
    info:['5551', '17/07/2023  09:25']
  },
  {
    id:'002',
    info:['5552', '13/08/2023  12:23']
  },
  {
    id:'003',
    info:['5553', '18/08/2023  14:37']
  },
  {
    id:'004',
    info:['5554', '23/09/2023  16:30']
  }
]

export default function Schedules({navigation}) {
  const scrHome = () => {
    navigation.navigate('ScrHome')
  }
  const scrMyDiscards = () => {
    navigation.navigate('ScrMyDiscards')
  }
  const scrBalance = () => {
    navigation.navigate('ScrBalance')
  }
  const [fontLoaded] = useFonts({
    Roboto_900Black, Roboto_400Regular_Italic,
})

if(!fontLoaded) {
    return null ;
}
  return (
    <View style={{flex: 1}}>
      <View style={styles.boxTitle}>
        <Text style={styles.tittle}>Meus Agendamentos</Text>
      </View>
      
      <View style={{height: '80%'}}>
      <View>
        <Text style={styles.subTittle}>Aguardando Coleta</Text>
        <FlatList
          data={AwaitingData}
          keyExtractor={item => item.id}
          renderItem={({item}) =>
            <View style={{flex: 1, paddingTop: 8, alignItems: 'center'}}>
              <View style={styles.box}>
                <View>
                  <Image style={styles.icon} source={boxIcon}/>
                </View>
                <View style={{justifyContent:'center'}}>
                  <Text style={styles.textBox}>Request Number: {item.info[0]}</Text>
                  <Text style={styles.textBox}>{item.info[1]}</Text>
                </View>
              </View>
            </View>}
        />
      </View>

      <View>
        <Text style={styles.subTittle}>Finalizados</Text>
        <FlatList
          data={FinalizedData}
          keyExtractor={item => item.id}
          renderItem={({item}) =>
            <View style={{flex: 1, paddingTop: 8, alignItems: 'center'}}>
              <View style={styles.box}>
                <View>
                  <Image style={styles.icon} source={boxIcon}/>
                </View>
                <View style={{justifyContent:'center'}}>
                  <Text style={styles.textBox}>Request Number: {item.info[0]}</Text>
                  <Text style={styles.textBox}>{item.info[1]}</Text>
                </View>
              </View>
            </View>}
        />
      </View>
      </View>
      <LinearGradient
        style={styles.gradient_bottom}
        colors={['#2B92D6', '#0ED028']}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 0.5, y: 0.5 }}>
        <TouchableOpacity onPress={scrHome} style={styles.bottomIcons}>
          <HomeOutlinedIcon style={styles.icons_white} />
        </TouchableOpacity>
        <TouchableOpacity onPress={scrMyDiscards} style={styles.bottomIcons}>
          <AutorenewOutlinedIcon style={styles.icons_white} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomIcons}>
          <CalendarMonthOutlinedIcon style={styles.icons_blue} />
        </TouchableOpacity>
        <TouchableOpacity onPress={scrBalance} style={styles.bottomIcons}>
          <AccountCircleOutlinedIcon style={styles.icons_white} />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  boxTitle: {
    flex: "row",
    backgroundImage: 'linear-gradient(to left, #0ED028 0%, #2B92D6 100%)',
    padding: 5,
    height: '10%'
  },
  tittle: {
    margin: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  subTittle: {
    margin: 15,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  box: {
    flex: "row",
    backgroundColor: '#F5F5F5',
    padding: 8,
    width: "95%",
    alignContent: "center",
    borderRadius: 10,
    flexDirection: "row"
  },
  textBox: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: 10,
    padding: 1
  },
  icon: {
    height: 50,
    width: 50,
    padding: 8
  },
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
  gradient_bottom: {
    height: '10%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomIcons: {
    width: '25%',
    height: '55%',
  },
});
