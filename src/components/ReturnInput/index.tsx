import { View, Text } from "react-native";
import { Cadastro } from "../../storage/Cadastro";
import { styles } from "./styles";

type Props = {
    data: Cadastro
}

//5º passo

export function ReturnInput({ data }: Props) {
    return (
        <View style={styles.containerMain}>
            <Text style={styles.textTitle}> Código do Cliente </Text>
            <Text style={styles.input1}>{data.clientCode}</Text>

            
            <View style={styles.divBox}>
                <Text style={styles.textTitle}> Tipo </Text>
                <Text style={styles.textTitle}> Cor </Text>
            </View>
            <View style={styles.divBox}>
                <Text style={styles.Textinput}>{data.carName}</Text>
                <Text style={styles.Textinput}>{data.carColor}</Text>
            </View>


            <View style={styles.divBox}>
                <Text style={styles.textTitle}> Data </Text>
                <Text style={styles.textTitle}> Valor </Text>
            </View>
            <View style={styles.divBox}>
                <Text style={styles.Textinput}>{data.dateCar}</Text>
                <Text style={styles.Textinput}>R${data.carValue}</Text>
            </View>

        </View>
    )
}