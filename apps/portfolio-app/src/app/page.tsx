import { Books } from "./components/books";
import AddBookForm from "./components/form";
 export const dynamic = "force-dynamic"
export default async function Index() {
  
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div>
      
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome portfolio-app 👋
            </h1>
          </div>
        <Books/>
        <AddBookForm/>
        
    </div>
  );
}
