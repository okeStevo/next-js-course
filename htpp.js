export default async function fetchData() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 24 * 3600,
    },
  });
  const response = await data.json();
  return response;
}
