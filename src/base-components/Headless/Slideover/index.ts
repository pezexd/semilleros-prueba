import Slideover from "./Slideover.vue";
import Description from "./SlideoverDescription.vue";
import Footer from "./SlideoverFooter.vue";
import Panel from "./SlideoverPanel.vue";
import Title from "./SlideoverTitle.vue";

const SlideoverComponent = Object.assign({}, Slideover, {
  Description: Description,
  Footer: Footer,
  Panel: Panel,
  Title: Title,
});

export default SlideoverComponent;
