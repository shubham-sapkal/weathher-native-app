import { View, Text } from "react-native"
import { useSelector } from "react-redux"
import { NoCitySelectedPage } from "../../components/atomicComponents"

export const FiveDaysForcastScreen = () => {

    const selectedCity = useSelector((state) => state?.slice?.selectedCity )


    if( !selectedCity ) {
        return <NoCitySelectedPage />
    }

    return (
        <View>
            <Text>FiveDaysForcastScreen {selectedCity?.label} </Text>
        </View>
    )

}