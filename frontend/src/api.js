import { useState, useEffect } from "react";

// TODO - update this to be your url
const BASE_URL = "https://mylibappwinnie.herokuapp.com";

function getAuthors() {
  const endpoint = BASE_URL + "/author-management";
  //fetch all authors
  return fetch(endpoint).then(res => {
    console.log(res);
    return res.json();
  });
}

export function getAuthor(id) {
  const endpoint = BASE_URL + `/author-management/${id}`;

  // TODO
  // return fetch statement to get an author by the id
}

export function addAuthor(author) {
  const { id, first_name, last_name } = author;
  if (!id || !first_name || !last_name) {
    alert("must include all fields");
    return;
  }

  const endpoint = BASE_URL + `/author-management/`;

  // TODO
  // return fetch statement to add an author
}

export function updateAuthor(author) {
  const { id, first_name, last_name } = author;
  if (!id) {
    alert("must include an id");
    return;
  }
  if (!first_name || !last_name) {
    alert("must include a first name or last name to update");
    return;
  }

  const endpoint = BASE_URL + `/author-management/update`;

  // return fetch query to update an author
  return fetch(endpoint, {
    method: "PUT",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      id,
      first_name,
      last_name
    })
  })
  .then(res => window.location.reload());
}

export function deleteAuthor(id) {
  const endpoint = BASE_URL + `/author-management/${id}`;

  // return fetch query
}

export function useAuthors() {
  const [loading, setLoading] = useState(true);
  const [authors, setAuthors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAuthors()
      .then(authors => {
        setAuthors(authors);
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
        setError(e);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    authors,
    error
  };
}
