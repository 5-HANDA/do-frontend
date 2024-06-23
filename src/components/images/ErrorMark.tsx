export default function ErrorMark({ rotate, color }: { rotate?: number; color?: string }) {
    return (
        <>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.41999 4.83001C6.20672 4.63129 5.92465 4.52311 5.6332 4.52825C5.34175 4.53339 5.06367 4.65146 4.85755 4.85758C4.65143 5.0637 4.53337 5.34178 4.52822 5.63323C4.52308 5.92468 4.63127 6.20675 4.82999 6.42001L10.41 12L4.82999 17.58C4.71946 17.683 4.6308 17.8072 4.56932 17.9452C4.50783 18.0832 4.47476 18.2322 4.4721 18.3832C4.46943 18.5343 4.49722 18.6843 4.5538 18.8244C4.61038 18.9645 4.6946 19.0917 4.80143 19.1986C4.90826 19.3054 5.03551 19.3896 5.17559 19.4462C5.31567 19.5028 5.46572 19.5306 5.61677 19.5279C5.76782 19.5252 5.91679 19.4922 6.05479 19.4307C6.19279 19.3692 6.31699 19.2805 6.41999 19.17L12 13.59L17.58 19.17C17.683 19.2805 17.8072 19.3692 17.9452 19.4307C18.0832 19.4922 18.2321 19.5252 18.3832 19.5279C18.5343 19.5306 18.6843 19.5028 18.8244 19.4462C18.9645 19.3896 19.0917 19.3054 19.1985 19.1986C19.3054 19.0917 19.3896 18.9645 19.4462 18.8244C19.5028 18.6843 19.5305 18.5343 19.5279 18.3832C19.5252 18.2322 19.4921 18.0832 19.4307 17.9452C19.3692 17.8072 19.2805 17.683 19.17 17.58L13.59 12L19.17 6.42001C19.3687 6.20675 19.4769 5.92468 19.4717 5.63323C19.4666 5.34178 19.3485 5.0637 19.1424 4.85758C18.9363 4.65146 18.6582 4.53339 18.3668 4.52825C18.0753 4.52311 17.7932 4.63129 17.58 4.83001L12 10.41L6.41999 4.83001Z"
                    fill={color ? color : '#F76D67'}
                />
            </svg>
        </>
    )
}
