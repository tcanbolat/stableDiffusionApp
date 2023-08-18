import React, { useState } from 'react'
import { TouchableOpacity, TextInput, View, Text } from 'react-native'
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks'
import { decrement, increment, incrementByAmount, selectCount } from '../../reducers/counter/counterSlice'
import { styled } from "@gluestack-style/react"

export default function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;


  const TextBox = styled(Text, {
    ff: '$thin',
    bc: '$primary400',
    // @ts-expect-error
    bw: '$4',
    _web: {
      bw: 2
    },
  })

  return (
    <View>
      <View>
        <TouchableOpacity onPress={() => dispatch(decrement())}>
          <Text> - </Text>
        </TouchableOpacity>
        <Text>{count}</Text>
        <TouchableOpacity onPress={() => dispatch(increment())}>
          <Text> + </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          aria-label="Set increment amount"
          value={incrementAmount}
          onChangeText={(text) => setIncrementAmount(text)}
        />
        <TouchableOpacity onPress={() => dispatch(incrementByAmount(incrementValue))}>
          <TextBox>Add Amount</TextBox>
        </TouchableOpacity>
      </View>
    </View>
  );
}
