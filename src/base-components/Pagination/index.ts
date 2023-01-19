import Pagination from "./Pagination.vue";
import Link from "./PaginationLink.vue";

const PaginationComponent = Object.assign({}, Pagination, {
  Link: Link,
});

export default PaginationComponent;
