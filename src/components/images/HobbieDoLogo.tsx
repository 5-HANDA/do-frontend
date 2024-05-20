interface HobbieDoLogoProps {
    height?: number
    width?: number
}

export default function HobbieDoLogo({ height, width }: HobbieDoLogoProps) {
    return (
        <svg
            width={width ? width : 116}
            height={height ? height : 38}
            viewBox="0 0 116 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="45" cy="19" r="19" fill="#FF8595" />
            <circle cx="19" cy="19" r="19" fill="#FF8595" />
            <circle cx="71" cy="19" r="19" fill="#FF8595" />
            <circle cx="97" cy="19" r="19" fill="#FF8595" />
            <path
                d="M22.1561 17.4C22.8227 17.9333 22.8144 18.525 22.1311 19.175C21.4644 19.825 20.7477 19.825 19.9811 19.175L15.0811 15.05L10.1811 19.175C9.41439 19.825 8.68939 19.825 8.00605 19.175C7.33939 18.525 7.33939 17.9333 8.00605 17.4L12.7061 13.6H8.83105C8.21439 13.6 7.89772 13.1833 7.88105 12.35C7.88105 11.5 8.19772 11.075 8.83105 11.075H13.5311V9.35C13.5311 8.55 14.0227 8.15 15.0061 8.15C16.0061 8.15 16.5061 8.55 16.5061 9.35V11.075H21.2061C21.8561 11.075 22.1727 11.5 22.1561 12.35C22.1561 13.1833 21.8394 13.6 21.2061 13.6H17.4561L22.1561 17.4ZM27.1311 28.45C27.1311 29.25 26.6311 29.65 25.6311 29.65C24.6477 29.65 24.1561 29.25 24.1561 28.45V9.6C24.1561 8.8 24.6477 8.4 25.6311 8.4C26.6311 8.4 27.1311 8.8 27.1311 9.6V28.45ZM16.8061 28.45C16.8061 29.25 16.3061 29.65 15.3061 29.65C14.3227 29.65 13.8311 29.25 13.8311 28.45V23.125C13.8311 23.0583 13.8227 23 13.8061 22.95C13.7894 22.9 13.7227 22.875 13.6061 22.875H7.65605C7.03939 22.875 6.72272 22.4583 6.70605 21.625C6.70605 20.775 7.02272 20.35 7.65605 20.35H15.2311C15.8311 20.35 16.2394 20.5083 16.4561 20.825C16.6894 21.125 16.8061 21.4667 16.8061 21.85V28.45ZM53.3354 28.45C53.3354 29.25 52.8354 29.65 51.8354 29.65C50.852 29.65 50.3604 29.25 50.3604 28.45V9.6C50.3604 8.8 50.852 8.4 51.8354 8.4C52.8354 8.4 53.3354 8.8 53.3354 9.6V28.45ZM46.5854 24.875C46.5854 25.675 46.0854 26.0833 45.0854 26.1C44.102 26.1 43.6104 25.6917 43.6104 24.875V11.725C43.6104 11.6583 43.602 11.6 43.5854 11.55C43.5687 11.5 43.502 11.475 43.3854 11.475H38.1104C37.9937 11.475 37.927 11.5 37.9104 11.55C37.8937 11.6 37.8854 11.6583 37.8854 11.725V23.325C37.8854 23.3917 37.8937 23.45 37.9104 23.5C37.927 23.55 37.9937 23.575 38.1104 23.575H42.1354C42.7687 23.575 43.077 24 43.0604 24.85C43.0604 25.6833 42.752 26.1 42.1354 26.1H36.4854C35.8854 26.1 35.4687 25.95 35.2354 25.65C35.0187 25.3333 34.9104 24.9833 34.9104 24.6V10.45C34.9104 10.0667 35.0187 9.725 35.2354 9.425C35.4687 9.10833 35.8854 8.95 36.4854 8.95H45.0104C45.6104 8.95 46.0187 9.10833 46.2354 9.425C46.4687 9.725 46.5854 10.0667 46.5854 10.45V24.875ZM73.0537 20.7C73.0537 22.25 72.462 23.6 71.2787 24.75C70.0954 25.8833 68.662 26.45 66.9787 26.45C65.2787 26.45 63.8287 25.8833 62.6287 24.75C61.4454 23.6167 60.8537 22.2667 60.8537 20.7C60.8537 19.1167 61.4454 17.7667 62.6287 16.65C63.8287 15.5167 65.2787 14.95 66.9787 14.95C68.662 14.95 70.0954 15.525 71.2787 16.675C72.462 17.8083 73.0537 19.15 73.0537 20.7ZM78.5287 28.45C78.5287 29.25 78.0287 29.65 77.0287 29.65C76.0454 29.65 75.5537 29.25 75.5537 28.45V9.6C75.5537 8.8 76.0454 8.4 77.0287 8.4C78.0287 8.4 78.5287 8.8 78.5287 9.6V28.45ZM60.8537 14.575C60.237 14.575 59.9204 14.1583 59.9037 13.325C59.9037 12.475 60.2204 12.05 60.8537 12.05H65.4537V9.6C65.4537 8.8 65.9454 8.4 66.9287 8.4C67.9287 8.4 68.4287 8.8 68.4287 9.6V12.05H72.9037C73.5537 12.05 73.8704 12.475 73.8537 13.325C73.8537 14.1583 73.537 14.575 72.9037 14.575H60.8537ZM70.1037 20.7C70.1037 19.8167 69.787 19.05 69.1537 18.4C68.537 17.75 67.812 17.425 66.9787 17.425C66.1287 17.425 65.3954 17.75 64.7787 18.4C64.162 19.05 63.8537 19.8167 63.8537 20.7C63.8537 21.5833 64.162 22.35 64.7787 23C65.3954 23.65 66.1287 23.975 66.9787 23.975C67.812 23.975 68.537 23.65 69.1537 23C69.787 22.35 70.1037 21.5833 70.1037 20.7ZM83.2037 17.325C83.2037 17.8583 83.012 18.3167 82.6287 18.7C82.262 19.0667 81.812 19.25 81.2787 19.25C80.7454 19.25 80.287 19.0667 79.9037 18.7C79.537 18.3167 79.3537 17.8583 79.3537 17.325C79.3537 16.7917 79.537 16.3417 79.9037 15.975C80.287 15.5917 80.7454 15.4 81.2787 15.4C81.812 15.4 82.262 15.5917 82.6287 15.975C83.012 16.3417 83.2037 16.7917 83.2037 17.325ZM111.204 17.325C111.204 17.8583 111.012 18.3167 110.629 18.7C110.262 19.0667 109.812 19.25 109.279 19.25C108.745 19.25 108.287 19.0667 107.904 18.7C107.537 18.3167 107.354 17.8583 107.354 17.325C107.354 16.7917 107.537 16.3417 107.904 15.975C108.287 15.5917 108.745 15.4 109.279 15.4C109.812 15.4 110.262 15.5917 110.629 15.975C111.012 16.3417 111.204 16.7917 111.204 17.325ZM106.529 28.45C106.529 29.25 106.029 29.65 105.029 29.65C104.045 29.65 103.554 29.25 103.554 28.45V9.6C103.554 8.8 104.045 8.4 105.029 8.4C106.029 8.4 106.529 8.8 106.529 9.6V28.45ZM89.1037 10.45C89.1037 10.0667 89.212 9.725 89.4287 9.425C89.662 9.10833 90.0787 8.95 90.6787 8.95H99.7787C100.412 8.95 100.72 9.375 100.704 10.225C100.704 11.0583 100.395 11.475 99.7787 11.475H92.3037C92.187 11.475 92.1204 11.5 92.1037 11.55C92.087 11.6 92.0787 11.6583 92.0787 11.725V23.25C92.0787 23.3167 92.0954 23.375 92.1287 23.425C92.1787 23.475 92.237 23.5 92.3037 23.5C93.237 23.5333 94.6704 23.2833 96.6037 22.75C98.5537 22.2167 100.087 21.6417 101.204 21.025C101.954 20.6083 102.495 20.8333 102.829 21.7C103.179 22.5667 102.954 23.1917 102.154 23.575C101.07 24.0917 99.487 24.675 97.4037 25.325C95.337 25.9583 93.0954 26.3167 90.6787 26.4C90.262 26.4167 89.8954 26.2667 89.5787 25.95C89.262 25.6333 89.1037 25.2833 89.1037 24.9V10.45Z"
                fill="white"
            />
        </svg>
    )
}
