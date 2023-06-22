function getEngQuotesFromApi():Promise<[]> {
  return fetch("https://type.fit/api/quotes")
    .then((data) => data.json())
    .then((data) => data);
}

export default getEngQuotesFromApi;
