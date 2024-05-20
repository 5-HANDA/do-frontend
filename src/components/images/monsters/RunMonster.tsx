interface MonsterProps {
    height?: number
    width?: number
}

export default function RunMonster({ height, width }: MonsterProps) {
    return (
        <svg
            width={width ? width : 249}
            height={height ? height : 248}
            viewBox="0 0 249 248"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M56.189 77.151C51.373 77.7044 46.4616 78.5349 41.8448 80.0232C41.8448 80.0232 39.4352 82.1457 38.134 82.7094C37.0793 83.1661 34.7547 83.0304 34.7547 83.0304C32.759 84.1159 30.8904 85.4185 29.1832 86.9144C26.7554 89.055 24.5589 92.5185 26.5626 95.3326C27.3282 96.3618 28.4701 97.0491 29.7409 97.2458C31.5003 97.5519 33.1391 97.2206 34.7415 96.7097C34.7415 96.7097 36.6268 94.4848 37.7274 94.111C38.828 93.7373 41.3817 94.617 41.3817 94.617C44.8767 93.8618 48.4766 93.7141 52.0221 94.1805L52.5418 93.9842C53.594 93.5864 54.7484 93.5448 55.8267 93.8658C56.905 94.1868 57.8472 94.8526 58.5075 95.7602C62.7672 97.2504 66.8031 99.397 71.0998 100.807C76.2811 102.508 82.3223 103.004 86.8982 100.047C91.4741 97.0902 93.1996 89.7257 89.0975 86.1439C89.0975 86.1439 83.2375 77.5818 66.2383 76.7695L65.4657 77.0501C63.0292 77.9343 60.3532 77.9064 57.9359 76.9714C57.3634 77.0231 56.7811 77.083 56.189 77.151Z"
                fill="#423E41"
            />
            <path
                d="M52.0225 94.1805C51.9667 94.1716 55.5021 80.3215 57.9366 76.9714C58.2272 76.5714 66.239 76.7695 66.239 76.7695C63.0428 82.8315 60.4533 89.192 58.5079 95.7592C56.3963 95.046 54.2263 94.5178 52.0225 94.1805Z"
                fill="white"
            />
            <path
                d="M34.7636 83.0446C34.7636 83.0446 32.1889 91.8259 34.7415 96.708C34.7945 96.8086 41.382 94.6159 41.382 94.6159C38.3108 88.2565 41.8444 80.0154 41.8444 80.0154C41.8444 80.0154 37.0523 81.3359 34.7636 83.0446Z"
                fill="white"
            />
            <path
                d="M101.805 42.1692C97.4301 40.0874 92.8283 38.1895 88.1236 37.0048C88.1236 37.0048 84.9499 37.5263 83.5466 37.3144C82.4083 37.143 80.5138 35.797 80.5138 35.797C78.2441 35.6594 75.966 35.773 73.7214 36.1357C70.5228 36.6629 66.8145 38.4333 67.0077 41.8752C67.107 43.1525 67.7077 44.3395 68.6795 45.1789C70.006 46.3696 71.5708 46.9574 73.2007 47.3733C73.2007 47.3733 75.9863 46.4876 77.1167 46.7537C78.2472 47.0197 79.9414 49.1178 79.9414 49.1178C83.3047 50.3291 86.4323 52.1105 89.1861 54.3832L89.7307 54.492C90.8342 54.7125 91.834 55.2887 92.5759 56.1317C93.3177 56.9746 93.7603 58.0374 93.8353 59.1558C96.6454 62.6735 98.9188 66.6291 101.803 70.0993C105.284 74.2838 110.134 77.9042 115.589 77.8228C121.044 77.7413 126.436 72.4188 124.873 67.2126C124.873 67.2126 124.482 56.8583 110.518 47.1671L109.715 46.9957C107.179 46.454 104.928 45.0131 103.379 42.9412C102.868 42.6826 102.343 42.4252 101.805 42.1692Z"
                fill="#423E41"
            />
            <path
                d="M89.1857 54.385C89.1431 54.3496 99.5313 44.4905 103.382 42.9416C103.842 42.7566 110.521 47.1675 110.521 47.1675C104.577 50.6091 98.9886 54.6248 93.8349 59.1565C92.4274 57.4344 90.8718 55.8378 89.1857 54.385Z"
                fill="white"
            />
            <path
                d="M80.5135 35.8147C80.5135 35.8147 73.6446 41.8883 73.2003 47.3747C73.1911 47.4878 79.9411 49.1196 79.9411 49.1196C80.7351 42.1072 88.1261 36.9984 88.1261 36.9984C88.1261 36.9984 83.3649 35.5788 80.5135 35.8147Z"
                fill="white"
            />
            <path
                d="M177.046 115.894C172.706 113.181 171.518 107.435 174.2 103.087C179.563 94.3987 189.595 85.6135 191.002 76.9197C191.577 73.3651 191.273 69.5569 192.929 66.3567C194.585 63.1564 199.47 61.2702 201.786 64.0354C203.302 65.8468 202.866 68.5054 202.667 70.8554C202.428 73.6897 203.218 77.3579 206.833 77.0554C207.521 76.9896 208.191 76.7917 208.804 76.4726C211.236 75.2425 214.078 74.1903 216.83 74.6802C219.135 75.0909 221.322 76.8244 221.643 79.135C222.227 83.3323 217.135 85.8849 213.223 87.2836C212.819 87.4184 212.458 87.6568 212.176 87.9748C210.781 89.6229 213.182 91.5372 214.426 93.2204C215.031 94.0385 215.376 95.0179 215.418 96.033C215.46 97.0481 215.197 98.0524 214.661 98.9173C214.126 99.7822 213.344 100.468 212.415 100.887C211.485 101.306 210.452 101.439 209.446 101.268C207.011 100.857 205.154 98.7692 202.75 98.2055C198.7 97.256 195.117 100.796 192.471 103.994L185.806 112.049C184.046 114.175 181.968 116.472 179.207 116.652C178.589 116.693 177.838 116.389 177.046 115.894Z"
                fill="#423E41"
            />
            <path
                d="M68.337 120.625C70.4478 125.275 68.2495 130.718 63.6007 132.864C54.3098 137.153 41.075 138.953 35.0777 145.424C32.6258 148.069 30.7664 151.411 27.6105 153.166C24.4547 154.921 19.3363 153.804 18.9414 150.226C18.6828 147.882 20.5219 145.906 21.9913 144.057C23.7628 141.828 25.1401 138.334 21.9604 136.598C21.3498 136.273 20.682 136.069 19.9936 135.997C17.2842 135.684 14.3321 134.997 12.3102 133.073C10.6167 131.462 9.75583 128.813 10.7703 126.711C12.6129 122.892 18.2734 123.567 22.3097 124.555C22.7211 124.665 23.1543 124.665 23.5657 124.555C25.6424 123.95 24.704 121.033 24.6012 118.945C24.5511 117.93 24.8064 116.924 25.3344 116.055C25.8625 115.186 26.6392 114.494 27.5649 114.067C28.4907 113.641 29.5232 113.5 30.53 113.662C31.5369 113.824 32.4722 114.282 33.2159 114.977C35.0169 116.66 35.4064 119.423 37.0971 121.216C39.9453 124.236 44.8954 123.258 48.8751 122.05L58.9002 119.005C61.5464 118.202 64.5533 117.432 66.9536 118.801C67.4943 119.111 67.9521 119.777 68.337 120.625Z"
                fill="#423E41"
            />
            <path
                d="M57.2244 153.299C58.8042 140.191 56.7546 126.783 59.0571 113.782C63.3698 89.4302 80.6614 67.2615 104.06 58.9932C127.458 50.7249 156.052 57.835 171.305 77.3469C187.591 98.1814 188.879 130.326 211.113 144.706C213.193 140.49 216.643 136.738 221.129 135.284C225.615 133.829 231.14 135.154 233.738 139.077C236.904 143.857 234.846 150.467 231.254 154.939C227.662 159.412 212.802 178.294 206.984 179.491C201.85 180.549 197.043 176.872 193.235 173.284C185.185 165.701 177.819 157.43 171.219 148.567C170.797 148.003 170.235 147.557 169.589 147.273C168.943 146.989 168.234 146.877 167.531 146.947C142.455 149.405 118.149 156.952 96.114 169.123C91.5214 171.621 87.5155 175.064 84.363 179.224C81.2104 183.384 78.9834 188.165 77.8303 193.248C77.8303 193.248 92.3576 195.92 89.6823 207.136C89.4938 208 89.1927 208.835 88.7866 209.621C87.7147 211.567 86.0465 213.12 84.0255 214.056C82.0044 214.991 79.7362 215.258 77.5517 214.819C69.0857 213.19 62.695 212.53 53.6324 209.16C48.3864 207.209 40.1203 204.895 40.7876 199.358C42.3905 186.075 54.6775 174.431 57.2244 153.299Z"
                fill="#AFDCE5"
            />
            <path
                d="M89.206 145.335C96.1997 144.168 100.194 137.464 97.6389 131.512C96.5035 128.868 94.7512 126.284 92.0745 125.143C85.5774 122.373 71.5675 125.317 73.2312 135.571C74.8949 145.824 86.6011 145.474 86.6011 145.474C87.4719 145.528 88.346 145.481 89.206 145.335Z"
                fill="#65A6C3"
            />
            <path
                d="M71.6583 161.654C72.3192 161.536 72.9455 161.273 73.4923 160.885C74.0391 160.496 74.4928 159.992 74.8206 159.409C75.1485 158.825 75.3424 158.176 75.3885 157.509C75.4345 156.842 75.3316 156.173 75.087 155.55C74.6246 154.381 73.9131 153.241 72.8247 152.738C70.1828 151.515 64.4867 152.814 65.1629 157.343C65.8391 161.872 70.5993 161.716 70.5993 161.716C70.9535 161.739 71.3093 161.719 71.6583 161.654Z"
                fill="#65A6C3"
            />
            <path
                d="M94.1995 156.978C94.53 156.919 94.8432 156.788 95.1166 156.593C95.3901 156.399 95.6169 156.147 95.7808 155.856C95.9448 155.564 96.0418 155.239 96.0648 154.906C96.0879 154.572 96.0364 154.238 95.9141 153.926C95.7271 153.333 95.3234 152.831 94.7829 152.52C93.4618 151.909 90.6136 152.559 90.9519 154.823C91.2902 157.087 93.6699 157.01 93.6699 157.01C93.8471 157.021 94.025 157.01 94.1995 156.978Z"
                fill="#65A6C3"
            />
            <path
                d="M80.5369 117.545C81.0487 117.464 81.5359 117.27 81.9625 116.977C82.3891 116.684 82.7444 116.299 83.0022 115.851C83.26 115.404 83.4138 114.904 83.4522 114.389C83.4907 113.875 83.4128 113.358 83.2244 112.877C82.8626 111.984 82.3041 111.112 81.4511 110.726C79.3805 109.791 74.9159 110.785 75.4459 114.248C75.976 117.71 79.707 117.592 79.707 117.592C79.9846 117.61 80.2633 117.594 80.5369 117.545Z"
                fill="#65A6C3"
            />
            <path
                d="M106.183 120.649C121.221 120.649 133.411 108.767 133.411 94.111C133.411 79.4546 121.221 67.5733 106.183 67.5733C91.145 67.5733 78.9543 79.4546 78.9543 94.111C78.9543 108.767 91.145 120.649 106.183 120.649Z"
                fill="white"
            />
            <path
                d="M106.183 109.8C115.567 109.8 123.175 102.776 123.175 94.111C123.175 85.4461 115.567 78.4219 106.183 78.4219C96.7986 78.4219 89.1911 85.4461 89.1911 94.111C89.1911 102.776 96.7986 109.8 106.183 109.8Z"
                fill="#423E41"
            />
            <path
                d="M110.883 96.726C113.479 96.726 115.584 93.8967 115.584 90.4066C115.584 86.9165 113.479 84.0872 110.883 84.0872C108.287 84.0872 106.183 86.9165 106.183 90.4066C106.183 93.8967 108.287 96.726 110.883 96.726Z"
                fill="white"
            />
            <path
                d="M166.267 90.3634C176.87 90.3634 185.466 82.0505 185.466 71.796C185.466 61.5415 176.87 53.2286 166.267 53.2286C155.664 53.2286 147.069 61.5415 147.069 71.796C147.069 82.0505 155.664 90.3634 166.267 90.3634Z"
                fill="white"
            />
            <path
                d="M166.267 82.7732C172.884 82.7732 178.248 77.8585 178.248 71.796C178.248 65.7335 172.884 60.8188 166.267 60.8188C159.65 60.8188 154.286 65.7335 154.286 71.796C154.286 77.8585 159.65 82.7732 166.267 82.7732Z"
                fill="#423E41"
            />
            <path
                d="M169.581 73.6255C171.412 73.6255 172.896 71.646 172.896 69.204C172.896 66.7621 171.412 64.7826 169.581 64.7826C167.751 64.7826 166.267 66.7621 166.267 69.204C166.267 71.646 167.751 73.6255 169.581 73.6255Z"
                fill="white"
            />
            <path
                d="M120.723 135.978C122.03 138.052 124.032 139.598 126.374 140.342C128.717 141.086 131.248 140.979 133.519 140.041C144.625 135.451 163.88 127.352 170.252 123.789C182.482 116.951 176.65 102.418 165.004 103.306C164.56 103.401 164.141 103.589 163.774 103.856C162.03 104.978 160.054 105.693 157.993 105.949L157.053 106.058L153.182 108.173L152.27 109.026C150.839 110.363 149.078 111.299 147.167 111.737L146.294 111.938L140.329 115.197L139.917 115.608C138.148 117.372 135.876 118.549 133.411 118.978L128.431 121.7L126.516 123.469C125.521 124.402 124.316 125.083 123.001 125.453C122.318 125.64 121.631 125.904 121.343 126.253C120.229 127.604 119.57 129.271 119.458 131.016C119.347 132.761 119.789 134.497 120.723 135.978Z"
                fill="#423E41"
            />
            <path
                d="M121.342 126.255C121.342 126.255 126.533 132.87 129.766 130.737C132.999 128.605 128.43 121.701 128.43 121.701C128.43 121.701 123.157 123.896 121.342 126.255Z"
                fill="white"
            />
            <path
                d="M157.053 106.058C157.053 106.058 160.582 113.703 164.221 112.367C167.86 111.032 165.004 103.306 165.004 103.306C163.653 103.413 162.322 103.699 161.046 104.156C159.646 104.634 158.306 105.272 157.053 106.058Z"
                fill="white"
            />
            <path
                d="M133.411 118.978C133.411 118.978 136.586 123.299 139.85 121.175C142.091 119.718 140.322 115.188 140.322 115.188C140.322 115.188 137.364 116.74 133.411 118.978Z"
                fill="white"
            />
            <path
                d="M146.28 111.912C146.28 111.912 149.037 115.4 152.303 113.279C154.544 111.822 153.273 108.126 153.182 108.173C150.222 109.722 150.233 109.673 146.28 111.912Z"
                fill="white"
            />
        </svg>
    )
}