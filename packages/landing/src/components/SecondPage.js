import React, { useEffect, useState } from "react";

export default function SecondPage() {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((data) => {
        setPeople(data.results);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {people.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ul>
  );
}
