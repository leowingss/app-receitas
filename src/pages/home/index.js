import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    FlatList
} from 'react-native';

import { api } from '../../services/api';

import { useState, useEffect } from 'react';

import { Ionicons } from '@expo/vector-icons';

import { Logo } from '../../components/logo';
import { FoodList } from '../../components/foodlist';

import { useNavigation } from '@react-navigation/native';

import { Text as MotiText } from 'moti';

export default function Home() {

    const [inputValue, setInputValue] = useState('');
    const [foods, setFoods] = useState([]);

    const navigation = useNavigation();


    function handleSearch() {
        if (!inputValue) return;

        let input = inputValue;
        navigation.navigate("Search", { name: input });

        setInputValue('');
    }

    useEffect(() => {

        async function fetchApi() {
            const response = await api.get('/foods');
            setFoods(response.data);
        }

        fetchApi();

    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Logo />

            <MotiText
                style={styles.title}
                from={{
                    opacity: 0,
                    translateY: 15
                }}
                animate={{
                    opacity: 1,
                    translateY: 0
                }}
                transition={{
                    delay: 100,
                    type: 'timing',
                    duration: 650
                }}
            >Encontre a receita</MotiText>

            <MotiText
                style={styles.title}
                from={{
                    opacity: 0,
                    translateY: 18
                }}
                animate={{
                    opacity: 1,
                    translateY: 0
                }}
                transition={{
                    delay: 200,
                    type: 'timing',
                    duration: 850
                }}
            >que combina com você
            </MotiText>

            <View style={styles.form}>
                <TextInput
                    placeholder='Digite o nome da comida...'
                    style={styles.input}
                    onChangeText={setInputValue}
                    value={inputValue}

                />
                <TouchableOpacity onPress={handleSearch}>
                    <Ionicons name='search' size={28} color={'#4cbe6c'} />
                </TouchableOpacity>
            </View>

            <FlatList
                data={foods}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <FoodList data={item} />}
                showsVerticalScrollIndicator={false}
            />

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F9FF',
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0e0e0e'
    },
    form: {
        width: '100%',
        borderRadius: 8,
        marginTop: 16,
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#ececec',
        paddingLeft: 8,
        paddingRight: 8,
        alignItems: 'center'
    },
    input: {
        height: 54,
        width: '90%',
        maxWidth: '90%',
    }
})