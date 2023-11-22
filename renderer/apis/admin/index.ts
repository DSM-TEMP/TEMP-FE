import { customCookie } from "@/libs/cookie/cookie"
import axios from "axios"
import { useRouter } from "next/router"
import { useMutation, useQueries } from "@tanstack/react-query"
import { IAdminPasswordParam, IAdminProfile, IAmdinLoginParam, IIssueParam } from "./type"
import { IAuthorization } from "../type"
import { TEMPBaseURL, adminInstance } from ".."
import { useQuery } from "@tanstack/react-query"

export const useAdminLoginMutation = () => {
    const router = useRouter()

    const response = async (param: IAmdinLoginParam) => {
        const { data } = await axios.post<IAuthorization>(`${TEMPBaseURL}/admin/login`, param)
        return data
    }
    return useMutation(response, {
        onError: () => {
            console.log("로그인 실패")
        },
        onSuccess: res => {
            console.log("로그인 성공")
            const { accessToken, refreshToken } = res
            customCookie.set.token(accessToken, refreshToken)
            router.push("/dashboard")
        },
    })
}

export const useAdminIssueMutation = () => {
    const response = async (param: IIssueParam) => {
        const { data } = await adminInstance.post(`Issue`, param)
        return data
    }
    return useMutation(response, {
        onError: () => {
            console.log("계정 발급 실패")
        },
        onSuccess: () => {
            console.log("계정 발급 성공")
        },
    })
}

export const useAdminProfileQuery = () => {
    const response = async () => {
        const { data } = await adminInstance.get<IAdminProfile>(`profile`)
        return data
    }
    return useQuery(["AdminProfile"], response)
}

export const useAdminPasswordMutation = () => {
    const response = async (param: IAdminPasswordParam) => {
        const { data } = await adminInstance.patch(`password`, param)
        return data
    }
    return useMutation(response, {
        onError: () => {
            console.log("비번 변경 실패")
        },
        onSuccess: () => {
            console.log("비번 변경 성공")
        },
    })
}