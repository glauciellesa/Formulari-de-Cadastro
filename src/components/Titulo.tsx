interface TituloProps {
  children: string;
}
export default (props: TituloProps) => {
  return (
    <div className="flex flex-col justify-center text-sky-800">
      <h1 className="px-5 py-2 text-3xl">{props.children}</h1>
      <hr className="border-2 border-sky-600" />
    </div>
  );
};
