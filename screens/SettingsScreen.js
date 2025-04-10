import React, { useState } from "react";
import { View, Text, ScrollView, Switch, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

export default function SettingsScreen() {
  const [isAutoPaymentEnabled, setIsAutoPaymentEnabled] = useState(false);
  const toggleAutoPayment = () =>
    setIsAutoPaymentEnabled((previousState) => !previousState);

  const [isTransactionAlertsEnabled, setIsTransactionAlertsEnabled] =
    useState(false);
  const toggleTransactionAlerts = () =>
    setIsTransactionAlertsEnabled((previousState) => !previousState);

  const [isLoanUpdatesEnabled, setIsLoanUpdatesEnabled] = useState(false);
  const toggleLoanUpdatesAlerts = () =>
    setIsLoanUpdatesEnabled((previousState) => !previousState);

  const [isSavingsGoalsAlertsEnabled, setIsSavingsGoalsAlertsEnabled] =
    useState(false);
  const toggleSavingsGoalsAlerts = () =>
    setIsSavingsGoalsAlertsEnabled((previousState) => !previousState);

  const [isDividendAlertsEnabled, setIsDividendAlertsEnabled] = useState(false);
  const toggleDividendAlerts = () =>
    setIsDividendAlertsEnabled((previousState) => !previousState);

  const [isMarketingEmailsEnabled, setIsMarketingEmailsEnabled] =
    useState(false);
  const toggleMarketingEmails = () =>
    setIsMarketingEmailsEnabled((previousState) => !previousState);

  const [isBiometricAuthenticationEnabled, setIsBiometricAuthenticationEnabled] =
    useState(false);
  const toggleBiometricAuthentication = () =>
    setIsBiometricAuthenticationEnabled((previousState) => !previousState);

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 20, backgroundColor: "#F5F5F5" }}>
      {/* Section: Account */}
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}>Account</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Sacco Membership ID</Text>
          <Text style={styles.cardValue}>SC 2024-001</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Account Type</Text>
          <Text style={styles.cardValue}>Regular Member</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Member Since</Text>
          <Text style={styles.cardValue}>Jan - 2024</Text>
        </View>
        <TouchableOpacity>
          <View style={[styles.button, { backgroundColor: "#004080" }]}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Section: Financial Preferences */}
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}>Financial Preferences</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Default Savings Goal</Text>
          <Text style={styles.cardValue}>UGX 500,000</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Auto Payment</Text>
          <Switch
            value={isAutoPaymentEnabled}
            onValueChange={toggleAutoPayment}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
          />
        </View>
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Transaction Limits</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.cardValue}>Configure</Text>
              <Icon name="chevron-right" type="ionicons" size={20} color="grey" />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {/* Section: Notifications */}
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}>Notifications</Text>
        {[
          { title: "Transaction Alerts", value: isTransactionAlertsEnabled, toggle: toggleTransactionAlerts },
          { title: "Loan Updates", value: isLoanUpdatesEnabled, toggle: toggleLoanUpdatesAlerts },
          { title: "Savings Goals", value: isSavingsGoalsAlertsEnabled, toggle: toggleSavingsGoalsAlerts },
          { title: "Dividend Alerts", value: isDividendAlertsEnabled, toggle: toggleDividendAlerts },
          { title: "Marketing Emails", value: isMarketingEmailsEnabled, toggle: toggleMarketingEmails },
        ].map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Switch
              value={item.value}
              onValueChange={item.toggle}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
            />
          </View>
        ))}
      </View>

      {/* Section: Preferences */}
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}>Preferences</Text>
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Language</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.cardValue}>English</Text>
              <Icon name="chevron-right" type="ionicons" size={20} color="grey" />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Currency</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.cardValue}>UGX</Text>
              <Icon name="chevron-right" type="ionicons" size={20} color="grey" />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {/* Section: Security */}
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}>Security</Text>
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Change Password</Text>
            <Icon name="chevron-right" type="ionicons" size={20} color="grey" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Two-factor Authentication</Text>
            <Text style={styles.cardValue}>Enabled</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Biometric Authentication</Text>
          <Switch
            value={isBiometricAuthenticationEnabled}
            onValueChange={toggleBiometricAuthentication}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
          />
        </View>
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>PIN Setup</Text>
            <Icon name="chevron-right" type="ionicons" size={20} color="grey" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Active Sessions</Text>
            <Icon name="chevron-right" type="ionicons" size={20} color="grey" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Section: Support */}
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}>Support</Text>
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Help Center</Text>
            <Icon name="chevron-right" type="ionicons" size={20} color="grey" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Contact Support</Text>
            <Icon name="chevron-right" type="ionicons" size={20} color="grey" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Report an Issue</Text>
            <Icon name="chevron-right" type="ionicons" size={20} color="grey" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Section: About */}
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}>About</Text>
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Terms of Service</Text>
            <Icon name="chevron-right" type="ionicons" size={20} color="grey" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Privacy Policy</Text>
            <Icon name="chevron-right" type="ionicons" size={20} color="grey" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>App Version</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.cardValue}>1.0.0</Text>
              <Icon name="chevron-right" type="ionicons" size={20} color="grey" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = {
  card: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation:5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,

  },
  cardTitle: {
    color: "#004080",
    fontSize: 16,
    fontWeight: "bold",
  },
  cardValue: {
    color: "grey",
    fontSize: 14,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
};