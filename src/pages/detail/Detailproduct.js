import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';

import styles from './stylesDetailproduct';
import logoImg from '../../assets/logo.png';


export default function DetailProduct(){

    const [DetailProduct, setDetailProduct] = useState([]);
    const [ColorProduct, setColorProduct] = useState([]);
    const [ total, setTotal ] = useState(0);

    const navigation = useNavigation();

    const route = useRoute();
    const product = route.params.product;

    function navigateBackProducts(){
        navigation.goBack();
    }

    async function loadDetailProduct(){
        await axios.get(`https://makeup-api.herokuapp.com/api/v1/products/${product.id}.json`).then(res => {
            var dados = res.data;
            setDetailProduct(res.data); //pegando os valores que ja tem dentro da variavel Products, e anexando junto com os novos produtos
            
            //console.log(res.data.product_colors);
            setColorProduct(res.data.product_colors)
            setTotal(Object.keys(res.data.product_colors).length);
            //console.log(total)
        }).catch(err => 
                console.log(err.response)
            )        
    }

    useEffect(() => {
        loadDetailProduct();
    }, [])
    
    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImg} style={styles.logo} />

                <TouchableOpacity style={styles.detailButtomVoltar} onPress={navigateBackProducts}>
                    <Text style={styles.actionText}>Voltar</Text>
                </TouchableOpacity>                  
            </View>

            <FlatList
                data={[1]}
                style={styles.ProductsList}
                showsVerticalScrollIndicator={false}
                keyExtractor={detailProd => String(DetailProduct.id)}
                renderItem={({ item: detailProd }) => (
                    <View style={styles.groupProduct}>

                        <View style={styles.NameProduct}>
                            <Text style={styles.NameProductText}>-{product.name}</Text>
                        </View>

                        <View style={styles.callimageHeadLine}>
                            <Image source={{uri: `http:${product.api_featured_image}`}} style={styles.img} />
                        </View>

                        <View style={styles.ButtonToBag}>
                            <TouchableOpacity style={styles.detailButtomColor} onPress={() => {}}>
                                <Text style={styles.actionText}>add to bag</Text>
                            </TouchableOpacity>  
                        </View>

                        <View style={styles.Description}>
                            <Text style={styles.DescriptionText}>{product.description}</Text>
                        </View>

                        <FlatList
                            data={ColorProduct}
                            style={styles.propertyNameCod}
                            keyExtractor={cores => String(cores.hex_value)}
                            renderItem={({item: cores}) => (
                                <Text style={{fontSize:14,fontWeight:'bold',backgroundColor:`${cores.hex_value}`,padding:10,width:'98%',height:40,textAlign: 'center',color:'#fff',borderRadius:3,borderWidth:1,borderColor:'#ccc',marginBottom:5,marginTop:5,}}>{cores.colour_name}</Text>
                            )}
                        />                                                                    

                    </View>                                
                )}
            />            
            
            <View >
                
                

            </View>

        </View>
    );
}