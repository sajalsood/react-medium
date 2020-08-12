import React, { useContext, useEffect } from 'react';
import { AppContext } from '../App';

function Growl() {
  const [appState, setAppState] = useContext(AppContext);

  useEffect(() => {
    setTimeout(function(){
      setAppState({...appState, error: undefined});
    }, 2000);
  }, []);

  return (
    <div className="Growl">
      <span><i className="fa fa-times"></i>&nbsp;{ appState.error }</span>
    </div>
  );
}

export default Growl;
