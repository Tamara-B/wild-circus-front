import React from "react";
import "./Performances.scss";
import CardPerformance from "../../components/CardPerformance/CardPerformance";
import PerformanceForm from "../../components/Form/PerformanceForm";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../updateAction";
import { FormInput, FormButton } from "../../components/Form/FormItems";
import { useForm, Controller } from "react-hook-form";
import { makeStyles, Container, TextField } from "@material-ui/core";

const Performances = () => {
  const [performance, setPerformance] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [performanceName, setName] = React.useState("");
  const [performanceArtist, setArtist] = React.useState("");
  const [performanceImg, setImg] = React.useState("");
  const [performanceSummary, setSummary] = React.useState("");
  const { action } = useStateMachine(updateAction);
  const { state } = useStateMachine(updateAction);
  const [errorses, setErrors] = React.useState("");

  const { register, handleSubmit, errors, watch } = useForm();

  const fetchData = React.useCallback(() => {
    fetch("/wild-circus/performance")
      .then((res) => res.json())
      .then((data) => {
        setPerformance(data.result);
        setLoading(false);
      });
  });
  React.useEffect(() => {
    fetchData();
  }, []);

  const submitEvent = (data, event) => {
    action(data);
    console.log(state);
    console.log(performanceName);
    event.preventDefault();
    fetch("/wild-circus/performance", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        performanceName: data.performanceName,
        performanceArtist: data.performanceArtist,
        performanceImg: data.performanceImg,
        performanceSummary: data.performanceSummary,
      }),
    })
      .then(() => {
        setName("");
        setArtist("");
        setImg("");
        setSummary("");
        fetchData();
      })
      .then((res) => {
        return res;
      })
      .catch((err) => setErrors(err));
  };

  const deleteItem = (itemId) => {
    console.log(itemId);
    fetch(`/wild-circus/performance/${itemId}`, { method: "delete" })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(fetchData());
  };

  return (
    <>
      <h1 style={{ marginLeft: "40%" }}>Performances</h1>
      <section>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          performance.map((perf, key) => {
            return (
              <CardPerformance
                performance={perf}
                key={key}
                deleteOnClick={() => deleteItem(perf._id)}
              />
            );
          })
        )}
      </section>
      {/*       <PerformanceForm submitNow={submitEvent} /> */}
      <Container>
        <h3 style={{ marginLeft: "40%" }}>Add new circus act</h3>
        <form
          onSubmit={handleSubmit(submitEvent)}
          id="newPerformanceForm"
          style={{ marginLeft: "35%" }}
        >
          <FormInput
            name="performanceName"
            placeholder="Name of performance"
            id="performanceName"
            ref={register({ required: "Performance name is required" })}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.performanceName && alert(errors.performanceName.message)}
          <br />
          <FormInput
            name="performanceArtist"
            placeholder="Name of the artist(s)"
            id="performanceArtist"
            ref={register({ required: "Artist name is required" })}
            onChange={(e) => setArtist(e.target.value)}
          />
          {errors.performanceArtist && alert(errors.performanceArtist.message)}
          <br />
          <FormInput
            name="performanceImg"
            placeholder="Picture"
            id="performanceArtist"
            ref={register}
            onChange={(e) => setImg(e.target.value)}
          />
          <br />
          <FormInput
            name="performanceSummary"
            placeholder="Summary of the performance"
            id="performanceSummary"
            ref={register}
            onChange={(e) => setSummary(e.target.value)}
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
    </>
  );
};
export default Performances;
