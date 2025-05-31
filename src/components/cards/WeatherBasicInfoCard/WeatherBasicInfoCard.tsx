import { Text, View } from "react-native"

export const WeatherBasicInfoCard = ({ title= "Title", data= "--" }) => {

    return <View className="bg-white p-4 w-[48%] ">

        <Text className="text-xl">{title}</Text>

        <Text>{data}</Text>

    </View>

}