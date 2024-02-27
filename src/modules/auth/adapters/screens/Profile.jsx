import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button,Avatar } from '@rneui/base'
import { getAuth } from 'firebase/auth'
import Loading from '../../../../kernel/components/Loading'

const Profile = () => {
  const auth = getAuth();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Avatar
          size={64}
          rounded
          source={{ uri: 'https://randomuser.me/api/portraits/women/57.jpg' }}
          title="Bj"
          containerStyle={{ backgroundColor: 'grey' }}
        >
          <Avatar.Accessory size={23} />
        </Avatar>
        <View style={{flexDirection: 'column', marginLeft: 16}}>
          <Text style={{fontSize:14, fontWeight: 'bold'}}>Agles Avelar Ocmapo</Text>
          <Text style={{fontSize:12}}>AglesAv@utez.edu.mx</Text>
        </View>
      </View>
      <Button
        title='Cerrar Sesión'
        containerStyle={styles.Btncontainer}
        buttonStyle={styles.BtnStyle}
        titleStyle={{ color: 'black' }}
        onPress={() => auth.signOut()}
      />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#FFF'

  },
  Btncontainer: {
    borderRadius: 16,
    width: '80%',
  },
  BtnStyle: {
    backgroundColor: 'tomato',
    color: 'black'
  },
  row: {
    flexDirection: 'row',
    padding: 16
  }
})