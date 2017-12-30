import React from "react";
import { action } from "@storybook/addon-actions";
import App from "./app";
import MyComponent from "./my-component";
import "antd/dist/antd.css";

export default [
  {
    title: "<App/>",
    section: [
      {
        title: "With Data",
        sectionFn: () => <App />
      },
      {
        title: "Without Data",
        sectionFn: () => <App />
      }
    ]
  },
  {
    title: "<MyComponent/>",
    sectionFn: () => <MyComponent />
  }
];
