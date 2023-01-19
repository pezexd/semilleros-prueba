import FormSwitch from "./FormSwitch.vue";
import Input from "./FormSwitchInput.vue";
import Label from "./FormSwitchLabel.vue";

const FormSwitchComponent = Object.assign({}, FormSwitch, {
  Input: Input,
  Label: Label,
});

export default FormSwitchComponent;
