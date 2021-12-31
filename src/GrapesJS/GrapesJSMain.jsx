import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";

import React, { useEffect } from "react";
import { GrapesJS_Config } from "./GrapesJS_Config";

const GrapesJSMain = () => {
  useEffect(() => {
    loadGrapesJS();
  }, []);

  const loadGrapesJS = async () => {
    const editor = await grapesjs.init(GrapesJS_Config());
  };
  return (
    <div>
      {/* // mjm */}
      <div id="gjs">
        <mjml>
          <mj-body>
            <mj-container>
              <mj-section>
                <p>Hello World Component</p>
              </mj-section>
            </mj-container>
          </mj-body>
        </mjml>
      </div>
      <div>Element</div>
    </div>
  );
};

export default GrapesJSMain;
