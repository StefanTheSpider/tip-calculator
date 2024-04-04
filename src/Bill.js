export default function Bill({ onSetBill }) {
    return (
        <div className="bill-container">
            <label htmlFor="bill">How much was the bill? </label>
            <input
                id="bill"
                type="text"
                onChange={(e) => {
                    const inputValue = e.target.value;
                    const billAmount = parseFloat(
                        inputValue.replace(',', '.')
                    ).toFixed(2);
                    if (!isNaN(billAmount)) {
                        onSetBill(parseFloat(billAmount));
                    }
                }}
            />
        </div>
    );
}
