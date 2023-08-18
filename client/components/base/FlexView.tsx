
import { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'
import { styled } from "@gluestack-style/react"

interface FlexViewProps {
  children: ReactNode
}

const ViewBox = styled(View, {
  flex: 1
})

const FlexView : React.FC<FlexViewProps> = ({ children }) => {

  return (
    <ViewBox style={styles.flexBox}>
      {children}
    </ViewBox>
  )
}

const styles = StyleSheet.create({
  flexBox: {
    flex: 1
  }
})

export default FlexView
