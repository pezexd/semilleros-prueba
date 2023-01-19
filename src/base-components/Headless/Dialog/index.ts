import Dialog from "./Dialog.vue";
import Description from "./Description.vue";
import Footer from "./DialogFooter.vue";
import Panel from "./DialogPanel.vue";
import Title from "./Title.vue";

const DialogComponent = Object.assign({}, Dialog, {
  Description: Description,
  Footer: Footer,
  Panel: Panel,
  Title: Title,
});

export default DialogComponent;
