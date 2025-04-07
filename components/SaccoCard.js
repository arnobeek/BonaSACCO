import { Text, View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

export default function SaccoCard({ saccoName, description, saccoRole, totalSavings, totalMembers, navigation }) {
  return (
    <View
            style={{
              width:'100%',
              flex:1,
              backgroundColor: "#FFFFFF",
              borderRadius: 15,
              elevation: 5,
              marginRight: 15,
              padding: 15,
              justifyContent: "space-between",
              marginTop:10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#004080",
                fontFamily: "Montserrat",
              }}
            >
              {saccoName}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "black",
                fontFamily: "Roboto",
                marginTop:5
              }}
            >
              {description}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#666666",
                fontFamily: "Roboto",
                marginTop:5
              }}
            >
              Total Savings: UGX {totalSavings}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#666666",
                fontFamily: "Roboto",
                marginTop:5
              }}
            >
              Role: {saccoRole}
            </Text>
            <View style={{flexDirection:'row', alignContent:'center', marginTop:5}}>
            <Icon name='people' type="ionicon" color="#666666" size={18} />
            <Text
              style={{
                fontSize: 14,
                color: "#666666",
                fontFamily: "Roboto",
              }}
            >
               : {totalMembers} Members
            </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#004080",
                paddingVertical: 8,
                paddingHorizontal: 15,
                borderRadius: 10,
                alignSelf: "flex-start",
                marginTop:5
              }}
              onPress={() => navigation.navigate('SACCOScreen')}
            >
              <Text style={{ color: "white", fontSize: 14 }}>View SACCO</Text>
            </TouchableOpacity>
          </View>
  );
}
