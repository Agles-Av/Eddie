import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { Button,Avatar } from '@rneui/base'
import { getAuth,updateProfile } from 'firebase/auth'
import Loading from '../../../../kernel/components/Loading'

const Profile = () => {
  const [user, setUser] =  useState(null);
  const auth = getAuth();

  useEffect(()=>{
    const profile = auth.currentUser;
    if (profile!=null) {
      setUser(profile);
    }
  },[]);

  const updateUserProfile = () =>{
    updateProfile(auth.currentUser, {
      displayName: "Agles Avelar Ocampo", photoURL: "https://firebasestorage.googleapis.com/v0/b/restauranteagles-b4e14.appspot.com/o/avatar%2FCI4vStuxs8MCYVukZgfNzOG5XFC2.jpeg?alt=media&token=5686ca7d-d267-4991-b415-d7770c839154"
    }).then(() => {
      console.log("Listo");
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Avatar
          size={64}
          rounded
          source={{ uri: user?.photoURL ? user?.photoURL :'https://randomuser.me/api/portraits/women/57.jpg' }}
          title="Bj"
          containerStyle={{ backgroundColor: 'grey' }}
        >
          <Avatar.Accessory size={23} />
        </Avatar>
        <View style={{flexDirection: 'column', marginLeft: 16}}>
          <Text style={{fontSize:14, fontWeight: 'bold'}}>{user?.displayName || 'Anonimo'}</Text>
          <Text style={{fontSize:12}}>{user?.email || "no hay correo electronico"}</Text>
        </View>
      </View>
      <Button
        title='Cerrar Sesión'
        containerStyle={styles.Btncontainer}
        buttonStyle={styles.BtnStyle}
        titleStyle={{ color: 'black' }}
        onPress={() => auth.signOut()}
      />
            <Button
        title='Actualizar'
        containerStyle={styles.Btncontainer}
        buttonStyle={styles.BtnStyle}
        titleStyle={{ color: 'black' }}
        onPress={updateUserProfile}
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
  },
})