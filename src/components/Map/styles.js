import styled from 'styled-components/native';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Maps = styled(MapView)`
  flex: 1;
`;
