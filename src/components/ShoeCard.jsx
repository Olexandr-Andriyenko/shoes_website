import PropTypes from 'prop-types';

const ShoeCard = ({
  imgURL,
  changeBigShoeImage,
  bigShoeImg,
}) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? 'border-coral-red'
          : 'border-transparent'
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img
          src={imgURL.thumbnail}
          alt='shoe colletion'
          width={127}
          height={103.34}
          className='object-contain'
        />
      </div>
    </div>
  );
};

// PropTypes-Definitionen
ShoeCard.propTypes = {
  imgURL: PropTypes.string.isRequired, // imgURL sollte eine Zeichenkette sein
  changeBigShoeImage: PropTypes.func.isRequired, // changeBigShoeImage sollte eine Funktion sein
  bigShoeImg: PropTypes.string.isRequired, // bigShoeImg sollte eine Zeichenkette sein
};

export default ShoeCard;
