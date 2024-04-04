import { useState } from 'react';

export default function Total({ bill, tip, person }) {
    const [splitedBill, setSplitedBill] = useState(false);
    function handleSplitBill() {
        setSplitedBill(!splitedBill);
    }
    const toGive = tip;
    const total = bill * (1 + tip);
    const persons = person;
    const toPay = total / person;
    if (total !== 0)
        return (
            <div className="total">
                {persons > 1 ? (
                    <div className="split">
                        <p>wanna split the bill?</p>
                        <input
                            type="checkbox"
                            onClick={() => handleSplitBill()}
                        ></input>
                    </div>
                ) : (
                    ''
                )}
                <p>
                    {splitedBill ? (
                        <p> each of you should pay: {toPay.toFixed(2)} €</p>
                    ) : (
                        ''
                    )}
                </p>
                <span>
                    {toGive === 0 ? (
                        'you shold get a discount'
                    ) : (
                        <p>Total: {total.toFixed(2)} €</p>
                    )}
                </span>
            </div>
        );
}
