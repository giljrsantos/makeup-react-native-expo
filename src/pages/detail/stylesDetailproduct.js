import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10,
        backgroundColor:'#f4f4f4',
        paddingTop: Constants.statusBarHeight + 15,
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        borderColor:'#333',
        borderWidth:1,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        borderBottomColor:0,
        
    },
    detailButtomVoltar:{
        backgroundColor:'#f25',
        padding:15,
        flexDirection:'row',
        alignContent:'center',
        borderRadius:3,
        marginRight:10,
    },
    callimageHeadLine:{
        justifyContent: 'center' ,
        alignItems: 'center',
        marginTop:8
    },
    logo:{
        marginLeft:10,
    },
     img:{
         width: '100%',
         borderRadius:5,
         height:400,
         
     },
     ProductsList:{
        marginTop:10,
    },
    groupProduct:{
        backgroundColor:'#fff',
        paddingHorizontal:10,
        borderRadius:3,
        marginBottom:20
    },
    NameProduct:{
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'#f25',
        padding:20,
        borderRadius:3,
    },
    NameProductText:{
        fontSize:14,
        color:'#fff',
        fontWeight:'bold'
    },
    detailButtomColor:{
        marginTop:5,
        backgroundColor:'#000',
        padding:20,
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        borderRadius:3,       
    },
    actionText:{
        fontSize:16,
        color:'#fff',
    },
    Description:{
        justifyContent:'center',
        alignContent:'center',
        padding:5,     
    },
    DescriptionText:{
        fontSize:14,
        color:'#000',
        lineHeight:20,
    },
    propertyNameCod:{
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:16,
        marginBottom:10,        
    },    
    nameChamada:{
        fontSize:14,
        fontWeight:'bold',
        backgroundColor:'#fff',
        padding:10,
        width:'98%',
        height:40,
        textAlign: 'center',
        color:'#000',
        borderRadius:3,
        borderWidth:1,
        borderColor:'#ccc',
        marginBottom:5,
        marginTop:5,        
    },    
});