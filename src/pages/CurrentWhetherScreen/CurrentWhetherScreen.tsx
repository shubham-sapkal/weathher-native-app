import { Text, View } from "react-native"
import { useSelector } from "react-redux"
import { NoCitySelectedPage } from "../../components/atomicComponents"
import { MainInfoCard, WeatherBasicInfoCard } from "../../components"
import { weatherInfoCard } from "./const"

// import { WeatherBasicInfoCard } from 'src/components/cards'

import '../../../global.css'


export const CurrentWhetherScreen = () => {

    const selectedCity = useSelector( (state) => state?.slice?.selectedCity )

    if( !selectedCity ) {
        return <NoCitySelectedPage />
    }

    return (
        <View className="bg-[#000]">
            {/* Main Content Wide Card  */}
            <MainInfoCard title={`Current Weather for ${selectedCity?.label}`} />
            
            {/* Scrollable Card Views */}
            <View className="flex flex-row flex-wrap gap-4">

                { weatherInfoCard.map( (weatherInfo) => (
                    <WeatherBasicInfoCard title={weatherInfo?.title} />
                ) ) }

            </View>

        </View>
    )
}