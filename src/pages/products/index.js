import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

//import api from '../services/api';

import styles from './styles';

import logoImg from '../../assets/logo.png';
import Lupa from '../../assets/lupa.png';
import imgHeadLine from '../../assets/pencil.png';

export default function Products(){

    const [Products, setProducts] = useState([]);
    const [page, SetPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [ total, setTotal ] = useState(0);

    const navigation = useNavigation();

    function navigateToColors(){
        navigation.navigate('Color');
    }

    function navigateToDescription(product){
        navigation.navigate('Detailproduct', { product });
    }

    //Função com o `THEN` para trazer os dados da API
    async function loadProducts(){

        if (loading){
            return;
        }

        if (total > 0 && Products.length == total){
            return;
        }

        setLoading(true);
       
        await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json', {
            params: {page}
        }).then(res => {
            setProducts([... Products, ... res.data]); //pegando os valores que ja tem dentro da variavel Products, e anexando junto com os novos produtos
            setTotal(Object.keys(res.data).length);
        }).catch(err => 
                console.log(err.response)
            )
        SetPage(page + 1);
        setLoading(false);
    };

    useEffect(() => {
        loadProducts();
    }, [])
    
    return(
        <View style={styles.container}>

                <View style={styles.header}>
                    <Image source={logoImg} />
                </View>

                <FlatList 
                data={Products}
                style={styles.ProductsList}
                keyExtractor={product => String(product.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadProducts} //Função disparada automatica, quando o usuario chegar no da fila
                onEndReachedThreshold={0.2} //quando tiver 20% do final da fila, vou carregar novos itens
                renderItem={( { item: product}) => (
                    <View style={styles.groupProduct}>

                        <View style={styles.propertyNameCod}>
                            <Text style={styles.nameChamada}>Cód: {product.id}</Text>
                            <Text style={styles.nameChamada}>{product.name}</Text>
                        </View>
                        
                        <View style={styles.callimageHeadLine}>
                            <Image source={{uri: `http:${product.api_featured_image}`}} style={styles.img} />
                        </View>

                        <View style={styles.property}>
                            <Text style={styles.color, {backgroundColor:'#542328',fontSize:14,fontWeight:'bold',justifyContent:'center',alignItems:'center',padding:10,width:'48%',height:40,textAlign: 'center',color:'#fff',borderRadius:5,borderWidth:1,borderColor:'#ccc',}}>Ellarie Pencil</Text>
                            <Text style={styles.value}>$ {Intl.NumberFormat('ca-AD', { style: 'currency', currency: 'CAD' }).format(product.price)}</Text>
                        </View>

                        <View style={styles.callDescriptionAndColores}>
                            <TouchableOpacity style={styles.detailButtomText} onPress={() => navigateToDescription(product)}>
                                <Text style={styles.actionText}>Veja os detalhes...</Text>
                            </TouchableOpacity>
                        </View>                                              

                    </View>
                )}
                />
        </View>
    );
}