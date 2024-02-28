import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import UsuarioAvatar from '../../../../../../assets/infoProfile.png'
import { getAuth,updateProfile } from 'firebase/auth'
import { Avatar } from '@rneui/base';
import * as ImagePicker from "expo-image-picker"
import * as Medialibrary from "expo-media-library"
import { getDownloadURL, getStorage,ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../../../../config/util/firebaseConnection';


const auth = getAuth();
export default function InfoProfile(props) {
    const {infoUser:{photoURL,displayName,email,uid}} = props;
    const [showLoading,setShowLoading] = useState(false);
    const uploadImage = async (uri) => {
        setShowLoading(true);
        const response = await fetch(uri);
        const {_bodyBlob} = response;
        const storageRef = ref(storage, `avatar/${uid}`);
        return uploadBytes(storageRef,_bodyBlob)
    }

    const uploadPhotoUrl = () => {
        getDownloadURL(ref(storage, `avatar/${uid}`)).then((url) => {
            updateProfile(getAuth().currentUser,{
                photoURL: url
            }).catch((error) =>{
                console.log(error);
                alert("Ocurrio un errror")
            })
            .finally(()=>{
                setShowLoading(false);
            })
        });
    }
    return (
        <View style={styles.row}>
            <Avatar
                size={64}
                rounded
                source={photoURL ? {uri:photoURL} : UsuarioAvatar}
                title="Bj"
                containerStyle={{ backgroundColor: 'grey' }}
            >
                <Avatar.Accessory size={23} />
            </Avatar>
            <View style={{ flexDirection: 'column', marginLeft: 16 }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{displayName || 'Anonimo'}</Text>
                <Text style={{ fontSize: 12 }}>{email || "no hay correo electronico"}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        padding: 16
      },
})