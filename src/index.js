import React from 'react';
import { createRoot } from 'react-dom/client';


function Greeting(){
  const [locale , setLocale] = React.useState('id');

  const changeToId = () => setLocale('id');
  const changeToEn= () => setLocale('en');

  return(
    <div style={{height:'100vh',display:'flex', justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      {locale === 'id' ?( 
        <>
        <p style={{fontFamily:'monospace',fontSize:'34px', fontWeight:'bold'}}>Selamat Pagi!</p>
        <button onClick={changeToEn} style={{width:'250px',height:'100px',backgroundColor:'salmon',borderStyle:'none',fontFamily:'monospace'}}>Translate</button>
        </>
      ):(
        <>
        <p style={{fontFamily:'monospace',fontSize:'34px', fontWeight:'bold'}}>Good Morning!</p>
        <button onClick={changeToId} style={{width:'250px',height:'100px',backgroundColor:'salmon',borderStyle:'none',fontFamily:'monospace'}}>Terjemahkan</button>
        </>
      )}
    </div>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<Greeting />);


