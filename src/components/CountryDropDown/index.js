import React from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import './CountryDropDown.css';
import Dialog from "@mui/material/Dialog";

// Phnom Penh coordinates
const PHNOM_PENH = { lat: 11.5564, lng: 104.9282 };

// All provinces with coordinates
const provinceCoords = [
  { name: "Phnom Penh", lat: 11.5564, lng: 104.9282 },
  { name: "Banteay Meanchey", lat: 13.5850, lng: 102.9731 },
  { name: "Battambang", lat: 13.0957, lng: 103.2022 },
  { name: "Kampong Cham", lat: 12.0000, lng: 105.4500 },
  { name: "Kampong Chhnang", lat: 12.2500, lng: 104.6667 },
  { name: "Kampong Speu", lat: 11.4500, lng: 104.5167 },
  { name: "Kampong Thom", lat: 12.7111, lng: 104.8885 },
  { name: "Kampot", lat: 10.6104, lng: 104.1810 },
  { name: "Kandal", lat: 11.4833, lng: 104.9500 },
  { name: "Kep", lat: 10.5369, lng: 104.3550 },
  { name: "Koh Kong", lat: 11.5763, lng: 103.3587 },
  { name: "Kratie", lat: 12.4881, lng: 106.0187 },
  { name: "Mondulkiri", lat: 12.7876, lng: 107.1012 },
  { name: "Oddar Meanchey", lat: 14.1600, lng: 103.5045 },
  { name: "Pailin", lat: 12.8500, lng: 102.6667 },
  { name: "Preah Vihear", lat: 13.8000, lng: 104.9833 },
  { name: "Prey Veng", lat: 11.4856, lng: 105.3250 },
  { name: "Pursat", lat: 12.5388, lng: 103.9190 },
  { name: "Ratanakiri", lat: 13.7367, lng: 106.9872 },
  { name: "Siem Reap", lat: 13.3633, lng: 103.8564 },
  { name: "Preah Sihanouk", lat: 10.6278, lng: 103.5221 },
  { name: "Stung Treng", lat: 13.5256, lng: 105.9683 },
  { name: "Svay Rieng", lat: 11.0878, lng: 105.7994 },
  { name: "Takeo", lat: 10.9908, lng: 104.7850 },
  { name: "Tbong Khmum", lat: 12.1226, lng: 105.6597 }
];

// Haversine formula to calculate distance in km
function getDistanceKm(lat1, lng1, lat2, lng2) {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371; // Earth radius in km
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Calculate min price based on distance
function getMinPrice(distanceKm) {
  const base = 120;
  const extra = Math.round(distanceKm / 10) * 2; // $2 per 10km
  return base + extra;
}

const CourntryDropDown = () => {
  const [selected, setSelected] = React.useState("Phnom Penh");
  const [search, setSearch] = React.useState("");
  const [open, setOpen] = React.useState(true);
  const modalRef = React.useRef(null);
  const searchCardRef = React.useRef(null);

  // Build locations with dynamic min price
  const locations = provinceCoords.map((prov) => {
    const distance = getDistanceKm(
      PHNOM_PENH.lat,
      PHNOM_PENH.lng,
      prov.lat,
      prov.lng
    );
    return {
      name: prov.name,
      min: getMinPrice(distance),
    };
  });

  // Filter locations by search
  const filteredLocations = locations.filter(loc =>
    loc.name.toLowerCase().includes(search.toLowerCase())
  );

  // Render location names for dropdown (if you use it)
  // (Removed unused renderLocationNames function)

  // Render location options for modal
  const renderLocationOptions = () => {
    if (filteredLocations.length === 0) {
      return (
        <div className="location-option no-place">
          No place here!!
        </div>
      );
    }
    return filteredLocations.map((loc) => (
      <div
        key={loc.name}
        className={`location-option${selected === loc.name ? " selected" : ""}`}
        onClick={() => {
          setSelected(loc.name);
          setOpen(false); // Close the dialog when a location is selected
        }}
      >
        <span>{loc.name}</span>
        <span className="min-price">Min: ${loc.min}</span>
      </div>
    ));
  };

  // Click outside to close
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        (!searchCardRef.current || !searchCardRef.current.contains(event.target))
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      <Button className="dropdown country-dropdown-btn" onClick={() => setOpen(true)}>
        <div className="dropdown-container">
          <span className="label">
            Your location <i className="fas fa-map-marker-alt"></i>
          </span>
          <span className="selected-location">{selected}</span>
          <span className="ml-auto dropdown-icon">
            <FaAngleDown size={28} />
          </span>
        </div>
      </Button>
      <Dialog open={open} className="locationModal" onClose={() => setOpen(false)}>
        <div className="location-modal-content" ref={modalRef} style={{ position: "relative" }}>
          <button
            className="close-modal-btn"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            <MdClose/>
          </button>
          <h3 className="modal-title">Choose your Delivery Location</h3>
          <p className="modal-desc">
            Enter your address and we will specify the offer for your area.
          </p>
          <div className="search-bar" ref={searchCardRef}>
            <input
              type="text"
              placeholder="Search your area"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <span className="search-icon">
              <i className="fas fa-search"></i>
            </span>
          </div>
          <div className="location-list-scroll">
            <div className="location-list-header">
              <span>Select a Location</span>
              <button className="clear-btn" onClick={() => setSearch("")}>Clear All</button>
            </div>
            {renderLocationOptions()}
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default CourntryDropDown;