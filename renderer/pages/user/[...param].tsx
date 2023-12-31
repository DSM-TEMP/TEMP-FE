import { useInfoDeleteMutation, useInfoDetailMutation } from "@/apis/info"
import { Radio } from "@/components/common/input/Radio"
import { Nav } from "@/components/nav"
import styled from "@emotion/styled"
import { useRouter } from "next/router"
import { useEffect } from "react"

export const WorkforceProfile = () => {
    const { data, mutate: detailMutate } = useInfoDetailMutation()
    const { mutate: deleteMutate } = useInfoDeleteMutation()
    const router = useRouter()
    const params = router.query.param as string[] | undefined

    useEffect(() => {
        if (params) {
            const [name, birthDate, address] = params
            detailMutate({ name, birthDate, address })
        }
    }, [])

    return (
        <Container>
            <Nav account="Employee" />
            <TitleBoxContainer>
                <CreateTitleBox>기간제 인력 정보</CreateTitleBox>
                <CreateBox>
                    <CreatTextBoxGroup>
                        <CreatTextBox>
                            <NameBox>이름</NameBox>
                            <TextBox>{data?.name}</TextBox>
                        </CreatTextBox>
                        <CreatTextBox>
                            <NameBox>생년월일</NameBox>
                            <TextBox>{data?.birthDate}</TextBox>
                        </CreatTextBox>
                        <CreatTextBox>
                            <NameBox>주소</NameBox>
                            <TextBox>{data?.address}</TextBox>
                        </CreatTextBox>
                    </CreatTextBoxGroup>
                    <CreatTextBoxGroup>
                        <CreatTextBox>
                            <NameBox>사업명</NameBox>
                            <TextBox>{data?.budgetBasis}</TextBox>
                        </CreatTextBox>
                        <CreatTextBox>
                            <NameBox>총인권비(천단위 원)</NameBox>
                            <TextBox>{data?.cost / 1000}</TextBox>
                        </CreatTextBox>
                        <CreatTextBox>
                            <NameBox>근로시간</NameBox>
                            <TextBox>{data?.workHour}</TextBox>
                        </CreatTextBox>
                    </CreatTextBoxGroup>
                    <CreatTextBoxGroup>
                        <CreatTextBox>
                            <NameBox>사대보험 가입유무</NameBox>
                            <RadioBoxs>
                                <Radio radioId="가입" isRadioSelected={data?.fourInsurance} />
                                <Radio radioId="미가입" isRadioSelected={!data?.fourInsurance} />
                            </RadioBoxs>
                        </CreatTextBox>
                        <CreatTextBox>
                            <NameBox>주근무일</NameBox>
                            <TextBox>{data?.jobType}</TextBox>
                        </CreatTextBox>
                        <CreatTextBox>
                            <NameBox>재직기간</NameBox>
                            <TextBox>{data?.period}</TextBox>
                        </CreatTextBox>
                    </CreatTextBoxGroup>
                    <CreatTextBoxGroup>
                        <CreatTextBox>
                            <NameBox>발급부서</NameBox>
                            <TextBox>{data?.issuanceDepartment}</TextBox>
                        </CreatTextBox>
                        <CreatTextBox>
                            <NameBox>담당자 이름</NameBox>
                            <TextBox>{data?.picName}</TextBox>
                        </CreatTextBox>
                        <CreatTextBox>
                            <NameBox>담당자 연락처</NameBox>
                            <TextBox>{data?.picContact}</TextBox>
                        </CreatTextBox>
                    </CreatTextBoxGroup>
                    <ActionBox>
                        <UpdateButton onClick={() => router.push(`/user/${data?.id}`)}>
                            수정하기
                        </UpdateButton>
                        <DeleteButton
                            onClick={() => {
                                deleteMutate(data?.id)
                                router.push("/user/dashBoard")
                            }}
                        >
                            삭제하기
                        </DeleteButton>
                    </ActionBox>
                </CreateBox>
            </TitleBoxContainer>
        </Container>
    )
}

export default WorkforceProfile

const Container = styled.div`
    display: flex;
    flex-direction: row;
`

const TitleBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 1000px;
    align-items: center;
    justify-content: space-evenly;
`

const CreateTitleBox = styled.div`
    min-width: 1250px;
    display: flex;
    align-items: center;
    font-size: 50px;
`
const CreateBox = styled.div`
    min-width: 1250px;
    padding: 60px;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    box-shadow: 0px 0px 8px 0.1px rgba(0, 0, 0, 0.5);
`
const CreatTextBoxGroup = styled.div`
    display: flex;
    justify-content: space-between;
`

const CreatTextBox = styled.div`
    width: auto;
    height: auto;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
`

const NameBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 170px;
    height: 20px;
    padding-left: 5px;
    justify-content: center;
    align-items: flex-start;
    border-left-style: solid;
    border-left-width: 5px;
    border-color: #3d8bfd;
    font-size: 17px;
`
const TextBox = styled.div`
    width: 320px;
    height: 41px;
    font-family: "Gmarket Sans";
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    margin: 20px 0 12px 0;
    margin-top: 20px;
    padding-left: 10px;
    justify-content: columns;
    align-items: center;
    display: flex;
    border-radius: 10px;
    border: 0;
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.gray300};
    vertical-align: middle;
    line-height: normal;
`
const RadioBoxs = styled.div`
    width: 320px;
    height: auto;
    display: flex;
    justify-content: left;
    gap: 30px;
    margin-top: 15px;
`
const ActionBox = styled.div`
    width: auto;
    height: auto;
    flex-direction: row;
    display: flex;
    justify-content: right;
    gap: 40px;
`
const UpdateButton = styled.button`
    width: 150px;
    height: 50px;
    font-size: 20px;
    border-radius: 5px;
    border: none;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.blue400};
`
const DeleteButton = styled.button`
    width: 150px;
    height: 50px;
    font-size: 20px;
    border-radius: 5px;
    border: none;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.red};
`
