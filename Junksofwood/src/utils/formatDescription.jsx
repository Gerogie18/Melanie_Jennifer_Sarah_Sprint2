
import { Fragment } from "react";

function formatDescription(description) {
    return description.split('\n').map((line, index) => (
      <Fragment key={index}>
          {line}
          <br />
      </Fragment>
    ));
}

export default formatDescription;
