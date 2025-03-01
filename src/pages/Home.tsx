import { Vortex } from "@/components/vortex";
import { withPageAnimation } from "@/hocs/withPageAnimation";
import { useFilterProductList } from "@/hooks/useFilterProductList";
import { useSearchProductList } from "@/hooks/useSearchProductList";
import Filter from "@/modules/home/Filter";
import Graph from "@/modules/home/Graph";
import Hero from "@/modules/home/Hero";
import ProductList from "@/modules/home/ProductList";

const Home = () => {
  const {
    filter,
    handleChangeFilter,
    handleResetFilter,
    handleFilter,
    filterOnSearch,
  } = useFilterProductList();

  const { deferredSearchValue, handleChangeSearch } = useSearchProductList();

  return (
    <>
      <Hero />
      <div className="grid grid-cols-1 gap-10 px-8 py-12 lg:grid-cols-3 lg:px-20 xl:grid-cols-4">
        <Filter
          filter={filter}
          onFilter={handleFilter}
          onChangeFilter={handleChangeFilter}
          onResetFilter={handleResetFilter}
          onChangeSearch={handleChangeSearch}
        />
        <ProductList
          filter={filterOnSearch}
          searchValue={deferredSearchValue}
          onChangeFilter={handleChangeFilter}
        />
      </div>
      <Graph />
    </>
  );
};

const HomeWithTransition = withPageAnimation(Home);

export default HomeWithTransition;
