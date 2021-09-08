const MailazyClient = require("mailazy-node");
const client = new MailazyClient({
  accessKey: "c3iph52k4fl8lkg6ptu0",
  accessSecret: "BAFoDEdyEarkwkdaYAOYUebHXKMzOP.AhCU8iHySeCYgE7WcFmX9K",
});

const fn = async () => {
  try {
    const resp = await client.send({
      to: "helloanishjain@gmail.com", // required
      from: "no-reply@sneaks.ml", // Use domain you verified, required
      subject: "Hi From Sneaks me", // required
      text: "Thsi is freeking awesome sevice for you my boy",
      html: "What is the most impotant thing in your life of pie,<br/> fastandfurious and avengers",
    });
    console.log("resp: " + resp);
    return;
  } catch (e) {
    console.log("errror: " + e);
  }
};
fn();
