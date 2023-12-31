import { Input } from "@/components/common/input/Input"
import styled from "@emotion/styled"
import { useState } from "react"
import { Nav } from "@/components/nav"
import { IInfoDetail } from "@/apis/info/type"
import { useInfoUploadMutation } from "@/apis/info"
import { Radio } from "@/components/common/input/Radio"

export const ProfileUpload = () => {
    const { mutate: uploadMutation } = useInfoUploadMutation()
    const [values, setValues] = useState<IInfoDetail>({
        name: "",
        birthDate: "",
        address: "",
        budgetBasis: "",
        cost: 0,
        workHour: 0,
        fourInsurance: false,
        jobType: "",
        period: "",
        issuanceDepartment: "",
        picName: "",
        picContact: "",
    })

    const uploadInfo = () => {
        uploadMutation({ ...values, cost: values.cost * 1000 })
    }

    return (
        <Container>
            <Nav account="Employee" />
            <TitleBoxContainer>
                <CreateTitleBox>인적사항 업로드</CreateTitleBox>
                <CreateBox>
                    <CreatTextBoxGroup>
                        <CreatTextBox>
                            <Input
                                name="name"
                                label="이름"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="이름을 입력해주세요"
                                value={values.name}
                                onChange={name => {
                                    setValues({ ...values, name: name.target.value })
                                }}
                            />
                        </CreatTextBox>
                        <CreatTextBox>
                            <Input
                                name="birthDate"
                                label="생년월일"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="생년월일을 입력해주세요"
                                value={values.birthDate}
                                onChange={e => {
                                    const value = e.target.value.replace(/[^\d]/g, "")
                                    let formattedValue = ""

                                    if (value.length <= 6) {
                                        formattedValue = value
                                    } else if (value.length <= 7) {
                                        formattedValue = `${value.slice(0, 6)}-${value.slice(6)}`
                                    } else {
                                        formattedValue = `${value.slice(0, 6)}-${value.slice(6, 7)}`
                                    }

                                    setValues({ ...values, birthDate: formattedValue })
                                }}
                            />
                        </CreatTextBox>
                        <CreatTextBox>
                            <Input
                                name="address"
                                label="주소"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="주소를 입력해주세요"
                                value={values.address}
                                onChange={address => {
                                    setValues({ ...values, address: address.target.value })
                                }}
                            />
                        </CreatTextBox>
                    </CreatTextBoxGroup>
                    <CreatTextBoxGroup>
                        <CreatTextBox>
                            <Input
                                name="budgetBasis"
                                label="사업명"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="사업명을 입력해주세요"
                                value={values.budgetBasis}
                                onChange={budgetBasis => {
                                    setValues({ ...values, budgetBasis: budgetBasis.target.value })
                                }}
                            />
                        </CreatTextBox>
                        <CreatTextBox>
                            <Input
                                name="cost"
                                label="총인권비(천단위 원)"
                                type="number"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="총인권비를 입력해주세요"
                                value={values.cost}
                                onChange={cost => {
                                    setValues({ ...values, cost: Number(cost.target.value) })
                                }}
                            />
                        </CreatTextBox>
                        <CreatTextBox>
                            <Input
                                name="workHour"
                                label="근로시간"
                                type="number"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="근로시간을 입력해주세요"
                                value={values.workHour}
                                onChange={workHour => {
                                    setValues({
                                        ...values,
                                        workHour: Number(workHour.target.value),
                                    })
                                }}
                            />
                        </CreatTextBox>
                    </CreatTextBoxGroup>
                    <CreatTextBoxGroup>
                        <CreatTextBox>
                            <NameBox>사대보험 가입유무</NameBox>
                            <RadioBoxs>
                                <Radio
                                    radioId="가입"
                                    isRadioSelected={values.fourInsurance}
                                    onClick={() => setValues({ ...values, fourInsurance: true })}
                                />
                                <Radio
                                    radioId="미가입"
                                    isRadioSelected={!values.fourInsurance}
                                    onClick={() => setValues({ ...values, fourInsurance: false })}
                                />
                            </RadioBoxs>
                        </CreatTextBox>
                        <CreatTextBox>
                            <Input
                                name="jobType"
                                label="주근무일"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="주근무일 입력해주세요"
                                value={values.jobType}
                                onChange={jobType => {
                                    setValues({ ...values, jobType: jobType.target.value })
                                }}
                            />
                        </CreatTextBox>
                        <CreatTextBox>
                            <Input
                                name="period"
                                label="재직기간"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="비밀번호를 입력해주세요"
                                value={values.period}
                                onChange={period => {
                                    setValues({ ...values, period: period.target.value })
                                }}
                            />
                        </CreatTextBox>
                    </CreatTextBoxGroup>
                    <CreatTextBoxGroup>
                        <CreatTextBox>
                            <Input
                                name="issuanceDepartment"
                                label="발급부서"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="발급부서를 입력해주세요"
                                value={values.issuanceDepartment}
                                onChange={issuanceDepartment => {
                                    setValues({
                                        ...values,
                                        issuanceDepartment: issuanceDepartment.target.value,
                                    })
                                }}
                            />
                        </CreatTextBox>
                        <CreatTextBox>
                            <Input
                                name="picName"
                                label="담당자 이름"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="담당자 이름을 입력해주세요"
                                value={values.picName}
                                onChange={picName => {
                                    setValues({ ...values, picName: picName.target.value })
                                }}
                            />
                        </CreatTextBox>
                        <CreatTextBox>
                            <Input
                                name="picContact"
                                label="담당자 연락처"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="담당자 연락처를 입력해주세요"
                                value={values.picContact}
                                onChange={picContact => {
                                    const value = picContact.target.value.replace(/[^\d]/g, "")
                                    let formattedValue = ""

                                    if (value.length <= 3) {
                                        formattedValue = value
                                    } else if (value.length <= 7) {
                                        formattedValue = `${value.slice(0, 3)}-${value.slice(3)}`
                                    } else {
                                        formattedValue = `${value.slice(0, 3)}-${value.slice(
                                            3,
                                            7,
                                        )}-${value.slice(7, 11)}`
                                    }
                                    setValues({ ...values, picContact: formattedValue })
                                }}
                            />
                        </CreatTextBox>
                    </CreatTextBoxGroup>
                    <ActionBox>
                        <UploadButton onClick={uploadInfo}>업로드</UploadButton>
                        <CancelButton>취소</CancelButton>
                    </ActionBox>
                </CreateBox>
            </TitleBoxContainer>
        </Container>
    )
}

export default ProfileUpload

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
    height: 750px;
    padding-top: 80px;
    padding-left: 100px;
    padding-right: 100px;
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
    margin-bottom: 50px;
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
const UploadButton = styled.button`
    width: 150px;
    height: 50px;
    font-size: 20px;
    border-radius: 5px;
    border: none;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.blue400};
`

const CancelButton = styled.button`
    width: 150px;
    height: 50px;
    font-size: 20px;
    border-radius: 5px;
    border: none;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.gray400};
`
