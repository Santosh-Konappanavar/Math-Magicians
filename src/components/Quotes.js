import React, { useState, useEffect } from 'react';

const QuoteComponent = () => {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${'happiness'}`, {
          method: 'GET',
          headers: {
            'X-Api-Key': 'ywNErhODKjGIiAmOYVPARA==eNdrJLiQvvZgqmOR',
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setQuote(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchQuote();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>something went wrong</p>
    );
  }

  return (
    <>
      {quote.map((item) => (
        <div key={item.id}>
          <h3>day of the quote</h3>
          <h6>
            <span>{item.quote}</span>
          </h6>
          <h5>
            {item.author}
          </h5>
        </div>
      ))}
    </>
  );
};

export default QuoteComponent;
