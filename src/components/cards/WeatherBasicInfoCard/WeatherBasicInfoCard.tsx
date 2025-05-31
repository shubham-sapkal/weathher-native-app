import { Text, View } from "react-native"

import '../../../../global.css'

export const WeatherBasicInfoCard = ({ title= "Title", data= "--" }) => {

    return <View className="bg-white p-4 w-6 ">

        <Text className="text-6xl">{title}</Text>

        <Text>{data}</Text>

    </View>

}