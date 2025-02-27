import CloseIcon from "@/assets/icons/close.svg";
import SearchIcon from "@/assets/icons/search.svg";
import Button from "@/components/Button/Button";
import Select from "@/components/Select/Select";
import Slider from "@/components/Slider/Slider";
import Text from "@/components/Text/Text";
import { Input } from "@/components/ui/input";

const Filter = () => {
  return (
    <div>
      <Input placeholder="Quick search" icon={SearchIcon} />
      <div className="mt-10 space-y-10">
        <Slider title="PRICE" minTitle="0.01 ETH" maxTitle="200 ETH" />
        <Select
          label="TIER"
          defaultValue="1"
          options={[{ value: "1", label: "All" }]}
        />
        <Select
          label="THEME"
          defaultValue="1"
          options={[{ value: "1", label: "Halloween" }]}
        />
        <Select
          label="TIME"
          defaultValue="1"
          options={[{ value: "1", label: "Latest" }]}
        />
        <Select
          label="PRICE"
          defaultValue="1"
          options={[{ value: "1", label: "Low to high" }]}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CloseIcon />
            <Text variant="header">Reset filter</Text>
          </div>
          <Button className="px-10">Search</Button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
