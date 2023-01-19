import Popover from "./Popover.vue";
import Button from "./PopoverButton.vue";
import Panel from "./PopoverPanel.vue";

const DialogComponent = Object.assign({}, Popover, {
  Button: Button,
  Panel: Panel,
});

export default DialogComponent;
