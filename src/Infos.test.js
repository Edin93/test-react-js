import 'regenerator-runtime/runtime';
import React from 'react';
import { expect, } from 'chai';
import Enzyme, { mount, } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Infos from './Infos';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing <Infos /> Component', () => {

  it('Test Infos initial display', () => {
    let infosProps= {
      firstName: 'Jordan',
      lastName: 'Peterson',
      birthDate: '1962-06-12',
    };

    let infos = mount(
        <Infos {...infosProps} />,
      { lifecycleExperimental: true }
    );

    expect(infos.state().firstName).to.equal('Jordan');
    expect(infos.state().lastName).to.equal('Peterson');
    expect(infos.state().birthDate).to.equal('1962-06-12');
  });

  it('Test Infos rerender after updating firstName', () => {
    let infosProps= {
      firstName: 'Jordan',
      lastName: 'Peterson',
      birthDate: '1962-06-12',
      updateField: (n, v) => {}
    };

    let infos = mount(
        <Infos
          {...infosProps}
        />,
        { lifecycleExperimental: true }
    );

    infos.setProps({ firstName: 'Mike' })
    
    expect(infos.state().firstName).to.not.equal('Jordan');
    expect(infos.state().firstName).to.equal('Mike');
    expect(infos.state().lastName).to.equal('Peterson');
    expect(infos.state().birthDate).to.equal('1962-06-12');
  });

  it('Test Infos rerender after updating lastName', () => {
    let infosProps= {
      firstName: 'Jordan',
      lastName: 'Peterson',
      birthDate: '1962-06-12',
      updateField: (n, v) => {}
    };

    let infos = mount(
        <Infos
          {...infosProps}
        />,
        { lifecycleExperimental: true }
    );

    infos.setProps({ lastName: 'Schlansky' })
    
    expect(infos.state().firstName).to.equal('Jordan');
    expect(infos.state().lastName).to.not.equal('Peterson');
    expect(infos.state().lastName).to.equal('Schlansky');
    expect(infos.state().birthDate).to.equal('1962-06-12');
  });

  it('Test Infos rerender after updating birthDate', () => {
    let infosProps= {
      firstName: 'Jordan',
      lastName: 'Peterson',
      birthDate: '1962-06-12',
      updateField: (n, v) => {}
    };

    let infos = mount(
        <Infos
          {...infosProps}
        />,
        { lifecycleExperimental: true }
    );

    infos.setProps({ birthDate: '2020-10-10', });
    
    expect(infos.state().firstName).to.equal('Jordan');
    expect(infos.state().lastName).to.equal('Peterson');
    expect(infos.state().birthDate).to.not.equal('1962-06-12');
    expect(infos.state().birthDate).to.equal('2020-10-10');
  });

});
