import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {AuthForm} from './auth-form'
import sinon from 'sinon'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('AuthForm', () => {
  let authForm, submitSpy

  beforeEach(() => {
    submitSpy = sinon.spy()
    authForm = shallow(<AuthForm name="Login" displayName="Stuff" handleSubmit={submitSpy} />)
  })

  it('invokes `handleSubmit` prop on form submission', () => {
    const form = authForm.find('form')
    expect(submitSpy.called).to.be.false // eslint-disable-line
    const fakeEvent = {
      target: {
        email: 'example@e.com',
        password: 'lalala'
      }
    }
    form.simulate('submit', fakeEvent)
    expect(submitSpy.called).to.be.true // eslint-disable-line
    expect(submitSpy.args[0][0]).to.deep.equal(fakeEvent) // incomplete
  })

})