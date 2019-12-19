class HelperFunctions {
    loginUsingApi() {
        cy.request({
            method: 'GET',
            url: 'https://courses.stage.edx.org/login',
        })
        cy.getCookie('csrftoken').its('value').then(($token) => {
            cy.request({
                method: 'POST',
                url: "https://courses.stage.edx.org/user_api/v1/account/login_session/",
                form: true,
                body: {
                    email: 'temp_user@yopmail.com',
                    password: 'edxedxedx1',
                    remember: false,
                },
                headers: {
                    Referer: 'https://courses.stage.edx.org/login/',
                    'X-CSRFToken': $token,
                },
            })
        })
    }
}

export default new HelperFunctions