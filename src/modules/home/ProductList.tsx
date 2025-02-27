import UpIcon from "@/assets/icons/up.svg";
import ButtonGroup from "@/components/ButtonGroup/ButtonGroup";
import CardItem from "@/components/CardItem/CardItem";

const ProductList = () => {
  return (
    <div className="lg:col-span-2 xl:col-span-3">
      <ButtonGroup
        className="mb-10"
        group={[
          { label: "All", isActive: true, value: 1 },
          { label: "Upper Body", isActive: false, value: 2 },
          { label: "Lower Body", isActive: false, value: 3 },
          { label: "Hat", isActive: false, value: 3 },
          { label: "Shoes", isActive: false, value: 3 },
          { label: "Accessory", isActive: false, value: 3 },
          { label: "Legendary", isActive: false, value: 3 },
          { label: "Mythic", isActive: false, value: 3 },
          { label: "Epic", isActive: false, value: 3 },
          { label: "Rare", isActive: false, value: 3 },
          {
            icon: <UpIcon />,
            isActive: false,
            value: 3,
          },
        ]}
      />
      <div className="flex flex-wrap justify-center gap-4 lg:justify-between">
        <CardItem
          category="All"
          creator="Roy Nguyen"
          name="Assassin"
          price={120}
        />
        <CardItem
          category="All"
          creator="Roy Nguyen"
          name="Assassin"
          price={120}
        />
        <CardItem
          category="All"
          creator="Roy Nguyen"
          name="Assassin"
          price={120}
        />
        <CardItem
          category="All"
          creator="Roy Nguyen"
          name="Assassin"
          price={120}
        />
        <CardItem
          category="All"
          creator="Roy Nguyen"
          name="Assassin"
          price={120}
        />
      </div>
    </div>
  );
};

export default ProductList;
