import React from 'react';
import { withStorageListener } from './withStorageListener';
import './ChangeAlert.css';
function ChangeAlert({show, toggleShow}){
   if(show){
       return (
           <div className='ChangeAlert-bg'>
               <div className='ChangeAlert-content'>
                    <p className='ChangeAlert-message'>Hubo cambios a que recargar para poder ver lo nuevo.</p>
                    <button className='ChangeAlert-button' onClick={() => {toggleShow(false)}}>Cargar Nueva info</button>    
               </div>
           </div>
       );
   } else {
       return <React.Fragment></React.Fragment>
   }
}
const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)
export {ChangeAlertWithStorageListener};