import { useEffect,useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const lastItemIndex = currentPage * itemsPerPage;
    const firstIndex = lastItemIndex - itemsPerPage;
    const thisPageItems = countries.slice(firstIndex, lastItemIndex);
  
    const pages = [];
    for (let i = 1; i <= Math.ceil(countries.length / itemsPerPage); i++) {
      pages.push(i);
    }
    useEffect(() => {
      // Fetching the countries data from the API
      fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((data) => {
          setCountries(data);
        })
        .catch((error) => console.error('Error fetching countries:', error));
    }, []);
  
    return (
        <div>
            <Navbar/>
        
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Countries List</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b bg-gray-100 text-left">Flag</th>
                <th className="py-2 px-4 border-b bg-gray-100 text-left">Country</th>
                <th className="py-2 px-4 border-b bg-gray-100 text-left">Capital</th>
              </tr>
            </thead>
            <tbody>
              {thisPageItems.map((country) => (
                <tr key={country.name.common} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">
                    <img
                      src={country.flags.png}
                      alt={`${country.name.common} flag`}
                      className="w-10 h-6"
                    />
                  </td>
                  <td className="py-2 px-4">{country.name.common}</td>
                  <td className="py-2 px-4">{country.capital?.[0] || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center">
          {pages
            .slice(
              Math.max(currentPage - 2, 0),
              Math.min(currentPage + 1, pages.length)
            )
            .map((page, index) => (
              <button
                onClick={() => setCurrentPage(page)}
                key={index}
                className={`font-extrabold p-2 ${
                  currentPage === page
                    ? "text-4xl text-sky-300"
                    : "text-xl text-green-600"
                }`}
              >
                {page}
              </button>
            ))}
        </div>
        </div>
      </div>
      <Footer/>
      </div>
    );
  }
