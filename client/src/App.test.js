import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom'
import configureStore from "redux-mock-store";
import {Provider} from 'react-redux'
import LandingPage from '../src/components/LandingPage'
import DogCreate from '../src/components/dogCreate'

configure({adapter: new Adapter()})

describe('App',()=>{
  let store
  const middlewares = []
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    store = mockStore([]);
  });
  describe('El componente LandingPage debe renderizar en la ruta /', () => {
    it('Debería renderizarse en la ruta "/"', () => {
      const wrapper = mount(
          <Provider store={store}>
            <MemoryRouter initialEntries={[ '/' ]}>
              <App />
            </MemoryRouter>
          </Provider>
      );
        expect(wrapper.find(LandingPage)).toHaveLength(1);
    });
  });
  it('El componente DogCreate debe renderizar en la ruta /dogs', () => {
    const container = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={[  '/dogs' ]}>
            <App />
          </MemoryRouter>
        </Provider>
    );
    expect(container.find(DogCreate)).toHaveLength(0);
  });
})










// xdescribe('<AddTodo />',() => {

//   describe('Estructura', () => {
//     let wrapper;
//     beforeEach(() => {
//       wrapper = shallow(<AddTodo />);
//     })
//     it('Renderiza un <form>', () => {
//       expect(wrapper.find('form')).toHaveLength(1)
//     })

//     it('Renderiza un label con el texto igual a "Title"', () => {
//       // El orden en el que se encuentran los Labels es importante.
//       expect(wrapper.find('label').at(0).text()).toEqual('Title');
//     })

//     it('Renderiza un input con la propiedad "name" igual a "title"', () => {
//       expect(wrapper.find('input[name="title"]')).toHaveLength(1);
//     })

//     it('Renderiza un label con el texto igual a "Description"', () => {
//       // El orden en el que se encuentran los Labels es importante.
//       expect(wrapper.find('label').at(1).text()).toEqual('Description');
//     })

//     it('Renderiza una textarea con la propiedad "name" igual a "description"', () => {
//       expect(wrapper.find('textarea[name="description"]')).toHaveLength(1);
//     })

//     it('Renderiza un label con el texto igual a "Place"', () => {
//       // El orden en el que se encuentran los Labels es importante.
//       expect(wrapper.find('label').at(2).text()).toEqual('Place');
//     })

//     it('Renderiza un input con la propiedad "name" igual a "place"', () => {
//       expect(wrapper.find('input[name="place"]')).toHaveLength(1);
//     })

//     it('Renderiza un label con el texto igual a "Date"', () => {
//       // El orden en el que se encuentran los Labels es importante.
//       expect(wrapper.find('label').at(3).text()).toEqual('Date');
//     })

//     it('Renderiza un input con la propiedad "name" igual a "date"', () => {
//       expect(wrapper.find('input[name="date"]')).toHaveLength(1);
//     })
    
//     it('Renderiza un boton con el "type" "submit"', () => {
//       expect(wrapper.find('button[type="submit"]')).toHaveLength(1)
//     })
//   })
// })