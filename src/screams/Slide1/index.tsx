import { Image, View, Text, ImageBackground, TouchableOpacityBase, } from 'react-native'
import { styles } from './styles'
import { useState } from "react"
import { MenuStackTypes } from '../../navigation/MenuStack.navigation'
import { TouchableOpacity } from 'react-native-gesture-handler'
export function Slide1() {
    const [page, setPage] = useState(0)
    const slide1 = require("../../assets/logo.png");
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={slide1} />
            <View />

            <View style={styles.grand}>

                <TouchableOpacity>
                    <View style={styles.container}>
                        <View style={styles.box}>
                            <Text style={styles.text}>o mercado em segundos</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                
                <View style={styles.container}>
                    <View style={styles.box2}>
                        <Text style={styles.text}>seu radar</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.box}>
                        <Text style={styles.text}>seus lucros</Text>
                    </View>
                </View>
            </View>
        </View>
    )

}