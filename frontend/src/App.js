
// import { useEffect, useState } from 'react';
// import './App.css';

// function App() {
  
//   const[name,setName] = useState('');
//   const[datetime,setDatetime] = useState('');
//   const[description,setDescription]= useState('');
//   const[transactions,setTransactions]= useState('');
  
//   useEffect(()=>{
//     getTransaction().then(setTransactions);
//   },[]);

//  async function getTransaction(){
//     const url=process.env.REACT_APP_API_URL+'/transaction';
//     const response=await fetch(url);
//     return await response.json();
//   }

//   function addnewtransaction(ev){
//     ev.preventDefault();
//     const url=process.env.REACT_APP_API_URL+'/transaction';
//     const price = name.split(' ')[0];
//     fetch(url,{
//       method:'POST',
//       headers:{'Content-type':'application/json'},
//       body: JSON.stringify({
//         price,
//         name:name.substring(price.length+1),
//         description,
//         datetime,
//       })
//     }).then(response=>{
//       response.json().then(json=>{
//        setName('');
//        setDatetime('');
//        setDescription('');
//        console.log('result',json);
//       });
//     });
//   }

//   let balance =0;
//   for(const transaction of transactions){
//     balance = balance + transaction.price;
//   }

//   balance=balance.toFixed(2);
//   //const fraction= balance.split('.')[1];
//   // balance=balance.split('.')[0];
//   return (
    
//       <div>
//         <div className='main-container'>
//         <div className='left=partition'>
//         <div className='mm'>
//           <h1 >Money Minder</h1>
//         </div>
//         <div className='some'>
//           <p>Money Minder is a user-friendly and intuitive mobile application designed</p>
//             <p> to help you efficiently manage your finances and take control of your spending.</p>
//             <p>  Whether you're trying to track daily expenses, stick to a budget, or save money  </p>
//              <p>for future goals, this app is your ideal financial companion.</p>
//              <p>Take control of your finances and achieve your financial goals with Money Minder.</p>
//              <p> Download now and embark on a journey towards financial freedom and responsibility.</p>
//         </div>
//         </div>
//         <div className='right-partition'>
//       <main>
//       <h1>Rs{balance}<span></span></h1>
//       <form onSubmit={addnewtransaction}>
//         <div className='basic'>
//         <input type="text" 
//                value={name}
//                onChange={ev=> setName(ev.target.value)}
//                 placeholder={'+200 tv'}/>
//         <input value={datetime}
//                onChange={ev=> setDatetime(ev.target.value)} 
//                type="datetime-local"/>
//         </div>
//         <div className='description'>
//         <input type='text' 
//               value={description} 
//               onChange={ev=> setDescription(ev.target.value)}
//               placeholder={'description'}/>
//         </div>
//         <button type='sumbit'>Add new transaction</button>
     
//       </form>
//       <div className='transactions'>
//         {transactions.length>0 && transactions.map(transaction=>(
          
//             <div className='transaction'>
//           <div className='left'>
//             <div className='name'>{transaction.name}</div>
//             <div className='description'> {transaction.description}</div>
//           </div>
//           <div className='right'>
//             {console.log(transaction.price)}
//             <div className={'price'+(transaction.price<0?'red':'green')}>{transaction.price}</div>
//             <div className='datetime'>2023-07-26 15:45</div>
          

//         </div>
        
//           </div>
//         ))}
        
//         </div>  
//     </main>
//     </div>
//     </div>
    
//     </div>
    
//   );
// }

// export default App;


import { useEffect, useState } from 'react';  /*import useEffect and useState hooks from react package in React component*/
import './App.css';

function App() {
  
  const[name,setName] = useState('');     /* react hook useState to add functional component  */
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

  function addnewtransaction(ev){  /* takes state and send to backend*/
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
  // const fraction= balance.split('.')[1];
  // balance=balance.split('.')[0];
  return (
    
      <><div>


      <div className='mm'>
        <h1 >Money Minder</h1>

      <div className="navbar">
        <a href="#home" className="nav-link">Home</a>
        <a href="#wallet" className="nav-link">Wallet</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>

      </div>
      

      <div className='some' id='home'>
        <p>Money Minder is a user-friendly and intuitive mobile application designed
         to help you efficiently manage your finances and take control of your spending.</p>
        <p>  Whether you're trying to track daily expenses, stick to a budget, or save money  
        for future goals, this app is your ideal financial companion.</p>
        <p>Take control of your finances and achieve your financial goals with Money Minder.</p>
        <p> Download now and embark on a journey towards financial freedom and responsibility.</p>
      </div>

      <div className='right-partition'>
        <main className='main'>            
          <h1 id='wallet'>Rs{balance}</h1>
          <form onSubmit={addnewtransaction}>
            <div className='basic'>
              <input type="text"
                value={name}
                onChange={ev => setName(ev.target.value)}  /*onChange is event handler, 
                                                   takes ev as parameter and 
                                                   update state using setName */
                placeholder={'+200 tv'} />
              <input value={datetime}
                onChange={ev => setDatetime(ev.target.value)}
                type="datetime-local" />
            </div>
            <div className='description'>
              <input type='text'
                value={description}
                onChange={ev => setDescription(ev.target.value)}
                placeholder={'description'} />
            </div>
            <button type='sumbit'>Add new transaction</button>

          </form>
          <div className='transactions'>
            {transactions.length > 0 && transactions.map(transaction => (

              <div className='transaction' key={transaction.id}>
                <div className='left'>
                  <div className='name'>{transaction.name}</div>
                  <div className='description'> {transaction.description}</div>
                </div>
                <div className='right'>
                  {console.log(transaction.price)}
                  <div className={'price' + (transaction.price < 0 ? 'red' : 'green')}>{transaction.price}</div>
                  <div className='datetime'>2023-07-26 15:45</div>

                  <div className='share-button'>
                <a
                  href={`mailto:?subject=Transaction Details&body=Transaction Name: ${transaction.name}%0D%0AAmount: ${transaction.price}%0D%0ADescription: ${transaction.description}`}
                >
                  Share
                </a>
              </div>

                </div>

              </div>
            ))}

          </div>
        </main>

      </div>
    </div>
    <div className='footer' >
      <div>

        <div className='left'>
          <ul>
          <h2 id='about'>About</h2>
          <div >
            <p id='ab'>
            We understand that managing finances can be overwhelming,
             but Money Minder is designed to simplify the process and
              provide you with the tools you need to make informed financial decisions.
            </p>
            <p id='ab'>Join us on your journey towards financial freedom and responsibility.
               Download Money Minder today and take the first step towards a brighter financial future!</p>
          </div>
          </ul>
        </div>
        

        <div>
        <ul className='right'>
          
          <h2 className="title-lg" id='contact'>Contact Details</h2>

          <a href="mailto:ajaykusum16@gmail.com" className="footer-link">
            ajaykusum16@gmail.com
          </a>
         
          <a href="tel:+91 8966923489" className="footer-link">
            +91 8966923489
          </a>
        
      </ul>
        </div>

      </div>
        
        <div className="footer-bottom">
          <div className="container">
            <p className="body-md">
              &copy; 2023 Developed
              by Ajay_kusum.
            </p>
          </div>
        </div>
      </div></>
    
    
  );
}

export default App;

