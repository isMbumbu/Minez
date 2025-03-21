import { View, Text, StyleSheet , Button , ImageBackground, Pressable} from 'react-native'
import {React,useEffect,useState} from 'react'
import {Link} from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import trialz from '@/assets/images/dietmar-reichle-caiX9QloFc8-unsplash.jpg'


const App = () => {
  // const [isLoading, setIsLoading]= useState(true);

  // useEffect(()=>{
  //   const timer=setTimeout(()=>{
  //     setIsLoading(false)
  //   },3000)
  //   return ()=>{clearTimeout(timer)}
  // },[])
  // if(isLoading){
  //   return (
  //   <Text>HEYY</Text>
  //   )
  // }
  return (

    <View style={styles.container}>
      <ImageBackground
      source={trialz}
      resizeMode='cover'
      style={styles.image}>
      <Text style={styles.text}>PLANTS WORLD</Text>
      <View style={styles.navButtons}>
      <Pressable style={styles.buttonContainer} onLongPress={()=>{alert('Pressed')}}>
        <Link href="suggest">SUGGEST</Link>
      
      </Pressable>

      <Pressable style={styles.buttonContainer}>
      <Link href='/Categories'>
      <MaterialIcons name="category" size={24} color="black" /></Link>
      </Pressable>
      
      </View>
      </ImageBackground>
    </View>

  )
}

export default App

const styles= StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    alignItems:'center'

  },
  text:{
    marginTop:20,
    justifyContent:'center',
    textAlign:'center',
    color: '#fff',
    fontSize:30,
    fontWeight:'bold',
    backgroundColor:'rgba(0,0,0,0.5)'
  }, 
  buttonContainer:{
    width:100,
    marginLeft:10,
    padding: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor:'#fff',
    justifyContent:'center',
    borderRadius:20,
    alignItems:'center'

    
  },
  image:{
    width:'100%',
    height:'100%',
    flex:1,
    resizeMode:'cover',
    justifyContent:'center'
  },
  buttonText:{
    justifyContent:'center',
  },
  navButtons:{
    marginTop:20,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center'
  }
})