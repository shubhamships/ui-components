/* eslint-disable react/prop-types */

//TODO: make it more customisable based on props

const Button = ({ buttonName }: { buttonName: string }) => {
  return (
    <div>
      <button className="bg-blue-900 w-96 h-11 mt-10 text-white text-sm font-medium rounded-lg" type="submit">
        {buttonName}
      </button>
    </div>
  );
};

export default Button;
