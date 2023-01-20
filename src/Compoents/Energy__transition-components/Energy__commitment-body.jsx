import React from "react";

import "./energy__commitment-head.css";

import { commitment } from "../../constant";

function EnergyCommitmentBody() {
  return (
    <div className="Energy__commitment-body">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="Energy__commitment-img w-100">
              <img
                src={commitment}
                alt="commitment"
                className="img-fluid w-100"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="Energy__commmitment-data me-lg-5">
              <h3>Innovative tools strengthen collaboration with suppliers</h3>
              <p>
                ASPS is executing on its Vision. A major focus of this Vision is
                the strategy of digitalization across all parts of our business.
                It helps us automate order processing, achieve speed and
                improving quality and efficiency. We continuously seek to make
                our procurement processes simpler and more efficient not only
                for us, but for you as our supplier partners as well. <br />
                From mid-2022 onwards, ASPS has decided to use a new and
                innovative solution SAP ARIBA to continue its collaboration with
                you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnergyCommitmentBody;
