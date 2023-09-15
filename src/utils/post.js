async function postData(data) {
    // Define the URL of the API endpoint
    const apiUrl = 'http://localhost:8080/addname';
  
    // Define the options for the fetch request
    const requestOptions = {
      method: 'POST',
      //mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        data
        }),
    };
  
    try {
      // Make the POST request using fetch and await the response
      const response = await fetch(apiUrl, requestOptions);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Parse the response data as JSON
      const responseData = await response.json();
  
      return true;
    } catch (error) {
        return false;
    }
  }

  export default postData;
  