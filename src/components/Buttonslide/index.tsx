import { View, TouchableHighlight, Text } from "react-native";
import {styles} from "../../screams/styles/style"
import { pagesArray } from "../../screams/PagesArray"
import { Dispatch, SetStateAction } from "react";
interface ButtonsProps {
    page: number;
    altera: Dispatch<SetStateAction<number>>
}
export function Buttons({page, altera} :ButtonsProps) {
    return(
        //dois botões
    <View style={styles.SwitchButtonContainer}>
        <TouchableHighlight
            style={[styles.SwitchButton, page === pagesArray.length - 1 ? styles.SwitchButtonActived : styles.SwitchButtonDisabled]}
            onPress={() => {
                if (page !== 0) { //para não vazar o vetor
                    altera(page - 1);
                }
            }}
        >
            <Text style={styles.Arrow}>&larr;</Text>
        </TouchableHighlight>
        <TouchableHighlight
            style={[styles.SwitchButton, page === 0 ? styles.SwitchButtonActived : styles.SwitchButtonDisabled]}
            onPress={() => {
                if (page !== pagesArray.length - 1) {//para não vazar o vetor
                    altera(page + 1);
                }
            }}
        >

            <Text style={styles.Arrow}>&rarr;</Text>
        </TouchableHighlight>
    </View>
    )
}