import { notFound } from "next/navigation";

export default function DetailsPage({ params }) {
  if (params.details !== "news1") {
    notFound();
  }
  return (
    <>
      <p>this is the details page for each news</p>
      <h1>{params.details}</h1>
    </>
  );
}
