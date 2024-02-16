import React,{useState,useEffect} from 'react'
import Content from '../../Component/Content'
import TextAreaInput from '../../Component/TextArea'
function index() {
  const [Text, setTexts] = useState([]);

  useEffect(() => {
    
    const storedText = localStorage.getItem('Text');
    console.log(storedText);
    if (storedText) {
      setTexts(JSON.parse(storedText));
    }
  }, []);
  const handleSendText = (Texts) => {
    const currentDate=new Date();
    const FormateteDate=`${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
    const updatedText= [...Text,{text:Texts,timestamp:FormateteDate}];
    setTexts(updatedText);
    localStorage.setItem('Text', JSON.stringify(updatedText));
  };
  return (
    <>
      <Content Text={Text}/> 
      <TextAreaInput onSendText={handleSendText}/> 
    </>
  )
}

export default index