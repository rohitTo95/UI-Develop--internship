export const Radio = ({
  values,
  name,
  label,
  required = false,
}: {
  values: string[];
  name: string;
  label: string;
  required?: boolean;
}) => {
  return (
    <div className="text-[14px] flex flex-col gap-[8px] ">
      <p className="font-medium">{label}{required && <span className="text-red-500 ml-1">*</span>}</p>
      <div className="flex gap-[12px]">
        {" "}
        {values.map((val) => {
          return (
            <label className="flex items-center gap-[4px]">
              <div className="relative flex items-center justify-center">
                <input 
                  type="radio" 
                  name={name} 
                  value={val.toLowerCase()} 
                  required={required}
                  className="appearance-none relative border border-solid border-[#642AF5] opacity-100 w-[22px] h-[22px] rounded-full checked:after:content-[''] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:w-[12px] checked:after:h-[12px] checked:after:bg-[#6C25FF] checked:after:rounded-full checked:after:opacity-100"
                />
              </div>
              <span className="ml-1">{val}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};
