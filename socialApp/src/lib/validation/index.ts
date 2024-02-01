import * as z from "zod";

export const SignUpvalidation =z.object({
    name:z.string().min(2,{message:"Too Short!"}).max(5,{message:"Too long!"}),
    username: z.string().min(2,{message:"Too Short!"}),
    email:z.string().email({message:"invalid email"}),
    password:z.string().regex(/^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])(?=.*\d)(?=.*[A-Z]).*$/,{message:"password must contains 1 special character, 1 Capital Letter and 1 Number "}).min(8,"password must be atleast 8 characters.").max(25,"password must be atmost 25 characters.")
  })