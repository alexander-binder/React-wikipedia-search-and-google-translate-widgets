import { useEffect, useState } from "react";
import axios from "axios";

const KEY  = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

function Convert({language , text}) {

    const [traslated, setTraslated] = useState('');
    
    const [debouncedText, setDebouncedText] = useState(text);


    useEffect(() => {
        
      const timerId =  setTimeout(() => {
        setDebouncedText(text);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        } 

    }, [text]);


    useEffect(() => {

        const doTranslation = async () => {
           
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                    params:{
                        q: debouncedText,
                        target:language.value,
                        key: KEY
                    },    
                }
            );
            
            setTraslated(data.data.translations[0].translatedText);
        }


        
        doTranslation();
      
    }, [language,debouncedText]);

    return (  
        <div>
            <h1 className="ui header">{ traslated }</h1>
        </div>
    );
}

export default Convert;