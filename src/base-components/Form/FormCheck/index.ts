import FormCheck from "./FormCheck.vue";
import Input from "./FormCheckInput.vue";
import Label from "./FormCheckLabel.vue";

const FormCheckComponent = Object.assign({}, FormCheck, {
  Input: Input,
  Label: Label,
});

export default FormCheckComponent;
