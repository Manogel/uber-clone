import React from 'react';
import {YellowBox} from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount has been renamed, and is not recommended for use',
  'Warning: componentWillReceiveProps has been renamed, and is not recommended for use. ',
]);

const App = () => <Routes />;

export default App;
