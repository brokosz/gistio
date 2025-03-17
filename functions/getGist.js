exports.handler = async (event) => {
  const { queryStringParameters } = event;
  const { user, id } = queryStringParameters || {};
  
  if (!user || !id) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing user or id parameter" }),
    };
  }
  
  try {
    const url = `https://gist.githubusercontent.com/${user}/${id}/raw`;
    console.log(`Fetching gist from ${url}`);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    
    const content = await response.text();
    
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*",
      },
      body: content,
    };
  } catch (error) {
    console.error(`Error fetching gist: ${error.message}`);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
