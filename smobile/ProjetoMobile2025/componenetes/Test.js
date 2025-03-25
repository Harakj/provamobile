import{View, Text, Image, StyleSheet, Button, TextInput} from 'react-native';


export function Test() {
    return(
      <View style={styles.containerProfile}>
        <Text style={styles.containerText}>Essa é a minha galeria!</Text>
        <Image style={styles.containerImg} source={require('../assets/bloop.jpg')}/>
        <Text style={styles.containerText2}>Essa é a minha galeria!</Text>
        <View style={styles.containerImg2}>
        <Image style={styles.imgFoda} source={require('../assets/pablo.jpg')}/>
        <Image style={styles.imgFoda} source={require('../assets/escobar.jpg')}/>
        </View>
        <Text style={styles.containerText}>Qual dos pablos e o verdadeiro?</Text>
        <Button>
          title="Enviar"
          color={'black'}
        /</Button>
        <TextInput
        style={style.txtInput}
          placeholder="nome"
          placeholderTextColor={'white'}

        />

        <TextInput
          style={style.txtInput}
          placeholder="mensagem"
          placeholderTextColor={'white'}

        />
      </View>

    )
  }

    const styles = StyleSheet.create({
      containerProfile:{
          flex: 1,
          backgroundColor: '#7FFFD4',
      },
      containerText:{
    },
    containerImg:{
      alignSelf: 'flex-end',
      borderRadius: '10px'
    },
    containerText2:{
      alignSelf: 'flex-end'
  },
  containerImg2:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: '10px'

  },
  imgFoda:{
    width: 200,
    height: 300,
    borderRadius: '10px'
  },
  txtInput:{
    borderWidth: 1,
    borderColor: 'white',
  }
  })




