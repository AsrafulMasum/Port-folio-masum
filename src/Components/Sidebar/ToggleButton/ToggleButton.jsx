const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)} className="btn">
      btn
    </button>
  );
};

export default ToggleButton;
