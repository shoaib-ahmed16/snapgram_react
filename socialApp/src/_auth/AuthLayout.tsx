import { Outlet,Navigate } from "react-router-dom"
export const AuthLayout = () => {

  const isAuthenticated =false;

  return (
   <>
   {isAuthenticated ?(<Navigate to ="/"/>):
   (<>
   <section className="flex flex-1 justify-center items-center pr-10">
    <Outlet>
      
    </Outlet>
   </section>
   <img src="/assets/images/side-img.svg" alt="signup-logo" className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"/>
   </>)}
   </>
  )
}