import React, { useState } from "react";
import { TreeSelect,ConfigProvider } from "antd";
import './Css/TreeSelector.css';

// Tree Data with "Select All"
const treeData = [
  {
    value: "all",
    title: "All Branches", // Highlighted in red
  },
  {
    value: "India",
    title: "India",
    // disabled: true,
    children: [
      {
        value: "Maharashtra",
        title: "Maharashtra",
        // disabled: true,
        children: [
          {
            value: "Pune District",
            title: "Pune District",
            // disabled: true,
            children: [
              { value: "Branch 1", title: "Branch 1" },
              { value: "Branch 2", title: "Branch 2" },
            ],
          },
          {
            value: "Mumbai District",
            title: "Mumbai District",
            // disabled: true,
            children: [
              { value: "Branch 3", title: "Branch 3" },
              { value: "Branch 4", title: "Branch 4" },
            ],
          },
        ],
      },
    ],
  },
];

const TreeSelector = () => {
  const [value, setValue] = useState("all"); // Default to "All Branches"

  const onChange = (newValue) => {
    if (newValue === "all") {
      const allBranches = treeData
        .filter((node) => node.value !== "all")
        .flatMap((country) =>
          country.children?.flatMap((state) =>
            state.children?.flatMap((district) =>
              district.children?.map((branch) => branch.value)
            )
          )
        )
        .filter(Boolean); // Remove undefined values

      console.log("Selected All Branches:", allBranches);
      setValue("all");
    } else {
      setValue(newValue);
    }
  };

  return (
    <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#e66a2c',
        borderRadius: 8,
        colorBgTextActive:"#e66a2c",
        // controlItemBgActive:"#e66a2c",// selection bg
        colorTextLabel:"#e66a2c",
        // colorText:'#e66a2c',
        // colorTextBase:"#e66a2c",
        // Alias Token
        colorBgContainer: 'bg-accent',
        
      },
    }}
  >
    <TreeSelect
      showSearch
      className="w-full max-w-[250px]"
      // style={{ width: "100%", maxWidth: "250px" }}
      value={value}
      placeholder="Select a branch"
      // allowClear
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
    />
    </ConfigProvider>
  );
};

export default TreeSelector;
