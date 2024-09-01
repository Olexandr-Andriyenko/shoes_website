import PropTypes from 'prop-types';

function Button({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : 'bg-coral-red text-white border-coral-red'
      } rounded-full ${fullWidth && 'w-full'}`}
    >
      {label}{' '}
      {iconURL && (
        <img
          src={iconURL}
          alt='arrow right icon'
          className='ml-2 rounded-full w-5 h-5'
        ></img>
      )}
    </button>
  );
}

// PropTypes-Definitionen hinzufügen
Button.propTypes = {
  label: PropTypes.string.isRequired,
  iconURL: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  fullWidth: PropTypes.object.isRequired,
};

export default Button;
