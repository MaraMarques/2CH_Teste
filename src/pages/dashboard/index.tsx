import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, ScrollView } from "react-native";
import { Cadastro } from "../../storage/Cadastro";
import { ReturnInput } from "../../components/ReturnInput";
import { styles } from "./styles";

//1º passo
export default function DashBoard() {

    //6º passo
    const [carName, setCarName] = useState('');
    const [clientCode, setClientCode] = useState('');
    const [carValue, setCarValue] = useState('');
    const [carColor, setCarColor] = useState('');
    const [dateCar, setDateCar] = useState('');
    const [garage, setGarage] = useState<Cadastro[]>([]); //listagem das informações para o retorno, Cadastro está no Storage

    // 7º passo
    //Filtros de entrada das inforamções
    function handleADD() {
        //Filtrar clientes
        if (clientCode != '001394' && clientCode != '007788' && clientCode != '001020' && clientCode != '003040') {
            return Alert.alert('Cliente Inválido!', 'Código do Cliente não reconhecido.')
        }
        //Filtrar veiculo
        if (carName.toLocaleLowerCase() != 'ferrari' && carName.toLocaleLowerCase() != 'camaro' && carName.toLocaleLowerCase() != 'onix' && carName.toLocaleLowerCase() != 'hb20' && carName.toLocaleLowerCase() != 'palio' && carName.toLocaleLowerCase() != 'porsche') {
            return Alert.alert('Nome Inválido!', 'Nome do veiculo não reconhecido.')
        }
        //Filtrar cor
        if (carColor.toLocaleLowerCase() != 'prata' && carColor.toLocaleLowerCase() != 'branco' && carColor.toLocaleLowerCase() != 'vermelho' && carColor.toLocaleLowerCase() != 'amarelo') {
            return Alert.alert('Cor Inválida!', 'Cor do veiculo não reconhecida.')
        }
        //Verificar espaços em branco
        if (!carValue.trim() || !carColor.trim() || !clientCode.trim() || !carName.trim() || !dateCar.trim()) {
            return Alert.alert('Cadastro Incompleto!', 'Por favor, preencha todos os campos para finalizar o cadastro.')
        }

        // if((dateCar>= '1999') && (dateCar<='3000')){
        //     return
        // }

        const dataEntrada = new Date(dateCar)
        //Integração com o CADASTRO
        const data = {
            id: String(new Date().getTime()),
            carName,
            clientCode,
            carValue: parseFloat(carValue), //converter String para float
            carColor,
            dateCar,
        }

        //Limpeza do formulario para novo cadastro
        setGarage([...garage, data]);
        setCarName('')
        setCarColor('')
        setCarValue('')
        setClientCode('')
        setDateCar('')

    }

    //8º passo
    function handleTotals() {

        //Somatorio de veiculos
        console.log('1 - Tipo e Total de Veiculos:')
        const veiculos = ['ferrari', 'camaro', 'onix', 'hb20', 'palio', 'porsche']
        veiculos.map(carros => {
            const totalValue = garage
                //retornar valor
                .filter(dat => dat.carName.toLocaleLowerCase() === carros)
                .reduce((total, n) => total + n.carValue, 0)

            const totalType = garage
                //retornar quantidade
                .filter(dat => dat.carName.toLocaleLowerCase() === carros)
            const totalPi = totalType.length

            if (totalValue > 0) {
                const dataSum = {
                    tipo: carros,
                    quantidade: totalPi,
                    valor_total: totalValue,
                }
                console.log(dataSum)
            }
        })
        console.log('\n ------------------------')

        //Veiculos na Cor prata e branco
        console.log('2 - Cores Prata e Branco no Total:')
        const cores = ['prata', 'branco']
        cores.map(cor => {
            const totalColors = garage
                .filter(dat => dat.carColor.toLocaleLowerCase() === cor)

            const totalIndex = totalColors.length
            const dataColors = {
                cor,
                quantidade: totalIndex //Somar a quantidade de cada cor
            }
            console.log(dataColors)
        })
        console.log('\n ------------------------')

        console.log('3 - Total por Cliente:')
        const clientes = ['001394', '007788', '001020', '003040']
        clientes.map(client => {
            const totalClientes = garage
                .filter(dat => dat.clientCode === client)
                .reduce((total, n) => total + n.carValue, 0)

            const totalQuant = garage
                .filter(dat => dat.clientCode.toLocaleLowerCase() === client)
            const totalId = totalQuant.length

            if (totalClientes > 0) {
                const dataClient = {
                    cliente: client,
                    quant_veiculo: totalId,
                    valor_total: totalClientes,
                }
                console.log(dataClient)
            }
        })
        console.log('\n ------------------------')

    }

    //2º passo
    return (
        //3º passo
        //Interface Input
        <View style={styles.containerMain}
        //View principal
        >
            <View style={styles.containerTitle}>
                <Text style={styles.title}> Cadastro de Veiculos </Text>
            </View>

            <KeyboardAvoidingView style={styles.keyBox}>
                <View

                    style={styles.containerText}
                //input
                >
                    <Text style={styles.text1}> Nome do Veiculo: </Text>
                    <TextInput
                        style={styles.text1Box}
                        placeholder=" Veiculo "
                        value={carName}
                        onChangeText={value => setCarName(value)}
                    />
                    <Text style={styles.text1}> Código do Cliente: </Text>
                    <TextInput
                        style={styles.text1Box}
                        placeholder=" Código "
                        keyboardType="numeric"
                        value={clientCode}
                        onChangeText={value => setClientCode(value)}
                    />
                    <Text style={styles.text1}> Valor do Veiculo: </Text>
                    <TextInput style={styles.text1Box}
                        placeholder=" R$ "
                        keyboardType="decimal-pad"
                        value={carValue}
                        onChangeText={value => setCarValue(value)}
                    />
                    <View style={styles.divBox}>
                        <Text style={styles.text2}> Cor </Text>
                        <Text style={styles.text2}> Mês/Ano </Text>
                    </View>
                    <View style={styles.divBox}>
                        <TextInput
                            style={styles.text2Box}
                            placeholder=" Cor do Veiculo "
                            maxFontSizeMultiplier={2}
                            value={carColor}
                            onChangeText={value => setCarColor(value)}
                        />
                        <TextInput
                            style={styles.text2Box}
                            placeholder="  Data de Entrada "
                            maxFontSizeMultiplier={2}
                            value={dateCar}
                            onChangeText={value => setDateCar(value)}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>

            <View

                style={styles.containerButton}
            //Botão, 4º passo
            >
                <TouchableOpacity style={styles.buttonBox}
                    onPress={handleADD}
                >
                    <Text style={styles.buttonText} > ADICIONAR </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBox}
                    onPress={handleTotals}
                >
                    <Text style={styles.buttonText}> TOTAL </Text>
                </TouchableOpacity>
            </View>

            <View
                style={styles.listBox}
            //5º passo
            >
                <FlatList
                    //retorno das informações
                    data={garage} //garagem = garage
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <ReturnInput data={item} />
                    )}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View >
    )
}