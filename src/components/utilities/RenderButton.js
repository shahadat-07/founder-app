const renderButton = (props) => {
  const { formStep, completeFormStep, isValid } = props;
  console.log(isValid);
  if (formStep > 11) {
    return null;
  } else if (formStep === 11) {
    return (
      <button
        type="submit"
        className="mt-6 bg-green-600 text-white rounded px-6 py-3 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Submit Data
      </button>
    );
  } else {
    return (
      <button
        disabled={!isValid}
        onClick={completeFormStep}
        type="button"
        className="mt-6 bg-green-600 text-white rounded px-6 py-3 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Next Step
      </button>
    );
  }
};

export default renderButton;
