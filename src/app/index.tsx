import { View, } from 'react-native';
import { IconMap } from '@tabler/icons-react-native'

import { Welcome } from '@/components/welcome';
import { Steps } from '@/components/steps';
import { Button } from '@/components/button';

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 40, gap: 40 }}>
      <Welcome />
      <Steps />

      <Button>
        <Button.Title>Start</Button.Title>
        <Button.Icon icon={IconMap} /> 
      </Button>
    </View>
  )
}
