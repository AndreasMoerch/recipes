/**
 * Generic interface representing props to be used in a filter.
 */
export interface FilterProps<T> {
  /* List of options to choose from */
  options: T[];
  /* Current selected option. Null if no selection. */
  selected: T | null;
  /* Callback when a selection has been made */
  onToggle: (selected: T | null) => void;
}
