import PropTypes from "prop-types";

const PythonIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 85 85"
      fill="#fff"
      fillRule="evenodd"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <use xlinkHref="#python" x="2.5" y="2.5" />
      <symbol id="python" overflow="visible">
        <g stroke="none">
          <path
            d="M39.712 0C19.403 0 20.671 8.853 20.671 8.853l.023 9.172h19.381v2.754H12.996S0 19.298 0 39.896s11.343 19.869 11.343 19.869h6.77v-9.559s-.365-11.402 11.162-11.402h19.222s10.799.175 10.799-10.492V10.674S60.936 0 39.712 0zM29.025 6.168c.925-.001 1.812.368 2.466 1.026a3.51 3.51 0 0 1 0 4.958c-.654.657-1.541 1.026-2.466 1.026s-1.812-.368-2.466-1.026a3.51 3.51 0 0 1 0-4.958c.654-.657 1.541-1.026 2.466-1.026z"
            fill="#387eb8"
          />
          <path
            d="M40.289 80c20.309 0 19.041-8.853 19.041-8.853l-.023-9.172H39.926v-2.754h27.078S80 60.703 80 40.104 68.657 20.235 68.657 20.235h-6.77v9.559s.365 11.402-11.162 11.402H31.504s-10.8-.175-10.8 10.492v17.638S19.065 80 40.289 80zm10.686-6.168c-.925.001-1.812-.368-2.466-1.026a3.51 3.51 0 0 1 0-4.958c.654-.657 1.541-1.026 2.466-1.026s1.812.368 2.466 1.026a3.51 3.51 0 0 1 0 4.958c-.654.657-1.541 1.026-2.466 1.026z"
            fill="#ffc331"
          />
        </g>
      </symbol>
    </svg>
  );
};

PythonIcon.propTypes = {
  className: PropTypes.string,
};

export default PythonIcon;
