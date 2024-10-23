import React, { useState, useEffect } from "react";

const Gitdetails = () => {
  // State to hold the fetched data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching data from GitHub API
  useEffect(() => {
    const fetchGitHubUsers = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users?per_page=10"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result); // Update state with the fetched data
        setLoading(false); // Set loading to false when done
      } catch (err) {
        setError(err.message); // Set the error if fetch fails
        setLoading(false);
      }
    };

    fetchGitHubUsers(); // Call the function inside useEffect
  }, []); // Empty dependency array ensures this runs only once on mount

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Top 10 GitHub Users</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <img
              src={item.avatar_url}
              alt={item.login}
              style={{ width: "50px", borderRadius: "50%" }}
            />
            <a href={item.html_url} target="_blank" rel="noopener noreferrer">
              {item.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gitdetails;
