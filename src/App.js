import { useState } from 'react';
import Header from './Header';
import ResetButton from './ResetButton';
import Tip from './Tip';
import Total from './Total';
import Footer from './Footer';
import Bill from './Bill';

export default function App() {
    const [person, setPerson] = useState(1);
    const [bill, setBill] = useState(0);
    const [tip, setTip] = useState(0.05);

    function handleReset() {
        window.location.reload();
    }

    return (
        <div>
            <Header person={person} onPerson={setPerson} />
            <div className="App">
                <Bill bill={bill} onSetBill={setBill} />
                <Tip onSetTip={setTip} tip={tip} />
                <Total person={person} bill={bill} tip={tip} />
                <ResetButton onHandleRset={handleReset} />
            </div>
            <Footer />
        </div>
    );
}
