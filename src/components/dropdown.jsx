import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const CurrencyDropdown = ({
  currencies,
  currency,
  setCurrency,
  favorites,
  handleFavorite,
  title = "",
}) => {
  const isFavorite = (curr) => favorites.includes(curr);
  return (
    <div>
      <label
        htmlFor={title}
        className="block text-sm font-medium text-gray-700"
      >
        {title}
      </label>
      <div className="mt-1 relative">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {/* Render favorites */}
          {favorites.map((currency) => (
            <option value={currency} key={currency} className="bg-gray-200">
              {currency}
            </option>
          ))}
          <hr />
          {currencies
            .filter((c) => !favorites.includes(c))
            .map((curr) => (
              <option value={curr} key={curr}>
                {curr}
              </option>
            ))}
        </select>
        <button
          className="absolute inset-y-0 right-0 pr-5 flex items-center text-sm leading-5"
          onClick={() => handleFavorite(currency)}
        >
          {isFavorite(currency) ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
      </div>
    </div>
  );
};

export default CurrencyDropdown;
