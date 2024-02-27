import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base'
import { getAuth } from 'firebase/auth'
import Loading from '../../../../kernel/components/Loading'

const Profile = () => {
    const auth = getAuth();
    
  return (
    <View style={styles.container}>
      <Button 
      title='Cerrar Sesión'
      containerStyle={styles.Btncontainer}
      buttonStyle={styles.BtnStyle}
      titleStyle={{color:'black'}}
      onPress={() => auth.signOut()}
      />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
        backgroundColor: '#FFF'
    },
    Btncontainer:{
        borderRadius: 16,
        width: '80%',
    },
    BtnStyle:{
        backgroundColor:'tomato',
        color:'black'
    }
})