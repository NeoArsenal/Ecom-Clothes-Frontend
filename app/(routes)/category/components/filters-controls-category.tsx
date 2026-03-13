import FilterSize from "./filter-size";

type FiltersControlsCategoryProps = {
    setFilterSize: (Size: string) => void
}

const FiltersControlsCategory = (props: FiltersControlsCategoryProps) => {
    const{setFilterSize} = props
    return (
        <div className="sm:w-[350px] sm:mt-5 p-6">
            <FilterSize setFilterSize={setFilterSize}/>
        </div>
    );
}

export default FiltersControlsCategory;