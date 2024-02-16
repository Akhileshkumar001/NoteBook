import '../../public/Style/Main.css'
function Content({Text}) {
  console.log(Text);
  // const[AllText,setAllText]=useState([])
  

  return (
    <div className='Content' >
      <h1 style={{position:"absolute", top:"430px", left:"560px"}}>Pocket Notes</h1>
        <div className='para'>
            <p style={{padding:"4px"}}>Send and receive messages without keeping your phone online.</p>
            <p style={{padding:"2px"}}>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
            <p style={{position:"absolute", top:"170px",left:"140px", color:"gray"}}>end-to-end encrypted</p>
        </div>
      
          {/* {Text[0]}
        <span >{Text.timestamp}</span>   */}
      
        {/* {Text.map((Texts,index)=>{
          
          console.log(index,Texts);
          return  <div key={index}>
          <span>{Texts.text}</span>
          <span >{Texts.timestamp}</span>
        </div>
         
        })} */}
      
      
      
      </div>
  )
}

export default Content