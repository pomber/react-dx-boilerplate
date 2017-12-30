import React from "react";
import { Button, Card } from "antd";
import State from "./state";
import { clockService } from "./services";

export default () => (
  <State
    initialState={{ loading: false, info: "..." }}
    render={(state, setState) => (
      <div>
        <Card>{state.info}</Card>
        <Button
          loading={state.loading}
          onClick={() =>
            setState({ loading: true }) ||
            clockService
              .getTime()
              .then(time => setState({ info: time, loading: false }))
          }
        >
          Get Something
        </Button>
      </div>
    )}
  />
);
