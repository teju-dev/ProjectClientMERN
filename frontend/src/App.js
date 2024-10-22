import Header from "./components/Header";
import Client from "./components/Client";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import AddClientModal from "./components/AddClientModal.jsx";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <AddClientModal />
          <Client />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
