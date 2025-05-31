import { Text, View } from "react-native"



export const MainInfoCard = ({ title = "Card Title" }) => {

    return <View className="flex w-full p-10 h-20 border border-red-500">
        <Text>{title}</Text>
    </View>

}
