import React from 'react';

interface FilterOption {
  label: string;
}

interface Props {
  selectedFilterOption: number;
  // eslint-disable-next-line no-unused-vars
  setSelectedFilterOption: (filterOption: number) => void;
  filterOptions: FilterOption[];
}

const EventFilter = ({
  selectedFilterOption,
  setSelectedFilterOption,
  filterOptions
}: Props) => (
  <div className="event-filter">
    {filterOptions.map((filterOption, index) => (
      <a
        href="#events"
        className={
          `event-filter-option${
          selectedFilterOption === index
            ? ' event-filter-option-selected'
            : ''}`
        }
        key={index}
        onClick={() => setSelectedFilterOption(index)}
      >
        {filterOption.label}
      </a>
    ))}
  </div>
);

export { EventFilter };
