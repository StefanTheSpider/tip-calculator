export default function Header({ person, onPerson }) {
    return (
        <div className="header-container">
            <h1 className="title">Welcome to Stefan's tip Calculator</h1>
            <span>How many are you?</span>
            <select
                id="person"
                type="text"
                value={person}
                onChange={(e) => onPerson(e.target.value)}
            >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>
                        {num}
                    </option>
                ))}
            </select>
        </div>
    );
}
