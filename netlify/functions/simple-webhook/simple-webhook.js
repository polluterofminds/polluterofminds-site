exports.handler = async (event, context) => {
  try {
    const body = JSON.parse(event.body);
    try {
      const body = {
        api_key: "32c5ba7c-0967-4fba-8041-299e6b3243b6",
        email_address: email,
        status: "SUBSCRIBED",
      };
      await axios.post(
        "https://emailoctopus.com/api/1.5/lists/0f3767b8-bc2d-11eb-a3d0-06b4694bee2a/contacts",
        JSON.stringify(body)
      );
      return { statusCode: 200, body: `Success!` };
    } catch (error) {
      console.log(error);
    }    
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
