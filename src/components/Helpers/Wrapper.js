// prosta komponenta koja vraca prosledjeni sadrzaj odnosno children
// sluzi kao wrapper , i da bi se smanjio broj nepotrebnih div elemenata
// koji nemaju drugu svrhu osim da wrappuju content
// zamena za ovakav pristup je koriscenje fragmenta
const Wrapper = ({ children }) => {
  return children;
};

export default Wrapper;
