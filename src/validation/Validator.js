const validator = {
    fname: {
      required: { value: true, message: "*Required field." },
      minLength: { value: 3, message: "*Must contain minimum 3 characters" },
    },
    age: {
      required:{value:true,message:"*Required field"},
      min: { value: 18, message: "*Age must be above 18 years." },
      max: { value: 110, message: "*Please enter a valid age" },
    },
    email: {
      required: { value: true, message: "*Required field" },
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "*Please enter a valid email",
      },
    },
    mobile: {
      required: { value: true, message: "*Required field" },
      pattern: { value: /^[789]\d{9}$/, message: "*Please enter a valid mobile number" },
    },
    pan: {
      required: { value: true, message: "*Required field" },
      pattern: { value: /^[A-Z]{5}[0-9]{4}[A-Z]$/, message: "*Please enter a valid PAN card number" },
    },
    adhar: {
      pattern: { value: /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/, message: "*Please enter a valid Aadhar card number" },
    },
    amountVal: {
      required: { value: true, message: "*Required field" },
      min: { value: 100000, message: "*Amount must be between 100000 and 10000000" },
      max: { value: 10000000, message: "*Amount must be between 100000 and 10000000" },
    },
    username:{
      required:{value:true,message:"Please enter the username"}
    },
    password:{
      required:{value:true,message:"Please enter the password"}
    }
  };
  

export default validator;
  