/**
 * Berekent de afstand tussen twee coördinaten in kilometers
 * Gebruikt de Haversine formule
 */
export function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius van de aarde in kilometers
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
}

function toRad(degrees) {
  return degrees * (Math.PI / 180);
}

/**
 * Formatteerd afstand naar leesbare string
 */
export function formatDistance(distanceInKm) {
  if (distanceInKm < 1) {
    return `${Math.round(distanceInKm * 1000)}m`;
  }
  return `${distanceInKm.toFixed(1)}km`;
}

/**
 * Filtert locaties binnen een bepaalde radius
 */
export function getLocationsWithinRadius(userLat, userLon, locations, radiusInKm) {
  return locations.filter((location) => {
    const distance = calculateDistance(userLat, userLon, location.lat, location.lng);
    return distance <= radiusInKm;
  }).map((location) => ({
    ...location,
    distance: calculateDistance(userLat, userLon, location.lat, location.lng),
  })).sort((a, b) => a.distance - b.distance);
}
