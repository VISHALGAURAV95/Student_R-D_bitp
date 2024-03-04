import React, { useState } from 'react';
import axios from 'axios';

function ResearchOpportunities() {
  const [research, setResearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateResearch = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        '',
        {
          model: 'gpt-3.5',
          messages: [{ role: 'user', content: 'Generate latest research opportunities pointwise' }],
          temperature: 0.7,
          max_tokens: 64,
          top_p: 1
        },
        {
          // headers: {
          //   'Content-Type': 'application/json',
          //   'Authorization': 'Bearer enter new api key' // Replace with your OpenAI API key
          // }
        }
      );

      setResearch(response.data.choices[0].text);
    } catch (error) {
      console.error('Error fetching data from the OpenAI API:', error);
      setError('Failed to fetch data from the OpenAI API');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button onClick={generateResearch} disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Generate Research Opportunities'}
      </button>
      {error && <div>Error: {error}</div>}
      {research && <div>{research}</div>}
    </div>
  );
}

export default ResearchOpportunities;
