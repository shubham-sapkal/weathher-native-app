import { Text, View } from "react-native"
import { useSelector } from "react-redux"
import { NoCitySelectedPage } from "../../components/atomicComponents"
import { MainInfoCard, WeatherBasicInfoCard } from "../../components"
import { weatherInfoCard } from "./const"

// import { WeatherBasicInfoCard } from 'src/components/cards'


export const CurrentWhetherScreen = () => {

    const selectedCity = useSelector( (state: any) => state?.slice?.selectedCity )

    if( !selectedCity ) {
        return <NoCitySelectedPage />
    }

    return (
        <View className="w-full p-2">
            {/* Main Content Wide Card  */}
            <MainInfoCard title={`${selectedCity?.label}`} />
            
            {/* Scrollable Card Views */}
            <View className="pt-6 w-full flex gap-4 flex-wrap flex-row ">

                { weatherInfoCard.map( (weatherInfo) => (
                    <WeatherBasicInfoCard title={weatherInfo?.title} />
                ) ) }

            </View>

        </View>
    )
}