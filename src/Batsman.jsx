import { useState } from "react"
export default function Batsman() {
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);

    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }

    const handleFour = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns);
    }

    const handleSix = () => {
        const updatedRuns = runs + 6;
        const updatedsixes = sixes + 1;
        setSixes(updatedsixes);
        setRuns(updatedRuns);
    }

    let msg;
    if (runs >= 100) {
        msg = <p>You Scored a century</p>;
    }else if(runs >=50){
        msg = <p>You Score a half century</p>;
    }

    return (
        <div>
            <h3>Player: Banlga Batsman</h3>
            <p><small>Six: {sixes}</small></p>

            {
                // runs >= 50 && <p>You Score: 50</p>
            }

            {msg}


            
            


            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}