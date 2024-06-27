import Button from "./Button";
import Dialog from "./dialog";
import Link from 'next/link'
export default async function Home() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <details className="dropdown">
              <summary className="m-1 btn">open or close</summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <Button />
                  <Dialog />
                  <Link href="/blog">Blog page</Link>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>
    </>
  );
}
