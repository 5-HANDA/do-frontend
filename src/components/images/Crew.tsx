const Crew: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    return (
        <>
            {isActive ? (
                <svg width="100%" height="100%" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.5073 6.5551C8.91001 5.31621 8.61948 3.01704 9.85837 1.41976C11.0973 -0.177523 13.3964 -0.468053 14.9937 0.77084C16.591 2.00973 16.8815 4.30891 15.6426 5.90619C14.4037 7.50347 12.1046 7.794 10.5073 6.5551ZM19.2598 14.86C19.2598 15.1779 19.0126 15.438 18.7 15.4587L18.7 15.4697H6.8L6.80001 15.4587C6.48721 15.4382 6.23984 15.178 6.23984 14.86C6.23984 14.2138 6.33431 13.5895 6.51017 13H0.710052C0.674404 13.0066 0.637651 13.0101 0.600092 13.0101C0.268721 13.0101 9.15527e-05 12.7414 9.15527e-05 12.4101C9.15527e-05 9.79868 2.11872 7.68005 4.73009 7.68005C6.37455 7.68005 7.82054 8.51564 8.66766 9.79122C9.78476 8.88997 11.2051 8.34998 12.7498 8.34998C16.3412 8.34998 19.2598 11.2686 19.2598 14.86ZM3.43332 7.003C2.09953 6.28813 1.59779 4.62737 2.31266 3.29358C3.02752 1.95979 4.68828 1.45806 6.02207 2.17292C7.35586 2.88779 7.85759 4.54855 7.14273 5.88233C6.42786 7.21612 4.7671 7.71786 3.43332 7.003Z"
                        fill="#F76D67"
                    />
                </svg>
            ) : (
                <svg width="100%" height="100%" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.1685 6.5385C16.2043 5.20307 15.9614 3.28081 14.626 2.24502C13.2906 1.20922 11.3683 1.45212 10.3325 2.78755C9.29671 4.12299 9.53961 6.04524 10.875 7.08104C12.2105 8.11684 14.1327 7.87393 15.1685 6.5385Z"
                        stroke="#869AA9"
                        strokeWidth="1.2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6.83984 15.86C6.83984 12.6 9.48984 9.94995 12.7498 9.94995C16.0098 9.94995 18.6598 12.6 18.6598 15.86"
                        stroke="#869AA9"
                        strokeWidth="1.2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6.61389 6.59881C7.17222 5.55709 6.78035 4.26 5.73863 3.70168C4.69692 3.14335 3.39983 3.53522 2.8415 4.57694C2.28318 5.61866 2.67505 6.91575 3.71676 7.47407C4.75848 8.0324 6.05557 7.64053 6.61389 6.59881Z"
                        stroke="#869AA9"
                        strokeWidth="1.2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M0.600098 13.41C0.600098 11.13 2.4501 9.28003 4.7301 9.28003C6.4201 9.28003 7.8701 10.29 8.5101 11.75"
                        stroke="#869AA9"
                        strokeWidth="1.2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        </>
    )
}

export default Crew
