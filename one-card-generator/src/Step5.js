import React from "react";
import "./Step.css";

import { Checkbox } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { TextField } from "@mui/material";

const Step5 = (props) => {
  return (
    <>
      <div className="mainBox">
        <div className="TACS">
          <TextField
            multiline
            readonly
            maxRows={10}
            defaultValue={
              "Cillum exercitation occaecat enim aliquip. Aliqua aliqua ad pariatur consequat sint non voluptate. Aute consectetur minim incididunt ad officia aute sunt adipisicing reprehenderit pariatur eu incididunt velit anim. Anim tempor reprehenderit minim mollit esse amet tempor laboris enim pariatur nostrud aute cupidatat. Laborum nostrud ullamco irure sint consectetur consectetur pariatur eu.Duis esse occaecat adipisicing ipsum. Excepteur nulla reprehenderit dolor sit excepteur ea et labore est. Ex exercitation ad esse ad proident. Pariatur quis ea Lorem ullamco mollit veniam commodo anim magna sit exercitation. Quis dolor commodo cillum fugiat aliqua eu sint officia incididunt voluptate elit.Tempor eiusmod ullamco pariatur cupidatat et cupidatat qui sunt culpa ex reprehenderit qui adipisicing. Reprehenderit nulla sit irure excepteur minim. Duis est officia reprehenderit nulla enim nostrud. Adipisicing dolore aliquip dolor est sunt laboris.Ut amet consectetur nostrud sit do minim veniam do sint consequat dolore. Do in reprehenderit nulla officia sunt adipisicing occaecat voluptate ad mollit. Consequat do sint id laboris labore culpa sint. Duis amet aute pariatur adipisicing do enim sint eu deserunt excepteur in. Voluptate veniam proident aliquip eu cillum enim excepteur deserunt culpa. Ad reprehenderit sunt ullamco proident.Dolore tempor ex ipsum excepteur do velit qui eiusmod consequat mollit dolor minim. Sit Lorem labore fugiat sit aute commodo in minim ullamco consequat quis reprehenderit voluptate. Aliqua irure consectetur velit elit laborum amet velit qui. Nisi ipsum amet incididunt cupidatat cupidatat duis et. Anim consequat duis amet cupidatat tempor aliqua voluptate nulla nostrud consectetur. Cupidatat consectetur pariatur pariatur amet excepteur quis et do aliqua enim. Occaecat excepteur tempor aliqua pariatur ex pariatur.Anim aliqua aliquip exercitation ea. Eiusmod nostrud do officia aute cillum tempor reprehenderit consectetur. Esse exercitation dolore sint aliqua eu fugiat occaecat. Ea veniam fugiat irure sunt voluptate velit ea laborum enim do sunt tempor pariatur.Culpa amet elit culpa consequat. Lorem id dolor qui excepteur. In commodo dolore incididunt ipsum. Esse eiusmod non reprehenderit excepteur. Culpa laborum amet dolor est mollit sit anim nostrud veniam ad. Minim do proident irure voluptate cillum adipisicing et est incididunt ut amet elit. Labore amet voluptate culpa veniam.Laboris nostrud culpa nulla ipsum amet veniam velit mollit proident fugiat labore ea exercitation. Do do deserunt proident duis et aliquip cupidatat qui quis eu ut elit eu dolore. Sunt ut sit sit ullamco voluptate nulla tempor deserunt consectetur amet enim reprehenderit minim nulla. Officia officia ad non dolore nisi dolor non veniam deserunt cillum do est ad ad. Non ipsum cillum laborum adipisicing occaecat. Ea nostrud ut aliquip cupidatat. Nisi commodo reprehenderit sit dolor velit voluptate qui nulla laboris sint."
            }
          ></TextField>
          <FormControlLabel
            required
            control={
              <Checkbox
                Checked={props.tacChecked}
                onChange={() => {
                  props.tacCheckUpdate(!props.tacChecked);
                }}
              ></Checkbox>
            }
            label="I have read and agreed to above mentioned Terms of Conditions"
          ></FormControlLabel>
        </div>
      </div>
    </>
  );
};

export default Step5;
