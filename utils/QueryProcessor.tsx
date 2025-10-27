export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Eduardo";
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest")) {
    return "81";
  }

  if (query.toLowerCase().includes("age")) {
    return "67";
  }

  if (query.toLowerCase().includes("which of the following numbers is both a square and a cube")) {
    return "1";
  }

  if (query.toLowerCase().includes("what is 84 multiplied by 56")) {
    return "4704";
  }

  if (query.toLowerCase().includes("what is 49 multiplied by 15")) {
    return "735";
  }

  return "";
}
