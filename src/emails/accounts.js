var postmark = require("postmark");
var client = new postmark.ServerClient(process.env.POSTMARK_API_KEY)

const sendWelcomeEmail = (email, name) => {
    client.sendEmail(
        {
            From: "parag@paragpawar.in",
            To: email,
            Subject: "Thank you for joining",
            HtmlBody: `Welcom to the app, ${name}. Let me know how you get along with the app.`
        }
    , function(err, data) {
            console.log(err)
            console.log(data) });
}

const cancellationEmail = (email, name) => {
    client.sendEmail(
        {
            From: "parag@paragpawar.in",
            To: email,
            Subject: "Sorry to see you go!",
            HtmlBody: `Hey, ${name}. We're so sorry to see you go, can you help us how can we improve ourselves to serve you better. Thanks.`
        }
    , function(err, data) {
            console.log(err)
            console.log(data) });
}

module.exports = {
    sendWelcomeEmail, cancellationEmail
}