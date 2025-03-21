import { View, Text,StyleSheet , ImageBackground , Pressable, TextInput } from 'react-native'
import React from 'react'
import triala from '@/assets/images/nick-fewings-yrf7EwzaSDU-unsplash.jpg'


const suggest= () => {
  return (
    <View style={styles.view1}>
      <ImageBackground
      source={triala}
      resizeMode='cover'
      style={styles.image}
      >
      <View style={styles.formView}>
        <View style={styles.textInputs}>
          <Text style={styles.text}>description</Text>
          <TextInput
          style={styles.input}
          placeholder='plant description..'
          />
        </View>
        <View style={styles.textInputs}>
          <Text style={styles.text}>plant name</Text>
          <TextInput
          style={styles.input}
          placeholder='Plants name'
          />
        </View>
        <View style={styles.textInputs}>
          <Text style={styles.text}>  Message  </Text>
          <TextInput
          style={styles.input}
          placeholder='Enter Message'
          multiline={true}
          numberOfLines={4}
          />
        </View>
        <Pressable >
          <Text style={styles.text1}>SUGGEST</Text>
        </Pressable>
      </View>
      
      </ImageBackground>
    </View>
  )
}

export default suggest
const styles=StyleSheet.create({
  view1:{
    display:'flex',
    flex:1,
    flexDirection:'column',
    textAlign:'center'
  },
  image:{
    width:'100%',
    height:'100%',
    justifyContent:'center'
  },
  text1:{
    marginTop:20,
    color:'#fff',
    fontSize:40,
    fontWeight:10,
    textAlign:'center'

    
  },
  formView:{
    display:'flex',
    flexDirection:'column',
    backgroundColor:'rgba(0,0,0,0.5)',
    width:'100%'
    
  },
  textInputs:{
    marginTop:20,
    marginLeft:20,
    display:'flex',
    flexDirection:'row',

  },
  input:{
    width:250,
    marginLeft:20,
    backgroundColor:'#fff',
    alignItems:'center',
    textAlign:'center',
    fontSize:20,
    fontFamily:'San-serif',
    borderRadius:10
  },
  text:{
    marginTop:20,
    justifyContent:'center',
    textAlign:'center',
    color: '#fff',
    fontSize:15,
    fontWeight:'bold',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center'
  },
  text1:{
    alignContent:'center',
    marginTop:20,
    marginLeft:100,
    marginBottom:10,
    justifyContent:'center',
    textAlign:'center',
    color: '#fff',
    fontSize:25,
    fontWeight:'bold',
    backgroundColor:'rgba(3, 2, 2, 2.5)',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    width:120,
    borderRadius:20
  }
})