import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

// The hook
export default function useSearch(searchResult) {
  const navigate = useNavigate();
  const handleNavigation = useCallback(
    (id) => {
      navigate(`/products/${id}`);
    },
    [navigate]
  );

  // Create and return a JSX element, not typical for hooks, only for this use case
  const renderedList = searchResult.map((event) => (
    <a
      key={event.id}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        handleNavigation(event.id);
      }}
      className="searchListItem"
    >
      <img src={event.img} alt={event.name} />
      <span>{event.name}</span>
    </a>
  ));

  return renderedList;
}
