export default function Tip({ tip, onSetTip }) {
    return (
        <div>
            <label htmlFor="tip">How did you like the service? </label>
            <select
                id="tip"
                onChange={(e) => onSetTip(Number(e.target.value))}
                value={tip}
            >
                <option value="0">it was disgusting</option>
                <option value="0.05">it was ok I give 5%</option>
                <option value="0.1">it was gut I give 10%</option>
                <option value="0.15">it was superb I give 15%</option>
            </select>
        </div>
    );
}
