import { Text, View } from "react-native";

export default function LoanCard({ loanType, current, total, date }) {
  const ProgressBar = ({ current, total }) => {
    const percentage = (current / total) * 100;
    const progressWidth = `${percentage}%`;

    return (
      <View>
        <View
          style={{
            width: "100%",
            height: 10,
            backgroundColor: "#E0E0E0",
            borderRadius: 5,
            marginTop: 5,
          }}
        >
          <View
            style={{
              width: progressWidth,
              height: "100%",
              backgroundColor: "#4CAF50",
              borderRadius: 5,
            }}
          ></View>
          
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{
          fontSize: 14,
          color: "#666666",
          fontFamily: "Roboto",
          marginTop: 5,
        }}>
              UGX {current.toLocaleString()} / {total.toLocaleString()}
            </Text>
            <Text style={{
          fontSize: 14,
          color: "#4CAF50",
          fontFamily: "Roboto",
          marginTop: 5,
        }}>{percentage.toFixed(0)}% Paid</Text>
          </View>
      </View>
    );
  };

  return (
    <View
      style={{
        width: "90%",
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        elevation: 5,
        padding: 15,
        marginLeft: 20,
        marginTop:10
      }}
    >
      <Text
        style={{
          fontSize: 14,
          color: "#666666",
          fontFamily: "Roboto",
          marginTop: 5,
        }}
      >
        {loanType}
      </Text>
      <ProgressBar current={current} total={total} />
      <Text style={{
          fontSize: 14,
          color: "#666666",
          fontFamily: "Roboto",
          marginTop: 5,
        }} >
        Due date: {date}
      </Text>
    </View>
  );
}
