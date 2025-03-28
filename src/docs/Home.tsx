import React from 'react';

import { Banner } from './recipes/Banner.stories';

const links = [
  {
    id: '1',
    text: 'Figma UI Kit',
    href: 'https://www.figma.com/design/FTracH5vU8pdOK0jLKWnSU/%F0%9F%8C%B2-Evergreen?node-id=2-2&t=C7h4NsNHxEatDLVc-1',
    icon: (
      <svg
        aria-label="Figma prototype"
        width="14"
        height="20"
        viewBox="0 0 14 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
      >
        <g clipPath="url(#clip0_5089_2593)">
          <path
            d="M3.8012 19.6C5.5676 19.6 7.0012 18.1664 7.0012 16.4V13.2H3.8012C2.0348 13.2 0.601196 14.6336 0.601196 16.4C0.601196 18.1664 2.0348 19.6 3.8012 19.6Z"
            fill="#0ACF83"
          />
          <path
            d="M0.601196 9.99999C0.601196 8.23359 2.0348 6.79999 3.8012 6.79999H7.0012V13.2H3.8012C2.0348 13.2 0.601196 11.7664 0.601196 9.99999Z"
            fill="#A259FF"
          />
          <path
            d="M0.601318 3.59999C0.601318 1.83359 2.03492 0.399994 3.80132 0.399994H7.00132V6.79999H3.80132C2.03492 6.79999 0.601318 5.36639 0.601318 3.59999Z"
            fill="#F24E1E"
          />
          <path
            d="M7.00122 0.399994H10.2012C11.9676 0.399994 13.4012 1.83359 13.4012 3.59999C13.4012 5.36639 11.9676 6.79999 10.2012 6.79999H7.00122V0.399994Z"
            fill="#FF7262"
          />
          <path
            d="M13.4012 9.99999C13.4012 11.7664 11.9676 13.2 10.2012 13.2C8.43482 13.2 7.00122 11.7664 7.00122 9.99999C7.00122 8.23359 8.43482 6.79999 10.2012 6.79999C11.9676 6.79999 13.4012 8.23359 13.4012 9.99999Z"
            fill="#1ABCFE"
          />
        </g>
        <defs>
          <clipPath id="clip0_5089_2593">
            <rect
              width="12.8026"
              height="19.2"
              fill="white"
              transform="translate(0.599976 0.399994)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    id: '2',
    text: 'Brand Guidelines',
    href: 'https://brand.wrap.ngo/',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="19"
        viewBox="0 0 22 19"
        fill="none"
      >
        <path
          d="M11.6122 18.4121C11.5636 18.4064 11.5179 18.4035 11.4693 18.395C12.1578 18.3287 12.8635 18.1563 13.5719 17.8806C15.6744 17.065 17.5451 15.4233 18.8357 13.2626C20.1291 11.1019 20.691 8.67463 20.4187 6.42557C20.3384 5.74282 20.1811 5.10313 19.9551 4.51511C19.9551 4.51798 19.958 4.52085 19.9608 4.52372C21.0786 6.20155 21.6423 8.26975 21.4174 10.4301C20.905 15.3446 16.5065 18.9266 11.6093 18.4092M12.3716 17.1208C14.1283 16.1046 15.8019 14.3597 17.0868 12.2133C18.917 9.15155 19.5471 5.90379 18.9577 3.66633C19.4437 4.47228 19.7641 5.43034 19.8902 6.49463C20.1481 8.62607 19.6119 10.9328 18.3785 12.9931C17.145 15.0534 15.3714 16.6148 13.3774 17.3873C12.4062 17.7634 11.4434 17.9302 10.5263 17.8933C11.1176 17.7467 11.7347 17.4912 12.3688 17.1208M11.1742 16.3467C12.5823 15.1355 14.0615 13.2932 15.3378 11.1583C17.0795 8.24571 18.2953 4.926 18.1346 2.92075C19.1924 4.92565 18.6653 8.53772 16.6324 11.9381C15.3932 14.0099 13.7853 15.6859 12.1058 16.6591C11.1517 17.2131 10.2433 17.4946 9.43758 17.5064C9.96604 17.2738 10.5487 16.8834 11.1742 16.3496M9.94252 15.5554C10.9648 14.1837 12.2326 12.2468 13.5175 10.0946C14.8052 7.94251 15.9186 5.8966 16.6494 4.33567C17.1062 3.35722 17.3545 2.7059 17.4657 2.26979C18.0062 3.60359 17.2219 6.96616 14.8806 10.883C13.6329 12.9692 12.1936 14.7656 10.8255 15.9424C9.92583 16.7173 9.12888 17.1565 8.53177 17.2228C8.86022 16.9185 9.30858 16.3991 9.93966 15.5554M7.96314 17.0193C8.01157 16.6635 8.23988 16.0036 8.63666 15.1026C8.79675 15.335 8.96825 15.5414 9.1426 15.7221C8.59146 16.4281 8.18878 16.8585 7.96314 17.0164M7.88604 17.1369L7.89175 17.1255C7.89175 17.1255 7.89461 17.1341 7.89747 17.1369L7.88319 17.1369L7.88604 17.1369ZM7.43562 12.3347C7.54706 12.392 7.65851 12.4465 7.7671 12.501C7.84426 12.5382 7.92141 12.5784 7.99571 12.6128C7.97861 12.7246 7.97008 12.8365 7.96441 12.9484C7.93893 13.5423 8.08199 14.0758 8.30502 14.5376C7.99672 15.209 7.76267 15.7915 7.61142 16.2506C7.45979 15.7199 7.09633 14.1393 7.43562 12.3318M7.54294 16.4916C7.54294 16.4916 7.54865 16.4715 7.5515 16.46C7.55436 16.4686 7.55722 16.4772 7.56294 16.483L7.54294 16.4887L7.54294 16.4916ZM5.34362 10.7433C5.5323 11.0359 5.78382 11.2882 6.06961 11.509C6.03287 12.5246 6.1106 14.0594 6.67123 15.6944C5.83054 13.8701 5.39277 12.238 5.34648 10.7462M4.27425 8.61792C4.39391 7.75149 4.72206 6.67555 5.59038 6.10718C5.5961 6.10718 5.59895 6.10144 5.59895 6.10144C5.73606 6.01532 5.8846 5.93781 6.05028 5.8775C6.41879 5.74252 6.7416 5.61903 7.02726 5.50417C6.80162 5.68212 6.57313 5.87156 6.36464 6.07532C6.14473 6.2877 5.93912 6.56032 5.71356 6.92762C5.23673 7.711 4.94281 8.63201 4.84607 9.65909C4.68102 11.3661 5.03888 13.2364 5.93111 15.3361C4.70775 13.9681 3.99219 10.6549 4.27425 8.61506M2.45729 8.96289C2.62009 8.83086 2.77431 8.68162 2.9171 8.52091C3.30264 8.0847 3.53671 7.55961 3.7365 7.03167C3.93932 6.93979 4.12785 6.85365 4.29639 6.77039C4.02801 7.2582 3.84539 7.85211 3.74852 8.54354C3.5206 10.2047 3.84424 12.25 4.47342 13.8362C3.68156 12.6804 2.85523 11.0541 2.45728 8.95716M2.35419 8.3404C2.32268 8.11951 2.29402 7.89288 2.27393 7.66339C2.54531 7.55139 2.79669 7.44515 3.03093 7.34465C2.89391 7.64306 2.73116 7.92427 2.51697 8.16534C2.46271 8.2256 2.40845 8.283 2.35133 8.3404M2.8729 5.06686C3.22137 4.80853 3.6528 4.83992 4.1128 4.86843C3.97575 5.10659 3.85013 5.35049 3.73023 5.603C3.59035 5.89854 3.47333 6.21129 3.36203 6.51256C3.34776 6.55273 3.33349 6.5929 3.31922 6.63594C2.99642 6.7795 2.63649 6.93456 2.23657 7.10111C2.21057 6.36096 2.29308 5.49167 2.8729 5.06399M0.851671 9.11557C0.717386 9.10988 0.625943 9.06689 0.557338 8.97511C0.551621 8.96938 0.514457 8.91201 0.545845 8.80872C0.58579 8.671 0.788506 8.32093 1.76545 7.87875C1.79414 8.17136 1.83139 8.45536 1.87721 8.73074C1.50874 8.98048 1.13167 9.1298 0.851671 9.11557ZM13.4709 0.584478C13.5423 0.593057 13.6109 0.601636 13.6823 0.610215C12.3167 0.788616 11.0026 1.20224 9.81148 1.83385C9.27446 2.11807 8.76032 2.4654 8.26046 2.80412C7.2379 3.49591 6.2639 4.15612 5.10684 4.31722C7.00864 1.70298 10.1823 0.241503 13.4709 0.584478ZM4.21031 5.83232C4.36447 5.50521 4.53577 5.18957 4.72136 4.88827C6.21559 4.83318 7.40382 4.02657 8.55491 3.2458C9.04049 2.9157 9.5432 2.57698 10.0574 2.30424C11.0771 1.7645 12.1912 1.39112 13.354 1.19845C13.3226 1.20994 13.2912 1.22143 13.2597 1.23292C13.114 1.29035 12.9712 1.34778 12.8284 1.40808C12.6856 1.47125 12.5456 1.53442 12.4056 1.60333C12.2656 1.66937 12.1285 1.74114 11.9914 1.81292C11.8543 1.88469 11.7201 1.9622 11.5858 2.03971C11.4515 2.11722 11.3202 2.19473 11.1888 2.27798C11.0574 2.35836 10.9288 2.4416 10.8003 2.52772C10.6746 2.61096 10.5489 2.69708 10.4233 2.78606C10.3004 2.87217 10.1776 2.96116 10.0577 3.05014C9.93769 3.13625 9.81773 3.22523 9.70063 3.31708C9.58638 3.40606 9.46927 3.49503 9.35788 3.58401C9.24649 3.67299 9.1351 3.76197 9.02657 3.85094C8.9723 3.894 8.91803 3.93992 8.86376 3.98297C8.85234 3.99732 8.82949 4.01167 8.81521 4.02029C8.80093 4.03177 8.78379 4.04325 8.76665 4.05473C8.73238 4.07769 8.6981 4.10066 8.66382 4.12362C8.59242 4.16955 8.52386 4.21261 8.45245 4.25567C8.40961 4.28151 8.3639 4.30734 8.32106 4.33031C8.26678 4.35902 8.21251 4.3906 8.16109 4.41644C8.09539 4.45089 8.02969 4.48534 7.96399 4.51693C7.88687 4.55425 7.80688 4.59158 7.72976 4.6289C7.63835 4.67197 7.54694 4.71217 7.45553 4.75237C7.34698 4.79831 7.24128 4.84425 7.13559 4.8902C7.01275 4.94188 6.88992 4.9907 6.76708 5.03952C6.62997 5.09408 6.48999 5.14864 6.35001 5.20034C6.0672 5.30659 5.78154 5.41859 5.51017 5.55066C5.22737 5.68848 4.95887 5.85211 4.67893 5.99279C4.65608 6.00427 4.63037 6.01576 4.60752 6.03011C4.51326 6.07605 4.42185 6.12198 4.32758 6.16792C4.27617 6.19376 4.22189 6.2196 4.17047 6.24544C4.14476 6.25693 4.02193 6.29714 4.01051 6.32296C4.07616 6.15655 4.1418 5.99013 4.21603 5.83231M13.7027 1.64585C12.2945 2.47837 10.5407 3.51757 10.2701 5.56889C10.1988 6.11112 9.97898 6.44973 9.59905 6.59906C9.28768 6.72254 8.9134 6.71408 8.54769 6.70562C8.44769 6.70279 8.34769 6.69996 8.25341 6.69999C7.72199 6.7002 7.23063 6.8381 6.70504 7.12518C6.53651 7.21992 6.21945 7.41226 5.90528 7.69639C5.98521 7.5271 6.07086 7.36068 6.16794 7.20285C6.36781 6.87286 6.54771 6.63468 6.73621 6.45387C6.95897 6.23575 7.21603 6.03196 7.46452 5.83391C7.59305 5.73059 7.71872 5.63013 7.84153 5.5268L8.49559 4.9786C8.52129 4.95851 8.964 4.58826 8.964 4.58826L9.05254 4.5165C10.3378 3.44306 11.9459 2.23465 13.7199 1.6315C13.7142 1.63437 13.7084 1.63725 13.7027 1.64012M10.6874 6.1138C10.7359 5.96747 10.773 5.80967 10.7958 5.6404C11.0094 4.0223 12.3033 3.11237 13.5659 2.35164C12.7005 3.11796 11.7067 4.29456 10.6903 6.1138M6.14923 10.5221C6.13783 10.6053 6.12645 10.7114 6.11221 10.8348C5.78923 10.5136 5.56052 10.1379 5.51749 9.68464C5.43143 8.77813 6.20539 8.00898 6.9595 7.59557C7.40225 7.35155 7.81363 7.23663 8.25361 7.23646C8.34504 7.23643 8.44218 7.23639 8.53647 7.23922C8.95075 7.24767 9.38217 7.25897 9.79352 7.09529C10.0363 7.00052 10.242 6.84839 10.4019 6.65038C10.2163 7.0234 9.99084 7.55709 9.53374 7.64621C8.05389 7.9394 6.3629 8.96137 6.15209 10.5192M6.61236 11.2449C6.62939 10.9666 6.65502 10.7457 6.67496 10.5936C6.81171 9.5952 7.77424 8.80877 8.84548 8.39811C7.91446 9.39682 7.3749 10.4872 7.08103 11.5402C6.921 11.4484 6.76096 11.3481 6.61236 11.2449ZM6.77056 13.9759C6.62739 13.1842 6.58711 12.4613 6.5926 11.8703C6.70977 11.9419 6.82979 12.0136 6.94981 12.0767C6.81293 12.748 6.76461 13.3907 6.77056 13.9731M13.8803 2.78758C13.589 3.13482 13.3377 3.49066 13.1264 3.80631C12.6896 4.46057 12.3127 5.16071 11.9501 5.84077C11.6132 6.46917 11.2649 7.11767 10.8737 7.72027C10.5511 8.21671 10.1884 8.69881 9.84004 9.1637C9.55448 9.54249 9.26035 9.93564 8.98337 10.3374C8.55505 10.9601 8.26957 11.5282 8.11264 12.0762C8.07835 12.059 8.0412 12.039 8.00405 12.0218C7.85831 11.9501 7.70972 11.8756 7.55826 11.7982C7.54112 11.7896 7.66954 11.4194 7.68096 11.385C7.72661 11.2416 7.77799 11.101 7.83507 10.9604C7.9521 10.6677 8.08913 10.3836 8.2433 10.111C8.58592 9.50558 9.01998 8.95172 9.52263 8.46956C9.68828 8.30885 9.86536 8.1596 10.0424 8.01035C10.211 7.86684 10.3738 7.73481 10.5023 7.55403C10.6507 7.34741 10.7649 7.11786 10.8791 6.89118C10.9248 6.80223 10.9648 6.71615 11.0076 6.63867C12.0354 4.74484 13.0321 3.54528 13.886 2.78758M15.4 2.1042C15.5914 1.9779 15.9856 1.74537 16.377 1.70506C15.2917 2.77268 13.3585 5.50743 11.4141 8.76145C10.2863 10.6496 9.31846 12.4315 8.61904 13.8805C8.53322 13.5994 8.48739 13.2953 8.4987 12.974C8.52699 12.2597 8.82098 11.5194 9.42062 10.6413C9.68903 10.2482 9.98031 9.86077 10.263 9.48484C10.6171 9.01135 10.9883 8.52063 11.3167 8.01272C11.7222 7.39289 12.0762 6.73293 12.4159 6.09591C12.7757 5.4302 13.144 4.73867 13.5666 4.1045C14.0034 3.45023 14.606 2.63238 15.3972 2.10421M17.0256 1.83677C16.9601 2.54253 15.7527 5.32576 13.0659 9.82227C11.5983 12.2757 10.3734 14.0921 9.471 15.2974C9.26806 15.0766 9.06797 14.8185 8.90214 14.523C9.56443 13.1056 10.5637 11.2204 11.8714 9.03381C14.2498 5.05668 16.2401 2.43666 17.0284 1.83677M21.9941 9.30526C21.9882 8.91797 21.9566 8.52782 21.8993 8.14342C21.8449 7.76476 21.7676 7.38897 21.6675 7.01893C21.5702 6.65463 21.4472 6.29607 21.3071 5.94613C21.1669 5.59906 21.0068 5.25773 20.8267 4.92788C20.6466 4.60091 20.4465 4.28254 20.2321 3.97853C20.0148 3.67452 19.7804 3.38486 19.5289 3.10668C19.2773 2.83137 19.0115 2.57041 18.7286 2.32381C18.4256 2.05999 18.1056 1.8134 17.7712 1.58976C17.6969 1.54102 17.6226 1.49228 17.5454 1.44354C17.2339 1.24858 16.911 1.07084 16.5795 0.91318C16.1652 0.715392 15.7337 0.549169 15.2936 0.414505C14.845 0.276977 14.3821 0.17388 13.9193 0.105208C13.7878 0.085178 13.6593 0.0680152 13.5278 0.0565912C9.90492 -0.323549 6.41138 1.37043 4.43545 4.35478C4.39545 4.3548 4.35545 4.35481 4.31545 4.34909L4.16116 4.33767C3.64973 4.30345 3.06973 4.26064 2.56132 4.63666C1.733 5.24804 1.66774 6.41568 1.71952 7.31647C0.711144 7.75006 0.13991 8.21503 0.0258164 8.70278C-0.0511986 9.02699 0.0917397 9.24496 0.137475 9.30232C0.283263 9.50021 0.497588 9.61488 0.76045 9.64347C0.780449 9.64346 0.803308 9.64919 0.826164 9.64918C1.16616 9.66339 1.57467 9.53127 1.98028 9.29299C2.90202 13.8139 5.69999 16.1222 6.0115 16.366C6.01722 16.3717 6.02294 16.3746 6.02579 16.3774C6.02579 16.3774 6.03151 16.3803 6.03151 16.3832C6.03151 16.3832 6.03151 16.386 6.03437 16.386C7.5549 17.8399 9.46376 18.7228 11.5552 18.9429C16.741 19.4888 21.4023 15.6944 21.946 10.4872C21.9858 10.0942 22.0028 9.69829 21.9941 9.30239"
          fill="#0B301A"
        />
      </svg>
    ),
  },
  {
    id: '3',
    text: 'Code Repository',
    href: 'https://github.com/wrap-org/evergreen',
    icon: (
      <svg
        aria-label="Github"
        width="21"
        height="21"
        viewBox="0 0 98 96"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

const indexPages = [
  {
    id: '1',
    title: 'Guides',
    icon: 'document',
    description:
      'Comprehensive documentation to help you understand and implement the Design System.',
    href: '/?path=/docs/guides',
  },
  {
    id: '2',
    title: 'Showroom',
    icon: 'favorite',
    description:
      'Exemplar pages showcasing Evergreen in action, demonstrating common pattern combinations for learning and inspiration.',
    href: '/?path=/docs/showroom',
  },
  {
    id: '3',
    title: 'Foundations',
    icon: 'tag',
    description:
      'Core styles that define the fundamental visual language of the Design System, ensuring consistency and coherence.',
    href: '/?path=/docs/foundations',
  },
  {
    id: '4',
    title: 'Recipes',
    icon: 'layers',
    description:
      'Predefined solutions to common design problems and interactions, combining components for a consistent user experience.',
    href: '/?path=/docs/recipes',
  },
];

const components = [
  {
    id: '1',
    title: 'Content',
    description:
      'Content components look after the general styles for text and images, but can extend to data-specific patterns such as user profiles or product information.',
    href: '/?path=/docs/components-content',
  },
  {
    id: '2',
    title: 'Controls',
    description:
      'Controls are interactive elements of the page. Anything that can be clicked, dragged, typed into or accessed in some way with the mouse, keyboard or touch is a control.',
    href: '/?path=/docs/components-control',
  },
  {
    id: '3',
    title: 'Canvas',
    description:
      'A canvas represents a part of the page that content and controls sit within. Canvases provide padding and backgrounds for their content area, but do not dictate any other layout constraints.',
    href: '/?path=/docs/components-canvas',
  },
  {
    id: '4',
    title: 'Composition',
    description:
      'Compositions are an invisible element of the page that provides layout. Compositions are solely concerned with creating structure and spacing.',
    href: '/?path=/docs/components-composition',
  },
];

export function Home() {
  return (
    <>
      <evg-supergraphic class="evg-theme-forest" position="bottom-right">
        <evg-section padding="fluid-lg" class="evg-theme-forest">
          <evg-wrapper size="xxl" gutter="fluid-lg">
            <evg-grid wrap="wrap" gap="none">
              <evg-grid-item small-mobile="12" tablet="9" large-tablet="7">
                <h1 className="evg-text-size-heading-xl evg-text-transform-uppercase evg-spacing-bottom-md">
                  Evergreen
                </h1>
                <p className="evg-text-size-body-lg evg-spacing-bottom-md">
                  <evg-link>
                    <a href="https://wrap.ngo" target="_blank" rel="noreferrer">
                      WRAP’s
                    </a>
                  </evg-link>{' '}
                  official design system – serving as the primary resource for
                  creating and improving our websites and applications.
                </p>
                <evg-row>
                  {links.map((link) => (
                    <evg-button key={link.id}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.icon}
                        {link.text}
                      </a>
                    </evg-button>
                  ))}
                </evg-row>
              </evg-grid-item>
            </evg-grid>
          </evg-wrapper>
        </evg-section>
      </evg-supergraphic>

      <evg-section padding="fluid">
        <evg-wrapper size="xl">
          <h2 className="evg-text-size-heading-md evg-spacing-bottom-lg evg-text-transform-uppercase">
            Getting Started with Evergreen
          </h2>
          <evg-grid gap="lg" wrap="wrap" class="evg-spacing-bottom-lg">
            <evg-grid-item small-mobile="12" large-mobile="6">
              <h3 className="evg-text-size-body-md evg-text-transform-uppercase evg-text-color-forest-75">
                Useful Information
              </h3>
              <evg-divider />
              <evg-menu-item>
                <a href="https://wrap.ngo">Getting Started</a>
              </evg-menu-item>
              <evg-divider />
              <evg-menu-item>
                <a href="https://wrap.ngo">Good to Know</a>
              </evg-menu-item>
              <evg-divider />
              <evg-menu-item>
                <a href="https://wrap.ngo">Support</a>
              </evg-menu-item>
              <evg-divider />
            </evg-grid-item>
            <evg-grid-item small-mobile="12" large-mobile="6">
              <h3 className="evg-text-size-body-md evg-text-transform-uppercase evg-text-color-forest-75">
                Developer Guides
              </h3>
              <evg-divider />
              <evg-menu-item>
                <a href="https://wrap.ngo">Migration Details</a>
              </evg-menu-item>
              <evg-divider />
              <evg-menu-item>
                <a href="https://wrap.ngo">Contrinbuting Guidelines</a>
              </evg-menu-item>
              <evg-divider />
              <evg-menu-item>
                <a href="https://wrap.ngo">Changelog</a>
              </evg-menu-item>
              <evg-divider />
            </evg-grid-item>
          </evg-grid>

          <h2 className="evg-text-size-heading-md evg-spacing-bottom-lg evg-text-transform-uppercase">
            What’s Inside
          </h2>
          <evg-grid wrap="wrap">
            {indexPages.map((item) => (
              <evg-grid-item
                key={item.id}
                small-mobile="12"
                small-tablet="6"
                fill
              >
                <a href={item.href}>
                  <evg-card radius="md" class="evg-theme-forest-light">
                    <evg-card-content>
                      <h3 className="evg-text-size-body-md evg-text-family-body">
                        {item.title}
                      </h3>
                      <p className="evg-text-size-body-sm">
                        {item.description}
                      </p>
                    </evg-card-content>
                  </evg-card>
                </a>
              </evg-grid-item>
            ))}
          </evg-grid>
        </evg-wrapper>
      </evg-section>

      <evg-section padding="fluid" class={`evg-theme-earth-light`}>
        <evg-wrapper size="xl">
          <div className="evg-spacing-bottom-lg evg-text-align-center">
            <h2 className="evg-text-size-heading-md evg-spacing-bottom-md evg-text-transform-uppercase">
              Components
            </h2>
            <p>
              Evergreen components follow the Diamond UI methodology. Each
              component is created with a single concern from one of four areas
              of responsibility.
            </p>
          </div>

          <evg-grid wrap="wrap">
            {components.map((item) => (
              <evg-grid-item
                key={item.id}
                small-mobile="12"
                small-tablet="6"
                large-tablet="3"
                fill
              >
                <a href={item.href}>
                  <evg-card radius="md" class="evg-theme-default">
                    <evg-card-content>
                      <h3 className="evg-text-size-body-md evg-text-family-body">
                        {item.title}
                      </h3>
                      <p className="evg-text-size-body-xs">
                        {item.description}
                      </p>
                    </evg-card-content>
                  </evg-card>
                </a>
              </evg-grid-item>
            ))}
          </evg-grid>
        </evg-wrapper>
      </evg-section>

      <evg-section padding="fluid">
        <evg-wrapper size="xl">
          <h2 className="evg-text-size-heading-md evg-text-transform-uppercase evg-spacing-bottom-lg">
            Resources
          </h2>
          <evg-grid wrap="wrap">
            {links.map((item) => (
              <evg-grid-item key={item.id} small-mobile="12" small-tablet="4">
                <evg-divider />
                <evg-menu-item>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <evg-icon>{item.icon}</evg-icon>
                    <evg-menu-item-content>{item.text}</evg-menu-item-content>
                    <evg-icon icon="arrow-right" />
                  </a>
                </evg-menu-item>
                <evg-divider />
              </evg-grid-item>
            ))}
          </evg-grid>
        </evg-wrapper>
      </evg-section>

      <Banner
        title="Get support"
        text="If you encounter issues or have questions, we're here to help."
        button="Contact us"
        href="/?path=/docs/support--docs"
      />
    </>
  );
}
