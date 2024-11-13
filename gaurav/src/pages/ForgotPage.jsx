import Button from "../components/ui/Button"
import Card from "../components/ui/Card"
import Input from "../components/ui/Input"

export const 
 // eslint-disable-next-line react/prop-types
 ForgotPage = ({handleSubmit,errorName,value,change}) => {
  return (
    <div>
        <Card className="p-3 w-full mb-18 h-[512px] lg:mb-32 max-w-md  shadow-xl">
            <div className="flex justify-center items-center font-semibold text-xl tracking-tighter p-6">
              <h3 className="">Login</h3>
            </div>
            <div className="px-6 pb-6">
              <form
                action="
              "
                onSubmit={handleSubmit}
                className=""
              >
                <div className="">
                  <Input
                    labelData="Email"
                    placeholder="Enter Email ID..."
                    className="w-full"
                    name="email"
                    type="email"
                    errorName={errorName}
                    value={value}
                    onChange={change}
                  />
                </div>
                <div className="cursor-pointer">
                  <p className="text-sm font-medium text-blue-800">
                    Forgot Password?
                  </p>
                </div>
                <Button
                  title="Submit"
                  className="text-sm font-medium w-full mt-10"
                />
              </form>
            </div>
          </Card>
    </div>
  )
}
