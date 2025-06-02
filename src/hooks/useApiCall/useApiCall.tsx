import axios, { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";

interface ApiOptionsType {
    method?: string;
    data?: {};
    onSuccess?: (response: {}, status: number) => void;
    onFailure?: (error: {}, status: number) => void
}


const axiosInstance = axios.create({
    baseURL: 'http://api.weatherapi.com/v1'
})

export const useApiCall = ( url: string, options?: ApiOptionsType ) => {

    const [ cachedResponse, setCacheResponse ] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [ error, setError ] = useState(null)

    const fetchData = async(additionalRequestBody?: any) => {

        setIsLoading(true);

        const requestBody = {
            ...options?.data,
            ...additionalRequestBody
        }

        try {

            const response: AxiosResponse = await axiosInstance(url, {
                ...options,
                data: requestBody
            })

            setCacheResponse(response.data);

            options?.onSuccess?.(response.data, response.status);

        }
        catch(error: any) {
            setError(error)
            options?.onFailure?.(error, 500)
        }

        setIsLoading(false);


    }

    const callApi = (reqBody?: any) => {
        fetchData(reqBody)
    }

    return {
        cachedResponse, 
        isLoading,
        error,
        callApi
    }


}