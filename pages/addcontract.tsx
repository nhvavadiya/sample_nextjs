import SettingsIcon from "@mui/icons-material/Settings";
import * as React from "react";
import Tabs from "../components/Addcontract/Tabs";
export default function addContract() {
  return (
    <>
      <div className=" mx-4 mt-8 ">
        <div className="flex gap-4 items-center">
          <SettingsIcon sx={{ fontSize: 50 }} />
          <span className="text-4xl text-gray-700">Text here</span>
        </div>
        <div className="mt-10 mx-16">
          <Tabs />
        </div>
      </div>
    </>
  );
}

addContract.getInitialProps = async () => {
    return { props: {} };
  };
  