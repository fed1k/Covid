// import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import Country from './Country';

test('should render correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Country />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
