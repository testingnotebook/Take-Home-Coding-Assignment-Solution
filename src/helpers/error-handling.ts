export const uriParameterCheck = () => {
  const uri = process.argv[2];

  if (!uri) {
    console.error("The URI for API is required as a paramiter.");
    process.exit(1);
  }
  return uri;
};
