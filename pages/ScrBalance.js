import { View, Text, Image, StyleSheet } from 'react-native';

import dropointsIcon from '../../assets/dropoints-icon.png';
import kalungaTicket from '../../assets/ticket-kalunga.png';
import cacaushowTicket from '../../assets/ticket-cacaushow.png';
import carrefourTicket from '../../assets/ticket-carrefour.png';
import cobasiTicket from '../../assets/ticket-cobasi.png';


export default function ScrBalance() {
  return (
    <View>

      <View style={styles.boxTitle}>
        <Text style={styles.tittle}>Meu Saldo</Text>
      </View>


      <View style={styles.containerDropoints}>
        <View style={styles.boxDropoints}>
          <Text style={styles.textBoxDropoints}>Meus Dropoints</Text>
          <View style={styles.saldo}>
            <Image style={styles.icon} source={dropointsIcon} />
            <Text style={styles.saldoText}>3000</Text>
          </View>
        </View>
      </View>


      <View style={{alignItems: 'center', paddingTop: 15}}>
        <View style={{backgroundColor: '#F5F5F5', borderRadius: 10, width: "90%", height: 300}}>
          <View>
            <Text style={styles.textTicket}>Resgate Cupons!!!</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image style={styles.styleTicket} source={carrefourTicket} />
            <Image style={styles.styleTicket} source={cacaushowTicket} />
            <Image style={styles.styleTicket} source={cobasiTicket} />
            <Image style={styles.styleTicket} source={kalungaTicket} />
          </View>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  boxTitle: {
    backgroundImage: 'linear-gradient(to left, #0ED028 0%, #2B92D6 100%)'
  },
  tittle: {
    margin: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  containerDropoints: {
    flex: "row",
    backgroundColor: '#FFFFF',
    paddingTop: 15,
    alignItems: "center"
  },
  boxDropoints: {
    flex: "row",
    backgroundColor: '#F5F5F5',
    padding: 8,
    width: "90%",
    height: 100,
    borderRadius: 10,
    justifyContent: 'center'
  },
  textBoxDropoints: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 10
  },
  saldo: {
    flexDirection: "row",
    alignItems: "center"
  },
  saldoText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 10
  },
  icon: {
    height: 50,
    width: 50,
    padding: 8
  },
  textTicket: {
    fontSize: 16, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    paddingTop: 10
  },
  styleTicket: {
    height: 65,
    width: '95%'
  }
});
