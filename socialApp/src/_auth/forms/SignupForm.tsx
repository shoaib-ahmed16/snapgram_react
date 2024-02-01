
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { SignUpvalidation } from "@/lib/validation";
import { z } from "zod";



const SignupForm =()=>{
 
   const form = useForm<z.infer<typeof SignUpvalidation>>({
    resolver: zodResolver(SignUpvalidation),
    defaultValues: {
      username: '',
      name:'',
      email:'',
      password:'',
    },
  })
 
  function onSubmit(values: z.infer<typeof SignUpvalidation>) {
    
    console.log(values)
  }
  return(<Form {...form}>
    <div className="sm:w-420 flex-centre flex-col">
      <img src="/assets/images/logo.svg" alt="app-logo"/>
      <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Create a new Account</h2>
      <p className="text-light-3  small-medium md:base-regular mt-2">to use snapgram enter your account details </p>
    </div>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">Submit</Button>
    </form>
  </Form>);
}


export default SignupForm