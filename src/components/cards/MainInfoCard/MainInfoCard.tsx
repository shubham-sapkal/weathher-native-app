import { StyleSheet, Text, View } from "react-native"



export const MainInfoCard = ({ title = "Card Title", lastUpdateAt=new Date().toDateString() }) => {

    return <View className="flex w-full bg-white py-2 px-4 h-20">
        <Text className="text-2xl" >{title}</Text>
        <Text className="text-xs" >Last Update at: {lastUpdateAt} </Text>
    </View>

}
