import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const DashFormField = ({
  label,
  name,
  placeholder,
  formControl,
  inputType,
  disabled,
  isTextarea,
}) => {
  return (
    <FormField
      control={formControl}
      label={label}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-1">
          <FormLabel className="mb-10">{label}</FormLabel>
          <FormControl>
            {!isTextarea ? (
              <Input
                placeholder={placeholder}
                type={inputType || "text"}
                {...field}
                className="px-[15px] py-[22px] text-[15px] placeholder:text-gray-400"
                disabled={disabled}
              />
            ) : (
              <Textarea
                {...field}
                placeholder={placeholder}
                className="px-[15px] py-[10px] text-[15px] placeholder:text-gray-400"
                disabled={disabled}
              />
            )}
          </FormControl>
          <FormMessage className="text-[13px]" />
        </FormItem>
      )}
    />
  );
};

export default DashFormField;
