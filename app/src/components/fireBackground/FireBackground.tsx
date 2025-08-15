import './FireBackground.css'

export default function FireBackground() {
    const colors = ['#b45f06', '#ff9a5a', '#ffd166', '#ffbc42', '#990000'];

    function createFlameStylings() {
        const size = 10 + Math.random() * 20;
        const leftPos = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = 5 + Math.random() * 5;

        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        return {
            width: `${size}px`,
            height: `${size * 1.2}px`,
            left: `${leftPos}%`,
            backgroundColor: randomColor,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`
        }
    }

    return (
        <div className="fire-background-shell">
            <div className='texturing'></div>
            <div className="fire-container" id="headerFire">
                {[...Array(200).keys()].map((_, index) => {
                    return <div key={index} className='flame' style={createFlameStylings()}></div>
                })}
            </div>
        </div>
    )
}
