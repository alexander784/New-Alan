import React, { useEffect }from "react";
import alanBtn from '@alan-ai/alan-sdk-web';
//Initialize alanKey from the alan.App
const alanKey = '037db8c6442ad9b12644fa81a388e2302e956eca572e1d8b807a3e2338fdd0dc/stage'


 const App = () => {
// This useEffect runs once when the component mounts (empty dependency array [])
    useEffect(() => {
        alanBtn ({
            // / Initialize Alan voice assistant button with the provided key
            key:alanKey,
            //Import command based on certain actions and commands
            onCommand: ( { command }) => {
                if(command === 'testCommand') {
                    alert ('This code was executed');
                }
            }
        })
    }, [])
  return (
    <div>
        <h1>Alan AI News Application</h1>
    </div>
  );
}

export default App;
