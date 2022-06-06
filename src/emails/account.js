// const sgMail = require("@sendgrid/mail");

// sgMail.setAPIKey(process.env.SENDGRID_API_KEY);

// sending Welcome email for new user
// const sendWelcomeEmail = (email, name) => {
//   sgMail.send({
//     to: email,
//     from: "vika@gmail.com",
//     subject: "Thanks for joining in!",
//     text: `Welcome tothe app, ${name}. Let me know how you getalong with the app.`,
//   });
// };

// for Manually sending emails

// sgMail.send({
//   to: "vikspatel121@gmail.com",
//   from: "vikas8085245765@gmail.com",
//   subject: "This is my first creation",
//   text: "I hope this one is actually get to you.",
// });

// sending goodBye email for a leaving user
// const sendCancelationEmail = (email, name) => {
//   sgMail.send({
//     to: email,
//     from: "vika@gmail.com",
//     subject: "Thanks for Being with us!",
//     text: `GoodBye ${name} . Hope to see you back soon!`,
//   });
// };

// module.exports = {
//   sendWelcomeEmail,
//   sendCancelationEmail,
// };
