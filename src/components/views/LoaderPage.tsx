import * as React from "react";
import { Grid, Loader } from "semantic-ui-react";

const LoaderPage: React.FC = React.memo(() => {
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Loader inline="centered" active />
    </Grid>
  );
});

export default LoaderPage;
