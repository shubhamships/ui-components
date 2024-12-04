import Button from "@/components/Button";
import FormInput from "@/components/FormInput";
import Select from "@/components/Select";

const ProfileUpdate = () => {
  return (
    <div>
      <form action="">
        <h5 className="text-lg mb-1">Profile</h5>
        <p className="text-gray-400 mb-6">Update your photo and personal details here.</p>

        {/* making of actual form */}
        <div className="grid md:grid-cols-2 gap-8">
          <FormInput type="text" name="vbnm" lableTitle="First Name" inputvarient="lg" />
          <FormInput type="text" name="vbnm" lableTitle="Last Name" inputvarient="lg" />
          <FormInput type="email" name="vbnm" lableTitle="Email Address" inputvarient="lg" />
          <FormInput type="tel" name="vbnm" lableTitle="Phone Number" inputvarient="lg" />
          <FormInput type="text" name="vbnm" lableTitle="Address" inputvarient="lg" />
          <Select
            labelTitle="Country"
            placeholder="Choose One"
            options={[
              { label: "India", value: "1" },
              { label: "Pakistan", value: "2" },
              { label: "India", value: "1" },
              { label: "Pakistan", value: "2" },
              { label: "India", value: "1" },
              { label: "Pakistan", value: "2" },
            ]}
          />
          <FormInput type="date" name="vbnm" lableTitle="Date Of Birth" inputvarient="lg" />
          <Select
            labelTitle="Gender"
            placeholder="Choose One"
            options={[
              { label: "Male", value: "1" },
              { label: "Female", value: "2" },
              { label: "Unknown", value: "1" },
            ]}
          />
          <FormInput type="text" name="vbnm" lableTitle="Company Name" inputvarient="lg" />
          <FormInput type="url" name="vbnm" lableTitle="Company Website" inputvarient="lg" />
          <div className="flex flex-wrap gap-x-7 mt-4 lg:mt-0">
            <Button title="Cancel" size="lg" variant="destructive" />
            <Button title="Update Profile" size="lg" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileUpdate;
