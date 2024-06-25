import fetchData from "@/htpp";

export default async function Dialog() {
  const data = await fetchData();
  console.log(data);
  return (
    <>
      <dialog id="my_modal_1" className="modal flex justify-center">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <div className="py-4">
            {data.map((each, index) => {
              return (
                <div key={index}>
                  <h1>{each.title}</h1>
                  <p>{each.body}</p>
                </div>
              );
            })}
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
