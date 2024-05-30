const Home: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    return (
        <>
            {isActive ? (
                <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask
                        id="path-1-outside-1_455_629"
                        maskUnits="userSpaceOnUse"
                        x="-0.0952377"
                        y="-0.5"
                        width="18"
                        height="19"
                        fill="black"
                    >
                        <rect fill="white" x="-0.0952377" y="-0.5" width="18" height="19" />
                        <path d="M2.21081 13.7409C1.83551 13.7409 1.55028 13.6586 1.35512 13.4941C1.17498 13.3145 1.08491 13.1125 1.08491 12.8881C1.08491 12.6637 1.17498 12.4692 1.35512 12.3046C1.55028 12.14 1.83551 12.0578 2.21081 12.0578C1.7004 12.0578 1.35512 11.9755 1.17498 11.8109C1.00985 11.6463 1.00985 11.4817 1.17498 11.3172C1.35512 11.1526 1.7004 11.0703 2.21081 11.0703C1.83551 11.0703 1.55779 10.988 1.37764 10.8234C1.1975 10.6439 1.10742 10.4419 1.10742 10.2175C1.10742 9.99307 1.1975 9.79857 1.37764 9.63399C1.55779 9.45446 1.83551 9.36469 2.21081 9.36469C1.77546 9.36469 1.4452 9.23751 1.22002 8.98317C1.00985 8.71386 0.904762 8.40715 0.904762 8.06304C0.904762 7.71892 1.00985 7.41969 1.22002 7.16535C1.4452 6.89604 1.77546 6.76139 2.21081 6.76139C1.8205 6.76139 1.52776 6.62673 1.33261 6.35743C1.13745 6.07316 1.03987 5.75149 1.03987 5.39241C1.03987 5.01837 1.13745 4.6967 1.33261 4.42739C1.52776 4.14312 1.8205 4.00099 2.21081 4.00099C1.85052 3.98603 1.5803 3.87382 1.40016 3.66436C1.23503 3.43993 1.15246 3.18559 1.15246 2.90132C1.15246 2.61705 1.24253 2.37019 1.42268 2.16073C1.60282 1.9363 1.87304 1.82409 2.23333 1.82409C2.23333 1.37525 2.33841 1.04609 2.54858 0.836633C2.75875 0.612211 2.99894 0.5 3.26916 0.5C3.53937 0.5 3.77957 0.612211 3.98973 0.836633C4.1999 1.04609 4.30499 1.37525 4.30499 1.82409C4.30499 1.40517 4.40257 1.09098 4.59772 0.881519C4.80789 0.672058 5.04058 0.567327 5.29578 0.567327C5.55099 0.567327 5.77617 0.672058 5.97132 0.881519C6.18149 1.09098 6.28658 1.40517 6.28658 1.82409C6.75195 1.74929 7.07471 1.80165 7.25485 1.98119C7.435 2.14576 7.46502 2.34026 7.34492 2.56469C7.23984 2.78911 6.95461 2.93872 6.48924 3.01353C6.99965 3.01353 7.35994 3.15567 7.5701 3.43993C7.79529 3.70924 7.87035 4.00847 7.79528 4.33762C7.72022 4.65182 7.50255 4.88372 7.14226 5.03333C7.41248 5.07822 7.63015 5.21287 7.79528 5.43729C7.97543 5.64675 8.08051 5.87866 8.11054 6.133C8.41078 5.95347 8.75605 5.87866 9.14637 5.90858C9.55169 5.9385 9.87445 6.08064 10.1146 6.33498C10.1297 6.08064 10.2347 5.91606 10.4299 5.84125C10.2798 5.57195 10.2873 5.28768 10.4524 4.98845C10.6326 4.68922 10.9778 4.5396 11.4882 4.5396C11.0379 4.5396 10.7001 4.40495 10.4749 4.13564C10.2648 3.86634 10.1597 3.55215 10.1597 3.19307C10.1597 2.83399 10.2648 2.5198 10.4749 2.2505C10.7001 1.98119 11.0379 1.84653 11.4882 1.84653C11.4882 1.4725 11.5933 1.18823 11.8035 0.99373C12.0137 0.79923 12.2539 0.70198 12.5241 0.70198C12.7943 0.687019 13.0345 0.776788 13.2447 0.971288C13.4698 1.16579 13.5824 1.45005 13.5824 1.82409C13.5824 1.39021 13.665 1.06106 13.8301 0.836633C13.9953 0.612211 14.1829 0.5 14.3931 0.5C14.6032 0.5 14.7909 0.612211 14.956 0.836633C15.1212 1.06106 15.2037 1.39021 15.2037 1.82409C15.4739 1.76425 15.7066 1.83157 15.9018 2.02607C16.0969 2.20561 16.232 2.44499 16.3071 2.74422C16.3822 3.04345 16.3747 3.32772 16.2846 3.59703C16.2095 3.85138 16.0369 4.01595 15.7667 4.09076C16.202 4.09076 16.5248 4.24037 16.735 4.5396C16.9451 4.82387 17.0502 5.16799 17.0502 5.57195C17.0502 5.96095 16.9451 6.30506 16.735 6.60429C16.5248 6.88856 16.202 7.03069 15.7667 7.03069C16.217 7.03069 16.5473 7.16535 16.7575 7.43465C16.9826 7.70396 17.0952 8.01815 17.0952 8.37723C17.0952 8.7363 16.9826 9.0505 16.7575 9.3198C16.5473 9.58911 16.217 9.72376 15.7667 9.72376C16.217 9.72376 16.5473 9.8659 16.7575 10.1502C16.9826 10.4344 17.0952 10.7711 17.0952 11.1601C17.0952 11.5341 16.9826 11.8707 16.7575 12.17C16.5473 12.4542 16.217 12.5964 15.7667 12.5964C16.2471 12.5964 16.5623 12.6712 16.7124 12.8208C16.8776 12.9554 16.8776 13.0976 16.7124 13.2472C16.5623 13.3968 16.2471 13.4716 15.7667 13.4716C16.112 13.4716 16.3672 13.5689 16.5323 13.7634C16.7124 13.9579 16.8025 14.1823 16.8025 14.4366C16.8025 14.676 16.7124 14.893 16.5323 15.0875C16.3672 15.267 16.112 15.3568 15.7667 15.3568C15.9018 15.656 15.9093 15.9253 15.7892 16.1647C15.6691 16.3891 15.489 16.5537 15.2488 16.6584C15.0086 16.7631 14.7609 16.7856 14.5057 16.7257C14.2655 16.6659 14.0778 16.4864 13.9427 16.1871C13.9577 16.5761 13.8376 16.8679 13.5824 17.0624C13.3422 17.2718 13.057 17.3766 12.7267 17.3766C12.4115 17.3915 12.1263 17.3018 11.8711 17.1073C11.6309 16.9277 11.5033 16.6435 11.4882 16.2545C11.188 16.2545 10.9553 16.1198 10.7902 15.8505C10.6251 15.5812 10.52 15.267 10.4749 14.9079C10.4449 14.5339 10.4824 14.1823 10.5875 13.8531C10.6926 13.509 10.8728 13.2696 11.128 13.135C10.6626 13.2098 10.2948 13.0901 10.0246 12.7759C9.76937 12.4468 9.67179 12.0952 9.73184 11.7211C9.17639 11.9007 8.63596 11.8932 8.11054 11.6987C8.14056 11.8782 8.09553 12.0353 7.97543 12.17C7.87035 12.3046 7.71272 12.3869 7.50255 12.4168C7.77277 12.6113 7.82531 12.8432 7.66018 13.1125C7.49504 13.3669 7.10473 13.4941 6.48924 13.4941C7.07471 13.4941 7.45751 13.5763 7.63766 13.7409C7.83281 13.9055 7.83281 14.0701 7.63766 14.2347C7.45751 14.3992 7.07471 14.4815 6.48924 14.4815C6.84953 14.4815 7.11974 14.5638 7.29989 14.7284C7.49504 14.893 7.59262 15.0875 7.59262 15.3119C7.59262 15.5363 7.49504 15.7383 7.29989 15.9178C7.11974 16.0824 6.84953 16.1647 6.48924 16.1647C6.50425 16.7332 6.4442 17.1073 6.30909 17.2868C6.17399 17.4813 6.03137 17.4813 5.88125 17.2868C5.74614 17.1073 5.67108 16.7407 5.65607 16.1871C5.65607 16.5462 5.5735 16.808 5.40837 16.9726C5.24324 17.1521 5.05559 17.2419 4.84542 17.2419C4.63525 17.2419 4.4476 17.1521 4.28247 16.9726C4.11734 16.808 4.03477 16.5462 4.03477 16.1871C4.03477 16.7706 3.9522 17.1596 3.78707 17.3541C3.62194 17.5486 3.45681 17.5486 3.29168 17.3541C3.12654 17.1596 3.04398 16.7706 3.04398 16.1871C3.04398 16.5761 2.99894 16.8529 2.90887 17.0175C2.8188 17.197 2.71371 17.212 2.59362 17.0624C2.48853 16.9128 2.39095 16.5761 2.30088 16.0525C2.22582 15.5139 2.1958 14.7433 2.21081 13.7409Z" />
                    </mask>
                    <path
                        d="M2.21081 13.7409C1.83551 13.7409 1.55028 13.6586 1.35512 13.4941C1.17498 13.3145 1.08491 13.1125 1.08491 12.8881C1.08491 12.6637 1.17498 12.4692 1.35512 12.3046C1.55028 12.14 1.83551 12.0578 2.21081 12.0578C1.7004 12.0578 1.35512 11.9755 1.17498 11.8109C1.00985 11.6463 1.00985 11.4817 1.17498 11.3172C1.35512 11.1526 1.7004 11.0703 2.21081 11.0703C1.83551 11.0703 1.55779 10.988 1.37764 10.8234C1.1975 10.6439 1.10742 10.4419 1.10742 10.2175C1.10742 9.99307 1.1975 9.79857 1.37764 9.63399C1.55779 9.45446 1.83551 9.36469 2.21081 9.36469C1.77546 9.36469 1.4452 9.23751 1.22002 8.98317C1.00985 8.71386 0.904762 8.40715 0.904762 8.06304C0.904762 7.71892 1.00985 7.41969 1.22002 7.16535C1.4452 6.89604 1.77546 6.76139 2.21081 6.76139C1.8205 6.76139 1.52776 6.62673 1.33261 6.35743C1.13745 6.07316 1.03987 5.75149 1.03987 5.39241C1.03987 5.01837 1.13745 4.6967 1.33261 4.42739C1.52776 4.14312 1.8205 4.00099 2.21081 4.00099C1.85052 3.98603 1.5803 3.87382 1.40016 3.66436C1.23503 3.43993 1.15246 3.18559 1.15246 2.90132C1.15246 2.61705 1.24253 2.37019 1.42268 2.16073C1.60282 1.9363 1.87304 1.82409 2.23333 1.82409C2.23333 1.37525 2.33841 1.04609 2.54858 0.836633C2.75875 0.612211 2.99894 0.5 3.26916 0.5C3.53937 0.5 3.77957 0.612211 3.98973 0.836633C4.1999 1.04609 4.30499 1.37525 4.30499 1.82409C4.30499 1.40517 4.40257 1.09098 4.59772 0.881519C4.80789 0.672058 5.04058 0.567327 5.29578 0.567327C5.55099 0.567327 5.77617 0.672058 5.97132 0.881519C6.18149 1.09098 6.28658 1.40517 6.28658 1.82409C6.75195 1.74929 7.07471 1.80165 7.25485 1.98119C7.435 2.14576 7.46502 2.34026 7.34492 2.56469C7.23984 2.78911 6.95461 2.93872 6.48924 3.01353C6.99965 3.01353 7.35994 3.15567 7.5701 3.43993C7.79529 3.70924 7.87035 4.00847 7.79528 4.33762C7.72022 4.65182 7.50255 4.88372 7.14226 5.03333C7.41248 5.07822 7.63015 5.21287 7.79528 5.43729C7.97543 5.64675 8.08051 5.87866 8.11054 6.133C8.41078 5.95347 8.75605 5.87866 9.14637 5.90858C9.55169 5.9385 9.87445 6.08064 10.1146 6.33498C10.1297 6.08064 10.2347 5.91606 10.4299 5.84125C10.2798 5.57195 10.2873 5.28768 10.4524 4.98845C10.6326 4.68922 10.9778 4.5396 11.4882 4.5396C11.0379 4.5396 10.7001 4.40495 10.4749 4.13564C10.2648 3.86634 10.1597 3.55215 10.1597 3.19307C10.1597 2.83399 10.2648 2.5198 10.4749 2.2505C10.7001 1.98119 11.0379 1.84653 11.4882 1.84653C11.4882 1.4725 11.5933 1.18823 11.8035 0.99373C12.0137 0.79923 12.2539 0.70198 12.5241 0.70198C12.7943 0.687019 13.0345 0.776788 13.2447 0.971288C13.4698 1.16579 13.5824 1.45005 13.5824 1.82409C13.5824 1.39021 13.665 1.06106 13.8301 0.836633C13.9953 0.612211 14.1829 0.5 14.3931 0.5C14.6032 0.5 14.7909 0.612211 14.956 0.836633C15.1212 1.06106 15.2037 1.39021 15.2037 1.82409C15.4739 1.76425 15.7066 1.83157 15.9018 2.02607C16.0969 2.20561 16.232 2.44499 16.3071 2.74422C16.3822 3.04345 16.3747 3.32772 16.2846 3.59703C16.2095 3.85138 16.0369 4.01595 15.7667 4.09076C16.202 4.09076 16.5248 4.24037 16.735 4.5396C16.9451 4.82387 17.0502 5.16799 17.0502 5.57195C17.0502 5.96095 16.9451 6.30506 16.735 6.60429C16.5248 6.88856 16.202 7.03069 15.7667 7.03069C16.217 7.03069 16.5473 7.16535 16.7575 7.43465C16.9826 7.70396 17.0952 8.01815 17.0952 8.37723C17.0952 8.7363 16.9826 9.0505 16.7575 9.3198C16.5473 9.58911 16.217 9.72376 15.7667 9.72376C16.217 9.72376 16.5473 9.8659 16.7575 10.1502C16.9826 10.4344 17.0952 10.7711 17.0952 11.1601C17.0952 11.5341 16.9826 11.8707 16.7575 12.17C16.5473 12.4542 16.217 12.5964 15.7667 12.5964C16.2471 12.5964 16.5623 12.6712 16.7124 12.8208C16.8776 12.9554 16.8776 13.0976 16.7124 13.2472C16.5623 13.3968 16.2471 13.4716 15.7667 13.4716C16.112 13.4716 16.3672 13.5689 16.5323 13.7634C16.7124 13.9579 16.8025 14.1823 16.8025 14.4366C16.8025 14.676 16.7124 14.893 16.5323 15.0875C16.3672 15.267 16.112 15.3568 15.7667 15.3568C15.9018 15.656 15.9093 15.9253 15.7892 16.1647C15.6691 16.3891 15.489 16.5537 15.2488 16.6584C15.0086 16.7631 14.7609 16.7856 14.5057 16.7257C14.2655 16.6659 14.0778 16.4864 13.9427 16.1871C13.9577 16.5761 13.8376 16.8679 13.5824 17.0624C13.3422 17.2718 13.057 17.3766 12.7267 17.3766C12.4115 17.3915 12.1263 17.3018 11.8711 17.1073C11.6309 16.9277 11.5033 16.6435 11.4882 16.2545C11.188 16.2545 10.9553 16.1198 10.7902 15.8505C10.6251 15.5812 10.52 15.267 10.4749 14.9079C10.4449 14.5339 10.4824 14.1823 10.5875 13.8531C10.6926 13.509 10.8728 13.2696 11.128 13.135C10.6626 13.2098 10.2948 13.0901 10.0246 12.7759C9.76937 12.4468 9.67179 12.0952 9.73184 11.7211C9.17639 11.9007 8.63596 11.8932 8.11054 11.6987C8.14056 11.8782 8.09553 12.0353 7.97543 12.17C7.87035 12.3046 7.71272 12.3869 7.50255 12.4168C7.77277 12.6113 7.82531 12.8432 7.66018 13.1125C7.49504 13.3669 7.10473 13.4941 6.48924 13.4941C7.07471 13.4941 7.45751 13.5763 7.63766 13.7409C7.83281 13.9055 7.83281 14.0701 7.63766 14.2347C7.45751 14.3992 7.07471 14.4815 6.48924 14.4815C6.84953 14.4815 7.11974 14.5638 7.29989 14.7284C7.49504 14.893 7.59262 15.0875 7.59262 15.3119C7.59262 15.5363 7.49504 15.7383 7.29989 15.9178C7.11974 16.0824 6.84953 16.1647 6.48924 16.1647C6.50425 16.7332 6.4442 17.1073 6.30909 17.2868C6.17399 17.4813 6.03137 17.4813 5.88125 17.2868C5.74614 17.1073 5.67108 16.7407 5.65607 16.1871C5.65607 16.5462 5.5735 16.808 5.40837 16.9726C5.24324 17.1521 5.05559 17.2419 4.84542 17.2419C4.63525 17.2419 4.4476 17.1521 4.28247 16.9726C4.11734 16.808 4.03477 16.5462 4.03477 16.1871C4.03477 16.7706 3.9522 17.1596 3.78707 17.3541C3.62194 17.5486 3.45681 17.5486 3.29168 17.3541C3.12654 17.1596 3.04398 16.7706 3.04398 16.1871C3.04398 16.5761 2.99894 16.8529 2.90887 17.0175C2.8188 17.197 2.71371 17.212 2.59362 17.0624C2.48853 16.9128 2.39095 16.5761 2.30088 16.0525C2.22582 15.5139 2.1958 14.7433 2.21081 13.7409Z"
                        fill="#F76D67"
                    />
                    <path
                        d="M2.21081 13.7409C1.83551 13.7409 1.55028 13.6586 1.35512 13.4941C1.17498 13.3145 1.08491 13.1125 1.08491 12.8881C1.08491 12.6637 1.17498 12.4692 1.35512 12.3046C1.55028 12.14 1.83551 12.0578 2.21081 12.0578C1.7004 12.0578 1.35512 11.9755 1.17498 11.8109C1.00985 11.6463 1.00985 11.4817 1.17498 11.3172C1.35512 11.1526 1.7004 11.0703 2.21081 11.0703C1.83551 11.0703 1.55779 10.988 1.37764 10.8234C1.1975 10.6439 1.10742 10.4419 1.10742 10.2175C1.10742 9.99307 1.1975 9.79857 1.37764 9.63399C1.55779 9.45446 1.83551 9.36469 2.21081 9.36469C1.77546 9.36469 1.4452 9.23751 1.22002 8.98317C1.00985 8.71386 0.904762 8.40715 0.904762 8.06304C0.904762 7.71892 1.00985 7.41969 1.22002 7.16535C1.4452 6.89604 1.77546 6.76139 2.21081 6.76139C1.8205 6.76139 1.52776 6.62673 1.33261 6.35743C1.13745 6.07316 1.03987 5.75149 1.03987 5.39241C1.03987 5.01837 1.13745 4.6967 1.33261 4.42739C1.52776 4.14312 1.8205 4.00099 2.21081 4.00099C1.85052 3.98603 1.5803 3.87382 1.40016 3.66436C1.23503 3.43993 1.15246 3.18559 1.15246 2.90132C1.15246 2.61705 1.24253 2.37019 1.42268 2.16073C1.60282 1.9363 1.87304 1.82409 2.23333 1.82409C2.23333 1.37525 2.33841 1.04609 2.54858 0.836633C2.75875 0.612211 2.99894 0.5 3.26916 0.5C3.53937 0.5 3.77957 0.612211 3.98973 0.836633C4.1999 1.04609 4.30499 1.37525 4.30499 1.82409C4.30499 1.40517 4.40257 1.09098 4.59772 0.881519C4.80789 0.672058 5.04058 0.567327 5.29578 0.567327C5.55099 0.567327 5.77617 0.672058 5.97132 0.881519C6.18149 1.09098 6.28658 1.40517 6.28658 1.82409C6.75195 1.74929 7.07471 1.80165 7.25485 1.98119C7.435 2.14576 7.46502 2.34026 7.34492 2.56469C7.23984 2.78911 6.95461 2.93872 6.48924 3.01353C6.99965 3.01353 7.35994 3.15567 7.5701 3.43993C7.79529 3.70924 7.87035 4.00847 7.79528 4.33762C7.72022 4.65182 7.50255 4.88372 7.14226 5.03333C7.41248 5.07822 7.63015 5.21287 7.79528 5.43729C7.97543 5.64675 8.08051 5.87866 8.11054 6.133C8.41078 5.95347 8.75605 5.87866 9.14637 5.90858C9.55169 5.9385 9.87445 6.08064 10.1146 6.33498C10.1297 6.08064 10.2347 5.91606 10.4299 5.84125C10.2798 5.57195 10.2873 5.28768 10.4524 4.98845C10.6326 4.68922 10.9778 4.5396 11.4882 4.5396C11.0379 4.5396 10.7001 4.40495 10.4749 4.13564C10.2648 3.86634 10.1597 3.55215 10.1597 3.19307C10.1597 2.83399 10.2648 2.5198 10.4749 2.2505C10.7001 1.98119 11.0379 1.84653 11.4882 1.84653C11.4882 1.4725 11.5933 1.18823 11.8035 0.99373C12.0137 0.79923 12.2539 0.70198 12.5241 0.70198C12.7943 0.687019 13.0345 0.776788 13.2447 0.971288C13.4698 1.16579 13.5824 1.45005 13.5824 1.82409C13.5824 1.39021 13.665 1.06106 13.8301 0.836633C13.9953 0.612211 14.1829 0.5 14.3931 0.5C14.6032 0.5 14.7909 0.612211 14.956 0.836633C15.1212 1.06106 15.2037 1.39021 15.2037 1.82409C15.4739 1.76425 15.7066 1.83157 15.9018 2.02607C16.0969 2.20561 16.232 2.44499 16.3071 2.74422C16.3822 3.04345 16.3747 3.32772 16.2846 3.59703C16.2095 3.85138 16.0369 4.01595 15.7667 4.09076C16.202 4.09076 16.5248 4.24037 16.735 4.5396C16.9451 4.82387 17.0502 5.16799 17.0502 5.57195C17.0502 5.96095 16.9451 6.30506 16.735 6.60429C16.5248 6.88856 16.202 7.03069 15.7667 7.03069C16.217 7.03069 16.5473 7.16535 16.7575 7.43465C16.9826 7.70396 17.0952 8.01815 17.0952 8.37723C17.0952 8.7363 16.9826 9.0505 16.7575 9.3198C16.5473 9.58911 16.217 9.72376 15.7667 9.72376C16.217 9.72376 16.5473 9.8659 16.7575 10.1502C16.9826 10.4344 17.0952 10.7711 17.0952 11.1601C17.0952 11.5341 16.9826 11.8707 16.7575 12.17C16.5473 12.4542 16.217 12.5964 15.7667 12.5964C16.2471 12.5964 16.5623 12.6712 16.7124 12.8208C16.8776 12.9554 16.8776 13.0976 16.7124 13.2472C16.5623 13.3968 16.2471 13.4716 15.7667 13.4716C16.112 13.4716 16.3672 13.5689 16.5323 13.7634C16.7124 13.9579 16.8025 14.1823 16.8025 14.4366C16.8025 14.676 16.7124 14.893 16.5323 15.0875C16.3672 15.267 16.112 15.3568 15.7667 15.3568C15.9018 15.656 15.9093 15.9253 15.7892 16.1647C15.6691 16.3891 15.489 16.5537 15.2488 16.6584C15.0086 16.7631 14.7609 16.7856 14.5057 16.7257C14.2655 16.6659 14.0778 16.4864 13.9427 16.1871C13.9577 16.5761 13.8376 16.8679 13.5824 17.0624C13.3422 17.2718 13.057 17.3766 12.7267 17.3766C12.4115 17.3915 12.1263 17.3018 11.8711 17.1073C11.6309 16.9277 11.5033 16.6435 11.4882 16.2545C11.188 16.2545 10.9553 16.1198 10.7902 15.8505C10.6251 15.5812 10.52 15.267 10.4749 14.9079C10.4449 14.5339 10.4824 14.1823 10.5875 13.8531C10.6926 13.509 10.8728 13.2696 11.128 13.135C10.6626 13.2098 10.2948 13.0901 10.0246 12.7759C9.76937 12.4468 9.67179 12.0952 9.73184 11.7211C9.17639 11.9007 8.63596 11.8932 8.11054 11.6987C8.14056 11.8782 8.09553 12.0353 7.97543 12.17C7.87035 12.3046 7.71272 12.3869 7.50255 12.4168C7.77277 12.6113 7.82531 12.8432 7.66018 13.1125C7.49504 13.3669 7.10473 13.4941 6.48924 13.4941C7.07471 13.4941 7.45751 13.5763 7.63766 13.7409C7.83281 13.9055 7.83281 14.0701 7.63766 14.2347C7.45751 14.3992 7.07471 14.4815 6.48924 14.4815C6.84953 14.4815 7.11974 14.5638 7.29989 14.7284C7.49504 14.893 7.59262 15.0875 7.59262 15.3119C7.59262 15.5363 7.49504 15.7383 7.29989 15.9178C7.11974 16.0824 6.84953 16.1647 6.48924 16.1647C6.50425 16.7332 6.4442 17.1073 6.30909 17.2868C6.17399 17.4813 6.03137 17.4813 5.88125 17.2868C5.74614 17.1073 5.67108 16.7407 5.65607 16.1871C5.65607 16.5462 5.5735 16.808 5.40837 16.9726C5.24324 17.1521 5.05559 17.2419 4.84542 17.2419C4.63525 17.2419 4.4476 17.1521 4.28247 16.9726C4.11734 16.808 4.03477 16.5462 4.03477 16.1871C4.03477 16.7706 3.9522 17.1596 3.78707 17.3541C3.62194 17.5486 3.45681 17.5486 3.29168 17.3541C3.12654 17.1596 3.04398 16.7706 3.04398 16.1871C3.04398 16.5761 2.99894 16.8529 2.90887 17.0175C2.8188 17.197 2.71371 17.212 2.59362 17.0624C2.48853 16.9128 2.39095 16.5761 2.30088 16.0525C2.22582 15.5139 2.1958 14.7433 2.21081 13.7409Z"
                        stroke="#F76D67"
                        mask="url(#path-1-outside-1_455_629)"
                    />
                </svg>
            ) : (
                <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask
                        id="path-1-outside-1_455_609"
                        maskUnits="userSpaceOnUse"
                        x="-0.0952377"
                        y="-0.5"
                        width="20"
                        height="21"
                        fill="black"
                    >
                        <rect fill="white" x="-0.0952377" y="-0.5" width="20" height="21" />
                        <path d="M3.21081 14.7409C2.83551 14.7409 2.55028 14.6586 2.35512 14.4941C2.17498 14.3145 2.08491 14.1125 2.08491 13.8881C2.08491 13.6637 2.17498 13.4692 2.35512 13.3046C2.55028 13.14 2.83551 13.0578 3.21081 13.0578C2.7004 13.0578 2.35512 12.9755 2.17498 12.8109C2.00985 12.6463 2.00985 12.4817 2.17498 12.3172C2.35512 12.1526 2.7004 12.0703 3.21081 12.0703C2.83551 12.0703 2.55779 11.988 2.37764 11.8234C2.1975 11.6439 2.10742 11.4419 2.10742 11.2175C2.10742 10.9931 2.1975 10.7986 2.37764 10.634C2.55779 10.4545 2.83551 10.3647 3.21081 10.3647C2.77546 10.3647 2.4452 10.2375 2.22002 9.98317C2.00985 9.71386 1.90476 9.40715 1.90476 9.06304C1.90476 8.71892 2.00985 8.41969 2.22002 8.16535C2.4452 7.89604 2.77546 7.76139 3.21081 7.76139C2.8205 7.76139 2.52776 7.62673 2.33261 7.35743C2.13745 7.07316 2.03987 6.75149 2.03987 6.39241C2.03987 6.01837 2.13745 5.6967 2.33261 5.42739C2.52776 5.14312 2.8205 5.00099 3.21081 5.00099C2.85052 4.98603 2.5803 4.87382 2.40016 4.66436C2.23503 4.43993 2.15246 4.18559 2.15246 3.90132C2.15246 3.61705 2.24253 3.37019 2.42268 3.16073C2.60282 2.9363 2.87304 2.82409 3.23333 2.82409C3.23333 2.37525 3.33841 2.04609 3.54858 1.83663C3.75875 1.61221 3.99894 1.5 4.26916 1.5C4.53937 1.5 4.77957 1.61221 4.98973 1.83663C5.1999 2.04609 5.30499 2.37525 5.30499 2.82409C5.30499 2.40517 5.40257 2.09098 5.59772 1.88152C5.80789 1.67206 6.04058 1.56733 6.29578 1.56733C6.55099 1.56733 6.77617 1.67206 6.97132 1.88152C7.18149 2.09098 7.28658 2.40517 7.28658 2.82409C7.75195 2.74929 8.07471 2.80165 8.25485 2.98119C8.435 3.14576 8.46502 3.34026 8.34492 3.56469C8.23984 3.78911 7.95461 3.93872 7.48924 4.01353C7.99965 4.01353 8.35994 4.15567 8.5701 4.43993C8.79529 4.70924 8.87035 5.00847 8.79528 5.33762C8.72022 5.65182 8.50255 5.88372 8.14226 6.03333C8.41248 6.07822 8.63015 6.21287 8.79528 6.43729C8.97543 6.64675 9.08051 6.87866 9.11054 7.133C9.41078 6.95347 9.75605 6.87866 10.1464 6.90858C10.5517 6.9385 10.8745 7.08064 11.1146 7.33498C11.1297 7.08064 11.2347 6.91606 11.4299 6.84125C11.2798 6.57195 11.2873 6.28768 11.4524 5.98845C11.6326 5.68922 11.9778 5.5396 12.4882 5.5396C12.0379 5.5396 11.7001 5.40495 11.4749 5.13564C11.2648 4.86634 11.1597 4.55215 11.1597 4.19307C11.1597 3.83399 11.2648 3.5198 11.4749 3.2505C11.7001 2.98119 12.0379 2.84653 12.4882 2.84653C12.4882 2.4725 12.5933 2.18823 12.8035 1.99373C13.0137 1.79923 13.2539 1.70198 13.5241 1.70198C13.7943 1.68702 14.0345 1.77679 14.2447 1.97129C14.4698 2.16579 14.5824 2.45005 14.5824 2.82409C14.5824 2.39021 14.665 2.06106 14.8301 1.83663C14.9953 1.61221 15.1829 1.5 15.3931 1.5C15.6032 1.5 15.7909 1.61221 15.956 1.83663C16.1212 2.06106 16.2037 2.39021 16.2037 2.82409C16.4739 2.76425 16.7066 2.83157 16.9018 3.02607C17.0969 3.20561 17.232 3.44499 17.3071 3.74422C17.3822 4.04345 17.3747 4.32772 17.2846 4.59703C17.2095 4.85138 17.0369 5.01595 16.7667 5.09076C17.202 5.09076 17.5248 5.24037 17.735 5.5396C17.9451 5.82387 18.0502 6.16799 18.0502 6.57195C18.0502 6.96095 17.9451 7.30506 17.735 7.60429C17.5248 7.88856 17.202 8.03069 16.7667 8.03069C17.217 8.03069 17.5473 8.16535 17.7575 8.43465C17.9826 8.70396 18.0952 9.01815 18.0952 9.37723C18.0952 9.7363 17.9826 10.0505 17.7575 10.3198C17.5473 10.5891 17.217 10.7238 16.7667 10.7238C17.217 10.7238 17.5473 10.8659 17.7575 11.1502C17.9826 11.4344 18.0952 11.7711 18.0952 12.1601C18.0952 12.5341 17.9826 12.8707 17.7575 13.17C17.5473 13.4542 17.217 13.5964 16.7667 13.5964C17.2471 13.5964 17.5623 13.6712 17.7124 13.8208C17.8776 13.9554 17.8776 14.0976 17.7124 14.2472C17.5623 14.3968 17.2471 14.4716 16.7667 14.4716C17.112 14.4716 17.3672 14.5689 17.5323 14.7634C17.7124 14.9579 17.8025 15.1823 17.8025 15.4366C17.8025 15.676 17.7124 15.893 17.5323 16.0875C17.3672 16.267 17.112 16.3568 16.7667 16.3568C16.9018 16.656 16.9093 16.9253 16.7892 17.1647C16.6691 17.3891 16.489 17.5537 16.2488 17.6584C16.0086 17.7631 15.7609 17.7856 15.5057 17.7257C15.2655 17.6659 15.0778 17.4864 14.9427 17.1871C14.9577 17.5761 14.8376 17.8679 14.5824 18.0624C14.3422 18.2718 14.057 18.3766 13.7267 18.3766C13.4115 18.3915 13.1263 18.3018 12.8711 18.1073C12.6309 17.9277 12.5033 17.6435 12.4882 17.2545C12.188 17.2545 11.9553 17.1198 11.7902 16.8505C11.6251 16.5812 11.52 16.267 11.4749 15.9079C11.4449 15.5339 11.4824 15.1823 11.5875 14.8531C11.6926 14.509 11.8728 14.2696 12.128 14.135C11.6626 14.2098 11.2948 14.0901 11.0246 13.7759C10.7694 13.4468 10.6718 13.0952 10.7318 12.7211C10.1764 12.9007 9.63596 12.8932 9.11054 12.6987C9.14056 12.8782 9.09553 13.0353 8.97543 13.17C8.87035 13.3046 8.71272 13.3869 8.50255 13.4168C8.77277 13.6113 8.82531 13.8432 8.66018 14.1125C8.49504 14.3669 8.10473 14.4941 7.48924 14.4941C8.07471 14.4941 8.45751 14.5763 8.63766 14.7409C8.83281 14.9055 8.83281 15.0701 8.63766 15.2347C8.45751 15.3992 8.07471 15.4815 7.48924 15.4815C7.84953 15.4815 8.11974 15.5638 8.29989 15.7284C8.49504 15.893 8.59262 16.0875 8.59262 16.3119C8.59262 16.5363 8.49504 16.7383 8.29989 16.9178C8.11974 17.0824 7.84953 17.1647 7.48924 17.1647C7.50425 17.7332 7.4442 18.1073 7.30909 18.2868C7.17399 18.4813 7.03137 18.4813 6.88125 18.2868C6.74614 18.1073 6.67108 17.7407 6.65607 17.1871C6.65607 17.5462 6.5735 17.808 6.40837 17.9726C6.24324 18.1521 6.05559 18.2419 5.84542 18.2419C5.63525 18.2419 5.4476 18.1521 5.28247 17.9726C5.11734 17.808 5.03477 17.5462 5.03477 17.1871C5.03477 17.7706 4.9522 18.1596 4.78707 18.3541C4.62194 18.5486 4.45681 18.5486 4.29168 18.3541C4.12654 18.1596 4.04398 17.7706 4.04398 17.1871C4.04398 17.5761 3.99894 17.8529 3.90887 18.0175C3.8188 18.197 3.71371 18.212 3.59362 18.0624C3.48853 17.9128 3.39095 17.5761 3.30088 17.0525C3.22582 16.5139 3.1958 15.7433 3.21081 14.7409Z" />
                    </mask>
                    <path
                        d="M3.21081 14.7409C2.83551 14.7409 2.55028 14.6586 2.35512 14.4941C2.17498 14.3145 2.08491 14.1125 2.08491 13.8881C2.08491 13.6637 2.17498 13.4692 2.35512 13.3046C2.55028 13.14 2.83551 13.0578 3.21081 13.0578C2.7004 13.0578 2.35512 12.9755 2.17498 12.8109C2.00985 12.6463 2.00985 12.4817 2.17498 12.3172C2.35512 12.1526 2.7004 12.0703 3.21081 12.0703C2.83551 12.0703 2.55779 11.988 2.37764 11.8234C2.1975 11.6439 2.10742 11.4419 2.10742 11.2175C2.10742 10.9931 2.1975 10.7986 2.37764 10.634C2.55779 10.4545 2.83551 10.3647 3.21081 10.3647C2.77546 10.3647 2.4452 10.2375 2.22002 9.98317C2.00985 9.71386 1.90476 9.40715 1.90476 9.06304C1.90476 8.71892 2.00985 8.41969 2.22002 8.16535C2.4452 7.89604 2.77546 7.76139 3.21081 7.76139C2.8205 7.76139 2.52776 7.62673 2.33261 7.35743C2.13745 7.07316 2.03987 6.75149 2.03987 6.39241C2.03987 6.01837 2.13745 5.6967 2.33261 5.42739C2.52776 5.14312 2.8205 5.00099 3.21081 5.00099C2.85052 4.98603 2.5803 4.87382 2.40016 4.66436C2.23503 4.43993 2.15246 4.18559 2.15246 3.90132C2.15246 3.61705 2.24253 3.37019 2.42268 3.16073C2.60282 2.9363 2.87304 2.82409 3.23333 2.82409C3.23333 2.37525 3.33841 2.04609 3.54858 1.83663C3.75875 1.61221 3.99894 1.5 4.26916 1.5C4.53937 1.5 4.77957 1.61221 4.98973 1.83663C5.1999 2.04609 5.30499 2.37525 5.30499 2.82409C5.30499 2.40517 5.40257 2.09098 5.59772 1.88152C5.80789 1.67206 6.04058 1.56733 6.29578 1.56733C6.55099 1.56733 6.77617 1.67206 6.97132 1.88152C7.18149 2.09098 7.28658 2.40517 7.28658 2.82409C7.75195 2.74929 8.07471 2.80165 8.25485 2.98119C8.435 3.14576 8.46502 3.34026 8.34492 3.56469C8.23984 3.78911 7.95461 3.93872 7.48924 4.01353C7.99965 4.01353 8.35994 4.15567 8.5701 4.43993C8.79529 4.70924 8.87035 5.00847 8.79528 5.33762C8.72022 5.65182 8.50255 5.88372 8.14226 6.03333C8.41248 6.07822 8.63015 6.21287 8.79528 6.43729C8.97543 6.64675 9.08051 6.87866 9.11054 7.133C9.41078 6.95347 9.75605 6.87866 10.1464 6.90858C10.5517 6.9385 10.8745 7.08064 11.1146 7.33498C11.1297 7.08064 11.2347 6.91606 11.4299 6.84125C11.2798 6.57195 11.2873 6.28768 11.4524 5.98845C11.6326 5.68922 11.9778 5.5396 12.4882 5.5396C12.0379 5.5396 11.7001 5.40495 11.4749 5.13564C11.2648 4.86634 11.1597 4.55215 11.1597 4.19307C11.1597 3.83399 11.2648 3.5198 11.4749 3.2505C11.7001 2.98119 12.0379 2.84653 12.4882 2.84653C12.4882 2.4725 12.5933 2.18823 12.8035 1.99373C13.0137 1.79923 13.2539 1.70198 13.5241 1.70198C13.7943 1.68702 14.0345 1.77679 14.2447 1.97129C14.4698 2.16579 14.5824 2.45005 14.5824 2.82409C14.5824 2.39021 14.665 2.06106 14.8301 1.83663C14.9953 1.61221 15.1829 1.5 15.3931 1.5C15.6032 1.5 15.7909 1.61221 15.956 1.83663C16.1212 2.06106 16.2037 2.39021 16.2037 2.82409C16.4739 2.76425 16.7066 2.83157 16.9018 3.02607C17.0969 3.20561 17.232 3.44499 17.3071 3.74422C17.3822 4.04345 17.3747 4.32772 17.2846 4.59703C17.2095 4.85138 17.0369 5.01595 16.7667 5.09076C17.202 5.09076 17.5248 5.24037 17.735 5.5396C17.9451 5.82387 18.0502 6.16799 18.0502 6.57195C18.0502 6.96095 17.9451 7.30506 17.735 7.60429C17.5248 7.88856 17.202 8.03069 16.7667 8.03069C17.217 8.03069 17.5473 8.16535 17.7575 8.43465C17.9826 8.70396 18.0952 9.01815 18.0952 9.37723C18.0952 9.7363 17.9826 10.0505 17.7575 10.3198C17.5473 10.5891 17.217 10.7238 16.7667 10.7238C17.217 10.7238 17.5473 10.8659 17.7575 11.1502C17.9826 11.4344 18.0952 11.7711 18.0952 12.1601C18.0952 12.5341 17.9826 12.8707 17.7575 13.17C17.5473 13.4542 17.217 13.5964 16.7667 13.5964C17.2471 13.5964 17.5623 13.6712 17.7124 13.8208C17.8776 13.9554 17.8776 14.0976 17.7124 14.2472C17.5623 14.3968 17.2471 14.4716 16.7667 14.4716C17.112 14.4716 17.3672 14.5689 17.5323 14.7634C17.7124 14.9579 17.8025 15.1823 17.8025 15.4366C17.8025 15.676 17.7124 15.893 17.5323 16.0875C17.3672 16.267 17.112 16.3568 16.7667 16.3568C16.9018 16.656 16.9093 16.9253 16.7892 17.1647C16.6691 17.3891 16.489 17.5537 16.2488 17.6584C16.0086 17.7631 15.7609 17.7856 15.5057 17.7257C15.2655 17.6659 15.0778 17.4864 14.9427 17.1871C14.9577 17.5761 14.8376 17.8679 14.5824 18.0624C14.3422 18.2718 14.057 18.3766 13.7267 18.3766C13.4115 18.3915 13.1263 18.3018 12.8711 18.1073C12.6309 17.9277 12.5033 17.6435 12.4882 17.2545C12.188 17.2545 11.9553 17.1198 11.7902 16.8505C11.6251 16.5812 11.52 16.267 11.4749 15.9079C11.4449 15.5339 11.4824 15.1823 11.5875 14.8531C11.6926 14.509 11.8728 14.2696 12.128 14.135C11.6626 14.2098 11.2948 14.0901 11.0246 13.7759C10.7694 13.4468 10.6718 13.0952 10.7318 12.7211C10.1764 12.9007 9.63596 12.8932 9.11054 12.6987C9.14056 12.8782 9.09553 13.0353 8.97543 13.17C8.87035 13.3046 8.71272 13.3869 8.50255 13.4168C8.77277 13.6113 8.82531 13.8432 8.66018 14.1125C8.49504 14.3669 8.10473 14.4941 7.48924 14.4941C8.07471 14.4941 8.45751 14.5763 8.63766 14.7409C8.83281 14.9055 8.83281 15.0701 8.63766 15.2347C8.45751 15.3992 8.07471 15.4815 7.48924 15.4815C7.84953 15.4815 8.11974 15.5638 8.29989 15.7284C8.49504 15.893 8.59262 16.0875 8.59262 16.3119C8.59262 16.5363 8.49504 16.7383 8.29989 16.9178C8.11974 17.0824 7.84953 17.1647 7.48924 17.1647C7.50425 17.7332 7.4442 18.1073 7.30909 18.2868C7.17399 18.4813 7.03137 18.4813 6.88125 18.2868C6.74614 18.1073 6.67108 17.7407 6.65607 17.1871C6.65607 17.5462 6.5735 17.808 6.40837 17.9726C6.24324 18.1521 6.05559 18.2419 5.84542 18.2419C5.63525 18.2419 5.4476 18.1521 5.28247 17.9726C5.11734 17.808 5.03477 17.5462 5.03477 17.1871C5.03477 17.7706 4.9522 18.1596 4.78707 18.3541C4.62194 18.5486 4.45681 18.5486 4.29168 18.3541C4.12654 18.1596 4.04398 17.7706 4.04398 17.1871C4.04398 17.5761 3.99894 17.8529 3.90887 18.0175C3.8188 18.197 3.71371 18.212 3.59362 18.0624C3.48853 17.9128 3.39095 17.5761 3.30088 17.0525C3.22582 16.5139 3.1958 15.7433 3.21081 14.7409Z"
                        stroke="#869AA9"
                        strokeWidth="2.4"
                        mask="url(#path-1-outside-1_455_609)"
                    />
                </svg>
            )}
        </>
    )
}
export default Home
