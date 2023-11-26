import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import dropointsIcon from '../assets/dropoints-icon.png';
import boxIcon from '../assets/box-icon.png';
import { LinearGradient } from 'expo-linear-gradient';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const dados = [
  {
    id: '001',
    info: ['5550', '500'],
  },
  {
    id: '002',
    info: ['5549', '750'],
  },
  {
    id: '003',
    info: ['5548', '250'],
  },
  {
    id: '004',
    info: ['5547', '1000'],
  },
];

export default function ScrMyDiscards({ navigation }) {
  const scrHome = () => {
    navigation.navigate('ScrHome')
  }
  const scrMySchedules = () => {
    navigation.navigate('ScrMySchedules')
  }
  const scrBalance = () => {
    navigation.navigate('ScrBalance')
  }
  return (
    <View style={{flex: 1}}>
      <View style={styles.boxTitle}>
        <Text style={styles.tittle}>Meus Descartes</Text>
      </View>

      <View style={{height: '80%'}}>
      <View style={styles.containerDropoints}>
        <View style={styles.boxDropoints}>
          <Text style={styles.textBoxDropoints}>Meus Dropoints</Text>
          <View style={styles.saldo}>
            <Image style={styles.icon} source={dropointsIcon} />
            <Text style={styles.saldoText}>3000</Text>
          </View>
        </View>
      </View>

      <View style={styles.containerExtract}>
        <View>
          <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
            Extrato
          </Text>
        </View>
        <FlatList
          data={dados}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ flex: 1, paddingTop: 8, alignItems: 'center' }}>
              <View style={styles.boxExtract}>
                <View>
                  <Image style={styles.icon} source={boxIcon} />
                </View>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={styles.textBox}>
                    {' '}
                    Request Number: {item.info[0]}
                  </Text>
                  <Text style={styles.textBox}> {item.info[1]} Dropoints</Text>
                </View>
              </View>
            </View>
          )}
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
        <TouchableOpacity style={styles.bottomIcons}>
          <AutorenewOutlinedIcon style={styles.icons_blue} />
        </TouchableOpacity>
        <TouchableOpacity onPress={scrMySchedules} style={styles.bottomIcons}>
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
  boxTitle: {
    flex: 'row',
    backgroundImage: 'linear-gradient(to left, #0ED028 0%, #2B92D6 100%)',
    padding: 5,
    width: '100%',
    height: '10%'
  },
  tittle: {
    margin: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerDropoints: {
    flex: 'row',
    backgroundColor: '#FFFFF',
    paddingTop: 15,
    alignItems: 'center',
  },
  boxDropoints: {
    flex: 'row',
    backgroundColor: '#FFFFFF',
    padding: 8,
    width: '90%',
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
  },
  textBoxDropoints: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 10,
  },
  saldo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  saldoText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 10,
  },
  icon: {
    height: 50,
    width: 50,
    padding: 8,
  },
  containerExtract: {
    flex: 'row',
    backgroundColor: '#FFFFF',
    paddingTop: 15,
  },
  boxExtract: {
    flex: 'row',
    backgroundColor: '#FFFFFF',
    padding: 8,
    width: '90%',
    alignContent: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  textBox: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 10,
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
