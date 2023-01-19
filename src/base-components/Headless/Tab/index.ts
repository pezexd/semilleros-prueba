import Tab from "./Tab";
import Button from "./TabButton.vue";
import Group from "./TabGroup.vue";
import List from "./TabList.vue";
import Panels from "./Panels.vue";
import Panel from "./TabPanel.vue";

const TabComponent = Object.assign({}, Tab, {
  Button: Button,
  Group: Group,
  List: List,
  Panels: Panels,
  Panel: Panel,
});

export default TabComponent;
