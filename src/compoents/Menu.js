import styled from "styled-components";

const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
  border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;
  .logo {
    width: 100%;
    max-width: 80px;
    @media (min-width: 600px) {
      max-width: 127px;
    }
    .text {
      fill: ${({ theme }) => theme.textColorBase || "#222222"};
    }
  }
`;

export default function Menu() {
  return (
    <StyledMenu>
      <div>
        <Logo />
      </div>
    </StyledMenu>
  );
}

function Logo() {
  return (
    <svg className="logo" viewBox="0 0 454 87" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M120.721 14.1896C119.307 8.94024 115.168 4.80134 109.919 3.38805C100.329 0.763382 61.9683 0.763382 61.9683 0.763382C61.9683 0.763382 23.6077 0.763382 14.0176 3.2871C8.86917 4.70039 4.62931 8.94024 3.21603 14.1896C0.692307 23.7797 0.692307 43.6667 0.692307 43.6667C0.692307 43.6667 0.692307 63.6546 3.21603 73.1438C4.62931 78.3931 8.76822 82.532 14.0176 83.9453C23.7087 86.57 61.9683 86.57 61.9683 86.57C61.9683 86.57 100.329 86.57 109.919 84.0462C115.168 82.633 119.307 78.4941 120.721 73.2447C123.244 63.6546 123.244 43.7676 123.244 43.7676C123.244 43.7676 123.345 23.7797 120.721 14.1896V14.1896Z" fill="#FF0000" />
    <path d="M49.7535 25.294V62.0394L81.6533 43.6667L49.7535 25.294Z" fill="white" />
    <path className="text" d="M433.558 63.2285C433.558 66.6608 433.659 69.2855 433.861 71.0016C434.063 72.7177 434.466 74.0301 435.173 74.7367C435.779 75.5443 436.788 75.9481 438.202 75.9481C440.019 75.9481 441.23 75.2415 441.937 73.8282C442.643 72.4149 442.946 70.0931 443.047 66.7618L453.445 67.3675C453.546 67.8722 453.546 68.4779 453.546 69.2855C453.546 74.232 452.233 77.9671 449.508 80.3899C446.782 82.8126 442.946 84.024 438 84.024C432.044 84.024 427.905 82.106 425.482 78.3709C423.059 74.6358 421.848 68.8817 421.848 61.0077V51.6194C421.848 43.5435 423.059 37.6885 425.583 33.9534C428.107 30.2183 432.347 28.4012 438.302 28.4012C442.441 28.4012 445.672 29.2088 447.893 30.723C450.114 32.2372 451.628 34.66 452.536 37.7894C453.445 41.0198 453.849 45.4615 453.849 51.1147V60.301H433.558V63.2285ZM435.072 37.8904C434.466 38.698 434.063 39.9093 433.861 41.6255C433.659 43.3416 433.558 45.9663 433.558 49.4995V53.3356H442.441V49.4995C442.441 46.0672 442.34 43.4426 442.139 41.6255C441.937 39.8084 441.432 38.597 440.826 37.8904C440.221 37.1837 439.211 36.7799 438 36.7799C436.586 36.679 435.678 37.0828 435.072 37.8904Z" fill="#282828" />
    <path className="text" d="M375.209 29.6126V83.4183H365.72L364.711 76.8567H364.408C361.884 81.8031 357.947 84.3269 352.799 84.3269C349.266 84.3269 346.641 83.1155 344.925 80.7937C343.209 78.4718 342.401 74.8377 342.401 69.7902V29.6126H354.515V69.0836C354.515 71.5064 354.818 73.2225 355.322 74.232C355.827 75.2415 356.736 75.7462 357.947 75.7462C358.957 75.7462 359.966 75.4434 360.976 74.7367C361.985 74.131 362.692 73.3234 363.096 72.3139V29.6126H375.209Z" fill="#282828" />
    <path className="text" d="M346.035 19.5177H334.022V83.3174H322.211V19.5177H310.198V9.72562H346.035V19.5177Z" fill="#282828" />
    <path className="text" d="M415.286 38.1932C414.579 34.761 413.368 32.3382 411.753 30.8239C410.138 29.3097 407.816 28.5021 404.989 28.5021C402.768 28.5021 400.648 29.1078 398.73 30.4202C396.812 31.6315 395.298 33.3477 394.289 35.3666H394.188V7H382.478V83.3174H392.472L393.683 78.2699H393.986C394.894 80.087 396.308 81.5003 398.226 82.6107C400.144 83.6202 402.163 84.2259 404.485 84.2259C408.623 84.2259 411.551 82.3079 413.469 78.5728C415.387 74.8377 416.397 68.8817 416.397 60.9067V52.427C416.296 46.2691 415.993 41.5245 415.286 38.1932ZM404.182 60.0991C404.182 64.0361 403.98 67.0646 403.677 69.2855C403.374 71.5064 402.768 73.1215 402.062 74.0301C401.254 74.9386 400.245 75.4434 399.033 75.4434C398.024 75.4434 397.115 75.2415 396.308 74.7367C395.5 74.232 394.793 73.5253 394.289 72.6168V42.1302C394.693 40.7169 395.399 39.5056 396.409 38.4961C397.418 37.5875 398.529 37.0828 399.639 37.0828C400.85 37.0828 401.86 37.5875 402.466 38.4961C403.172 39.5056 403.576 41.1207 403.879 43.3416C404.182 45.6634 404.283 48.8938 404.283 53.0327V60.0991H404.182Z" fill="#282828" />
    <svg viewBox="-160 0 654 87" width="550px" height="110px" role="img" class="grommetux-control-icon grommetux-control-icon-workshop grommetux-control-icon--huge grommetux-control-icon--responsive" aria-label="workshop">
           <path className="text" fillRule="evenodd" clipRule="evenodd" width="314.2" d="M 49.7 67.801 L 40.8 72.001 L 32.1 53.001 A 30.586 30.586 0 0 0 29.509 48.427 Q 27.003 44.823 23.8 42.901 Q 19.445 40.287 12.964 39.95 A 37.847 37.847 0 0 0 11 39.901 L 9.5 39.901 L 9.5 70.801 L 0 70.801 L 0 1.001 Q 5.3 0.501 10.15 0.251 A 187.94 187.94 0 0 1 16.466 0.036 A 226.267 226.267 0 0 1 20.5 0.001 Q 33.3 0.001 39.75 5.201 A 17.414 17.414 0 0 1 44.38 10.735 Q 46.2 14.244 46.2 18.601 A 19.88 19.88 0 0 1 45.549 23.821 A 14.672 14.672 0 0 1 41.85 30.351 Q 37.5 34.801 29.3 37.001 A 23.656 23.656 0 0 1 32.729 38.863 A 20.427 20.427 0 0 1 34.1 39.851 Q 36.069 41.397 37.905 43.911 A 29.29 29.29 0 0 1 38.15 44.251 Q 40.1 47.001 42.1 51.401 L 49.7 67.801 Z M 177.7 66.601 L 181.5 59.101 A 18.557 18.557 0 0 0 184.644 61.226 Q 186.198 62.071 188.05 62.751 A 24.073 24.073 0 0 0 195.661 64.188 A 27.464 27.464 0 0 0 196.5 64.201 Q 201.892 64.201 204.735 62.485 A 7.738 7.738 0 0 0 204.95 62.351 Q 207.8 60.501 207.8 57.601 A 7.123 7.123 0 0 0 207.486 55.453 A 6.212 6.212 0 0 0 206.75 53.901 A 6.384 6.384 0 0 0 205.821 52.807 Q 204.807 51.835 203.134 50.882 A 22.3 22.3 0 0 0 202.9 50.751 A 28.462 28.462 0 0 0 200.906 49.757 Q 198.79 48.796 195.801 47.746 A 103.602 103.602 0 0 0 194.8 47.401 A 46.616 46.616 0 0 1 190.402 45.658 Q 188.288 44.684 186.612 43.596 A 19.335 19.335 0 0 1 183.85 41.451 A 11.324 11.324 0 0 1 180.556 35.454 A 16.794 16.794 0 0 1 180.2 31.901 Q 180.2 25.901 185.45 21.751 Q 189.854 18.269 197.108 17.708 A 37.527 37.527 0 0 1 200 17.601 A 40.794 40.794 0 0 1 204.446 17.831 Q 206.754 18.085 208.77 18.616 A 25.234 25.234 0 0 1 208.9 18.651 Q 212.8 19.701 215.9 21.301 L 213.4 28.701 Q 210.7 27.101 207.25 26.101 A 25.024 25.024 0 0 0 202.767 25.253 A 31.837 31.837 0 0 0 199.6 25.101 A 20.632 20.632 0 0 0 196.663 25.296 Q 193.577 25.74 191.7 27.201 A 9.322 9.322 0 0 0 190.342 28.474 Q 189.64 29.293 189.305 30.166 A 4.529 4.529 0 0 0 189 31.801 A 4.921 4.921 0 0 0 190.495 35.352 A 7.082 7.082 0 0 0 191.1 35.901 A 9.88 9.88 0 0 0 192.4 36.769 Q 194.673 38.071 199.098 39.534 A 84.459 84.459 0 0 0 199.3 39.601 A 67.753 67.753 0 0 1 204.362 41.499 Q 210.289 44.018 213.1 46.901 Q 217 50.901 217 56.901 Q 217 63.649 211.749 67.656 A 16.618 16.618 0 0 1 211.35 67.951 Q 206.61 71.348 199.162 71.895 A 40.423 40.423 0 0 1 196.2 72.001 Q 190.3 72.001 185.55 70.501 A 30.883 30.883 0 0 1 181.71 69.016 Q 179.729 68.085 178.148 66.936 A 18.229 18.229 0 0 1 177.7 66.601 Z M 156.1 23.001 L 156.1 18.801 L 164.3 18.801 L 164.3 58.201 A 12.15 12.15 0 0 0 164.402 59.836 Q 164.734 62.27 166.15 63.151 Q 168 64.301 170.2 64.301 L 168.3 71.301 A 17.722 17.722 0 0 1 164.035 70.828 Q 158.398 69.428 156.803 63.881 A 13.59 13.59 0 0 1 156.7 63.501 A 21.307 21.307 0 0 1 153.59 66.927 A 28.498 28.498 0 0 1 150.45 69.351 Q 146.5 72.001 140.4 72.001 Q 133.9 72.001 128.6 68.701 A 22.947 22.947 0 0 1 121.187 61.174 A 27.923 27.923 0 0 1 120.15 59.351 A 27.228 27.228 0 0 1 117.52 51.408 A 36.644 36.644 0 0 1 117 45.101 A 33.142 33.142 0 0 1 117.997 36.832 A 27.968 27.968 0 0 1 120.15 31.101 Q 123.3 24.901 128.85 21.251 A 22.297 22.297 0 0 1 140.045 17.644 A 27.388 27.388 0 0 1 141.6 17.601 A 22.584 22.584 0 0 1 146.394 18.091 A 18.703 18.703 0 0 1 149.75 19.151 A 26.002 26.002 0 0 1 154.037 21.444 A 22.103 22.103 0 0 1 156.1 23.001 Z M 69.3 68.551 A 24.559 24.559 0 0 0 73.898 70.64 Q 77.953 72.001 82.6 72.001 Q 90 72.001 95.85 68.601 Q 101.7 65.201 105.1 59.051 A 26.255 26.255 0 0 0 107.753 51.909 A 34.184 34.184 0 0 0 108.5 44.601 A 34.542 34.542 0 0 0 108.015 38.692 A 25.795 25.795 0 0 0 105.05 30.251 Q 101.6 24.201 95.75 20.901 A 24.848 24.848 0 0 0 91.109 18.874 A 27.738 27.738 0 0 0 82.6 17.601 A 31.325 31.325 0 0 0 81.02 17.64 A 26.169 26.169 0 0 0 69.4 20.901 Q 63.5 24.201 60.1 30.301 A 26.023 26.023 0 0 0 57.351 37.891 A 35.006 35.006 0 0 0 56.7 44.801 A 34.82 34.82 0 0 0 56.965 49.154 A 27.451 27.451 0 0 0 60.05 58.951 Q 63.4 65.101 69.3 68.551 Z M 82.6 64.001 Q 90.5 64.001 94.9 58.651 A 18.802 18.802 0 0 0 98.719 50.561 A 27.105 27.105 0 0 0 99.3 44.801 Q 99.3 39.601 97.1 35.251 A 19.198 19.198 0 0 0 92.928 29.682 A 18.17 18.17 0 0 0 91.15 28.251 Q 87.4 25.601 82.6 25.601 A 19.249 19.249 0 0 0 77.374 26.272 A 14.037 14.037 0 0 0 70.3 30.801 A 17.878 17.878 0 0 0 66.626 38.174 Q 65.9 41.107 65.9 44.601 Q 65.9 49.801 68.1 54.251 A 19.437 19.437 0 0 0 71.63 59.291 A 17.627 17.627 0 0 0 74.05 61.351 Q 77.8 64.001 82.6 64.001 Z M 155.3 57.501 L 155.3 29.601 Q 152.6 27.701 149.35 26.551 Q 146.1 25.401 142.5 25.401 A 15.924 15.924 0 0 0 137.529 26.154 A 14.024 14.024 0 0 0 134.05 27.851 A 16.301 16.301 0 0 0 129.031 33.274 A 19.962 19.962 0 0 0 128.3 34.651 A 20.663 20.663 0 0 0 126.547 40.327 A 27.678 27.678 0 0 0 126.2 44.801 Q 126.2 50.401 128.3 54.751 A 17.602 17.602 0 0 0 131.406 59.297 A 15.697 15.697 0 0 0 134.1 61.551 Q 137.8 64.001 142.4 64.001 Q 146.2 64.001 149.6 62.151 Q 153 60.301 155.3 57.501 Z M 9.5 8.401 L 9.5 31.901 L 20.5 31.901 A 26.489 26.489 0 0 0 25.423 31.469 Q 29.352 30.726 32.2 28.701 Q 36.7 25.501 36.7 19.501 A 9.811 9.811 0 0 0 33.427 12.036 A 13.272 13.272 0 0 0 32.5 11.251 A 13.923 13.923 0 0 0 28.136 9.029 Q 26.207 8.418 23.877 8.17 A 31.944 31.944 0 0 0 20.5 8.001 Q 17.326 8.001 14.762 8.088 A 118.974 118.974 0 0 0 14.4 8.101 Q 11.7 8.201 9.5 8.401 Z" fill="#282828" />
     </svg>  
  </svg>
  )
}