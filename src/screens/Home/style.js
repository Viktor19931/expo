import styled from 'styled-components'
import { Image, View } from 'react-native'

export const Avatar = styled(Image)`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ width }) => width / 2}px;
`

export const Wrapper = styled(View)`
  align-items: center;
  flex-direction: column;
  flex: 1;
`
