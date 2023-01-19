import Menu from "./HMenu.vue";
import Button from "./MenuButton.vue";
import Items from "./MenuItems.vue";
import Item from "./MenuItem.vue";
import Divider from "./MenuDivider.vue";
import Header from "./MenuHeader.vue";
import Footer from "./MenuFooter.vue";

const TabComponent = Object.assign({}, Menu, {
  Button: Button,
  Items: Items,
  Item: Item,
  Divider: Divider,
  Header: Header,
  Footer: Footer,
});

export default TabComponent;
