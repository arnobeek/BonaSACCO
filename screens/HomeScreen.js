import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import ActionCard from "../components/ActionCard";
import SaccoCard from "../components/SaccoCard";
import LoanCard from "./LoanCard";

export default function HomeScreen({navigation}) {
  return (
    <ScrollView
      style={{ backgroundColor: "#F5F5F5" }}
      contentContainerStyle={{ paddingBottom: 10 }}
    >
      {/* Header Section */}
      <View>
        <View
          style={{
            backgroundColor: "#004080",
            height: 180,
            justifyContent: "center",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <View style={{ marginLeft: 20, marginTop: 30 }}>
            <Text style={{ color: "white", fontSize: 18 }}>Welcome back,</Text>
            <Text
              style={{
                color: "white",
                fontSize: 28,
                fontWeight: "bold",
                marginTop: 5,
              }}
            >
              Arnold Beeka
            </Text>
          </View>
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 70,
              top: 70,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              padding: 10,
              borderRadius: 25,
            }}
            onPress={() => navigation.navigate('Transactions')}
          >
            <Icon name="stats-chart" type="ionicon" color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 10,
              top: 70,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              padding: 10,
              borderRadius: 25,
            }}
            onPress={() => navigation.navigate('Notifications')}
          >
            <Icon name="notifications" type="ionicon" color="white" size={30} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Total Savings Section */}
      <View
        style={{
          width: "90%",
          height: 120,
          backgroundColor: "white",
          borderRadius: 15,
          marginLeft: "5%",
          marginTop: -30,
          elevation: 5,
          justifyContent: "center",
          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#333333",
            fontFamily: "Montserrat",
          }}
        >
          Total SACCO Savings
        </Text>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            marginTop: 5,
            color: "#004080",
          }}
        >
          UGX 1,000,000.00
        </Text>
      </View>

      {/* SACCO Actions Section */}
      <View style={{ marginTop: 10 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginLeft: 20,
            marginBottom: 10,
            fontFamily: "Montserrat",
          }}
        >
          SACCO Actions
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 10,
            paddingRight: 225,
            backgroundColor:'white', 
            elevation:5
          }}
        >
          <ActionCard
            cardBackground={"#3CB371"}
            saccoAction={"Create a SACCO"}
            icon={"add-circle"}
          />
          <ActionCard
            cardBackground={"#6A5ACD"} // Soft purple
            saccoAction={"Join a SACCO"}
            icon={"people"}
          />
          <ActionCard
            cardBackground={"#FFD700"} // Gold
            saccoAction={"Make a Deposit"}
            icon={"cash-outline"}
          />
          <ActionCard
            cardBackground={"#FF6347"} // Tomato red
            saccoAction={"Request Loan"}
            icon={"business"}
          />
        </ScrollView>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginLeft: 20,
            fontFamily: "Montserrat",
          }}
        >
          Your SACCOs
        </Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20
          }}
        >
          <SaccoCard
            saccoName={"Bulindo Women SACCO"}
            description={
              "A women founded SACCO with rich saving values and an aim to save enough money to be able to buy land"
            }
            totalSavings={500000}
            saccoRole={"Chairman"}
            totalMembers={400}
            navigation={navigation}
          />
          <SaccoCard
            saccoName={"Bulindo Women SACCO"}
            description={
              "A women founded SACCO with rich saving values and an aim to save enough money to be able to buy land"
            }
            totalSavings={500000}
            saccoRole={"Chairman"}
            totalMembers={267}
            navigation={navigation}
          />
        </ScrollView>
      </View>
      <View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginLeft: 20,
            fontFamily: "Montserrat",
          }}
        >
          Active Loans
        </Text>
        <View>
          <LoanCard loanType={'Business Loan'} current={30300} total={400000} date={new Date().toLocaleDateString()} />
          <LoanCard loanType={'Emergency'} current={40000} total={60000} date={new Date().toLocaleDateString()}/>
        </View>
      </View>
    </ScrollView>
  );
}
