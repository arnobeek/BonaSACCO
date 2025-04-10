import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { Icon } from "react-native-elements";
import ActionCard from "../components/ActionCard";
import SaccoCard from "../components/SaccoCard";
import LoanCard from "./LoanCard";

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [selectedPurpose, setSelectedPurpose] = useState(null); // State to track selected loan purpose
  const [selectedTerm, setSelectedTerm] = useState(null); // State to track selected loan term
  const [loanAmount, setLoanAmount] = useState(""); // State to track loan amount

  const handleModalOpen = (modalName) => {
    setActiveModal(modalName);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setActiveModal(null);
    setSelectedPurpose(null); // Reset selected purpose
    setSelectedTerm(null); // Reset selected term
    setLoanAmount(""); // Reset loan amount
  };

  const calculateMonthlyPayment = () => {
    if (!loanAmount || !selectedTerm) return "0.00";
    const months = parseInt(selectedTerm.split(" ")[0]); // Extract the number of months from the term
    return (parseInt(loanAmount) / months).toFixed(2);
  };

  const calculateTotalRepayment = () => {
    if (!loanAmount) return "0.00";
    const interest = parseInt(loanAmount) * 0.05; // 5% interest
    return (parseInt(loanAmount) + interest).toFixed(2);
  };

  return (
    <ScrollView style={{ backgroundColor: "#F5F5F5" }} contentContainerStyle={{ paddingBottom: 10 }} showsVerticalScrollIndicator={false}>
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
            onPress={() => navigation.navigate("Transactions")}
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
            onPress={() => navigation.navigate("Notifications")}
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
            backgroundColor: "white",
            elevation: 5,
          }}
        >
          <ActionCard
            cardBackground={"#3CB371"}
            saccoAction={"Create a SACCO"}
            icon={"add-circle"}
            modalAction={() => handleModalOpen("createSacco")}
          />
          <ActionCard
            cardBackground={"#6A5ACD"}
            saccoAction={"Join a SACCO"}
            icon={"people"}
            modalAction={() => handleModalOpen("joinSacco")}
          />
          <ActionCard
            cardBackground={"#FFD700"}
            saccoAction={"Make a Deposit"}
            icon={"cash-outline"}
            modalAction={() => handleModalOpen("makeDeposit")}
          />
          <ActionCard
            cardBackground={"#FF6347"}
            saccoAction={"Request Loan"}
            icon={"business"}
            modalAction={() => handleModalOpen("requestLoan")}
          />
        </ScrollView>
      </View>

      {/* Your SACCOs Section */}
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
            paddingHorizontal: 20,
            paddingBottom: 10,
          }}
        >
          <SaccoCard
            saccoName={"Bulindo Women SACCO"}
            description={
              "A women-founded SACCO with rich saving values and an aim to save enough money to be able to buy land."
            }
            totalSavings={500000}
            saccoRole={"Chairman"}
            totalMembers={400}
            navigation={navigation}
          />
          <SaccoCard
            saccoName={"Bulindo Women SACCO"}
            description={
              "A women-founded SACCO with rich saving values and an aim to save enough money to be able to buy land."
            }
            totalSavings={500000}
            saccoRole={"Chairman"}
            totalMembers={267}
            navigation={navigation}
          />
        </ScrollView>
      </View>

      {/* Active Loans Section */}
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
          <LoanCard
            loanType={"Business Loan"}
            current={30300}
            total={400000}
            date={new Date().toLocaleDateString()}
          />
          <LoanCard
            loanType={"Emergency"}
            current={40000}
            total={60000}
            date={new Date().toLocaleDateString()}
          />
        </View>
      </View>

      {/* Modal Section */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleModalClose}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <ScrollView
            style={{
              width: "90%",
              backgroundColor: "#F5F5F5",
              borderRadius: 10,
              padding: 20,
              elevation: 5,
            }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            {/* Render Different Content Based on Active Modal */}
            {activeModal === "requestLoan" && (
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#004080",
                    marginBottom: 10,
                  }}
                >
                  Loan Application
                </Text>
                <View
                  style={{
                    backgroundColor: "white",
                    padding: 10,
                    borderRadius: 15,
                    marginBottom: 20,
                  }}
                >
                  <Text style={{ color: "black", fontSize: 16, marginBottom: 5 }}>
                    Loan Amount
                  </Text>
                  <TextInput
                    placeholder="Enter Loan Amount"
                    keyboardType="numeric"
                    value={loanAmount}
                    onChangeText={setLoanAmount}
                    style={{
                      borderWidth: 1,
                      borderColor: "#ccc",
                      borderRadius: 5,
                      padding: 10,
                      backgroundColor: "white",
                    }}
                  />
                </View>
                <View style={{ padding: 10, backgroundColor: "white", borderRadius: 15 }}>
                  <Text style={{ color: "black", fontSize: 16, marginBottom: 10 }}>
                    Loan Purpose
                  </Text>
                  {["Business Loan", "Personal Loan", "Emergency Loan", "Education Loan"].map((purpose) => (
                    <TouchableOpacity
                      key={purpose}
                      style={{
                        backgroundColor: selectedPurpose === purpose ? "#004080" : "#F5F5F5",
                        alignContent: "center",
                        justifyContent: "center",
                        borderRadius: 5,
                        height: 35,
                        marginBottom: 10,
                      }}
                      onPress={() => setSelectedPurpose(purpose)}
                    >
                      <Text
                        style={{
                          color: selectedPurpose === purpose ? "white" : "#004080",
                          fontSize: 16,
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        {purpose}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View style={{ marginTop: 20, padding: 10, backgroundColor: "white", borderRadius: 15 }}>
                  <Text style={{ color: "black", fontSize: 16, marginBottom: 10 }}>
                    Loan Term
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                    }}
                  >
                    {["3 Months", "6 Months", "12 Months", "24 Months"].map((term) => (
                      <TouchableOpacity
                        key={term}
                        style={{
                          backgroundColor: selectedTerm === term ? "#004080" : "#F5F5F5",
                          alignContent: "center",
                          justifyContent: "center",
                          borderRadius: 5,
                          height: 35,
                          width: "48%", // Adjust width for grid layout
                          marginBottom: 10,
                        }}
                        onPress={() => setSelectedTerm(term)}
                      >
                        <Text
                          style={{
                            color: selectedTerm === term ? "white" : "#004080",
                            fontSize: 16,
                            fontWeight: "bold",
                            textAlign: "center",
                          }}
                        >
                          {term}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
                <View style={{ marginTop: 20, padding: 10, backgroundColor: "white", borderRadius: 15 }}>
                  <Text style={{ color: "black", fontSize: 16, marginBottom: 10, fontWeight: "bold" }}>
                    Repayment Schedule
                  </Text>
                  <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
                    <Text style={{ fontSize: 16, color: "grey" }}>Monthly Payment:</Text>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#004080" }}>
                      UGX {calculateMonthlyPayment()}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
                    <Text style={{ fontSize: 16, color: "grey" }}>Total Repayment:</Text>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#004080" }}>
                      UGX {calculateTotalRepayment()}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 16, color: "grey" }}>Interest Rate:</Text>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#004080" }}>5% per annum</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#004080",
                    padding: 10,
                    borderRadius: 5,
                    alignItems: "center",
                    marginTop: 20,
                  }}
                  onPress={() => {
                    // Handle loan request submission
                    console.log("Loan Amount:", loanAmount);
                    console.log("Loan Purpose:", selectedPurpose);
                    console.log("Loan Term:", selectedTerm);
                    handleModalClose();
                  }}
                >
                  <Text style={{ color: "white", fontWeight: "bold" }}>Submit Loan Request</Text>
                </TouchableOpacity>
              </View>
            )}
            <TouchableOpacity
              style={{
                marginTop: 20,
                alignSelf: "center",
              }}
              onPress={handleModalClose}
            >
              <Text style={{ color: "#004080", fontWeight: "bold" }}>Close</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
    </ScrollView>
  );
}