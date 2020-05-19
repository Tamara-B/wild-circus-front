import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { makeStyles, Container, TextField } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../updateAction";
import { FormInput, FormButton } from "./FormItems";

const Registration = (props, submitNow) => {
  const { register, handleSubmit, errors, watch } = useForm();
  const { action } = useStateMachine(updateAction);
  const { state } = useStateMachine(updateAction);
  const password = useRef({});
  password.current = watch("password", "");

  return (
    <Container>
      <h3 style={{ marginLeft: "40%" }}>Add new circus act</h3>
      <form onSubmit={handleSubmit(submitNow)} id="newPerformanceForm">
        <FormInput
          name="performanceName"
          placeholder="Name of performance"
          id="performanceName"
          ref={register({ required: "Performance name is required" })}
        />
        {errors.performanceName && alert(errors.performanceName.message)}
        <br />
        <FormInput
          name="performanceArtist"
          placeholder="Name of the artist(s)"
          id="performanceArtist"
          ref={register({ required: "Artist name is required" })}
        />
        {errors.performanceArtist && alert(errors.performanceArtist.message)}
        <br />
        <FormInput
          name="performanceImg"
          placeholder="Picture"
          id="performanceArtist"
          ref={register}
        />
        <br />
        <FormInput
          name="performanceSummary"
          placeholder="Summary of the performance"
          id="performanceSummary"
          ref={register}
        />
        <br />
        {/*         <div>{JSON.stringify(state)}</div> */}
        <br />
        <FormButton
          value="submit"
          type="submit"
          form="newPerformanceForm"
          id="newPerformanceForm"
          buttonText="Let's add that new performance :)"
        />
      </form>
    </Container>
  );
};

export default Registration;
