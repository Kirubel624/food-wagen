import React, { useState } from "react";
import Button from "../ui/button";
import AddMealModal from "../forms/AddMealModal";

const Header = () => {
  const [addModal, setAddModal] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between bg-white w-full py-4 px-20">
        <img className="w-auto h-7 " src={"/logo.svg"} />
        <Button onClick={() => setAddModal(true)}>Add a meal</Button>
      </div>
      <AddMealModal
        visible={addModal}
        onClose={() => setAddModal(false)}
        onSuccess={() => {
          setAddModal(false);
        }}
      />
    </>
  );
};

export default Header;
