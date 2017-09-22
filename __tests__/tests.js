import * as actions from '../actions'

describe('selectUser', () => {
  it('should create an action to select a user', () => {
    const user = 'kevincolten'
    const expectedAction = {
      type: actions.SELECT_USER,
      user
    }
    expect(actions.selectUser(user)).toEqual(expectedAction)
  })
})
