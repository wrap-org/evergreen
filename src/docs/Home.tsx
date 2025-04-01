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
          <path d="m3.8012 19.6c1.7664 0 3.2-1.4336 3.2-3.2v-3.2h-3.2c-1.7664 0-3.2 1.4336-3.2 3.2s1.4336 3.2 3.2 3.2z" />
          <path d="m0.6012 10c0-1.7664 1.4336-3.2 3.2-3.2h3.2v6.4h-3.2c-1.7664 0-3.2-1.4336-3.2-3.2z" />
          <path d="m0.60132 3.6c0-1.7664 1.4336-3.2 3.2-3.2h3.2v6.4h-3.2c-1.7664 0-3.2-1.4336-3.2-3.2z" />
          <path d="m7.0012 0.39999h3.2c1.7664 0 3.2 1.4336 3.2 3.2s-1.4336 3.2-3.2 3.2h-3.2v-6.4z" />
          <path d="m13.401 10c0 1.7664-1.4336 3.2-3.2 3.2-1.7664 0-3.2-1.4336-3.2-3.2 0-1.7664 1.4336-3.2 3.2-3.2 1.7664 0 3.2 1.4336 3.2 3.2z" />
        </g>
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
        <path d="m11.612 18.412c-0.0486-0.0057-0.0943-0.0086-0.1429-0.0171 0.6885-0.0663 1.3942-0.2387 2.1026-0.5144 2.1025-0.8156 3.9732-2.4573 5.2638-4.618 1.2934-2.1607 1.8553-4.588 1.583-6.837-0.0803-0.68275-0.2376-1.3224-0.4636-1.9105 0 0.00287 0.0029 0.00574 0.0057 0.00861 1.1178 1.6778 1.6815 3.746 1.4566 5.9064-0.5124 4.9145-4.9109 8.4965-9.8081 7.9791m0.7623-1.2884c1.7567-1.0162 3.4303-2.7611 4.7152-4.9075 1.8302-3.0618 2.4603-6.3095 1.8709-8.547 0.486 0.80595 0.8064 1.764 0.9325 2.8283 0.2579 2.1314-0.2783 4.4382-1.5117 6.4985-1.2335 2.0603-3.0071 3.6217-5.0011 4.3942-0.9712 0.3761-1.934 0.5429-2.8511 0.506 0.5913-0.1466 1.2084-0.4021 1.8425-0.7725m-1.1946-0.7741c1.4081-1.2112 2.8873-3.0535 4.1636-5.1884 1.7417-2.9126 2.9575-6.2323 2.7968-8.2376 1.0578 2.0049 0.5307 5.617-1.5022 9.0174-1.2392 2.0718-2.8471 3.7478-4.5266 4.721-0.9541 0.554-1.8625 0.8355-2.6682 0.8473 0.52846-0.2326 1.1111-0.623 1.7366-1.1568m-1.2317-0.7942c1.0223-1.3717 2.2901-3.3086 3.575-5.4608 1.2877-2.1521 2.4011-4.198 3.1319-5.7589 0.4568-0.97845 0.7051-1.6298 0.8163-2.0659 0.5405 1.3338-0.2438 4.6964-2.5851 8.6132-1.2477 2.0862-2.687 3.8826-4.0551 5.0594-0.89967 0.7749-1.6966 1.2141-2.2937 1.2804 0.32845-0.3043 0.77681-0.8237 1.4079-1.6674m-1.9765 1.4639c0.04843-0.3558 0.27674-1.0157 0.67352-1.9167 0.16009 0.2324 0.33159 0.4388 0.50594 0.6195-0.55114 0.706-0.95382 1.1364-1.1795 1.2943m-0.0771 0.1205 0.00571-0.0114s0.00286 0.0086 0.00572 0.0114h-0.01428 0.00285zm-0.45042-4.8022c0.11144 0.0573 0.22289 0.1118 0.33148 0.1663 0.07716 0.0372 0.15431 0.0774 0.22861 0.1118-0.0171 0.1118-0.02563 0.2237-0.0313 0.3356-0.02548 0.5939 0.11758 1.1274 0.34061 1.5892-0.3083 0.6714-0.54235 1.2539-0.6936 1.713-0.15163-0.5307-0.51509-2.1113-0.1758-3.9188m0.10732 4.1598s0.00571-0.0201 0.00856-0.0316c0.00286 0.0086 0.00572 0.0172 0.01144 0.023l-0.02 0.0057v0.0029zm-2.1993-5.7483c0.18868 0.2926 0.4402 0.5449 0.72599 0.7657-0.03674 1.0156 0.04099 2.5504 0.60162 4.1854-0.84069-1.8243-1.2785-3.4564-1.3248-4.9482m-1.0722-2.1283c0.11966-0.86643 0.44781-1.9424 1.3161-2.5107 0.00572 0 0.00857-0.00574 0.00857-0.00574 0.13711-0.08612 0.28565-0.16363 0.45133-0.22394 0.36851-0.13498 0.69132-0.25847 0.97698-0.37333-0.22564 0.17795-0.45413 0.36739-0.66262 0.57115-0.21991 0.21238-0.42552 0.485-0.65108 0.8523-0.47683 0.78338-0.77075 1.7044-0.86749 2.7315-0.16505 1.707 0.19281 3.5773 1.085 5.677-1.2234-1.368-1.9389-4.6812-1.6569-6.721m-1.817 0.34783c0.1628-0.13203 0.31702-0.28127 0.45981-0.44198 0.38554-0.43621 0.61961-0.9613 0.8194-1.4892 0.20282-0.09188 0.39135-0.17802 0.55989-0.26128-0.26838 0.48781-0.451 1.0817-0.54787 1.7732-0.22792 1.6612 0.09572 3.7065 0.7249 5.2927-0.79186-1.1558-1.6182-2.7821-2.0161-4.879m-0.10309-0.61676c-0.03151-0.22089-0.06017-0.44752-0.08026-0.67701 0.27138-0.112 0.52276-0.21824 0.757-0.31874-0.13702 0.29841-0.29977 0.57962-0.51396 0.82069-0.05426 0.06026-0.10852 0.11766-0.16564 0.17506m0.52157-3.2735c0.34847-0.25833 0.7799-0.22694 1.2399-0.19843-0.13705 0.23816-0.26267 0.48206-0.38257 0.73457-0.13988 0.29554-0.2569 0.60829-0.3682 0.90956-0.01427 0.04017-0.02854 0.08034-0.04281 0.12338-0.3228 0.14356-0.68273 0.29862-1.0826 0.46517-0.026-0.74015 0.05651-1.6094 0.63633-2.0371m-2.0212 4.0516c-0.13428-0.00569-0.22573-0.04868-0.29433-0.14046-0.005717-0.00573-0.042881-0.0631-0.011493-0.16639 0.039945-0.13772 0.24266-0.48779 1.2196-0.92997 0.02869 0.29261 0.06594 0.57661 0.11176 0.85199-0.36847 0.24974-0.74554 0.39906-1.0255 0.38483zm12.619-8.5311c0.0714 0.008579 0.14 0.017158 0.2114 0.025737-1.3656 0.1784-2.6797 0.59202-3.8708 1.2236-0.53702 0.28422-1.0512 0.63155-1.551 0.97027-1.0226 0.69179-1.9966 1.352-3.1536 1.5131 1.9018-2.6142 5.0755-4.0757 8.3641-3.7327zm-9.2606 5.2478c0.15416-0.32711 0.32546-0.64275 0.51105-0.94405 1.4942-0.05509 2.6825-0.8617 3.8336-1.6425 0.48558-0.3301 0.98829-0.66882 1.5025-0.94156 1.0197-0.53974 2.1338-0.91312 3.2966-1.1058-0.0314 0.01149-0.0628 0.02298-0.0943 0.03447-0.1457 0.05743-0.2885 0.11486-0.4313 0.17516-0.1428 0.06317-0.2828 0.12634-0.4228 0.19525-0.14 0.06604-0.2771 0.13781-0.4142 0.20959-0.1371 0.07177-0.2713 0.14928-0.4056 0.22679s-0.2656 0.15502-0.397 0.23827c-0.1314 0.08038-0.26 0.16362-0.3885 0.24974-0.1257 0.08324-0.2514 0.16936-0.377 0.25834-0.1229 0.08611-0.2457 0.1751-0.3656 0.26408-0.12001 0.08611-0.23997 0.17509-0.35707 0.26694-0.11425 0.08898-0.23136 0.17795-0.34275 0.26693s-0.22278 0.17796-0.33131 0.26693c-0.05427 0.04306-0.10854 0.08898-0.16281 0.13203-0.01142 0.01435-0.03427 0.0287-0.04855 0.03732-0.01428 0.01148-0.03142 0.02296-0.04856 0.03444-0.03427 0.02296-0.06855 0.04593-0.10283 0.06889-0.0714 0.04593-0.13996 0.08899-0.21137 0.13205-0.04284 0.02584-0.08855 0.05167-0.13139 0.07464-0.05428 0.02871-0.10855 0.06029-0.15997 0.08613-0.0657 0.03445-0.1314 0.0689-0.1971 0.10049-0.07712 0.03732-0.15711 0.07465-0.23423 0.11197-0.09141 0.04307-0.18282 0.08327-0.27423 0.12347-0.10855 0.04594-0.21425 0.09188-0.31994 0.13783-0.12284 0.05168-0.24567 0.1005-0.36851 0.14932-0.13711 0.05456-0.27709 0.10912-0.41707 0.16082-0.28281 0.10625-0.56847 0.21825-0.83984 0.35032-0.2828 0.13782-0.5513 0.30145-0.83124 0.44213-0.02285 0.01148-0.04856 0.02297-0.07141 0.03732-0.09426 0.04594-0.18567 0.09187-0.27994 0.13781-0.05141 0.02584-0.10569 0.05168-0.15711 0.07752-0.02571 0.01149-0.14854 0.0517-0.15996 0.07752 0.06565-0.16641 0.13129-0.33283 0.20552-0.49065m9.4867-4.1865c-1.4082 0.83252-3.162 1.8717-3.4326 3.923-0.0713 0.54223-0.29112 0.88084-0.67105 1.0302-0.31137 0.12348-0.68565 0.11502-1.0514 0.10656-0.1-0.00283-0.2-0.00566-0.29428-0.00563-0.53142 2.1e-4 -1.0228 0.13811-1.5484 0.42519-0.16853 0.09474-0.48559 0.28708-0.79976 0.57121 0.07993-0.16929 0.16558-0.33571 0.26266-0.49354 0.19987-0.32999 0.37977-0.56817 0.56827-0.74898 0.22276-0.21812 0.47982-0.42191 0.72831-0.61996 0.12853-0.10332 0.2542-0.20378 0.37701-0.30711l0.65406-0.5482c0.0257-0.02009 0.46841-0.39034 0.46841-0.39034l0.08854-0.07176c1.2853-1.0734 2.8934-2.2818 4.6674-2.885-0.0057 0.00287-0.0115 0.00575-0.0172 0.00862m-3.0153 4.4737c0.0485-0.14633 0.0856-0.30413 0.1084-0.4734 0.2136-1.6181 1.5075-2.528 2.7701-3.2888-0.8654 0.76632-1.8592 1.9429-2.8756 3.7622m-4.5411 4.4083c-0.0114 0.0832-0.02278 0.1893-0.03702 0.3127-0.32298-0.3212-0.55169-0.6969-0.59472-1.1502-0.08606-0.90651 0.6879-1.6757 1.442-2.0891 0.44275-0.24402 0.85413-0.35894 1.2941-0.35911 0.09143-3e-5 0.18857-7e-5 0.28286 0.00276 0.41428 0.00845 0.8457 0.01975 1.257-0.14393 0.24278-0.09477 0.44848-0.2469 0.60838-0.44491-0.1856 0.37302-0.41106 0.90671-0.86816 0.99583-1.4798 0.29319-3.1708 1.3152-3.3816 2.873m0.46027 0.7257c0.01703-0.2783 0.04266-0.4992 0.0626-0.6513 0.13675-0.9984 1.0993-1.7848 2.1705-2.1955-0.93102 0.99871-1.4706 2.0891-1.7644 3.1421-0.16003-0.0918-0.32007-0.1921-0.46867-0.2953zm0.1582 2.731c-0.14317-0.7917-0.18345-1.5146-0.17796-2.1056 0.11717 0.0716 0.23719 0.1433 0.35721 0.2064-0.13688 0.6713-0.1852 1.314-0.17925 1.8964m7.1097-11.186c-0.2913 0.34724-0.5426 0.70308-0.7539 1.0187-0.4368 0.65426-0.8137 1.3544-1.1763 2.0345-0.3369 0.6284-0.6852 1.2769-1.0764 1.8795-0.3226 0.49644-0.6853 0.97854-1.0337 1.4434-0.28556 0.37879-0.57969 0.77194-0.85667 1.1737-0.42832 0.6227-0.7138 1.1908-0.87073 1.7388-0.03429-0.0172-0.07144-0.0372-0.10859-0.0544-0.14574-0.0717-0.29433-0.1462-0.44579-0.2236-0.01714-0.0086 0.11128-0.3788 0.1227-0.4132 0.04565-0.1434 0.09703-0.284 0.15411-0.4246 0.11703-0.2927 0.25406-0.5768 0.40823-0.8494 0.34262-0.60542 0.77668-1.1593 1.2793-1.6414 0.16565-0.16071 0.34273-0.30996 0.51977-0.45921 0.1686-0.14351 0.3314-0.27554 0.4599-0.45632 0.1484-0.20662 0.2626-0.43617 0.3768-0.66285 0.0457-0.08895 0.0857-0.17503 0.1285-0.25251 1.0278-1.8938 2.0245-3.0934 2.8784-3.8511m1.514-0.68338c0.1914-0.1263 0.5856-0.35883 0.977-0.39914-1.0853 1.0676-3.0185 3.8024-4.9629 7.0564-1.1278 1.8882-2.0956 3.67-2.7951 5.119-0.08582-0.2811-0.13165-0.5852-0.12034-0.9065 0.02829-0.7143 0.32228-1.4546 0.92192-2.3327 0.26841-0.3931 0.55969-0.78053 0.84238-1.1565 0.3541-0.47349 0.7253-0.96421 1.0537-1.4721 0.4055-0.61983 0.7595-1.2798 1.0992-1.9168 0.3598-0.66571 0.7281-1.3572 1.1507-1.9914 0.4368-0.65427 1.0394-1.4721 1.8306-2.0003m1.6284-0.26744c-0.0655 0.70576-1.2729 3.489-3.9597 7.9855-1.4676 2.4534-2.6925 4.2698-3.5949 5.4751-0.20294-0.2208-0.40303-0.4789-0.56886-0.7744 0.66229-1.4174 1.6616-3.3026 2.9693-5.4892 2.3784-3.9771 4.3687-6.5972 5.157-7.197m4.9657 7.4685c-0.0059-0.38729-0.0375-0.77744-0.0948-1.1618-0.0544-0.37866-0.1317-0.75445-0.2318-1.1245-0.0973-0.3643-0.2203-0.72286-0.3604-1.0728-0.1402-0.34707-0.3003-0.6884-0.4804-1.0182-0.1801-0.32697-0.3802-0.64534-0.5946-0.94935-0.2173-0.30401-0.4517-0.59367-0.7032-0.87185-0.2516-0.27531-0.5174-0.53627-0.8003-0.78287-0.303-0.26382-0.623-0.51041-0.9574-0.73405-0.0743-0.04874-0.1486-0.09748-0.2258-0.14622-0.3115-0.19496-0.6344-0.3727-0.9659-0.53036-0.4143-0.19779-0.8458-0.36401-1.2859-0.49868-0.4486-0.13753-0.9115-0.24062-1.3743-0.3093-0.1315-0.02003-0.26-0.037193-0.3915-0.048617-3.6229-0.38014-7.1164 1.3138-9.0924 4.2982-0.04 2e-5 -0.08 3e-5 -0.12-0.00569l-0.15429-0.01142c-0.51143-0.03422-1.0914-0.07703-1.5998 0.29899-0.82832 0.61138-0.89358 1.779-0.8418 2.6798-1.0084 0.43359-1.5796 0.89856-1.6937 1.3863-0.077015 0.32421 0.065923 0.54218 0.11166 0.59954 0.14579 0.19789 0.36011 0.31256 0.62298 0.34115 0.019999-1e-5 0.042858 0.00572 0.065714 0.00571 0.34 0.01421 0.74851-0.11791 1.1541-0.35619 0.92174 4.5209 3.7197 6.8292 4.0312 7.073 0.00572 0.0057 0.01144 0.0086 0.01429 0.0114 0 0 0.00572 0.0029 0.00572 0.0058 0 0 0 0.0028 0.00286 0.0028 1.5205 1.4539 3.4294 2.3368 5.5208 2.5569 5.1858 0.5459 9.8471-3.2485 10.391-8.4557 0.0398-0.393 0.0568-0.78891 0.0481-1.1848" />
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
        <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
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
                  WRAP’s official design system – serving as the primary
                  resource for creating and improving our websites and
                  applications.
                </p>
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
                <a href="https://wrap.ngo">Contributing Guidelines</a>
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
