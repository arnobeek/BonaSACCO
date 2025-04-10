import {View} from "react-native"

export default function TransactionsCard({children}) {
  return (
    <View className="bg-white rounded-lg shadow-md p-4 mb-4">{children}</View>
  )
}