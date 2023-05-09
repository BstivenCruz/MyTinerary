// eslint-disable-next-line react/prop-types
export default function Button({text}) {
  return (
    <div className="flex justify-center rounded-[10px] py-3 bg-botonR text-white w-[80%]">
      <p>{text}</p>
    </div>
  );
}
