export default function healthRate({name, rate}) {
  if (rate >= 50) {
    return "healthy";
  } 
  else if (rate >= 15 && rate <= 50) {
    return "wounded";
  }
  else if (rate > 0 && rate <= 15) {
    return "critical";
  }
};
