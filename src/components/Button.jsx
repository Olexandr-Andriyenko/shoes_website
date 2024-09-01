import PropTypes from 'prop-types';

function Button({ label, iconURL }) {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red'>
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
  label: PropTypes.string.isRequired, // label ist eine erforderliche Zeichenkette
  iconURL: PropTypes.string.isRequired, // iconURL ist eine erforderliche Zeichenkette
};

export default Button;
