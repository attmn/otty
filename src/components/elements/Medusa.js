import React from "react";

const Medusa = (props) => {
  const svgPath1 =
    "M143.53 1.58196C157.235 -0.714845 172.756 0.180003 184.062 8.56186C195.135 17.4011 201.473 30.6052 203.32 43.9685C205.241 58.5249 202.98 73.3995 197.937 87.23C196.833 90.362 194.732 93.8321 190.878 94.2895C183.946 95.5025 177.926 91.5055 172.629 87.936C162.267 91.8535 152.363 97.4016 144.868 105.266C140.727 109.403 137.68 114.752 137.553 120.529C137.319 132.55 139.326 144.829 136.205 156.651C133.657 166.664 126.236 175.105 117.032 180.504C112.743 183.428 107.202 184.969 104.155 189.284C93.8677 202.955 76.8501 209.965 64.8645 222.076C57.8578 228.399 52.9107 236.344 46.4243 243.075C50.8512 232.913 57.8366 223.875 64.8432 215.135C70.0876 208.414 76.9563 203.065 82.8695 196.9C72.1154 200.987 61.5416 205.769 52.019 212.023C47.7301 214.608 44.8849 218.874 40.3094 221.061C41.9973 212.918 47.8362 205.332 56.1487 202.12C70.0876 196.304 84.9608 192.157 97.8382 184.283C100.726 182.553 100.344 178.904 100.513 176.119C100.153 161.851 97.732" +
    " 147.693 97.6895 133.405C97.7214 128.135 98.369 122.895 98.645 117.635C91.2137 120.917 83.3791 123.462 76.3618 127.529C70.9688 130.641 65.6607 133.912 60.756 137.67C61.2231 146.977 63.7498 156.025 65.5652 165.143C67.0089 172.5 64.2276 179.858 60.565 186.271C54.9279 195.816 47.4859 204.327 39.5025 212.232C35.3729 216.01 31.6678 220.296 26.7632 223.239C28.0371 213.893 33.8547 205.859 39.0885 198.063C44.2373 190.189 51.4245 183.139 53.6539 173.882C56.3186 164.138 54.5457 153.997 52.5817 144.292C45.8404 148.717 40.4793 154.722 35.7445 160.957C30.9566 167.062 31.1053 174.926 29.5235 182.045C26.9332 196.115 21.7736 210.104 12.0174 221.27C8.50345 225.347 4.75602 229.344 0 232.158C2.93005 226.689 6.84737 221.747 9.78803 216.269C17.8138 202.12 23.7588 186.43 23.4616 170.223C23.3448 161.116 29.0139 153.201 34.9589 146.45C39.1842 141.449 44.4178 137.342 49.4392 133.077C48.4838 127.708 47.2948 122.13 49.1208 116.78C53.0594 102.751 66.0216 93.2952 78.2514 85.5198C87.3175 79.4547 98.6131 75.9249 105.514 67.3343C110.599 60.8913 114.421 53.1259 114.505 45.0026C108.9 44.2867 103.104 45.3406 97.6152 43.9486C93.3369 42.8847 92.2329 38.1718 92.7955 34.5824C93.3794 28.219 98.0186 23.0984 102.955 19.0715C114.378 9.80473 128.827 4.3262 143.53 1.58196ZM115.779 76.8894C104.006 88.4828 87.7847 94.4386 73.8882 103.298C66.2446 107.911 61.2763 116.084 61.0852 124.615C68.06 121.374 74.4933 117.069 81.9989 114.901C88.8888 112.942 95.2903 109.731 101.14 105.813C104.144 103.864 105.291 100.454 106.979 97.5706C113.316 85.6392 122.542 75.398 131.385 65.0673C129.559 64.5006 127.754 63.9338 125.96 63.3671C122.712 67.9607 119.941 72.9123 115.779 76.8894ZM151.949 82.0299C139.337 91.1077 126.788 100.295 113.582 108.607C111.703 109.82 109.686 111.163 109.123 113.36C102.658 133.464 104.325 155.05 109.792 175.185C115.886 169.756 119.899 162.647 123.338 155.558C126.714 148.598 124.761 140.832 125.546 133.494C126.852 121.622 130.132 109.413 138.392 100.007C143.923 93.2952 151.439 88.453 159.051 84.0384C156.694 83.2926 154.327 82.6265 151.949 82.0299Z";
  const svgPath2 =
    "M104.908 8.62225C87.5678 1.07553 66.6332 -2.83191 48.5141 4.57916C30.5352 12.6738 17.2211 28.1148 9.80883 45.241C1.85503 63.926 -0.664565 84.4063 0.895346 104.414C1.19834 108.933 2.70033 114.227 7.6459 116.099C16.3977 119.985 25.8715 116.657 34.2283 113.659C46.5279 122.259 57.6162 132.872 64.6458 145.769C68.6063 152.616 70.6651 160.715 68.6899 168.422C64.5379 184.45 57.3164 200.086 57.0712 216.798C56.7367 230.921 63.4536 244.558 73.6672 254.744C78.2753 260.031 85.0592 263.895 87.5018 270.621C96.0822 292.14 116.07 307.028 127.484 327.032C134.437 337.723 138.055 349.889 144.167 360.951C142.062 346.013 136.145 331.727 130.088 317.83C125.622 307.189 118.49 297.836 112.929 287.715C125.687 296.668 137.947 306.485 148.266 317.91C153 322.748 155.193 329.342 160.455 333.747C161.237 322.387 156.302 310.403 146.461 303.413C130.117 291.119 111.913 280.735 97.7428 266.058C94.552 262.815 96.4138 258.098 97.2217 254.348C102.997 235.533 111.465" +
    " 217.54 116.825 198.594C118.739 191.591 119.825 184.425 121.411 177.355C130.057 184.148 139.512 190.098 147.317 197.797C153.321 203.697 159.152 209.781 164.268 216.378C160.193 228.574 153.481 239.751 147.687 251.254C143.039 260.543 144 271.22 146.481 280.932C150.421 295.449 157.14 309.186 164.803 322.295C168.883 328.665 172.21 335.567 177.628 341.083C179.406 328.262 174.666 315.692 170.612 303.63C166.701 291.49 159.777 279.777 160.254 266.761C160.334 252.957 166.451 240.081 172.66 227.848C179.966 235.933 184.854 245.661 188.825 255.488C192.914 265.161 189.797 275.549 189.254 285.515C187.471 305.034 189.127 325.292 197.932 343.311C201.084 349.874 204.574 356.408 209.843 361.703C207.984 353.485 204.618 345.641 202.748 337.406C197.346 315.997 195.279 293.225 201.689 271.817C205.225 259.77 200.638 247.406 195.252 236.496C191.5 228.473 186.077 221.306 180.995 213.997C184.256 207.186 187.905 200.175 187.467 192.477C187.446 172.568 173.75 155.765 160.402 141.433C150.619 130.409 136.935 122.017 130.964 108.352C126.606 98.1336 124.415 86.5746 127.318 75.7674C135.024 76.6574 142.327 79.9587 150.129 79.9132C156.203 79.9059 159.418 74.0144 160.003 69.0667C161.59 60.431 157.333 52.1133 152.275 45.1493C140.552 29.1029 123.406 17.0903 104.908 8.62225ZM113.791 117.662C125.115 136.911 144.437 150.139 159.595 166.456C168.029 175.087 171.59 187.563 168.677 198.946C160.622 192.356 153.68 184.531 144.522 179.191C136.103 174.33 128.798 167.967 122.487 160.848C119.223 157.276 118.967 152.374 117.796 147.994C113.812 130.081 105.368 113.463 97.4638 96.8517C100.098 96.699 102.704 96.5394 105.296 96.3763C107.903 103.538 109.743 111.018 113.791 117.662ZM63.8715 112.61C77.2431 128.796 90.4895 145.106 104.934 160.472C106.978 162.698 109.158 165.141 109.089 168.242C110.208 197.042 99.9833 225.139 85.2523 250.062C79.1787 240.858 76.4908 230.107 74.5565 219.571C72.6588 209.227 78.1341 199.563 79.8151 189.569C82.4884 173.386 82.6663 156.108 75.1942 140.915C70.3435 130.193 62.1638 121.301 53.6986 112.944C57.1038 112.728 60.4935 112.621 63.8715 112.61Z";

  switch (props.number) {
    case "1":
      return (
        <svg
          width="204"
          height="244"
          viewBox="0 0 204 244"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={svgPath1} fill="#70CDB7" />
        </svg>
      );
      break;

    case "2":
      return (
        <svg
          width="210"
          height="362"
          viewBox="0 0 210 362"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={svgPath2} fill="#70CDB7" />
        </svg>
      );
      break;

    default:
      break;
  }
};

export default Medusa;
