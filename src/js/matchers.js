export default function ratingByHealth(warriors = []) {
  let byRate = warriors.slice(0);
byRate.sort(function(a,b) {
    return b.health - a.health;
});
return byRate;
}