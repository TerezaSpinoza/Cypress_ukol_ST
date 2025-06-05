export class LoginPage {
  loginForm = ()  => cy.get('form[data-testid="formLogin"]').eq(1)  //tady sem si našla form, který pouzdruje ty 3 inputy
  emailInput = () => this.loginForm().find('input[data-testid="inputEmail"]')
  passwordInput = () => this.loginForm().find('input[data-testid="inputPassword"]')
  submitButton = () => this.loginForm().find('button[data-testid="buttonSubmit"]')

    visit() {
    cy.visit('/login');
  }


  login(email: string, password: string) {
    this.visit();
    this.emailInput().type(email);
    this.passwordInput().type(password);
    this.submitButton().click();
  }
}