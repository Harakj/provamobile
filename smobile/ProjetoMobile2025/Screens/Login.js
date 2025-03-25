import{View, Text, Image, StyleSheet, Button, TextInput} from 'react-native';


export function Login() {
    return(
      <View style={styles.containerProfile}>
        <Text style={styles.containerText}>Tela de login</Text>
        <View style={styles.containerImg2}>
        </View>
        <Button>
          title="Realizar login"
          color={'black'}
        /</Button>
        <TextInput
        style={style.txtInput}
          placeholder="Usuario:"
          placeholderTextColor={'white'}

        />

        <TextInput
          style={style.txtInput}
          placeholder="Senha:"
          placeholderTextColor={'white'}

        />
      </View>

    )
  }

    const styles = StyleSheet.create({
      containerProfile:{
          flex: 1,
      },
      containerText:{
        textAlign: 'center'
    },

  txtInput:{
    borderWidth: 1,
    borderColor: 'black',
  }
})




