import Accordion from "./Accordion";
import {accordionData} from "./Content/content"
function App() {
  return (
    <div className="accordion">
        {accordionData.map(({title,content})=>
        {return (<Accordion 
        title = {title} 
        content={content} 
        key={Math.random()*100}/>)})}
    </div>
  );
}

export default App;
