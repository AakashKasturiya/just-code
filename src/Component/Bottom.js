import HTML from '../images/html.png';
import CSS from '../images/CSS.png';
import JS from '../images/js.png';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React, { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';


import './Bottom.css';

let Bottom = ()=>{

    const [html, setHtml] = useLocalStorage('html', '')
    const [css, setCss] = useLocalStorage('css', '')
    const [js, setJs] = useLocalStorage('js', '')
    const [srcDoc, setSrcDoc] = useState('')
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setSrcDoc(`
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
        `)
      }, 250)
  
      return () => clearTimeout(timeout)
    }, [html, css, js])
  
 

    return(
        <>
        
    <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="300px"
        />
      </div>

    <CardGroup>
      <Card className='cardDiv'>
        
      <Card.Header className = 'headerDiv'>
        <small className='text-header'>
        <img src={HTML} alt="html" className='imglogo' />HTML
        </small>
            
        </Card.Header>
        <Card.Body>
        <div className="html-code">
              
                <textarea
          language="html"
          displayname="html"
          value={html}
          onChange={(e)=>setHtml(e.target.value)}
          rows="10" cols="50"
        />
            </div>
        </Card.Body>
   
      </Card>
      <Card className='cardDiv'>
        <Card.Header className = 'headerDiv'>
        <small className="text-header">
        <img src={CSS} alt="css" className='imglogo'/>CSS
            </small>
        
        </Card.Header>
       <Card.Body>
       <div className="css-code">
                <textarea
          language="css"
          displayname="css"
          value={css}
          onChange={(e)=>setCss(e.target.value)}
          rows="10" cols="50"
        />
            </div>
         </Card.Body>
      </Card>
      <Card className='cardDiv'>
        <Card.Header className = 'headerDiv'>
        <small className="text-header"><img src={JS} alt="js" className='imglogo'/>JS</small>
  
        </Card.Header>
        <Card.Body>
        <div className="js-code">
         
                <textarea
          language="js"
          displayname="js"
          value={js}
          onChange={(e)=>setJs(e.target.value)}
          rows="10" cols="50"
        />
            </div>
        </Card.Body>
      
      </Card>
    </CardGroup>
        </>
    )

}

export default Bottom;




 
