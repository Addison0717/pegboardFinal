import React from 'react'

export class LoginClass {
  constructor(email, password, name) {

    this.Id = getRandomInt(1000000),
    this.body = {
      email: email,
      password: password,
      name: name,
      notification: {
        posts:[],
        match: [],
        request: []
      }
    }

  }

}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
