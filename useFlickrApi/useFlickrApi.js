import { useEffect, useRef, useState } from "react";

// custom hook that handles the JSONP API to abstract
// out getting the search results in components
const useFlickrApi = (query) => {
  const scriptEl = useRef();
  const [[data, isLoading], setState] = useState([{}, false]);
  const uniqID = getUniqueId();
  const callbackFunction = `callback_${uniqID}`;

  const removeScript = () => {
    if (scriptEl.current) {
      document.head.removeChild(scriptEl.current);
      scriptEl.current = null;
    }
  };

  useEffect(() => {
    window[callbackFunction] = (results) => {
      removeScript();
      setState([results, false]);
    };
    if (!scriptEl.current) {
      const script = window.document.createElement("script");
      script.src = `https://www.flickr.com/services/feeds/photos_public.gne?tags=${encodeURIComponent(
        query
      )}&format=json&jsoncallback=${callbackFunction}`;
      script.id = uniqID;
      document.head.appendChild(script);
      setState(([data]) => [data, true]);
      scriptEl.current = script;
    }
    return () => {
      removeScript();
      window[callbackFunction] = undefined;
    };
  }, [query]);

  return [data, isLoading];
};

// ---- components -----

// The top level component, the state is managed here
// All the other components are stateless
export const FlickrSearch = () => {
  const [query, setQuery] = useState("");
  const [response, isLoading] = useFlickrApi(query);
  const handleInputChange = debounce((inputEvent) => {
    setQuery(inputEvent.target.value);
  });

  return (
    <div>
      <div className="pure-form pure-form-aligned search-box">
        <span>Search for images</span>
        <input
          placeholder="cat,pet,home"
          type="text"
          onChange={handleInputChange}
        />
      </div>
      {query && (
        <SearchResultsWrapper
          query={query}
          items={response.items || []}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

// Displays the search results and the spinner
const SearchResultsWrapper = ({ query, items, isLoading }) => {
  return (
    <div className="search-results">
      <div className="spinner-container">{isLoading && <Spinner />}</div>
      <SearchResults query={query} items={items} />
    </div>
  );
};

// Search results grid
const SearchResults = ({ query, items }) => {
  if (items.length === 0) {
    return (
      <p className="results-prompt">
        There are no results for <span>{query}</span> <br />
        <br /> Check the spelling and make sure that you use commas to separate
        the keywords.
      </p>
    );
  }
  return (
    <div className="pure-g" style={{ display: "flex", flexWrap: "wrap" }}>
      {items.map((item) => (
        <SearchResultsItem key={item.media.m} item={item} />
      ))}
    </div>
  );
};

// The single search result item
const SearchResultsItem = ({ item }) => {
  const tags = (item.tags || "").split(" ");
  return (
    <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4 search-result-item">
      <div className="img-container">
        <a className="image-link" target="_details" href={item.link}>
          <img src={item.media.m} />
        </a>
      </div>
      {/* <p className="author">{extractAuthor(item.author)}</p> */}
      {/* <div>
        {tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div> */}
      {/* <a target="_details" href={item.link}>
        More details
      </a> */}
    </div>
  );
};

//  <!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->
const Spinner = () => {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
          <stop stopColor="#000" stopOpacity="0" offset="0%" />
          <stop stopColor="#000" stopOpacity=".631" offset="63.146%" />
          <stop stopColor="#000" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)">
          <path
            d="M36 18c0-9.94-8.06-18-18-18"
            id="Oval-2"
            stroke="url(#a)"
            strokeWidth="2"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="0.9s"
              repeatCount="indefinite"
            />
          </path>
          <circle fill="#000" cx="36" cy="18" r="1">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="0.9s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </g>
    </svg>
  );
};

// ---- helpers -----

const extractAuthor = (jsonAuthor) => {
  const match = jsonAuthor.match(/\"([^"]+)\"/);
  if (match) {
    return match[1];
  }
  return jsonAuthor;
};

// https://davidwalsh.name/javascript-debounce-function
function debounce(func, waitMs = 250) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, waitMs);
  };
}

// unique id based on Math.random - good enough for the purpose of this exercise
const getUniqueId = () =>
  Math.floor(Math.random() * Math.pow(16, 10)).toString(16);
