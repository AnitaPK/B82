import { Button } from "./components/Button"
import Header from "./components/Header"
import HeaderClassBased from "./components/HeaderClassBased"
import Profile from "./components/Profile"
import Counter from "./CounterApp/Counter"

function App() {

  return (
    <>
    <Counter />
    <pre>
     1.  Create function based and class based Header component 
      2. create button component with different button names 
      3. create 3 differents users profile by using single component
      4. create new react project tribute page

    </pre>
    <Profile user={{name:"Aditya", email:"adi@gmail.com", cNum:123456788}}  />
    <Profile user={{name:"Swapnil", email:"swap@gmail.com", cNum:123456788}} />

    <Header dataOne="This is data ..."/>
    <hr />
    <HeaderClassBased />
    <Button buttonName="Click Me" />
    <Button buttonName="Login" />
    <Button buttonName="Register" />
    <Button buttonName="Add to Cart" />
    <Button buttonName="Save" />
    <Button buttonName="Logout"/>
    <Button />

    <h1>
      Hello World
    </h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, numquam cumque ipsa est esse blanditiis maxime vero animi nobis facilis tenetur, nisi, asperiores corporis quidem rerum nostrum vitae? Saepe, beatae.</p>
  Your name 
  College name 
    
  </>
  )
}

export default App
