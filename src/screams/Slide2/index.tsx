import { Image, View, Text, ImageBackground, } from 'react-native'
import { styles } from './styles'
import { useState } from "react"
export function Slide2() {
    const [page, setPage] = useState(0)
    const slide2 = require("../../assets/logo_pequena.png");
    const slide22 = require("../../assets/nvidea.png");
    const slide222 = require("../../assets/apple.jpg");
    const slide2222 = require("../../assets/tesla.jpg");
    return (
        <View style={styles.container}>
            <View style={styles.box3}>
                <View style={styles.box2}>
                    <Text style={styles.text}>o mercado em segundos</Text>
                    <Text style={styles.text2}>açoes, ETFs, etc etc</Text>
                </View>
                <Image style={styles.img} source={slide2} />
            </View>
            <View style={styles.ficaesq}>

                <View style={styles.esquerda}>
                    <Image style={styles.img2} source={slide22} />
                    <Text style={styles.text2}>empresa 1</Text>
                </View>

                <View style={styles.esquerda}>
                    <Image style={styles.img2} source={slide222} />
                    <Text style={styles.text2}>empresa 2</Text>
                </View>

                <View style={styles.esquerda}>
                    <Image style={styles.img2} source={slide2222} />
                    <Text style={styles.text2}>empresa 3</Text>
                </View>

            </View>

        </View>
    )

}