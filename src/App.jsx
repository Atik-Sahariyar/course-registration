import { useState } from 'react';
import './App.css'
import Courses from './Components/Courses'
import Registrations from './Components/Registrations';

function App() {
  const [registrations, setRegistrations] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  console.log(isClicked);
  const handleRegistration = course =>{
    setIsClicked(true)
    const isExist = registrations.find(item => item.id == course.id)
    let count = course.credit;
    let sumPrice = course.price;
    let newCount = course.credit;
 
    if(isExist){
     return alert('This course allready enrolled')
    }
    else{
      registrations.forEach(item =>{
        count = count + item.credit;
        sumPrice = sumPrice + item.price;
      })
      if(count <= 20){
        newCount = count;
     }
     else{
      return alert('your credit limit is 20');
     }
     if(totalCredit > 20){
        return;
      }
      else{ setTotalCredit(newCount)} 
      const remaining = 20 - count;
      if(remaining < 0)
      {
        return;
      }
      else
      {
        setRemaining(remaining);
      }
      setTotalPrice(sumPrice)
      if(count > 20 || remaining < 0)
      {
          return alert('credit not available');
      }
      else{
        const newResitrations = [...registrations, course];
        setRegistrations(newResitrations)
      }
     
    }
  }
  return (
    <>
      <h1 className='text-3xl font-semibold text-center my-8 '>Course Registration</h1>
      <div className='flex flex-col-reverse md:flex-col-reverse lg:flex-row'>
        <div>
          <Courses key={registrations.id}
          handleRegistration={handleRegistration}
          isClicked={isClicked}></Courses>
        </div>
        <div>
          <Registrations
          key={registrations.id}
          registrations={registrations}
          totalCredit={totalCredit}
          remaining={remaining}
          totalPrice={totalPrice}
          ></Registrations>
        </div>
      </div>
    </>
  )
}

export default App;
