import React, { useState } from "react";
import { Grid, Typography, Paper } from "@material-ui/core";

/*Commented out code retained for reference*/

/// -------------------- Begin Exercise Code -------------------- ///
/// Code in this block (ended by the similar comment several lines below),
/// are relevant to the excerise. You can ignore all other code

interface AppProps {}
const initial = {
   toppings:{
     all:false,
     peppero:false,
     spinach:false,
     basil:false,
     pineap:false,
     bacon:false
   }
 }

const App: React.FC<AppProps> = () => {
  // interface Item {
  //   id: number;
  //   name: string;
  //   checked: boolean;
  // }

  // const TOPPINGS: Item[] = [
  //   {id: 1, name: 'Pepperoni', checked: false,},
  //   {id: 2, name: 'Spinach', checked: false,},
  //   {id: 3, name: 'Basil', checked: false,},
  //   {id: 4, name: 'Pineapple',   checked: false,},
  //   {id: 5, name: 'Bacon', checked: false,},
  // ];
 //Use conditional rendering
    //if filter?checkbox = false, checkbox = !checkbox;  
    // const selectAll = document.querySelector('select-all input'); 
    //const allCheckbox = document.querySelectorAll('not (select-all) input');
    // let ele = document.querySelectorAll("input[type = 'checkbox']");
    // function checkAll(thisCheckbox: { checked: boolean; }){
    //   if(thisCheckbox.checked==true){Checkbox.forEach(function(checkbox: { checked: boolean; }){checkbox.checked = true;})}
    //   else{Checkbox.forEach(function)(Checkbox){Checkbox.checked = false;}}} 
    //  if(item[i].querySelectorAll = 'checked'){}     
    // const item = document.querySelectorAll("input[name = 'Topping']")
    //   for (let i=0; i<item.length;i++){console.log(item)//.input.checkbox.checked == true;}  

  // const [allToppings, setAllToppings] = useState(false);
  const[content,setContent] = useState(initial);
  const [checkedAll, setCheckedAll] = useState(false)
  // const[topping, setTopping] = useState(false);
  // const [query, setQuery] = useState("");
  // // const [result, setResult] = useState<Item[]>();

  const handleBox = (event:React.ChangeEvent<HTMLInputElement>) => {
    const {name, checked} = event.target
    // if(content.toppings.peppero && content.toppings.spinach && content.toppings.basil && content.toppings.pineap && content.toppings.bacon && !content.toppings.all){
    //   content.toppings.all = true;
    // }
    {setContent({
      toppings:{
        ...content.toppings,
        [name]:checked,
      }
    });}
  };
  // const selectAll = (event:React.MouseEvent<HTMLInputElement>) =>{
  //    let ele = Object.getPrototypeOf(content.toppings);
  //   for (i=0; i<ele.length; i++){
  //     if (ele[i].type == "checkbox")
  //       ele[i].checked=true
  //   }
  // }
 
  // const selectAll = (checkbox) => {
  //   divElement = document.getElementsByClassName(checkbox);
  //   inputElements = divElement.getElementsByTagName('input');
  //   for (i=0; i<inputElements.length;i++){
  //     if (inputElements[i].type != "checkbox")
  //     continue;
  //     inputElements[i].checked = checkbox.checked;
  //   }
  // }

  // const edge = (event:React.MouseEvent<HTMLInputElement>) =>{
  //   const item = event.target
  //     if (item = content.toppings.all)
  //   if(content.toppings.peppero && content.toppings.spinach && content.toppings.basil && content.toppings.pineap && content.toppings.bacon){
      
  //   }
  //   else {content.toppings.all = false;
  //   }
  // };
  // const toggleAllToppings = (event:React.ChangeEvent<HTMLInputElement>) => {
  //   setAllToppings(!allToppings)
  //   setPeppero(true)
  //   setSpinach(true)
  //   setBasil(true)
  //   setPineap(true)
  //   setBacon(true)
  // };
  // const edge = (event:React.MouseEvent<HTMLInputElement>) =>{
  //   if (peppero && spinach && basil && pineap && bacon){
  //     setAllToppings(true);
  //   }
  //    else {setAllToppings(false);}
  // }
  
  // const [isChecked, setIsChecked] = useState(true);
  // const [peppero, setPeppero] = useState(false);
  // const [spinach, setSpinach] = useState(false);
  // const [basil, setBasil] = useState(false);  
  // const [pineap, setPineap] = useState(false);
  // const [bacon, setBacon] = useState(false);
  // const toggleTopping = (event:React.ChangeEvent<HTMLInputElement>) => {if checkbox = true;append value to Array;setTopping(!topping)};
  // const togglePeppero = (event:React.ChangeEvent<HTMLInputElement>) => {
  //   setPeppero(!peppero)
  // };
  // const toggleSpinach = (event:React.ChangeEvent<HTMLInputElement>) => {
  //   setSpinach(!spinach)
  // };
  // const toggleBasil = (event:React.ChangeEvent<HTMLInputElement>) => {
  //   setBasil(!basil)
  // };
  // const togglePineap = (event:React.ChangeEvent<HTMLInputElement>) => {
  //   setPineap(!pineap)
  // };
  // const toggleBacon = (event:React.ChangeEvent<HTMLInputElement>) => {
  //   setBacon(!bacon)
  // };
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <h3>What are your favorite pizza topings?</h3>
        <div style={{ paddingBottom: 10 }}>
          <label htmlFor="all">Select all</label>
          <input type="checkbox" name="all" value="all" checked={content.toppings.all}  onChange={handleBox} />
        </div>
        <div>
          <label htmlFor="Pepperoni">Pepperoni</label>
          <input type="checkbox" className="checkbox" name="peppero" value="Pepperoni"  checked={content.toppings.all || content.toppings.peppero } onChange={handleBox}/>
        </div>
        <div>
          <label htmlFor="Spinach">Spinach</label>
          <input type="checkbox" className="checkbox"name="spinach" value="Spinach" checked={content.toppings.all || content.toppings.spinach } onChange={handleBox}/>
        </div>
        <div>
          <label htmlFor="Basil">Basil</label>
          <input type="checkbox" className="checkbox"name="basil" value="Basil" checked={content.toppings.all || content.toppings.basil} onChange={handleBox}/>
        </div>
        <div>
          <label htmlFor="Pineapple">Pineapple</label>
          <input type="checkbox" className="checkbox"name="pineap" value="Pineapple" checked={content.toppings.all || content.toppings.pineap} onChange={handleBox}/>
        </div>
        <div>
          <label htmlFor="Bacon">Bacon</label>
          <input type="checkbox" className="checkbox" name="bacon" value="Bacon" checked={content.toppings.all || content.toppings.bacon} onChange={handleBox}/>
        </div>
      </div>
      <div>
        <h3>Your favorite pizza toppings are:</h3>
        <div>
          {/* <div className="search-result">
          {result && result.length > 0 ? (
            result.map((item) => (
              <li key={item.id} className="item">
                <span className="item-id">{item.id}</span>
                <span className="item-name">{item.name}</span>
              </li>
            ))):()};
          </div> */}
          </div>
        <div>
          {/* {
            (allToppings) && <div id = {'1'}  className='top'>Pepperoni</div>
          } */}
          {
            (content.toppings.peppero || content.toppings.all) && <div id = {'1'} className = 'top'>Pepperoni</div>
          }
        </div>
        <div>
          {/* {
            (allToppings) && <div id = {'2'} className='top'>Spinach</div>
          } */}
          {
            (content.toppings.spinach || content.toppings.all) && <div id = {'2'} className = 'top'>Spinach</div>
          }
        </div>
        <div>
          {/* {
            (allToppings) && <div id = {'3'} className='top'>Basil</div>
          } */}
          {
            (content.toppings.basil || content.toppings.all) && <div id = {'3'} className = 'top'>Basil</div>
          }
        </div>
        <div>
          {/* {
            (allToppings) && <div id = {'4'} className='top'>Pineapple</div>
          } */}
          {
            (content.toppings.pineap || content.toppings.all) && <div id = {'4'} className = 'top'>Pineapple</div>
          }
        </div>
        <div>
          {/* {
            (allToppings) && <div id = {'5'} className='top'>Bacon</div>
          } */}
          {
            (content.toppings.bacon || content.toppings.all) && <div id = {'5'} className = 'top'>Bacon</div>
          }
        </div>
      </div>
    </div>
  );
};
/// -------------------- End Exercise Code -------------------- ///

interface StateUpdateProps {}

const StateUpdate: React.FC<StateUpdateProps> = () => {
  return (
    <Grid container direction="column">
      <Paper style={{ padding: 25, marginBottom: 75 }}>
        <Typography variant="h3" align="center">
          State Update
        </Typography>
        <Typography paragraph component="div">
          This exercise is to add new logic that doesn't current exist to
          achieve the app's goal. In other words, UI of the app exists but it is
          missing any important business logic that adds functionality to the
          app. The task is to add that business logic!
        </Typography>
        <Typography paragraph component="div">
          The goal of the app is to:
          <ul>
            <li>
              <b>Update the UI:</b> when a user selects a pizza topping, it
              should be added to the "Your favorite pizza toppings are:" list.
              That list really doesn't exist yet, so it can be created in any
              form. In other words, checking a checkbox should add the value of
              that checkbox to that `div`.
            </li>
            <li>
              <b>Select all:</b> There is one special checkbox: the "Select all"
              checkbox. When this checkbox is checked, it should check all other
              checkboxes and subsequently add them all to the favorite toppings
              list. <b>Additionally,</b> if any checkboxes are unchecked, the
              "Select all" box cannot be checked.
            </li>
          </ul>
        </Typography>
      </Paper>
      <App />
    </Grid>
  );
};

export default StateUpdate;


