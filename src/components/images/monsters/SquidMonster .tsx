interface MonsterProps {
    height?: number
    width?: number
}

export default function SquidMonster({ height, width }: MonsterProps) {
    return (
        <svg
            width={width ? width : 207}
            height={height ? height : 248}
            viewBox="0 0 207 248"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M24.7676 60.1846C23.7862 62.4017 26.6792 64.4063 28.6655 63.0079L45.6224 51.071C46.1008 50.7344 46.6291 50.3826 47.2139 50.4156C47.9822 50.4591 48.5385 51.1369 48.9924 51.7562L62.1805 69.7588C64.1398 61.9589 66.3563 50.0829 66.1894 42.0441C66.1894 42.0441 50.3957 31.5552 43.2292 30.0356C43.1342 30.0144 38.8987 28.2553 24.7676 60.1846Z"
                fill="#423E41"
            />
            <path
                d="M141.339 36.1167C141.666 36.1145 141.981 35.9897 142.221 35.7669C142.46 35.5441 142.607 35.2397 142.631 34.9142C142.903 31.2661 142.541 27.5987 141.562 24.0731C140.897 21.6852 139.849 19.2445 137.817 17.8157C135.935 16.4924 133.453 16.2455 131.188 16.6657C128.922 17.0858 126.821 18.1083 124.771 19.157C124.516 19.2566 124.299 19.4324 124.149 19.6601C123.948 20.0498 124.176 20.515 124.405 20.8895C128.352 27.3177 134.002 32.5373 140.734 35.9739C140.922 36.0688 141.129 36.1174 141.339 36.1156L141.339 36.1167Z"
                fill="#423E41"
            />
            <path
                d="M157.516 112.312C164.446 90.7045 162.021 65.8202 151.655 45.5809C143.387 29.4372 128.726 17.3444 111.146 12.6703C105.27 11.1072 99.1012 10.3632 93.0644 11.1468C79.0663 12.9608 66.9549 23.1518 60.9405 35.871C54.9261 48.5902 54.5231 63.4532 57.7718 77.135C60.4632 88.4686 65.5154 99.1181 68.9921 110.225C68.9921 110.225 82.982 112.587 83.5052 114.767C84.3945 118.463 72.6965 127.933 72.6965 127.933C73.6057 134.788 73.2404 140.818 72.3991 147.2C71.433 154.534 69.4111 161.903 65.1038 167.926C60.7965 173.949 53.9116 178.463 46.4871 178.57C37.9916 178.693 30.47 173.291 24.224 167.552C17.9781 161.812 12.0106 155.311 4.07283 152.293C-1.29597 150.251 -7.93431 150.502 -12.73 153.274C-15.9852 155.155 -16.0204 159.799 -12.9079 161.904C-7.92842 165.267 -3.81876 169.756 -0.914993 175.004C1.7984 179.937 3.38914 185.448 6.38213 190.217C11.4528 198.293 20.3368 203.609 29.7259 205.419C38.1318 207.041 46.8887 206.032 55.0492 203.384C55.4033 203.27 55.7819 203.253 56.1449 203.335C56.508 203.417 56.842 203.596 57.1117 203.851C57.3813 204.107 57.5766 204.43 57.6769 204.788C57.7772 205.145 57.7788 205.522 57.6815 205.88C56.3653 210.805 50.8788 214.57 45.5022 215.346C38.9126 216.298 32.2796 214.334 25.6288 214.009C22.5916 213.839 19.5488 214.219 16.6481 215.132C11.7463 216.75 11.0502 223.402 15.4916 226.025C20.9084 229.225 26.4871 232.128 32.4809 233.997C41.0767 236.675 50.7667 237.028 58.8183 233.008C67.3078 228.769 72.7847 220.441 78.7351 213.07C83.0478 207.727 89.9149 202.257 96.0993 205.266C100.979 207.64 102.199 214.528 99.8279 219.394C97.4564 224.26 92.5411 227.378 87.5721 229.562C85.4176 230.508 82.9415 231.59 82.6786 234.174C82.6243 234.836 82.7218 235.502 82.9637 236.121C83.2056 236.74 83.5855 237.296 84.0748 237.748C86.3179 239.885 89.3635 239.983 92.2494 240.041C99.6273 240.188 108.183 239.796 112.606 233.912C118.472 226.108 112.823 214.871 114.568 205.332C114.706 204.515 115.068 203.752 115.615 203.127C117.769 200.735 120.974 202.376 123.211 204.092C131.254 210.263 138.042 217.916 145.949 224.26C153.856 230.604 163.409 235.739 173.559 235.496C174.73 235.468 175.936 235.359 176.974 234.817C179.737 233.374 180.159 229.384 178.774 226.6C177.389 223.817 174.764 221.9 172.385 219.89C164.718 213.41 145.291 202.344 147.294 162.358C147.294 162.358 140.141 154.686 140.536 151.417C140.808 149.158 149.106 146.023 149.106 146.023C150.726 136.214 153.432 125.049 157.516 112.312Z"
                fill="#FFC4BC"
            />
            <path
                d="M144.712 93.6625C143.668 94.0469 141.289 94.6438 141.289 94.6438C139.407 95.3579 137.408 95.7143 135.395 95.6946L133.382 95.8991C130.872 96.0617 129.432 96.3129 127.38 95.8991C127.344 95.8916 120.317 94.7739 116.984 93.5034C116.86 93.4561 116.726 93.442 116.595 93.4626C116.463 93.4832 116.34 93.5378 116.236 93.6208C116.133 93.7039 116.053 93.8125 116.005 93.9359C115.957 94.0593 115.942 94.1931 115.962 94.3239C116.648 98.7008 117.524 103.042 118.591 107.349C119.757 112.05 121.174 116.756 123.702 120.893C126.192 124.971 130.573 128.68 135.284 127.801C137.991 127.296 140.249 125.315 141.656 122.956C143.064 120.596 143.728 117.878 144.238 115.181C145.258 109.785 145.634 98.0733 145.729 94.3916C145.732 94.2685 145.706 94.1465 145.651 94.0361C145.596 93.9258 145.515 93.8304 145.414 93.7585C145.314 93.6866 145.198 93.6402 145.075 93.6235C144.953 93.6067 144.828 93.6201 144.712 93.6625Z"
                fill="#423E41"
            />
            <path
                d="M69.1365 110.693C67.628 107.083 74.4488 98.923 81.2056 99.0208C87.9624 99.1186 94.145 104.512 95.5305 111.099C96.5977 116.169 94.9436 121.763 91.167 125.326C87.3904 128.888 73.0017 130.211 72.6972 127.932C71.6383 120.004 69.1365 110.693 69.1365 110.693Z"
                fill="#CE5B4E"
            />
            <path
                d="M90.108 137.134C89.7879 136.493 87.5084 134.862 85.7295 137.047C83.035 140.356 86.4321 150.909 89.2433 151.685C90.2969 151.975 97.3742 151.722 90.108 137.134Z"
                fill="#CE5B4E"
            />
            <path
                d="M107.865 132.151C108.591 130.607 109.048 128.951 109.217 127.255C109.333 126.133 109.319 124.958 108.708 123.963C108.418 123.473 107.969 123.095 107.436 122.891C106.006 122.381 104.719 123.455 103.789 124.521C101.222 127.463 95.4626 134.918 99.337 138.001C99.5917 138.204 104.001 140.284 107.865 132.151Z"
                fill="#CE5B4E"
            />
            <path
                d="M107.679 108.674C107.061 107.824 105.81 107.334 104.921 107.897C104.66 108.093 104.441 108.34 104.279 108.623C104.117 108.907 104.015 109.22 103.979 109.544C103.861 110.126 103.88 110.728 104.035 111.302C104.19 111.875 104.476 112.406 104.871 112.851L104.896 112.876C105.17 113.141 105.517 113.317 105.892 113.384C106.268 113.451 106.654 113.404 107.003 113.25C107.351 113.096 107.646 112.842 107.849 112.52C108.051 112.199 108.153 111.824 108.14 111.444C108.106 110.343 107.995 109.109 107.679 108.674Z"
                fill="#CE5B4E"
            />
            <path
                d="M129.465 141.376C128.521 139.844 126.133 139.782 124.678 140.845C123.224 141.908 122.529 144.065 123.425 145.632C123.546 145.83 123.699 146.006 123.877 146.154C126.695 148.608 130.953 145.661 129.785 142.119C129.706 141.861 129.599 141.611 129.465 141.376Z"
                fill="#CE5B4E"
            />
            <path
                d="M139.405 151.742C139.061 157.65 143.17 159.466 147.295 162.357C147.482 159.152 147.665 156.977 147.949 154.558C148.217 152.282 148.573 149.79 149.105 146.02C149.105 146.021 139.811 144.783 139.405 151.742Z"
                fill="#CE5B4E"
            />
            <path
                d="M98.0362 92.1433C87.0706 92.1433 78.1813 83.2897 78.1813 72.3682C78.1813 61.4467 87.0706 52.593 98.0362 52.593C109.002 52.593 117.891 61.4467 117.891 72.3682C117.891 83.2897 109.002 92.1433 98.0362 92.1433Z"
                fill="white"
            />
            <path
                d="M98.0362 84.0593C91.1932 84.0593 85.6459 78.825 85.6459 72.3682C85.6459 65.9114 91.1932 60.6771 98.0362 60.6771C104.879 60.6771 110.426 65.9114 110.426 72.3682C110.426 78.825 104.879 84.0593 98.0362 84.0593Z"
                fill="#423E41"
            />
            <path
                d="M94.6089 74.3168C92.7158 74.3168 91.1812 72.2086 91.1812 69.608C91.1812 67.0074 92.7158 64.8992 94.6089 64.8992C96.5019 64.8992 98.0365 67.0074 98.0365 69.608C98.0365 72.2086 96.5019 74.3168 94.6089 74.3168Z"
                fill="white"
            />
            <path
                d="M145.756 82.1496C132.578 82.1496 121.896 71.5102 121.896 58.3859C121.896 45.2616 132.578 34.6222 145.756 34.6222C158.933 34.6222 169.615 45.2616 169.615 58.3859C169.615 71.5102 158.933 82.1496 145.756 82.1496Z"
                fill="white"
            />
            <path
                d="M145.756 72.4351C137.532 72.4351 130.866 66.145 130.866 58.3859C130.866 50.6267 137.532 44.3367 145.756 44.3367C153.979 44.3367 160.645 50.6267 160.645 58.3859C160.645 66.145 153.979 72.4351 145.756 72.4351Z"
                fill="#423E41"
            />
            <path
                d="M141.637 60.7275C139.362 60.7275 137.518 58.194 137.518 55.0688C137.518 51.9436 139.362 49.4102 141.637 49.4102C143.912 49.4102 145.756 51.9436 145.756 55.0688C145.756 58.194 143.912 60.7275 141.637 60.7275Z"
                fill="white"
            />
            <path
                d="M141.287 94.6396C141.287 94.6396 143.198 100.075 139.675 100.821C136.153 101.568 135.276 95.6947 135.395 95.6947C139.592 95.0248 141.287 94.6396 141.287 94.6396Z"
                fill="white"
            />
            <path
                d="M133.382 95.8992C133.382 95.8992 134.091 99.2433 130.491 99.3591C126.891 99.475 127.38 95.8992 127.38 95.8992C129.378 96.0301 131.384 96.0301 133.382 95.8992Z"
                fill="white"
            />
        </svg>
    )
}