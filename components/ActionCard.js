import { Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

export default function ActionCard({ cardBackground, saccoAction, icon, modalAction }) {
  return (
    <TouchableOpacity
      style={{
        width: "30%",
        height: 150,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 20,
        elevation: 5,
        justifyContent: "center",
        alignItems:'center', 
        backgroundColor:cardBackground
      }}
      onPress={modalAction}
    >
      <Icon name={icon} type="ionicon" color="white" size={50} />
      <Text style={{fontSize:20, color:'white', fontWeight:'bold', marginTop:10, fontFamily:'Roboto'}}>
        {saccoAction}
      </Text>
    </TouchableOpacity>
  );
}
