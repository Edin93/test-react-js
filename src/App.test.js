import 'regenerator-runtime/runtime';
import React from 'react';
import { expect, } from 'chai';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';
import Home from './Home';
import Infos from './Infos';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing <App /> Component', () => {

  it('Test App first Mount', async () => {
    let app = mount(<App />);
    
    expect(app.state().firstName).to.equal('');
    expect(app.state().lastName).to.equal('');
    expect(app.state().birthDate).to.equal('');
  });

  it('Test App state updates after API data fetching && its children.', async () => {
    const app = shallow(<App />, { lifecycleExperimental: true });
    let instance = app.instance();
    await instance.componentDidMount();

    expect(instance.state.firstName).to.equal('George');
    expect(instance.state.lastName).to.equal('Bluth');
    expect(instance.state.birthDate).to.equal('');
    expect(app.find(Home)).to.have.lengthOf(1);
    expect(app.find(Infos)).to.have.lengthOf(1);
  });
});
