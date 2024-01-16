import { Form } from "antd";

interface Rule {
    required?: boolean;
    message?: string;
  }

interface Props{
    formname: string;
    label: string;
    type: string;
    fieldname?: string;
    placeholder?: string;
    onchange?:()=>void;
    rules:Rule[];
}

const InputComp:React.FC<Props> = ({formname,label,type,fieldname,onchange,rules,placeholder}) => {
  return (
    <Form.Item
      name={formname}
      label={label}
      rules={rules}
    >
      <input
        type={type}
        name={fieldname}
        className="border-gray-400 rounded-md w-full"
        placeholder={placeholder}
        onChange={onchange}
      />
    </Form.Item>
  );
};

export default InputComp;
