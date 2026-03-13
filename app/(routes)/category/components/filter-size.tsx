import { useGetProductField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FilterTypes } from "@/types/filters";

type FilterSizeProps = {
    setFilterSize: (Size: string) => void
}

const FilterSize = (props: FilterSizeProps) => {
    const { setFilterSize } = props;
    const {result, loading}: FilterTypes = useGetProductField();


    return (
       <div className="my-5">
            <p className="mn-3 font-bold">Size</p>
            {loading && result == null && (
                <p>Cargando Size...</p>
            )}

            <RadioGroup onValueChange={(value) => setFilterSize(value)}>
                {result !== null && result.schema.attributes.Size.enum.map((size: string) =>(
                    <div key={size} className="flex items-center space-x-2">
                        <RadioGroupItem value={size} id={size}/>
                        <Label htmlFor={size}>{size}</Label>
                    </div>
                        
                ))}
            </RadioGroup>
       </div>
    );
}

export default FilterSize;