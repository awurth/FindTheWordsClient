
export default class RegisterController {
  constructor ($state, AuthService) {
    this.$state = $state
    this.AuthService = AuthService

    this.user = {}
  }

  submit () {
    this.AuthService.register(this.user).then(() => {
      this.$state.go('login')
    }, response => {
      console.log(response)
    })
  }
}

RegisterController.$inject = ['$state', 'AuthService']
