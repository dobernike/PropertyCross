<script>
  import { Router, Route } from "svelte-routing";

  import Layout from "./components/Layout.svelte";
  import PropertySearchPage from "./components/PropertySearchPage.svelte";
  import SearchResultPage from "./components/SearchResultPage.svelte";
  import FavouritesPage from "./components/FavouritesPage.svelte";
  import PropertyListingPage from "./components/PropertyListingPage.svelte";

  export let url = "";
</script>

<Layout>
  <Router {url}>
    <Route path="/result:city?" component={SearchResultPage} />
    <Route path="/favourites" exact component={FavouritesPage} />
    <Route path="/listing:apartment?" component={PropertyListingPage} />
    <Route path="/" component={PropertySearchPage} />
  </Router>
</Layout>
