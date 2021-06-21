import 'regenerator-runtime/runtime';
import React from 'react';
import { expect, } from 'chai';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Home from './Home';
import { MemoryRouter } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing <Home /> Component', () => {

  it('Test Home first Mount', async () => {
    let home = mount(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
      { lifecycleExperimental: true }
    );

    let expectedHTML = `<div><h2>Bonjour inconnu votre anniversaire est inconnu. Si cela est incorrect vous pouvez modifier les informations sur votre <a href="/infos">page informations</a>.</h2></div>`;
    expect(home.html()).to.equal(expectedHTML);

    home = home.find(Home);
    expect(home.state().firstName).to.not.equal('George');
    expect(home.state().daysTillBD).to.not.equal('2100-05-10');
  });

  it('Test Home after Receiving props', () => {
    let homeProps = {
      firstName: 'Messi',
      daysTillBD: 3,
    };

    let home = mount(
      <MemoryRouter>
        <Home
          {...homeProps}
        />
      </MemoryRouter>
    );

    let instance = home.instance();
    instance.componentDidMount();

    let expectedHTML = `<div><h2>Bonjour Messi votre anniversaire est dans 3 jours. Si cela est incorrect vous pouvez modifier les informations sur votre <a href="/infos">page informations</a>.</h2></div>`;
    expect(home.html()).to.equal(expectedHTML);
    
    home = home.find(Home);
    expect(home.state().firstName).to.equal('Messi');
    expect(home.state().daysTillBD).to.equal(3);
  });
});
