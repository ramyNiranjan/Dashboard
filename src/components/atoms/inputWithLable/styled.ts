import { TextInput } from 'grommet'
import styled from 'styled-components'

export const Container = styled.div``
export const Label = styled.label`
margin: 0 0px 5px 8px;
`
export const Error = styled.span`
margin: 5px 0px 0px 8px;
color: red;
`
export const Input = styled(TextInput)`
&:focus{
    box-shadow: none;
}
`