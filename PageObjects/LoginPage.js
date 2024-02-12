class LoginPage{
    get usernameInput() { return $('#txtUsername'); }
    get passwordInput() { return $('txtPassword');  }
    get loginButton() { return $x('//*[@id="frmLogin"]/div[4]/button'); }

    successLogin(username, password) {
        this.usernameInput.setValue(username);
        this.passwordInput.setValue(password);
        this.loginButton.click();
    }
}

module.exports = new LoginPage();