
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const[name,setName] = useState('');
  const[datetime,setDatetime] = useState('');
  const[description,setDescription]= useState('');
  const[transactions,setTransactions]= useState('');
  
  useEffect(()=>{
    getTransaction().then(setTransactions);
  },[]);

 async function getTransaction(){
    const url=process.env.REACT_APP_API_URL+'/transaction';
    const response=await fetch(url);
    return await response.json();
  }

  function addnewtransaction(ev){
    ev.preventDefault();
    const url=process.env.REACT_APP_API_URL+'/transaction';
    const price = name.split(' ')[0];
    fetch(url,{
      method:'POST',
      headers:{'Content-type':'application/json'},
      body: JSON.stringify({
        price,
        name:name.substring(price.length+1),
        description,
        datetime,
      })
    }).then(response=>{
      response.json().then(json=>{
       setName('');
       setDatetime('');
       setDescription('');
       console.log('result',json);
      });
    });
  }

  let balance =0;
  for(const transaction of transactions){
    balance = balance + transaction.price;
  }

  balance=balance.toFixed(2);
  const fraction= balance.split('.')[1];
  // balance=balance.split('.')[0];
  return (
    
      <div>
        <div className='main-container'>
        <div className='left=partition'>
        <div className='mm'>
          <h1 >Money Minder</h1>
        </div>
        <div className='some'>
          <p>Money Minder is a user-friendly and intuitive mobile application designed</p>
            <p> to help you efficiently manage your finances and take control of your spending.</p>
            <p>  Whether you're trying to track daily expenses, stick to a budget, or save money  </p>
             <p>for future goals, this app is your ideal financial companion.</p>
             <p>Take control of your finances and achieve your financial goals with Money Minder.</p>
             <p> Download now and embark on a journey towards financial freedom and responsibility.</p>
        </div>
        </div>
        <div className='right-partition'>
      <main>
      <h1>Rs{balance}<span></span></h1>
      <form onSubmit={addnewtransaction}>
        <div className='basic'>
        <input type="text" 
               value={name}
               onChange={ev=> setName(ev.target.value)}
                placeholder={'+200 tv'}/>
        <input value={datetime}
               onChange={ev=> setDatetime(ev.target.value)} 
               type="datetime-local"/>
        </div>
        <div className='description'>
        <input type='text' 
              value={description} 
              onChange={ev=> setDescription(ev.target.value)}
              placeholder={'description'}/>
        </div>
        <button type='sumbit'>Add new transaction</button>
     
      </form>
      <div className='transactions'>
        {transactions.length>0 && transactions.map(transaction=>(
          
            <div className='transaction'>
          <div className='left'>
            <div className='name'>{transaction.name}</div>
            <div className='description'> {transaction.description}</div>
          </div>
          <div className='right'>
            {console.log(transaction.price)}
            <div className={'price'+(transaction.price<0?'red':'green')}>{transaction.price}</div>
            <div className='datetime'>2023-07-26 15:45</div>
          

        </div>
        
          </div>
        ))}
        
        </div>  
    </main>
    </div>
    </div>
    
    </div>
    
  );
}

export default App;
