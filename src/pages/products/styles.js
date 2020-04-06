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
        justifyContent: 'center',
        borderColor:'#333',
        borderWidth:1,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        borderBottomColor:0,
        
    },
    callimageHeadLine:{
        justifyContent: 'center' ,
        alignItems: 'center',
        marginTop:8
    },
     img:{
         width: '100%',
         borderRadius:5,
         height:400
     },
    ProductsList:{
        marginTop:10,
    },
    groupProduct:{
        backgroundColor:'#fff',
        paddingHorizontal:10,
        borderRadius:5,
        marginBottom:20
    },
    property:{
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#f4f4f4',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:2,
        borderRadius:5,
    },
    callDescriptionAndColores:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:16,
        marginBottom:10,
    },    
    detailButtomText:{
        backgroundColor: '#C23D3C',
        borderRadius:5,
        height:50,
        width: '100%',
        justifyContent: 'center',
        alignItems:'center',
        fontSize:15,
    },
    detailButtomColor:{
        backgroundColor: '#411416',
        borderRadius:5,
        height:50,
        width: '48%',
        justifyContent: 'center',
        alignItems:'center',
        fontSize:15,
    },    
    actionText:{
        fontSize:18,
        fontWeight:'bold',
        color:'#fff'
    },
    color:{
        fontSize:14,
        fontWeight:'bold',
        backgroundColor:'#f00',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        height:50,
        width: '48%',        
        textAlign: 'center',
        color:'#fff',
        borderRadius:5,
    },
    name:{
        fontSize:14,
        fontWeight:'bold',
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        width:112,
        textAlign: 'center',
        color:'#000',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#cccc',        
    },
    value:{
        fontSize:14,
        fontWeight:'bold',
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        width:'48%',
        height:40,
        textAlign: 'center',
        color:'#000',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#ccc',        
    },
    nameChamada:{
        fontSize:14,
        fontWeight:'bold',
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        width:'48%',
        height:40,
        textAlign: 'center',
        color:'#000',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#ccc',         
    },
    propertyNameCod:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:16,
        marginBottom:10,        
    },
});