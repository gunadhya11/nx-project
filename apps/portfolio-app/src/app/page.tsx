import { Books } from "./components/books";

export default async function Index() {
  
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome portfolio-app 👋
            </h1>
          </div>
        <Books/>
          

       

          

          
        </div>
      </div>
    </div>
  );
}
