import Disclosure from "./Disclosure";
import Group from "./Group.vue";
import Button from "./DisclosureButton.vue";
import Panel from "./DisclosurePanel.vue";

const DisclosureComponent = Object.assign({}, Disclosure, {
  Group: Group,
  Button: Button,
  Panel: Panel,
});

export default DisclosureComponent;
